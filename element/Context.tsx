import React, { createContext } from 'react'
import { Control, FieldValues, useForm } from 'react-hook-form';

export const CurrentContext = React.createContext<Control<FieldValues, any> | any>(null);

interface ContextProps {
    children: React.ReactNode;
    control: Control<FieldValues, any>
}

export const Context: React.FC<ContextProps> = ({ children, control }) => {
    return (
        <CurrentContext.Provider value={control}>
            {children}
        </CurrentContext.Provider>
    )
}
