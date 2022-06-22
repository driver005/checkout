import React, { useContext, useState } from 'react'
import {
    Box,
    BoxProps,
    Button,
    Flex,
    Heading,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Input } from '@components/Input';
import { Context } from '@store/context';

const MotionBox = motion<Omit<BoxProps, "transition">>(Box);

interface CodeProps {
}

export const Code: React.FC<CodeProps> = () => {
    const [openButton, setIsOpenButton] = useState(false)
    const control = useContext(Context);
    return (
        <Flex
            h='10'
            w='full'
            my='16px'
        >
            {!openButton && (
                <Button
                    size='md'
                    border='0'
                    borderRadius='none'
                    bg='transparent'
                    color='purple.500'
                    p='0'
                    onClick={() => setIsOpenButton(true)}
                    _hover={{
                        bg: 'transparent'
                    }}
                    _focus={{
                        bg: 'transparent'
                    }}
                    _active={{
                        bg: 'transparent'
                    }}
                >
                    Add Promotion Code
                </Button>
            )}
            {openButton && (
                <MotionBox
                    w='auto'
                    animate={{ width: '100%' }}
                    transition={{ duration: 2 }}

                >
                    <Input
                        id={"add-promotion-code"}
                        type={"text"}
                        name={'promotionCode'}
                        label={"Add Promotion Code"}
                        text={
                            <Heading
                                as='span'
                                cursor='pointer'
                                fontWeight='500'
                                fontSize='14px'
                                color='green.500'
                            >
                                Apply
                            </Heading>
                        }
                        control={control}
                        rules={{
                            required: false
                        }}
                    />
                </MotionBox>
            )}
        </Flex>
    )
}