import React from 'react'
import {
    Box,
    Checkbox,
    Flex as ChakraFlex,
    Heading,
    HStack,
    Slide,
    SlideFade,
    VStack,
} from '@chakra-ui/react';
import { Input } from '@components/Input'
import { Flex } from '@components/index';
import { AnimatePresence, motion } from 'framer-motion';
import { Wrapper } from '../Wrapper';

import { CurrentContext } from '@element/Context';

interface PayPalProps { }

export const PayPal: React.FC<PayPalProps> = () => {
    const control = React.useContext(CurrentContext);
    return (
        <React.Fragment>
            <Heading
                as='span'
                color='gray.500'
                fontWeight='500'
                size='xs'
            >
                Name
            </Heading>
            <VStack spacing='16px'>
                <Flex>
                    <ChakraFlex
                        borderRadius='md'
                        mt='4px'
                    >
                        <Input
                            id={"name"}
                            type={"text"}
                            name={'name'}
                            control={control}
                            rules={{
                                required: true,
                            }}
                        />
                    </ChakraFlex>
                </Flex>
                <Flex>
                    <Checkbox spacing='1rem'>Billing address is same as shipping</Checkbox>
                </Flex>
            </VStack>
        </React.Fragment>
    )
}