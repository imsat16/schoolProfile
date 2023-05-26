import React, { useState } from 'react';
import Sidebar from '@/components/organism/sidebar';
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import Navbar from '@/components/organism/Navbar';

const DashboardLayouts = ({
    children,
}) => {
    const [show, setShow] = useState(false);
  return (
    <main className='h-screen max-h-screen fixed w-full'>
        <Navbar open={()=>setShow(!show)}/>
        {/* <nav className='bg-white p-4'>
            <div className="container mx-auto flex justify-between">
                <button onClick={()=>setShow(!show)} className={`block lg:hidden text-2xl`}><HiOutlineMenuAlt2/></button>
                <div className="w-32 h-10 bg-blue-900 rounded-lg font-semibold text-white flex items-center justify-center">Logo</div>
            </div>
        </nav> */}
        <section className='flex h-full'>
            <Sidebar show={show}/>
            {children}
        </section>
    </main>
  )
}

export default DashboardLayouts