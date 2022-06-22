import React from 'react'
import {
    Flex as ChakraFlex,
    Heading,
} from '@chakra-ui/react';


interface LabelProps {
    label: string;
    error?: boolean;
}

export const Label: React.FC<LabelProps> = ({ label, error }) => (
    <ChakraFlex
        w='full'
        justifyContent='space-between'
    >
        <Heading
            as='span'
            color='gray.500'
            fontWeight='500'
            size='xs'
        >
            {label}
        </Heading>
        {error && (
            <Heading
                as='span'
                color='red.500'
                fontWeight='500'
                fontSize='12'
                textTransform='uppercase'
            >
                Required
            </Heading>
        )}
    </ChakraFlex>
)