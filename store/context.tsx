import * as react from 'react'
import { Control, FieldValues, useForm } from 'react-hook-form';


export const Context = react.createContext<Control<FieldValues, any> | any>(null);