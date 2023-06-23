import React from 'react'
import { InputProps } from './InputProps'

const Input: React.FC<InputProps> = ({
    label,
    type,
    placeholder,
    onChange,
    value,
    defaultValue,
    className,
    message,
    disabled,
    name, 
    id, 
    maxLength, 
    minLength,
    tooltip
}) => {
    const [characterCount, setCharacterCount] = React.useState(0);

    React.useEffect(() => {
        setCharacterCount(value?.length);
    }, [value]);
    
    return (
        <div className="w-full min-w-xs form-control">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <input
                id={id}
                minLength={minLength}
                maxLength={maxLength}
                name={name}
                type={type ? type : 'text'}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                defaultValue={defaultValue}
                disabled={disabled}
                className={`w-full min-w-xs border input border-gray-300 focus:outline-none ${className}`}
            />
            <label className="label">
                <span className="text-red-500 label-text-alt">{message}</span>
            </label>
            {maxLength?
            <span className="float-right text-right text-gray-500">{characterCount} / {maxLength}</span>
            :""
            }
        </div>
    )
}

export default Input