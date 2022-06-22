import React from 'react'
import { Input } from '@components/Input'
import { Control, FieldValues } from 'react-hook-form';
import { Select } from '@components/Select'
import { Flex } from '../Common/index';
import { unitedarabemirates } from '@variabels/index';
import { HStack } from '@chakra-ui/react';

interface UnitedArabEmiratesProps {
    control: Control<FieldValues>;
    error: any;
}

export const UnitedArabEmirates: React.FC<UnitedArabEmiratesProps> = ({ control, error }) => (
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
            id={"emirate"}
            name={'region'}
            label={"Emirate"}
            values={unitedarabemirates}
            position={"mid"}
            control={control}
            rules={{
                required: true,
            }}
            error={error.region}
        />
    </Flex>
)