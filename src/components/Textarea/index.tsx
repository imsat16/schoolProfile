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
    const textareaRef = React.useRef(null);
    const [height, setHeight] = React.useState('auto');

  const autoResize = () => {
    const { current }:any = textareaRef;
    current.style.height = 'auto';
    current.style.height = `${current.scrollHeight}px`;
  };

  React.useEffect(() => {
    const { current }:any = textareaRef;
    current.addEventListener('input', autoResize);

    return () => {
      current.removeEventListener('input', autoResize);
    };
  }, []);
  
  return (
    <div className="form-control">
        <label className="label">
            <span className="label-text">{label}</span>
        </label>
        <textarea
            ref={textareaRef}
            style={{ height }}
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