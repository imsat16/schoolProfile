import { ChangeEvent } from "react"

export type InputProps = {
    id?: string
    label?: string
    type?: 'text' | 'password' | 'number' | 'date' | 'file'
    placeholder?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: any | string
    defaultValue?: any | string
    className?: string
    message?: string
    disabled?: boolean
    name?: string
    maxLength?: number
    minLength?: number
    tooltip?: string
}
