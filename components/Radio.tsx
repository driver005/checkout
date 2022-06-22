// 1. Create a component that consumes the `useRadio` hook
import {
    chakra,
    useRadio,
    RadioProps as ChakraRadioProps,
    Box,
    Radio as RadioComponent,
    HStack,
    VStack,
    Container,
    Flex,
    Icon
} from '@chakra-ui/react';
import { BsCheckCircleFill } from 'react-icons/bs';


export interface RadioProps {
    props?: any;
    label?: string;
    labelInfo?: string;
    price?: string;
    position?: string;
}

export const Radio: React.FC<RadioProps> = ({
    props,
    label,
    labelInfo,
    price,
    position,
}) => {
    const { getInputProps, getCheckboxProps, getLabelProps, getRootProps, state } = useRadio(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return (
        <Box
            as='label'
            w='full'
            borderRadius='md'
            bg='white'
        >
            <input {...input} />
            <Box
                {...checkbox}
                cursor='pointer'
                borderWidth='1px'
                borderBottomRadius={(position === "top" || position === "mid") ? "none" : "md"}
                borderTopRadius={(position === "bottom" || position === "mid") ? "none" : "md"}
                px={5}
                py={3}
            >
                <HStack
                    alignItems='flex-start'
                >
                    <Flex
                        w='4'
                        h='4'
                        mt='4px'
                        alignItems='center'
                        justifyContent='center'
                        borderRadius='full'
                        borderWidth='2px'
                        flexShrink='0'
                        flexGrow='0'
                        bg={state.isChecked ? 'white' : 'transparent'}
                    >
                        {state.isChecked && <Icon color='blue.500' as={BsCheckCircleFill} />}
                    </Flex>
                    <Flex w='full' flexDirection='row' justifyContent='space-between'>
                        <VStack alignItems='start' spacing='0'>
                            <chakra.span color={state.isChecked ? 'currentcolor' : 'gray.500'} fontWeight='600' fontSize='13px'>{label}</chakra.span>
                            <chakra.span color={state.isChecked ? 'gray.500' : 'gray.400'} fontSize='11px'>{labelInfo}</chakra.span>
                        </VStack>
                        <chakra.span color={state.isChecked ? 'currentcolor' : 'gray.500'} fontWeight='600'>{price}</chakra.span>
                    </Flex>
                </HStack>

            </Box>
        </Box>
    )
}