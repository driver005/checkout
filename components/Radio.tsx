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
import { BackgroundColor, Border, PrimaryColor, TextColor } from 'config';
import { BsCheckCircleFill } from 'react-icons/bs';
import { LightenDarkenColor } from 'utils';


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
            background={BackgroundColor}
        >
            <input {...input} />
            <Box
                {...checkbox}
                cursor='pointer'
                border='1px solid'
                borderColor={LightenDarkenColor(BackgroundColor, 50)}
                borderBottomRadius={(position === "top" || position === "mid") ? "none" : Border}
                borderTopRadius={(position === "bottom" || position === "mid") ? "none" : Border}
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
                        borderColor={LightenDarkenColor(BackgroundColor, -50)}
                        flexShrink='0'
                        flexGrow='0'
                        bg={state.isChecked ? 'white' : 'transparent'}
                    >
                        {state.isChecked && <Icon color={PrimaryColor} as={BsCheckCircleFill} />}
                    </Flex>
                    <Flex w='full' flexDirection='row' justifyContent='space-between'>
                        <VStack alignItems='start' spacing='0'>
                            <chakra.span color={state.isChecked ? TextColor : LightenDarkenColor(TextColor, 100)} fontWeight='600' fontSize='13px'>{label}</chakra.span>
                            <chakra.span color={state.isChecked ? TextColor : LightenDarkenColor(TextColor, 100)} fontSize='11px'>{labelInfo}</chakra.span>
                        </VStack>
                        <chakra.span color={state.isChecked ? TextColor : LightenDarkenColor(TextColor, 100)} fontWeight='600'>{price}</chakra.span>
                    </Flex>
                </HStack>

            </Box>
        </Box>
    )
}