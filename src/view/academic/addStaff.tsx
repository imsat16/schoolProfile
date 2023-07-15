import Input from '@/components/Input'
import React from 'react'

type addStaff = {
    nama?: string
    email?: string
    no_telp?: string
    jabatan?: string
    foto?: FormData | undefined
    status?: string
}

const AddStaffView:React.FC<addStaff> = ({nama, email, no_telp, jabatan, foto, status}) => {
  const [staffName, setStaffName] = React.useState(nama);

  return (
    <div>
        <Input
            label='Nama'
            value={nama}
            onChange={(e) => setStaffName(e.target.value)}
            minLength={12}
            maxLength={200}
        />
        <Input
            label='email'
        />
        <Input
            label='no_telp'
        />
        <Input
            label='jabatan'
        />
    </div>
  )
}

export default AddStaffView