import { Box, BoxProps } from '@chakra-ui/react';
import { Flex } from 'checkout';
import { motion } from 'framer-motion'
import React from 'react'

const MotionBox = motion<BoxProps>(Box);

interface LineProps {
    animate: boolean;
    DelayUntilStart?: number;
}

export const Line: React.FC<LineProps> = ({ animate, DelayUntilStart = 0 }) => {
    const Animation = {
        inital: {
            width: '0%',
        },
        animate: {
            width: '100%',
            transition: {
                delay: DelayUntilStart,
                duration: 0.8,
            }
        }
    }
    return (
        <Flex>
            <MotionBox
                variants={Animation}
                initial="inital"
                animate={animate ? "animate" : "inital"}
                borderTop='2'
                borderColor='purple.500'
            />
        </Flex>
    )
}

export default Line
