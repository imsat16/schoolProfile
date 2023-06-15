import React from 'react'

const Sidebar = ({children}:{children:React.ReactNode}) => {
  return (
    <aside className='flex justify-between gap-3 p-4 bg-white md:justify-normal md:flex-col md:min-h-screen'>
        {children}
    </aside>
  )
}

export default Sidebar