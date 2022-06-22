import { FormControl, FormErrorMessage, FormHelperText, FormLabel, InputAddonProps, InputGroup, InputLeftAddon, InputRightElement, Input as InputComponent, InputLeftElement, Icon } from "@chakra-ui/react";
import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import { RiErrorWarningLine } from "react-icons/ri";

declare type Type = (props: any) => JSX.Element;

export interface InputProps {
    name: string;
    control: Control<FieldValues>;
    rules: any;
    id?: string;
    label?: string;
    type?: string;
    position?: string;
    defaultValue?: string;
    disabled?: boolean;
    error?: any;
    icon?: any;
    text?: any;
    addon?: any;
    onClick?: (method: any) => Promise<void>;
}

export const Input: React.FC<InputProps> = ({
    id,
    label,
    type,
    name,
    position,
    defaultValue,
    disabled = false,
    error = null,
    rules,
    icon,
    addon,
    text,
    control,
    onClick = function () { }
}) => (
    <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field: { onChange, onBlur, value, ref } }) => (
            <FormControl
                id={id}
                marginInlineStart={"0px !important"}
                isInvalid={error}
                isDisabled={disabled}
                bg='white'
                borderBottomRadius={(position === "top" || position === "mid") ? "none" : "md"}
                borderTopRadius={(position === "bottom" || position === "mid") ? "none" : "md"}
            >
                <InputGroup>
                    {addon && <InputLeftElement children={addon} />}
                    <InputComponent
                        type={type}
                        _focus={{ boxShadow: 'outline', borderColor: 'gray.200', }}
                        _placeholder={{ color: error ? 'red.500' : 'gray.400', opacity: 1 }}
                        borderBottomRadius={(position === "top" || position === "mid") ? "none" : "md"}
                        borderTopRadius={(position === "bottom" || position === "mid") ? "none" : "md"}
                        errorBorderColor='red.500'
                        zIndex={error ? 1 : 0}
                        paddingRight={text ? '14' : '10'}
                        placeholder={label}
                        name={name}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        ref={ref}
                    />

                    {(icon || text) && <InputRightElement onClick={onClick} children={icon || text} mr={text ? '4' : '0'} />}
                    {error && <InputRightElement onClick={onClick} children={<Icon color='red.500' as={RiErrorWarningLine} />} />}
                </InputGroup>
                {/* {!addon && <FormHelperText>{!error && "Fill in the requierd value"}</FormHelperText>}
        <FormErrorMessage>{error && error.message}</FormErrorMessage> */}
            </FormControl>
        )}
    />
);