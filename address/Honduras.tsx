import React from 'react'
import { Input } from '@components/Input'
import { Control, FieldValues } from 'react-hook-form';
import { Select } from '@components/Select'
import { Flex } from '@components/index';
import { honduras } from '@variabels/index';

interface HondurasProps {
    control: Control<FieldValues>;
    error: any;
}

export const Honduras: React.FC<HondurasProps> = ({ control, error }) => (
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
            id={"department"}
            name={'dependentLocality'}
            label={"Department"}
            values={honduras}
            position={"mid"}
            control={control}
            rules={{
                required: true,
            }}
            error={error.dependentLocality}
        />
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
    </Flex>
)