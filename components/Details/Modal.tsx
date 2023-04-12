import React, { useEffect, useState } from 'react'
import {
    Button,
    HStack,
    Input,
    Modal as ChakraModal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useNumberInput,
} from '@chakra-ui/react';
import { DefaultButton } from '@components/index';
import { useDispatch } from 'react-redux';
import { UPDATE } from '@variabels/types';


interface ModalProps {
    open: boolean;
    setOpen: any;
    product: any;
}

export const Modal: React.FC<ModalProps> = ({ open, setOpen, product }) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState(product.quantity)
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 1,
            defaultValue: product.quantity,
            min: 1,
            precision: 0,
            value: value,
            onChange: (_: string, valueAsNumber: number) => setValue(valueAsNumber)
        })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

    useEffect(() => {
        setValue(product.quantity)
    }, [product])

    return (
        <ChakraModal isOpen={open} onClose={() => setOpen(false)}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <HStack >
                        <Button {...inc}>+</Button>
                        <Input {...input} />
                        <Button {...dec}>-</Button>
                    </HStack>
                </ModalBody>

                <ModalFooter>
                    <DefaultButton label='Update' status='complete' onClick={() => {
                        dispatch({
                            type: 'UPDATE_PRODUCT',
                            payload: { ...product, quantity: value, totalDue: value * product.price }
                        })
                        setOpen(false)
                    }} />
                </ModalFooter>
            </ModalContent>
        </ChakraModal>
    )
}