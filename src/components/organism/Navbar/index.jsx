// import Sidebar from '@/components/organism/sidebar'
import React, { useState } from 'react'
import {HiOutlineMenuAlt2,HiX} from 'react-icons/hi'
import Sidebar from '../Sidebar'

const Navbar = ({
    open = false,
    sidebar = false,
    children
}) => {
  const [op, setOp] = useState(false)
  console.log(op)
  return (
    <nav className='bg-white p-4 sticky top-0 w-full truncate'>
        <div className="container mx-auto flex flex-col lg:flex-row gap-5 justify-between items-center">
            <div className='flex w-full justify-between'>
              {sidebar?
                <button onClick={()=>setOp(!op)} className={`block lg:hidden text-2xl`}><HiOutlineMenuAlt2/></button>
              :""}
              <div className="w-32 h-10 bg-blue-900 rounded-lg font-semibold text-white flex items-center justify-center">Logo</div>
            </div>
            <div className={`w-full lg:w-auto`}>
              {op
                ?
                <div className={`flex flex-col lg:flex-row gap-4 `}>
                  {children}
                </div>
                :
                <div className={`hidden lg:flex gap-4`}>
                  {children}
                </div>
              }
            </div>
        </div>
    </nav>
  )
}

export default Navbar