import React from 'react'
import { Input } from '@components/Input'
import { Control, FieldValues } from 'react-hook-form';
import { Select } from '@components/Select'
import { australia } from '@variabels/index';
import { Flex } from '../Common/index';

interface AustraliaProps {
    control: Control<FieldValues>;
    error: any;
}

export const Australia: React.FC<AustraliaProps> = ({ control, error }) => (
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
            id={"suburborcity"}
            type={"text"}
            name={'city'}
            label={"Suburb or city"}
            position={"mid"}
            control={control}
            rules={{
                required: true,
            }}
            error={error.city}
        />
        <Select
            id={"state"}
            label={"State"}
            name={'state'}
            values={australia}
            position={"mid"}
            control={control}
            rules={{
                required: true,
            }}
            error={error.state}
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