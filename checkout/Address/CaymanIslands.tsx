import React from 'react'
import { Input } from '@components/Input'
import { Control, FieldValues } from 'react-hook-form';
import { Select } from '@components/Select'
import { Flex } from '../Common/index';
import { caymanislands } from '@variabels/index';

interface CaymanIslandsProps {
    control: Control<FieldValues>;
    error: any;
}

export const CaymanIslands: React.FC<CaymanIslandsProps> = ({ control, error }) => (
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
            id={"island"}
            name={'region'}
            label={"Island"}
            values={caymanislands}
            position={"mid"}
            control={control}
            rules={{
                required: true,
            }}
            error={error.region}
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