import Link from "next/link"
import styles from './Button.module.css'

interface Props {
    href?: string
    children: React.ReactNode,
    className?: string,
    disabled ?: boolean,
    onClick ?: any,
    active?:boolean
    variants ?: 'primary'|'alert',
}
const Button:React.FC<Props> = ({
    href,
    children,
    className,
    disabled = false,
    onClick,
    active,
    variants,
}) => {
  return (
    <>
      {
        href ? 
        <Link href={href} className={`text-black hover:no-underline`}>
          <button className={`${className ? className :`${styles.btn}`} ${active?"text-blue-600":"text-gray-500"} hover:text-blue-600 rounded-lg flex items-center gap-2 p-3 w-full`}>
            <p className="font-bold">{children}</p>
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