import React from 'react'
import {
    Flex as ChakraFlex,
} from '@chakra-ui/react';


interface FlexProps {
    children: React.ReactNode;
}

export const Flex: React.FC<FlexProps> = ({ children }) => (
    <ChakraFlex
        w='full'
        flex="0 1 auto"
        flexDirection='column'
        minW='0'
        maxW='full'
    >
        {children}
    </ChakraFlex>
)
