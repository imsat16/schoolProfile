import React from 'react'
import { TextareaProps } from './TextareaProps'

const Textarea:React.FC<TextareaProps> = ({
    id,
    name,
    label,
    placeholder,
    message,
    onChange,
    onKeyDown,
    value,
    defaultValue,
    disabled
}) => {
  return (
    <div className="form-control">
        <label className="label">
            <span className="label-text">{label}</span>
        </label>
        <textarea
            id={id}
            name={name} 
            className="h-24 border-gray-300 textarea focus:outline-none" 
            placeholder={placeholder}
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={value}
            defaultValue={defaultValue}
            disabled={disabled}
        >
        </textarea>
        <label className="label">
            <span className="label-text-alt">{message}</span>
        </label>
    </div>
  )
}

export default Textarea