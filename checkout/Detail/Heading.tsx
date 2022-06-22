import React from 'react'
import {
    Heading as ChakraHeading,
    Skeleton,
    VStack,
} from '@chakra-ui/react';


interface HeadingProps {
    loaded?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({ loaded = true }) => (
    <VStack
        alignItems='start'
    >
        <Skeleton
            isLoaded={loaded}
            borderRadius='xl'
        >
            <ChakraHeading
                as='span'
                color='gray.500'
                fontWeight='500'
                size='xs'
            >
                Pay Powdur
            </ChakraHeading>
        </Skeleton>
        <Skeleton
            isLoaded={loaded}
            borderRadius='2xl'
        >
            <ChakraHeading
                as='span'
                fontWeight='500'
                size='xl'
            >
                150.00 €
            </ChakraHeading>
        </Skeleton>
    </VStack>
)