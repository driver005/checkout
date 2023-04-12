import React, { useState } from 'react'
import {
    Box,
    Container,
    Flex,
    VStack,
    chakra,
    Skeleton
} from '@chakra-ui/react';
import {
    Methods as ShippingMethods,
    Address,
    Email
} from './Payment/index';
import { Heading, Error } from '@components/index';
import Button from '@components/Button';
import { PayButton } from '@components/index';
import { Control, FieldValues, useForm, UseFormHandleSubmit } from 'react-hook-form';
import { Element } from '@element/index';


interface PaymentProps {
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    control?: Control<FieldValues>;
    register?: any;
    errors: any;
    loaded?: boolean;
}

export const Payment: React.FC<PaymentProps> = ({ handleSubmit, errors, loaded = true }) => {
    const onSubmit = (values: any) => {
        console.log(values)
    }

    return (
        <Flex
            w='full'
            justifyContent="center"
            mt='14'
        >
            <Flex
                w='60%'
                flexDirection='row'
                flexWrap='wrap'
            >
                {/* <chakra.form w='full' onSubmit={handleSubmit(onSubmit)}> */}
                <Flex
                    flexDirection='row'
                    flexWrap='wrap'
                    mb='32px'
                    w='full'
                >
                    <VStack
                        spacing='16px'
                        w='full'
                        alignItems='start'
                    >
                        <Skeleton
                            isLoaded={loaded}
                            borderRadius='xl'
                            mt='3'
                        >
                            <Heading label='Shipping information' />
                        </Skeleton>
                        <Email
                            error={errors}
                            loaded={loaded}
                        />
                        <Address
                            error={errors}
                            loaded={loaded}
                        />
                        <Flex
                            w='full'
                            flexDirection='column'
                        >
                            <ShippingMethods loaded={loaded} error={errors.methods} />
                            {errors.methods && <Error label={errors.methods.message} />}
                        </Flex>
                    </VStack>
                </Flex>
                <Element loaded={loaded} />
                {errors.options && <Error label={errors.options.message} />}
                {/* </chakra.form> */}
            </Flex>
        </Flex>

    )
}
