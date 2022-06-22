import React from 'react'
import {
    Button as ChakraButton,
    Flex,
    useColorModeValue,
} from '@chakra-ui/react';

interface ButtonProps {
    label: string
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
    return (
        <ChakraButton
            w='full'
            _focus={{ boxShadow: 'outline' }}
            _hover={{ background: 'purple.600' }}
            bg='purple.600'
        >
            {label}
        </ChakraButton>
    )
}

export default Button