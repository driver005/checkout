import React from 'react'
import {
    Heading as ChakraHeading,
} from '@chakra-ui/react';
import { Flex } from './index';
import { TextColor } from 'config';


interface HeadingProps {
    label: string;
}

export const Heading: React.FC<HeadingProps> = ({ label }) => (
    <Flex>
        <ChakraHeading
            as='h2'
            color={TextColor}
            fontWeight='500'
            fontSize='16px'
            size='xs'
        >
            {label}
        </ChakraHeading>
    </Flex>
)