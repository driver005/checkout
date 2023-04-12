import React from 'react'
import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Icon,
    InputGroup,
    InputRightElement,
    Portal,
} from '@chakra-ui/react';
import {
    AutoComplete,
    AutoCompleteInput,
    AutoCompleteItem,
    AutoCompleteList,
} from "@components/AutoComplete";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { Control, Controller, FieldValues } from 'react-hook-form';
import { BackgroundColor, Border, BorderColor, ErrorColor, ErrorShadow, PrimaryColor, Shadow, TextColor } from 'config';
import { LightenDarkenColor } from 'utils';
import { Select as ChakraSelect, CreatableSelect, AsyncSelect } from "chakra-react-select";

interface SelectProps {
    name: string;
    control: Control<FieldValues, any>;
    rules: any;
    id?: string;
    label?: string;
    values?: any;
    position?: string;
    direction?: string;
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
    direction,
    defaultValue,
    error,
    onChanges,
    disabled = false
}) => {
    const [focus, setFocus] = React.useState(false)

    const onFocus = () => {
        setFocus(true)
    }

    const onBlur = () => {
        setFocus(false)
    }

    return (
        <Controller
            control={control}
            name={name}
            defaultValue={defaultValue}
            rules={rules}
            render={({ field: { onChange, value, ref } }) => (
                <FormControl
                    id={id}
                    isInvalid={error}
                    isDisabled={disabled}
                    bg='white'
                    zIndex={focus ? '1' : '0'}
                >
                    {/* <AutoComplete openOnFocus closeOnSelect onChange={onChanges ? onChanges : onChange} onBlur={onBlur} value={value}>
                        {({ isOpen }: { isOpen: boolean }) => (
                            <React.Fragment>
                                <InputGroup>
                                    <AutoCompleteInput
                                        borderTopLeftRadius={position === "mid" ? "none" : position === "top" ? (direction === "left" || direction === "both") ? Border : "none" : position == "alone" ? Border : "none"}
                                        borderTopRightRadius={position === "mid" ? "none" : position === "top" ? (direction === "right" || direction === "both") ? Border : "none" : position == "alone" ? Border : "none"}
                                        borderBottomLeftRadius={position === "mid" ? "none" : position === "bottom" ? (direction === "left" || direction === "both") ? Border : "none" : position == "alone" ? Border : "none"}
                                        borderBottomRightRadius={position === "mid" ? "none" : position === "bottom" ? (direction === "right" || direction === "both") ? Border : "none" : position == "alone" ? Border : "none"}
                                        _focus={{ boxShadow: Shadow, borderColor: BorderColor }}
                                        _placeholder={{ color: error ? 'red.500' : TextColor, opacity: 0.5 }}
                                        background={BackgroundColor}
                                        // onFocus={onFocus}
                                        onBlur={onBlur}
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
                    </AutoComplete> */}
                    <ChakraSelect
                        options={values}
                        closeMenuOnSelect={true}
                        isRequired={true}
                        onChange={onChanges ? onChanges : onChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        chakraStyles={{
                            dropdownIndicator: (prev, { selectProps }) => ({
                                ...prev,
                                "> svg": {
                                    transform: `rotate(${selectProps.menuIsOpen ? 0 : -90}deg)`,
                                },
                            }),
                            control: (prev, { isFocused }) => ({
                                ...prev,
                                "color": `${error ? ErrorColor : TextColor}`,
                                "borderColor": error ? `${ErrorColor}!important` : `${isFocused ? BorderColor : '#cdcdcd'}!important`,
                                "borderWidth": "1px",
                                "borderRadius": Border,
                                "boxShadow": isFocused && `${error ? ErrorShadow : Shadow}!important`,
                                "borderTopLeftRadius": position === "mid" ? "none" : position === "top" ? (direction === "left" || direction === "both") ? Border : "none" : position == "alone" ? Border : "none",
                                "borderTopRightRadius": position === "mid" ? "none" : position === "top" ? (direction === "right" || direction === "both") ? Border : "none" : position == "alone" ? Border : "none",
                                "borderBottomLeftRadius": position === "mid" ? "none" : position === "bottom" ? (direction === "left" || direction === "both") ? Border : "none" : position == "alone" ? Border : "none",
                                "borderBottomRightRadius": position === "mid" ? "none" : position === "bottom" ? (direction === "right" || direction === "both") ? Border : "none" : position == "alone" ? Border : "none",
                            }),
                            menu: (prev, { }) => ({
                                ...prev,
                                "borderColor": `${error ? 'red.500' : BorderColor}`,
                                "borderWidth": "2px",
                                "borderRadius": Border,
                            }),
                            menuList: (prev, { }) => ({
                                ...prev,
                                "borderWidth": "0",
                                "borderRadius": Border,
                            }),
                            option: (prev, { isSelected }) => ({
                                ...prev,
                                "backgroundColor": isSelected && `${error ? ErrorColor : PrimaryColor}`,
                            }),
                        }}
                        defaultValue={defaultValue}
                        placeholder={label}
                        name={name}
                        ref={ref}
                    />
                </FormControl>
            )}
        />
    )
}
