import React, { useContext } from 'react'
import {
    Flex as ChakraFlex,
    Skeleton,
} from '@chakra-ui/react';
import { Input } from '@components/Input'
import { Error, Flex, Label } from '@components/index';
import { Context } from '@store/context';

interface EmailProps {
    error: any;
    loaded?: boolean;
}

export const Email: React.FC<EmailProps> = ({ error, loaded = true }) => {
    const control = useContext(Context);
    return (
        <Skeleton
            w='full'
            isLoaded={loaded}
            borderRadius='md'
        >
            <Flex>
                <Label label='Email' error={error.email} />
                <ChakraFlex
                    borderRadius='md'
                    mt='4px'
                >
                    <Input
                        id={"email"}
                        type={"email"}
                        name={'email'}
                        label={"Email"}
                        position={"alone"}
                        control={control}
                        rules={
                            {
                                required: 'Please enter your email',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Please enter a valid email address"
                                }
                            }
                        }
                        error={error.email}
                    />
                </ChakraFlex>
                {error.email && <Error label={error.email.message} />}
            </Flex>
        </Skeleton>
    )
}

