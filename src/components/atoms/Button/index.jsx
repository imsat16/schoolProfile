import React from 'react'
import Link from 'next/link'
import styles from './Button.module.css'

const Button = ({
    href,
    children,
    className,
    disabled = false,
    onClick,
    variants = 'primary'|'alert',
    ...rest
}) => {
  return (
    <>
      {
        href ? 
        <Link href={href}>
          <button {...rest} className={`${className ? className :`${styles.btn}`} rounded-lg flex items-center gap-2 p-3 w-full font-medium `}>
            {children}
          </button>
        </Link>
        :
        <button 
          className={`${styles.btn} ${variants?styles[variants]:styles.primary} ${href?styles.link:''}`}
          // className={`${className ? className :`bg-blue-700/90 text-white`} rounded-lg flex items-center gap-2 p-3 w-full font-medium `}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      }
    </>
  )
}

export default Button