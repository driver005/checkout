import { FormControl, FormErrorMessage, FormHelperText, FormLabel, InputAddonProps, InputGroup, InputLeftAddon, InputRightElement, Input as InputComponent, InputLeftElement, Icon } from "@chakra-ui/react";
import { BackgroundColor, Border, BorderColor, ErrorColor, ErrorShadow, Shadow, TextColor } from "config";
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
    direction?: string;
    defaultValue?: string;
    disabled?: boolean;
    error?: any;
    icon?: any;
    iconPadding?: string;
    iconMargin?: string;
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
    direction = "both",
    defaultValue,
    disabled = false,
    error = null,
    rules,
    icon,
    iconPadding = "10",
    iconMargin = "0",
    addon,
    text,
    control,
    onClick = function () { }
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
                    marginInlineStart={"0px !important"}
                    isInvalid={error}
                    isDisabled={disabled}
                    bg='white'
                    zIndex={focus ? '1' : '0'}
                >
                    <InputGroup>
                        {addon && <InputLeftElement children={addon} />}
                        <InputComponent
                            type={type}
                            _focus={{ boxShadow: `${error ? ErrorShadow : Shadow}`, borderColor: `${error ? ErrorColor : BorderColor}` }}
                            _placeholder={{ color: `${error ? ErrorColor : TextColor}`, opacity: 0.5 }}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            borderTopLeftRadius={position === "mid" ? "none" : position === "top" ? (direction === "left" || direction === "both") ? Border : "none" : position == "alone" ? Border : "none"}
                            borderTopRightRadius={position === "mid" ? "none" : position === "top" ? (direction === "right" || direction === "both") ? Border : "none" : position == "alone" ? Border : "none"}
                            borderBottomLeftRadius={position === "mid" ? "none" : position === "bottom" ? (direction === "left" || direction === "both") ? Border : "none" : position == "alone" ? Border : "none"}
                            borderBottomRightRadius={position === "mid" ? "none" : position === "bottom" ? (direction === "right" || direction === "both") ? Border : "none" : position == "alone" ? Border : "none"}
                            background={BackgroundColor}
                            border='1px solid'
                            borderColor={LightenDarkenColor(BackgroundColor, 50)}
                            color={error ? ErrorColor : TextColor}
                            errorBorderColor={ErrorColor}
                            zIndex={error ? 1 : 0}
                            paddingRight={text ? '14' : iconPadding}
                            placeholder={label}
                            name={name}
                            onChange={onChange}
                            value={value}
                            ref={ref}
                        />

                        {(icon || text) && <InputRightElement onClick={onClick} children={icon || text} mr={text ? '4' : iconMargin} />}
                        {error && <InputRightElement onClick={onClick} children={<Icon color='red.500' as={RiErrorWarningLine} />} />}
                    </InputGroup>
                    {/* {!addon && <FormHelperText>{!error && "Fill in the requierd value"}</FormHelperText>}
        <FormErrorMessage>{error && error.message}</FormErrorMessage> */}
                </FormControl>
            )}
        />
    )
};