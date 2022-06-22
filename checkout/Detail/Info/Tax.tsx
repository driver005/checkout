import React from 'react'
import {
    Heading,
    HStack,
    VStack
} from '@chakra-ui/react'


interface TaxProps {
    price: string;
    procent: number;
}

export const Tax: React.FC<TaxProps> = ({ price, procent }) => (
    <HStack w='full' justifyContent='space-between' mb='16px'>
        <Heading
            as='span'
            color='gray.400'
            fontWeight='400'
            fontSize='14px'
        >
            {`Sales tax (${procent}%)`}
        </Heading>
        <Heading
            as='span'
            color='gray.400'
            fontWeight='400'
            fontSize='14px'
        >
            {price}
        </Heading>
    </HStack>
)