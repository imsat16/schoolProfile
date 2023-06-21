import Input from '@/components/Input'
import Layout from '@/layouts'
import React from 'react'

const Contact = () => {
  return (
    <Layout>Contact
      <div>
        <div className='bg-#1E1E1E'>gambar
        <p>ingin berbicara dengan kami Jangan ragu 
           untuk menelepon, kirim email, Tweet kami
           atau cukup lengkapi formulir pertanyaan.
        </p>

        </div>

        <form action="">
        <Input />
        </form>
      </div>
    </Layout>
  )
}

export default Contact