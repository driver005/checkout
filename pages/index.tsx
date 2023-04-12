import type { NextPage } from 'next'
import Background from '../components/Background'
import {
    Divider,
    Center,
    Box,
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
        setValue,
        watch
    } = useForm()

    useEffect(() => {
        setTimeout(() => { setLoaded(true) }, 2000)
    }, [])

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
