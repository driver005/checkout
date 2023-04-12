import React from 'react'
import { Input } from '@components/Input'
import { Control, FieldValues } from 'react-hook-form';
import { Select } from '@components/Select'
import { Flex } from '@components/index';
import { HStack } from '@chakra-ui/react';
import { nauru } from '@variabels/index';

interface NauruProps {
    control: Control<FieldValues>;
    error: any;
}

export const Nauru: React.FC<NauruProps> = ({ control, error }) => (
    <Flex>
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
        <Select
            id={"district"}
            values={nauru}
            name={'dependentLocality'}
            label={"District"}
            position={"mid"}
            control={control}
            rules={{
                required: true,
            }}
            error={error.dependentLocality}
        />
    </Flex>
)