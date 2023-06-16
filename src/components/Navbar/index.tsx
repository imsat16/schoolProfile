// import Sidebar from '@/components/organism/sidebar'
import Image from 'next/image'
import React, { useState } from 'react'
import {HiOutlineMenuAlt2} from 'react-icons/hi'

interface Props {
    show?: boolean,
    sidebar?: boolean,
    children: React.ReactNode,
    withLogo?:string
}
const Navbar:React.FC<Props> = ({show, sidebar, children, withLogo}) => {
  const [op, setOp] = useState(show)
  return (
    <nav className='sticky top-0 z-10 w-full p-4 truncate bg-white shadow-md'>
        <div className="container flex flex-col items-center justify-between mx-auto lg:flex-row">
            <div className='flex items-center justify-between w-full'>
              {sidebar?
                <button onClick={()=>setOp(!op)} className={`block lg:hidden text-2xl`}><HiOutlineMenuAlt2/></button>
              :""}
              {withLogo
              ?
                <div className="relative flex items-center justify-center w-32 h-10 font-semibold rounded-lg">
                  <Image src={withLogo} fill className='object-contain' alt=""/>
                </div>
              :
                <div className="flex items-center justify-center w-32 h-10 font-semibold text-white bg-blue-900 rounded-lg">Logo</div>
              }
            </div>
            <div className={`w-full lg:w-auto`}>
              {op
                ?
                <div className={`flex flex-col lg:flex-row gap-4 pt-5 md:p-0`}>
                  {children}
                </div>
                :
                <div className={`hidden lg:flex gap-4 `}>
                  {children}
                </div>
              }
            </div>
        </div>
    </nav>
  )
}

export default Navbar