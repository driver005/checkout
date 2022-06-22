import type { NextPage } from 'next'
import Background from '../components/Background'
import {
    Divider,
    Center,
    HStack,
    Box,
    useRadioGroup,
    VStack,
    Heading,
    Flex,
    ButtonGroup,
    Button,
    Icon,
    RadioGroup,
    Radio as ChakraRadio,
} from '@chakra-ui/react';
import { Details, Payment } from 'checkout'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FETCH } from '@variabels/types';
import { useForm } from 'react-hook-form';
import { Context } from '@store/context';


const Home: NextPage = () => {
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false)

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        control,
        getValues,
        watch
    } = useForm()

    useEffect(() => {
        dispatch({
            type: 'FETCH_PRODUCT',
            payload: [
                {
                    id: 1,
                    name: 'Test',
                    quantity: 12,
                    price: 10,
                    totalDue: 120,
                },
                {
                    id: 2,
                    name: 'Test',
                    quantity: 10,
                    price: 10,
                    totalDue: 100,
                }
            ],
        });
        dispatch({
            type: 'FETCH_SHIPPING',
            payload: [
                {
                    label: 'Free shipping',
                    labelInfo: '3-4 business day',
                    price: 'Free',
                    position: 'top',
                },
                {
                    label: 'Next day air',
                    labelInfo: 'At most  1 business day',
                    price: '15,00 €',
                    position: 'bottom',
                }
            ],
        });
        setLoaded(true)
    }, []);

    useEffect(() => {
        const subscription = watch((value, { name, type }) => console.log(value, name, type));
        return () => subscription.unsubscribe();
    }, [watch]);



    return (
        <Context.Provider value={control}>
            <Background>
                <Box
                    w="50%"
                    h="100vh"
                >
                    <Details
                        loaded={loaded}
                        watch={watch}
                    />
                </Box>
                <Center height='100vh'>
                    <Divider orientation='vertical' />
                </Center>
                <Box
                    w="50%"
                    h="150vh"
                    boxShadow='xl'
                >
                    <Payment
                        loaded={loaded}
                        handleSubmit={handleSubmit}
                        errors={errors}
                    />
                </Box>
            </Background>
        </Context.Provider>
    )
}

export default Home
