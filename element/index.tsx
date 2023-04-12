import React, { useEffect, useState } from 'react'
import {
    Flex as ChakraFlex,
    Skeleton,
    chakra
} from '@chakra-ui/react';
import { Flex, PayButton } from '@components/index';
import { Sepa, PayPal, Card, GiroPay, Przelewy24, Sofort, Bancontact, Eps, Ideal } from './methods';
import { useWatch, useForm } from 'react-hook-form';
import { Wrapper } from './Wrapper';
import { Menu } from './Menu';

import sepa from "@assets/methods/sepa.svg"
import Image from 'next/image';
import { Context, CurrentContext } from '@element/Context';
import { Heading } from './Heading';


interface ElementProps {
    loaded?: boolean;
    label?: string;
}

export const Element: React.FC<ElementProps> = ({ loaded = true, label = "Payment details" }) => {
    const {
        control,
        setValue,
        formState: { isValid, isSubmitting },
        handleSubmit,
    } = useForm()

    const [animateGateway, setAnimateGateway] = useState(true);
    const [selectedGateway, setSelectedGateway] = useState({
        icon: <Image height={16} src={sepa} alt="sepa" />,
        label: "SEPA Direct Debit",
        value: "Sepa"
    })

    const chosenGateway = useWatch({
        control,
        name: "element",
        defaultValue: "Sepa"
    });

    useEffect(() => {
        if (!animateGateway) {
            setTimeout(() => {
                setAnimateGateway(true)
            }, 500)
        }
    }, [animateGateway])

    const handleSetGateway = ({ icon, label, value }: { icon: any; label: string, value: string }) => {
        setSelectedGateway({
            icon,
            label,
            value
        })
        setValue("element", value)
    }

    const onSubmit = () => {
        console.log("test");
    };


    return (
        <Context control={control}>
            <Skeleton
                w='full'
                isLoaded={loaded}
                borderRadius='md'
            >

                <chakra.form w='full' onSubmit={handleSubmit(onSubmit)}>
                    <Heading label={label} />
                    <Menu
                        handleSetGateway={handleSetGateway}
                        selectedGateway={selectedGateway}
                    />
                    <ChakraFlex mt='24px' mb="24px" position="relative" zIndex="2">
                        <Wrapper position={animateGateway ? 'enter' : 'exit'}>
                            {chosenGateway === 'Sepa' &&
                                <Sepa />
                            }
                            {chosenGateway === 'PayPal' &&
                                <PayPal />
                            }
                            {chosenGateway === 'Card' &&
                                <Card />
                            }
                            {chosenGateway === 'GiroPay' &&
                                <GiroPay />
                            }
                            {chosenGateway === 'Przelewy24' &&
                                <Przelewy24 />
                            }
                            {chosenGateway === 'Sofort' &&
                                <Sofort />
                            }
                            {chosenGateway === 'Bancontact' &&
                                <Bancontact />
                            }
                            {chosenGateway === 'Eps' &&
                                <Eps />
                            }
                            {chosenGateway === 'Ideal' &&
                                <Ideal />
                            }
                        </Wrapper>
                    </ChakraFlex>
                    <PayButton
                        label='Pay'
                        height='12'
                        type='submit'
                        status={isValid ? 'complete' : isSubmitting ? 'prossing' : 'incomplete'}
                        loaded={loaded}
                    />
                </chakra.form>

            </Skeleton>

        </Context>
    )
}

export const useElement = () => {
    const control = React.useContext(CurrentContext);

    return control
}
