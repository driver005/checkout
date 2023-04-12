import { chakra, Center, Heading, Card as ChakraCard, Text, VStack, HStack, Collapse, FlexProps, Flex, Box, BoxProps, Divider, TableContainer, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'
import Image from 'next/image'
import invoice from "@assets/invoice.svg"
import React from 'react'
import { RxDownload } from "react-icons/rx"
import { RiArrowRightSLine } from "react-icons/ri"
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { Wrapper } from '@invoice/Wrapper'
import { Drawer } from '@invoice/Drawer'

const MotionFlex = motion<FlexProps>(Flex);
const MotionBox = motion<Omit<BoxProps, "transition">>(Box);

const movingSizeMotion: Variants = {
    initial: {
        width: "28px",
        transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeIn"
        },
    },
    hover: {
        width: "90px",
        transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeOut"
        },
    }
};

//#EDC55BA9-0001

interface DetailProps {
    price: string;
    dueDay: string;
    customerName: string;
    shopName: string;
    invoiceId: string;
    memo?: string;
}

export const Details: React.FC<DetailProps> = ({
    price,
    dueDay,
    customerName,
    shopName,
    invoiceId,
    memo
}) => {
    return (
        <Wrapper>
            <HStack justifyContent="space-between" alignItems="flex-start">
                <VStack spacing="0.5" alignItems="flex-start">
                    <Heading size='xl'>{price}</Heading>
                    <Text size="lg" color="gray.500" fontWeight="600">{dueDay}</Text>
                </VStack>
                <Box transform="translate(30px, -20px)">
                    <MotionBox
                        whileTap={{
                            scale: 0.9
                        }}
                        position="relative"
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        initial="initial"
                        whileHover="hover"
                        animate="initial"
                        cursor="pointer"
                    >
                        <Image
                            src={invoice}
                            alt="Invoice"
                            width={131}
                            height={145}
                        />
                        <MotionFlex
                            backgroundColor="white"
                            borderRadius="50px"
                            variants={movingSizeMotion}
                            overflow="hidden"
                            alignItems="center"
                            position="absolute"
                            top="85px"
                            right="20px"
                        >
                            <Box m="6px 6px">
                                <RxDownload />
                            </Box>
                            <Text size="lg" color="gray.600" fontWeight="600">Invoice</Text>
                        </MotionFlex>

                    </MotionBox>
                </Box>
            </HStack>
            <TableContainer>
                <Table variant='unstyled'>
                    <Tbody>
                        <Tr>
                            <Td color="gray.400" fontWeight="400" p="2px 0">To</Td>
                            <Td color="gray.600" fontWeight="400" p="2px 0">{customerName}</Td>
                        </Tr>
                        <Tr>
                            <Td color="gray.400" fontWeight="400" p="2px 0">From</Td>
                            <Td color="gray.600" fontWeight="400" p="2px 0">{shopName}</Td>
                        </Tr>
                        <Tr>
                            <Td color="gray.400" fontWeight="400" p="2px 0">Invoice</Td>
                            <Td color="gray.600" fontWeight="400" p="2px 0">{invoiceId}</Td>
                        </Tr>
                        {memo &&
                            <Tr>
                                <Td color="gray.400" fontWeight="400" p="2px 0">Memo</Td>
                                <Td color="gray.600" fontWeight="400" p="2px 0">{memo}</Td>
                            </Tr>
                        }
                        <Tr>
                            <Td></Td>
                            <Td px="0" pb="0">
                                <VStack spacing="4" alignItems="flex-start">
                                    <Divider borderColor="gray.300" />
                                    <Drawer />
                                </VStack>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Wrapper>
    )
}
