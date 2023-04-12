import React from 'react'
import { Input } from '@components/Input'
import { Control, FieldValues } from 'react-hook-form';
import { Select } from '@components/Select'
import { Flex } from '@components/index';
import { HStack } from '@chakra-ui/react';

interface MalaysiaProps {
    control: Control<FieldValues>;
    error: any;
}

export const Malaysia: React.FC<MalaysiaProps> = ({ control, error }) => (
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
            id={"villageOrTownship"}
            type={"text"}
            name={'dependentLocality'}
            label={"Village or township"}
            position={"mid"}
            control={control}
            rules={{
                required: true,
            }}
            error={error.dependentLocality}
        />
        <HStack marginInlineStart={"0px"} w='full'>
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
        </HStack>
    </Flex>
)