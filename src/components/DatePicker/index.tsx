import React from 'react'
import { InputProps } from './InputProps'
import * as Rsuite from 'rsuite'
import moment from 'moment';

const DatePicker: React.FC<InputProps> = ({
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
    
    const numberInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(type == 'number'){
            const eventCode = event.code.toLowerCase();
            if (!(event.code !== null
            && (eventCode.includes("digit")
                || eventCode.includes("arrow")
                || eventCode.includes("home")
                || eventCode.includes("end")
                || eventCode.includes("backspace") 
                || (eventCode.includes("numpad") && eventCode.length === 7)))
            ) {
            event.preventDefault();
            }
        }
    };
    
    return (
        <div className="w-full min-w-xs form-control">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <Rsuite.DatePicker 
                format="dd MMMM yyyy" 
                className='h-full mt-2' 
                placeholder={placeholder}
                value={value}
                placement='auto'
            />

            {/* <input
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
                onKeyDown={numberInputKeyDown}
                className={`w-full min-w-xs border input border-gray-300 focus:outline-none ${className}`}
            /> */}
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

export default DatePicker