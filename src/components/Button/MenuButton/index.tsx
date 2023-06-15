import Link from "next/link"
import styles from "./button.module.css"

interface Props {
    icons : React.ReactElement<any>;
    children : React.ReactNode | React.ReactNode[];
    href? : string;
    active? : boolean;
    onClick? : ()=>Promise<void>
}

const MenuButton:React.FC<Props> = ({href, icons, active, children}) => {
    return (
      href ?
          <Link href={href} className={`${href?'block':'hidden'} hover:no-underline`}>
              <div className={`${active ? "bg-[#81CBFD] " : "bg-white"} ${styles.btn} flex items-center gap-2 hover:bg-[#81CBFD] p-2 md:pr-14 rounded-md`}>
                  <div className={`${active ? "text-[#1D9BF0]" : "text-[#C2BDBD] hover:text-white"} text-2xl bg-white border-0 btn btn-sm btn-square`}>
                      {icons}
                  </div>
                  <p className={`${active ? "text-white active" : "text-[#C2BDBD]"} text-lg font-medium hidden md:block`}>
                      {children}
                  </p>
                  {/* <div className="text-lg font-medium ">{children}</div> */}
              </div>
          </Link>
      : (
          <button className="flex items-center gap-2 bg-[#81CBFD] p-2 pr-6 text-white rounded-md">
              <div className="text-2xl bg-white border-0 btn btn-sm btn-square text-[#1D9BF0]">
                  {icons}
              </div>
              <div className="text-lg font-medium">{children}</div>
          </button>
      )
    )
  }

  export default MenuButton