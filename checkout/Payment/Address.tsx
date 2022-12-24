import React, { useContext, useState } from 'react'
import {
    Heading,
    VStack,
    HStack,
    Skeleton
} from '@chakra-ui/react';
import { Input } from '@components/Input'
import { Select } from '@components/Select'
import { countries } from '@variabels/index';
import { Error, Flex, Label, Wrapper } from '../Common/index';
import { Context } from '@store/context';

interface AddressProps {
    error: any;
    loaded?: boolean;
}

export const Address: React.FC<AddressProps> = ({ error, loaded = true }) => {
    const [country, setCountry] = useState('Germany')
    const control = useContext(Context);

    return (
        <Skeleton
            w='full'
            isLoaded={loaded}
            borderRadius='md'
        >
            <Flex>
                <Label label='Shipping address' />
                <VStack
                    spacing='0'
                    borderRadius='md'
                    mt='4px'
                >
                    <Input
                        id={"name"}
                        type={"text"}
                        name={'name'}
                        label={"Name"}
                        position={"top"}
                        control={control}
                        rules={{
                            required: true,
                            pattern: /^[A-Za-z]+$/i
                        }}
                    />
                    <Select
                        id={"country"}
                        label={"Country"}
                        name={"country"}
                        values={countries}
                        defaultValue={"Germany"}
                        position={"mid"}
                        onChanges={(e: any) => setCountry(e)}
                        control={control}
                        rules={{
                            required: true,
                            defaultValue: "Germany",
                        }}
                    />
                    <Wrapper
                        country={country}
                        control={control}
                        error={error}
                    />
                    <Input
                        id={"phone"}
                        type={"text"}
                        name={'phone'}
                        label={"Phone"}
                        position={"bottom"}
                        control={control}
                        rules={{
                            required: 'Please enter your phone number',
                            pattern: {
                                value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i,
                                message: "Please enter a valid phone number"
                            }
                        }}
                    />
                </VStack>
                {error.phone && <Error label={error.phone.message} />}
            </Flex>
        </Skeleton>
    )
}