import React, { useContext, useEffect, useState } from 'react'
import {
    ButtonGroup,
    Button,
    VStack,
    Icon,
    Heading,
    useRadioGroup,
    useRadio,
    Box,
    Flex as ChakraFlex,
    Skeleton
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { TbBrandPaypal } from 'react-icons/tb'
import { SiSepa } from 'react-icons/si'
import { Flex } from '../Common/index';
import { Sepa, PayPal, Wrapper } from 'checkout/Methods/index';
import { Context } from '@store/context';
import { useController } from 'react-hook-form';
import { BackgroundColor, Border, BorderColor, PrimaryColor, Shadow, TextColor } from 'config';
import { LightenDarkenColor } from 'utils';


interface OptionsButtonProps {
    icon: IconType;
    label: string;
    props?: any;
}

const OptionsButton: React.FC<OptionsButtonProps> = ({ icon, label, props }) => {
    const { getInputProps, getCheckboxProps, state } = useRadio(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()
    return (
        <Box
            as='label'
            w='full'
            borderRadius={Border}
            bg={BackgroundColor}
        >
            <input {...input} />
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                w='100%'
                h='12'
                minW='12'
                paddingBlockStart='6'
                paddingBlockEnd='6'
                border='2px solid'
                borderColor={LightenDarkenColor(BackgroundColor, 50)}
                borderRadius={Border}
                _focus={{ boxShadow: Shadow, borderColor: BorderColor }}
                {...checkbox}
                _checked={{
                    borderColor: BorderColor
                }}
            >
                <VStack spacing='0' alignItems='start'>
                    <Icon w={4} h={4} as={icon} />
                    <Heading
                        as='span'
                        fontWeight='500'
                        color={state.isChecked ? PrimaryColor : LightenDarkenColor(TextColor, 125)}
                        size='xs'
                    >
                        {label}
                    </Heading>
                </VStack>
            </Box>
        </Box>
    )
}

interface OptionsProps {
    loaded?: boolean;
}

export const Options: React.FC<OptionsProps> = ({ loaded = true }) => {
    const control = useContext(Context);
    const [chosenGateway, setChosenGateway] = useState("Sepa");
    const [animateGateway, setAnimateGateway] = useState(true);

    const onChange = (nextValue: string) => {
        setAnimateGateway(false)
        setTimeout(() => {
            setChosenGateway(nextValue)
        }, 500)

    }

    const { field } = useController({
        name: 'options',
        control,
        rules: { required: "Please select a payment option" },
        defaultValue: 'Sepa'
    });

    const { getRootProps, getRadioProps } = useRadioGroup({ ...field })

    useEffect(() => {
        if (!animateGateway) {
            setTimeout(() => {
                setAnimateGateway(true)
            }, 500)
        }

    }, [animateGateway])

    const group = getRootProps()
    return (
        <Skeleton
            w='full'
            isLoaded={loaded}
            borderRadius='md'
        >
            <Flex>
                <Heading as='h2' color={TextColor} fontWeight='500' fontSize='16px' mb="16px" lineHeight='1.3'>
                    Payment details
                </Heading>
                <ButtonGroup
                    size='lg'
                    variant='outline'
                    spacing='6'
                    justifyContent='space-between'
                    w='full'
                    {...group}
                >
                    <OptionsButton
                        icon={TbBrandPaypal}
                        label='PayPal'
                        props={getRadioProps({ value: 'PayPal' })}
                    />
                    <OptionsButton
                        icon={SiSepa}
                        label='Sepa'
                        props={getRadioProps({ value: 'Sepa' })}
                    />
                    {/* <OptionsButton
                    icon={FaBtc}
                    label='Bitcoin'
                    props={getRadioProps({ value: 'Bitcoin' })}
                /> */}
                </ButtonGroup>
                <ChakraFlex mt='24px'>
                    {chosenGateway === 'Sepa' &&
                        <Wrapper position={animateGateway ? 'enter' : 'exit'}>
                            <Sepa
                                control={control}
                            />
                        </Wrapper>
                    }
                    {chosenGateway === 'PayPal' &&
                        <Wrapper position={animateGateway ? 'enter' : 'exit'}>
                            <PayPal
                                control={control}
                            />
                        </Wrapper>
                    }
                </ChakraFlex>
            </Flex>
        </Skeleton>
    )
}