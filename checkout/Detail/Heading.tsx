import React from 'react'
import {
    Heading as ChakraHeading,
    Skeleton,
    VStack,
} from '@chakra-ui/react';
import { TextColor } from 'config';
import { LightenDarkenColor } from 'utils';


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
                color={LightenDarkenColor(TextColor, 125)}
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
                color={TextColor}
                size='xl'
            >
                150.00 €
            </ChakraHeading>
        </Skeleton>
    </VStack>
)