import React, { useEffect, useState } from 'react'
import {
    Collapse,
    Divider,
    Heading as ChakraHeading,
    HeadingProps as ChakraHeadingProps,
    HStack,
    VStack,
    Text,
} from '@chakra-ui/react';
import { TextColor } from '@config/index';
import { LinkButton } from '@components/Buttons';
import { AnimatePresence, motion } from 'framer-motion';

const MotionHeading = motion<ChakraHeadingProps>(ChakraHeading);

interface HeadingProps {
    label?: string;
}

export const Heading: React.FC<HeadingProps> = ({ label }) => {
    const [animate, setAnimate] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setAnimate(true)
        }, 2000)
    }, [])

    return (
        <React.Fragment>
            <AnimatePresence>
                <MotionHeading
                    as='h2'
                    color={TextColor}
                    fontWeight='500'
                    fontSize='16px'
                    mb="16px"
                    lineHeight='1.3'
                    animate={{ opacity: 0, transition: { duration: 2 }, transitionEnd: { display: 'none' } }}
                >
                    {label}
                </MotionHeading>
            </AnimatePresence>
            <Collapse in={animate} animateOpacity style={{ overflow: 'visible' }}>
                <VStack spacing='8' marginBottom='8'>
                    <LinkButton height='44px' label="Pay with Link" />
                    <HStack w='full'>
                        <Divider borderColor='gray.300' />
                        <Text fontSize='sm' fontWeight='400' color='gray.400' whiteSpace='nowrap'>
                            Or pay another way
                        </Text>
                        <Divider borderColor='gray.300' />
                    </HStack>
                </VStack>
            </Collapse>
        </React.Fragment>
    )
}
