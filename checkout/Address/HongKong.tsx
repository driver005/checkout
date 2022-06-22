import React from 'react'
import { Input } from '@components/Input'
import { Control, FieldValues } from 'react-hook-form';
import { Select } from '@components/Select'
import { Flex } from '../Common/index';
import { HStack } from '@chakra-ui/react';
import { hongkong } from '@variabels/index';

interface HongKongProps {
    control: Control<FieldValues>;
    error: any;
}

export const HongKong: React.FC<HongKongProps> = ({ control, error }) => (
    <Flex>
        <Select
            id={"area"}
            name={'region'}
            label={"Area"}
            values={hongkong}
            position={"mid"}
            control={control}
            rules={{
                required: true,
            }}
            error={error.region}
        />
        <Input
            id={"district"}
            type={"text"}
            name={'dependentLocality'}
            label={"District"}
            position={"mid"}
            control={control}
            rules={{
                required: true,
            }}
            error={error.dependentLocality}
        />
        <Input
            id={"addressLine1"}
            type={"text"}
            name={'addressLine1'}
            label={"Addressline 1"}
            position={"mid"}
            control={control}
            rules={{
                required: true,
            }}
            error={error.addressLine1}
        />
        <Input
            id={"addressLine2"}
            type={"text"}
            name={'addressLine2'}
            label={"Addressline 2"}
            position={"mid"}
            control={control}
            rules={{
                required: false,
            }}
            error={error.addressLine2}
        />
    </Flex>
)