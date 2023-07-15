import DashboardLayout from '@/layouts/DashboardLayout'
import { useRouter } from 'next/router'
import React from 'react'

const DashboardJurusan = () => {
    const router = useRouter()
  return (
    <DashboardLayout>
        <button
            onClick={()=>router.replace('/dashboard/academic')}
        >Kembali</button>
    </DashboardLayout>
  )
}

export default DashboardJurusan