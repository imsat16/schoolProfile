import Button from '@/components/Button/PrimaryButton'
import Navbar from '@/components/Navbar'
import React from 'react'

interface Props {
  children : React.ReactNode
}
const Layout:React.FC<Props> = ({children}) => {
  const [open, setOpen] = React.useState<boolean>()
  return (
    <main>
      <Navbar open={open} sidebar>
        <Button href={'/'}>Home</Button>
        <Button href={'/article'}>Article</Button>
        <Button href={'/ppdb'}>Pendaftaran</Button>
      </Navbar>
      <section className="">
        {children}
      </section>
    </main>
  )
}

export default Layout