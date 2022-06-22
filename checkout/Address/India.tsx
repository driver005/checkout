import React from 'react'
import { Input } from '@components/Input'
import { Control, FieldValues } from 'react-hook-form';
import { Select } from '@components/Select'
import { Flex } from '../Common/index';
import { HStack } from '@chakra-ui/react';
import { india } from '@variabels/index';

interface IndiaProps {
    control: Control<FieldValues>;
    error: any;
}

export const India: React.FC<IndiaProps> = ({ control, error }) => (
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
        <HStack marginInlineStart={"0px"} w='full'>
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
            <Input
                id={"pin"}
                type={"text"}
                name={'postalCode'}
                label={"Pin"}
                position={"mid"}
                control={control}
                rules={{
                    required: true,
                }}
                error={error.postalCode}
            />
        </HStack>
        <Select
            id={"state"}
            name={'state'}
            label={"State"}
            values={india}
            position={"mid"}
            control={control}
            rules={{
                required: true,
            }}
            error={error.state}
        />
    </Flex>
)