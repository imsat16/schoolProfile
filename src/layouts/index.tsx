import Button from '@/components/Button/PrimaryButton'
import Navbar from '@/components/Navbar'
import React from 'react'

interface Props {
  children : React.ReactNode
}
const Layout:React.FC<Props> = ({children}) => {
  return (
    <main>
      <Navbar show sidebar>
        <Button href={'/'}>Home</Button>
        <Button href={'/article'}>Article</Button>
        <Button href={'/ppdb'}>Pendaftaran</Button>
        <Button href={'/contact'}>Contact</Button>
      </Navbar>
      <section className="absolute top-20 -z-10">
        {children}
      </section>
    </main>
  )
}

export default Layout