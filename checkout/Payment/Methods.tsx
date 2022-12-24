import React, { useContext, useEffect, useState } from 'react'
import {
    Heading,
    Skeleton,
    useRadioGroup,
    VStack
} from '@chakra-ui/react';
import { Radio } from '@components/Radio'
import { Flex, Label } from '../Common/index';
import { useController } from 'react-hook-form';
import { Context } from '@store/context';
import { useAppSelector } from '@store/hooks';


interface MethodsProps {
    error: boolean;
    loaded?: boolean;
}

export const Methods: React.FC<MethodsProps> = ({ error, loaded = true }) => {
    const control = useContext(Context);
    const [shipping, setShipping] = useState([{}, {}])
    const s = useAppSelector((state) => state.shipping)
    const { field } = useController({
        name: 'shipping',
        control,
        rules: { required: "Please select a shipping method" },
        defaultValue: 'Free shipping'
    });

    const { getRootProps, getRadioProps } = useRadioGroup({ ...field })

    const group = getRootProps()

    useEffect(() => {
        setShipping(s)
    }, [s])

    return (
        <Skeleton
            w='full'
            isLoaded={loaded}
            borderRadius='md'
        >
            <Flex>
                <Label label='Shipping method' error={error} />
                <VStack borderRadius='md' mt='4px' spacing='0' alignItems='start' {...group}>
                    {shipping.map((value: any) => {
                        const radio = getRadioProps({ value: value.label || '' })
                        return (
                            <Radio
                                key={value.label || ''}
                                label={value.label || ''}
                                labelInfo={value.labelInfo || ''}
                                price={value.price || ''}
                                position={value.position || 'top'}
                                props={{ ...radio }}
                            />
                        )
                    })}
                </VStack>
            </Flex>
        </Skeleton>
    )
}
