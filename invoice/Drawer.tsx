import { chakra, Drawer as ChakraDrawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, HStack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { RiArrowRightSLine, RiCloseFill } from 'react-icons/ri'
import { Infos, Product } from '@components/Details'

export const Drawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <chakra.button
                _hover={{
                    color: "gray.900",
                }}
                color="gray.500"
                ref={btnRef as any}
                onClick={onOpen}
            >
                <HStack spacing="0.5" justifyContent="center">
                    <span>View invoice details</span>
                    <RiArrowRightSLine size="20px" />
                </HStack>
            </chakra.button>
            <ChakraDrawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef as any}
                size="sm"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>
                        <chakra.button
                            _hover={{
                                color: "gray.900",
                            }}
                            color="gray.500"
                            ref={btnRef as any}
                            onClick={onClose}
                            fontSize="md"
                        >
                            <HStack spacing="0.5" justifyContent="center">
                                <RiCloseFill size="20px" />
                                <span>Close invoice details</span>
                            </HStack>
                        </chakra.button>
                    </DrawerHeader>
                    <DrawerBody>
                        <Heading size='xl'>€10.00</Heading>
                        <Product loaded={true} fixedQuantity />
                        <Infos loaded />
                    </DrawerBody>
                </DrawerContent>
            </ChakraDrawer>
        </>
    )
}
