import React, { useEffect, useState } from 'react'
import { Button, Container, ContainerProps, useDisclosure } from '@chakra-ui/react';
import { AnimatePresence, motion, useCycle, Variants } from 'framer-motion';
import { Flex } from '@components/index';

const MotionContainer = motion<ContainerProps>(Container);

interface WrapperProps {
    position: string;
    children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children, position }) => {
    const [animate, cycle] = useCycle(
        {
            opacity: 0,
            x: "2vw",
        },
        {
            x: 0,
            opacity: 1,
            transition: { type: "spring", duration: 0.5 }
        },
        {
            x: "-2vw",
            opacity: 0,
            transition: { type: "spring", duration: 0.5 },
        },
    )

    useEffect(() => {
        if (position === 'exit') {
            cycle(2)
        } else if (position === 'enter') {
            cycle(0)
            cycle(1)
        }

    }, [position])
    return (
        <Flex>
            <AnimatePresence exitBeforeEnter>
                <MotionContainer
                    maxW='100%'
                    p='0'
                    initial={{
                        opacity: 0,
                        x: "2vw",
                    }}
                    animate={animate}
                >
                    {children}
                </MotionContainer>
            </AnimatePresence>
        </Flex>
    )
}
