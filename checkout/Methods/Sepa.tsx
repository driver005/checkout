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
import { Flex } from '../Common/index';
import { AnimatePresence, motion } from 'framer-motion';
import { Wrapper } from './Wrapper';
import { Control, FieldValues } from 'react-hook-form';

interface SepaProps {
    control: Control<FieldValues>;
}

export const Sepa: React.FC<SepaProps> = ({ control }) => (
    <React.Fragment>
        <Heading
            as='span'
            color='gray.500'
            fontWeight='500'
            size='xs'
        >
            IBAN
        </Heading>
        <VStack spacing='16px'>
            <Flex>
                <ChakraFlex
                    boxShadow='lg'
                    borderRadius='md'
                    mt='4px'
                >
                    <Input
                        id={"iban"}
                        type={"iban"}
                        name={'iban'}
                        label={"DE00 0000 0000 0000 0000 00"}
                        control={control}
                        rules={{
                            required: false,
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
