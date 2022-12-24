import React from 'react'
import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Icon,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react';
import {
    AutoComplete,
    AutoCompleteInput,
    AutoCompleteItem,
    AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { Control, Controller, FieldValues } from 'react-hook-form';
import { BackgroundColor, Border, BorderColor, PrimaryColor, Shadow, TextColor } from 'config';
import { LightenDarkenColor } from 'utils';

interface SelectProps {
    name: string;
    control: Control<FieldValues>;
    rules: any;
    id?: string;
    label?: string;
    values?: string[];
    position?: string;
    disabled?: boolean;
    onChanges?: any;
    defaultValue?: string;
    error?: any;
}

export const Select: React.FC<SelectProps> = ({
    id,
    label,
    values,
    name,
    control,
    rules,
    position,
    defaultValue,
    error,
    onChanges,
    disabled = false
}) => (
    <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field: { onChange, onBlur, value, ref } }) => (
            <FormControl
                id={id}
                isInvalid={error}
                isDisabled={disabled}
                bg='white'
                borderBottomRadius={(position === "top" || position === "mid") ? "none" : Border}
                borderTopRadius={(position === "bottom" || position === "mid") ? "none" : Border}
            >
                <AutoComplete openOnFocus onChange={onChanges ? onChanges : onChange} onBlur={onBlur} value={value}>
                    {({ isOpen }: { isOpen: boolean }) => (
                        <React.Fragment>
                            <InputGroup>
                                <AutoCompleteInput
                                    borderBottomRadius={(position === "top" || position === "mid") ? "none" : Border}
                                    borderTopRadius={(position === "bottom" || position === "mid") ? "none" : Border}
                                    _focus={{ boxShadow: Shadow, borderColor: BorderColor }}
                                    _hover={{}}
                                    _placeholder={{ color: error ? 'red.500' : TextColor, opacity: 0.5 }}
                                    background={BackgroundColor}
                                    border='1px solid'
                                    borderColor={LightenDarkenColor(BackgroundColor, 50)}
                                    defaultValue={defaultValue}
                                    color={error ? 'red.500' : TextColor}
                                    placeholder={label}
                                    name={name}
                                    ref={ref}
                                />
                                <InputRightElement>
                                    <Icon as={isOpen ? FiChevronRight : FiChevronDown} />
                                </InputRightElement>
                            </InputGroup>
                            <AutoCompleteList borderColor={error ? 'red.500' : PrimaryColor} background={`${BackgroundColor} !important`} border='2px'>
                                {values?.map((value, id) => (
                                    <AutoCompleteItem
                                        key={`option-${id}`}
                                        value={value}
                                        textTransform="capitalize"
                                        label={value}
                                        fixed
                                        color={error ? 'red.500' : TextColor}
                                    />
                                ))}
                            </AutoCompleteList>
                        </React.Fragment>
                    )}
                </AutoComplete>
            </FormControl>
        )}
    />
)
