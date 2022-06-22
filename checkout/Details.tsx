import React, { useEffect, useState } from 'react'
import {
    chakra,
    Box,
    BoxProps,
    Flex,
    HStack,
    Icon,
    Image,
    VStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Divider,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { TbChevronDown } from 'react-icons/tb';
import { Input } from '@components/Input';
import { Infos, Product, Heading, Back } from './Detail/index';
import { useDispatch } from 'react-redux';
import { FETCH } from '@variabels/types';

const MotionBox = motion<Omit<BoxProps, "transition">>(Box);


interface DetailsProps {
    loaded?: boolean;
    watch: any;
}

export const Details: React.FC<DetailsProps> = ({ loaded = true, watch }) => {
    const [open, setIsOpen] = useState(false)
    const [product, setProduct] = useState([
        {
            id: 1,
            name: 'Test',
            quantity: 12,
            price: 10,
        },
        {
            id: 2,
            name: 'Test',
            quantity: 10,
            price: 10,
        }
    ])
    return (
        <Flex
            w='full'
            justifyContent="center"
            mt='14'
        >
            <Flex
                w='50%'
                flexWrap='wrap'
                flexDirection='column'
                alignItems='flex-start'
            >
                <Back
                    loaded={loaded}
                />
                <Heading
                    loaded={loaded}
                />
                <Product
                    loaded={loaded}
                />
                <Infos
                    watch={watch}
                    loaded={loaded}
                />
            </Flex>
        </Flex >
    )
}