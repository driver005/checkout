import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { AiFillDollarCircle } from 'react-icons/ai'
import { motion, Variants } from 'framer-motion';
import { Box, BoxProps, Flex, FlexProps, Heading, HeadingProps, Icon, IconProps, Skeleton } from '@chakra-ui/react';

const MotionBox = motion<Omit<BoxProps, "transition">>(Box);
const MotionFlex = motion<FlexProps>(Flex);
const MotionHeading = motion<HeadingProps>(Heading);

const movingTextMotion: Variants = {
    inital: {
        x: 0,
        opacity: 1
    },
    hover: {
        x: '-16px',
        opacity: 0,
        transition: {
            type: 'linear'
        }
    }
};

const textMotion: Variants = {
    inital: {
        x: '4px',
        opacity: 0
    },
    hover: {
        opacity: 1,
        x: '-1px',
        transition: {
            type: 'linear',
            delay: 0.1
        }
    }
};

const logoMotion: Variants = {
    inital: {
        opacity: 1
    },
    hover: {
        opacity: 0,
        transition: {
            type: 'linear'
        }
    }
};

const iconMotion: Variants = {
    inital: {
        scale: 0.95,
        x: '-20px',
        opacity: 0.4
    },
    hover: {
        scale: 1,
        x: '-25px',
        opacity: 1,
        transition: {
            type: 'linear'
        }
    }
};

interface BackProps {
    loaded?: boolean;
}

export const Back: React.FC<BackProps> = ({ loaded = true }) => (
    <MotionFlex
        position='relative'
        alignItems='center'
        initial="inital"
        whileHover={loaded ? "hover" : "inital"}
        animate="inital"
        mb='32px'
        cursor='pointer'
    >
        <MotionFlex position='absolute' h='full' alignItems='center' mr='8px' variants={iconMotion} >
            <Icon as={BiArrowBack} color='gray.800' />
        </MotionFlex>
        <MotionFlex
            alignItems='center'
            position='relative'
        >
            <Skeleton
                isLoaded={loaded}
                borderRadius='full'
                mr='8px'
            >
                <MotionBox
                    h='28px'
                    w='28px'
                    variants={logoMotion}
                >
                    <Icon h='full' w='full' as={AiFillDollarCircle} />
                </MotionBox>
            </Skeleton>
            <MotionHeading
                as='span'
                position='absolute'
                left='0'
                fontWeight='500'
                fontSize='14px'
                variants={textMotion}
            >
                Back
            </MotionHeading>
            <Skeleton
                isLoaded={loaded}
                borderRadius='xl'
            >
                <MotionHeading
                    as='h1'
                    fontWeight='500'
                    fontSize='14px'
                    variants={movingTextMotion}
                >
                    Checkout
                </MotionHeading>
            </Skeleton>
        </MotionFlex>
    </MotionFlex>
)
