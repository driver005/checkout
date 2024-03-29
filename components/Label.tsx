import React from 'react'
import {
    Flex as ChakraFlex,
    Heading,
} from '@chakra-ui/react';
import { TextColor } from 'config';


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
            color={TextColor}
            fontWeight='500'
            fontSize="13px"
            transition='transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)'
        >
            {label}
        </Heading>
        {error && (
            <Heading
                as='span'
                color='red.500'
                fontWeight='400'
                fontSize='12'
                textTransform='uppercase'
                size='xs'
                transition='transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)'

            >
                Required
            </Heading>
        )}
    </ChakraFlex>
)