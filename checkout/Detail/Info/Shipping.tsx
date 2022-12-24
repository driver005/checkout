import React, { useEffect, useState } from 'react'
import {
    Heading,
    HStack,
    Skeleton,
    VStack
} from '@chakra-ui/react'
import { useAppSelector } from '@store/hooks';
import { LightenDarkenColor } from 'utils';
import { Border, TextColor } from 'config';


interface ShippingProps {
    method: any;
    loaded: boolean;
}

export const Shipping: React.FC<ShippingProps> = ({ method, loaded }) => {

    return (
        <HStack w='full' justifyContent='space-between' mb='16px' alignItems='baseline'>
            <VStack spacing='0' alignItems='start'>
                <Heading
                    as='span'
                    color={LightenDarkenColor(TextColor, 125)}
                    fontWeight='400'
                    fontSize='14px'
                >
                    Shipping
                </Heading>
                <Heading
                    as='span'
                    color={LightenDarkenColor(TextColor, 125)}
                    fontWeight='400'
                    fontSize='12px'
                >
                    {`${method.label} (${method.labelInfo})`}
                </Heading>
            </VStack>
            <Skeleton
                isLoaded={loaded}
                borderRadius={Border}
            >
                <Heading
                    as='span'
                    color={LightenDarkenColor(TextColor, 125)}
                    fontWeight='400'
                    fontSize='14px'
                >
                    {method.price}
                </Heading>
            </Skeleton>
        </HStack>
    )
}