import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import Layout from '@/layouts'
import React from 'react'

const Contact = () => {
  return (
    <Layout>
      <div className='flex gap-10 p-20'>
        <div className="w-1/2 px-4">
          <div className="bg-black text-white p-4 rounded-lg shadow-md">
              <p className="text-xl font-bold mb-2">ingin berbicara dengan kami Jangan ragu untuk menelepon, kirim email, Tweet kami atau cukup lengkapi formulir pertanyaan.</p>
              <ul className="list-disc list-inside">
                  <li className="mb-2">Nomor Kantor: <span className="font-bold">+1234567890</span></li>
                  <li className="mb-2">Twitter: <a href="https://twitter.com/example" className="text-blue-500">twitter.com/example</a></li>
                  <li className="mb-2">Nomor WhatsApp: <span className="font-bold">+1234567890</span></li>
                  <li className="mb-2">Email: <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a></li>
              </ul>
          </div>
        </div>

      <form id="contactForm" className="w-1/2">
        <div className="mb-4">
          <label id="name" className="block text-gray-700 text-sm font-bold mb-2">Nama:</label>
          <Input type="text" className="form-input"></Input>
        </div>
        <div className="mb-4">
          <label id="name" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <Input type="email" className="form-input"></Input>
        </div>
        <div className="mb-4">
          <label id="name" className="block text-gray-700 text-sm font-bold mb-2">No.Hp:</label>
          <Input type="numbe" className="form-input"></Input>
        </div>
        <div className="mb-4">
          <label id="name" className="block text-gray-700 text-sm font-bold mb-2">Pesan:</label>
          <Textarea/>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Kirim</button>
          </div>
      </form>
    </div>

    </Layout>
  )
}

export default Contact