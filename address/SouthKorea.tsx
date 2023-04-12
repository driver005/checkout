import React from 'react'
import { Input } from '@components/Input'
import { Control, FieldValues } from 'react-hook-form';
import { Select } from '@components/Select'
import { Flex } from '@components/index';
import { HStack } from '@chakra-ui/react';
import { southkorea } from '@variabels/index'

interface SouthKoreaProps {
    control: Control<FieldValues>;
    error: any;
}

export const SouthKorea: React.FC<SouthKoreaProps> = ({ control, error }) => (
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
        <Select
            id={"dosi"}
            name={'region'}
            label={"Do Si"}
            values={southkorea}
            position={"mid"}
            control={control}
            rules={{
                required: true,
            }}
            error={error.region}
        />
    </Flex>
)