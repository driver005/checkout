import React from 'react'
import {
    Flex,
    useColorModeValue,
} from '@chakra-ui/react';

interface BackgroundProps {
    children: React.ReactNode
}

export const Background: React.FC<BackgroundProps> = ({ children }) => {
    return (
        <Flex
            minH={'100vh'}
            justify={'center'}
            bg={useColorModeValue('white', 'gray.800')}
            overflowX={'hidden'}
        >
            {children}
        </Flex>
    )
}

export default Background