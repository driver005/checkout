import { Box, Heading, useRadio, VStack, Icon } from '@chakra-ui/react';
import { BackgroundColor, Border, BorderColor, PrimaryColor, Shadow, TextColor } from '@config/index';
import React from 'react'
import { IconType } from 'react-icons';
import { LightenDarkenColor } from 'utils';

interface TabProps {
    icon: any;
    label?: string;
    type?: string;
    props?: any;
}

export const Tab: React.FC<TabProps> = ({ icon, label, type = "tab", props }) => {
    const { getInputProps, getCheckboxProps, state } = useRadio(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()
    return (
        <Box
            as='label'
            w='full'
            minW='0'
            flex='1 1 0%'
            borderRadius={Border}
            bg={BackgroundColor}
        >
            <input {...input} />
            <Box
                display='flex'
                alignItems='center'
                justifyContent='flex-start'
                w='full'
                h='50px'
                minW='12'
                p="10px 12px 8px"
                border='2px solid'
                borderColor={LightenDarkenColor(BackgroundColor, 50)}
                borderRadius={Border}
                _focus={{ boxShadow: Shadow, borderColor: BorderColor }}
                {...checkbox}
                _checked={{
                    borderColor: BorderColor
                }}
            >
                <VStack spacing='0' alignItems='start' maxW='full' w="full">
                    {icon}
                    <Heading
                        as='span'
                        fontWeight='500'
                        color={state.isChecked ? PrimaryColor : LightenDarkenColor(TextColor, 125)}
                        fontSize='xs'
                        textOverflow="ellipsis"
                        flex="0 1 100%"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        w="full"
                    >
                        {label}
                    </Heading>
                </VStack>
            </Box>
        </Box>
    )
}

