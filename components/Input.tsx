import { FormControl, FormErrorMessage, FormHelperText, FormLabel, InputAddonProps, InputGroup, InputLeftAddon, InputRightElement, Input as InputComponent, InputLeftElement, Icon } from "@chakra-ui/react";
import { BackgroundColor, Border, BorderColor, Shadow, TextColor } from "config";
import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import { RiErrorWarningLine } from "react-icons/ri";
import { LightenDarkenColor } from "utils";

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
                borderBottomRadius={(position === "top" || position === "mid") ? "none" : Border}
                borderTopRadius={(position === "bottom" || position === "mid") ? "none" : Border}
            >
                <InputGroup>
                    {addon && <InputLeftElement children={addon} />}
                    <InputComponent
                        type={type}
                        _focus={{ boxShadow: Shadow, borderColor: BorderColor }}
                        _hover={{}}
                        _placeholder={{ color: error ? 'red.500' : TextColor, opacity: 0.5 }}
                        borderBottomRadius={(position === "top" || position === "mid") ? "none" : Border}
                        borderTopRadius={(position === "bottom" || position === "mid") ? "none" : Border}
                        background={BackgroundColor}
                        border='1px solid'
                        borderColor={LightenDarkenColor(BackgroundColor, 50)}
                        color={TextColor}
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