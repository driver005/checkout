import React from 'react'
import { Input } from '@components/Input'
import { Control, FieldValues } from 'react-hook-form';
import { Select } from '@components/Select'
import { china } from '@variabels/index';
import { Flex } from '@components/index';

interface ChinaProps {
    control: Control<FieldValues>;
    error: any;
}

export const China: React.FC<ChinaProps> = ({ control, error }) => (
    <Flex>
        <Input
            id={"postalCode"}
            type={"text"}
            name={'postalCode'}
            label={"Postal code"}
            position={"mid"}
            control={control}
            rules={{
                required: true,
            }}
            error={error.postalCode}
        />
        <Select
            id={"province"}
            name={'region'}
            label={"Province"}
            values={china}
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