import React from 'react'
import {
    Heading as ChakraHeading,
} from '@chakra-ui/react';
import { Flex } from './index';


interface HeadingProps {
    label: string;
}

export const Heading: React.FC<HeadingProps> = ({ label }) => (
    <Flex>
        <ChakraHeading
            as='h2'
            color='gray.800'
            fontWeight='500'
            fontSize='16px'
            size='xs'
        >
            {label}
        </ChakraHeading>
    </Flex>
)