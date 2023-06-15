import React, { ChangeEvent, KeyboardEvent } from "react"

export type TextareaProps = {
    id?: string
    name?: string
    label?: string
    placeholder?: string
    onChange? : (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
    value?: any
    defaultValue?:any
    className?: string
    message?: string
    disabled?: boolean
}
