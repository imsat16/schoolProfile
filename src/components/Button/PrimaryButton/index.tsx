import Link from "next/link"
import styles from './Button.module.css'

interface Props {
    href?: string
    children: React.ReactNode,
    className?: string,
    disabled ?: boolean,
    onClick ?: any,
    variants ?: 'primary'|'alert',
}
const Button:React.FC<Props> = ({
    href,
    children,
    className,
    disabled = false,
    onClick,
    variants,
}) => {
  return (
    <>
      {
        href ? 
        <Link href={href} className="text-black hover:no-underline">
          <button className={`${className ? className :`${styles.btn}`} rounded-lg flex items-center gap-2 p-3 w-full font-medium `}>
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