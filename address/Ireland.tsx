import React from 'react'
import { Input } from '@components/Input'
import { Control, FieldValues } from 'react-hook-form';
import { Select } from '@components/Select'
import { Flex } from '@components/index';
import { HStack } from '@chakra-ui/react';
import { ireland } from '@variabels/index';

interface IrelandProps {
    control: Control<FieldValues>;
    error: any;
}

export const Ireland: React.FC<IrelandProps> = ({ control, error }) => (
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
        <Input
            id={"townland"}
            type={"text"}
            name={'dependentLocality'}
            label={"Townland"}
            position={"mid"}
            control={control}
            rules={{
                required: true,
            }}
            error={error.dependentLocality}
        />
        <Input
            id={"city"}
            type={"text"}
            name={'city'}
            label={"City"}
            position={"mid"}
            control={control}
            rules={{
                required: true,
            }}
            error={error.city}
        />
        <Select
            id={"country"}
            name={'region'}
            label={"Country"}
            values={ireland}
            position={"mid"}
            control={control}
            rules={{
                required: true,
            }}
            error={error.region}
        />
        <Input
            id={"eircode"}
            type={"text"}
            name={'eircode'}
            label={"Eircode"}
            position={"mid"}
            control={control}
            rules={{
                required: true,
            }}
            error={error.postalCode}
        />
    </Flex>
)