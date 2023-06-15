// import Sidebar from '@/components/organism/sidebar'
import React, { useState } from 'react'
import {HiOutlineMenuAlt2} from 'react-icons/hi'

interface Props {
    open?: boolean,
    sidebar?: boolean,
    children: React.ReactNode
}
const Navbar:React.FC<Props> = ({open, sidebar, children}) => {
  const [op, setOp] = useState(open)
  console.log(op)
  return (
    <nav className='sticky top-0 w-full p-4 truncate bg-white shadow-md'>
        <div className="container flex flex-col items-center justify-between mx-auto lg:flex-row">
            <div className='flex items-center justify-between w-full'>
              {sidebar?
                <button onClick={()=>setOp(!op)} className={`block lg:hidden text-2xl`}><HiOutlineMenuAlt2/></button>
              :""}
              <div className="flex items-center justify-center w-32 h-10 font-semibold text-white bg-blue-900 rounded-lg">Logo</div>
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