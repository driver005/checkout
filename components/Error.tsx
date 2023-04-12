import React from 'react'
import {
    Heading,
} from '@chakra-ui/react';
import { Flex } from './index';


interface ErrorProps {
    label: string;
}

export const Error: React.FC<ErrorProps> = ({ label }) => (
    <Flex>
        <Heading
            as='span'
            fontSize='13px'
            fontWeight='500'
            color='red.500'
            mt='4px'
        >
            {label}
        </Heading>
    </Flex>
)