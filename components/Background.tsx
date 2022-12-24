import React from 'react'
import {
    Flex,
    useColorModeValue,
} from '@chakra-ui/react';
import { hexToHSLA, LightenDarkenColor } from 'utils';
import { BackgroundColor } from 'config';

interface BackgroundProps {
    children: React.ReactNode
}

export const Background: React.FC<BackgroundProps> = ({ children }) => {
    return (
        <Flex
            minH={'100vh'}
            justify={'center'}
            bg={(BackgroundColor === "#ffffff" || BackgroundColor === "#000000") ? BackgroundColor : LightenDarkenColor(BackgroundColor, -100)}
            overflowX={'hidden'}
        >
            {children}
        </Flex>
    )
}

export default Background