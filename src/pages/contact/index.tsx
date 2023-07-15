import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import Layout from '@/layouts'
import axios from 'axios'
import { InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import React from 'react'

const Contact = ({ data, infoData }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const info = infoData.data
  const prof = React.useRef(info.profile)
  const school = prof.current
  const jur = React.useRef(info.jurusan)
  const jurusan = jur.current
  
  return (
    <Layout logo={school.logo} vocation={jurusan}>
      <Head>
        <title>{school.nama} | Contact</title>
        <meta name="description" content={school.deskripsi} />
        <link href={school.logo} rel="icon" type="image/png"></link>
        {/* <link href="/favicon.png" rel="icon" type={school.logo}></link> */}
        <meta property="og:image" content={school.logo}></meta>
        <meta property="og:type" content="website" />
        <meta property="og:description" content={school.deskripsi} />
      </Head>
      <div className='flex flex-col gap-10 p-20 '>
        <div className="flex justify-center">
          <h3>Pertanyaan atau Kerjasama</h3>
        </div>
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="order-1 lg:px-4 lg:w-1/2 lg:order-none">
            <div className="bg-[#1E1E1E] text-white p-4 rounded-lg shadow-md">
                <p className="mb-2 text-xl font-bold">ingin berbicara dengan kami Jangan ragu untuk menelepon, kirim email, Tweet kami atau cukup lengkapi formulir pertanyaan.</p>
                <ul className="list-inside ">
                    <li className="mb-2">Nomor Kantor: <span className="font-bold">+1234567890</span></li>
                    <li className="mb-2">Twitter: <a href="https://twitter.com/example" className="text-blue-500">twitter.com/example</a></li>
                    <li className="mb-2">Nomor WhatsApp: <span className="font-bold">+1234567890</span></li>
                    <li className="mb-2">Email: <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a></li>
                </ul>
            </div>
          </div>

        <form id="contactForm" className="lg:w-1/2 ">
          <div className="mb-4">
            <label id="name" className="block mb-2 text-sm font-bold text-gray-700">Nama:</label>
            <Input type="text" className="form-input"></Input>
          </div>
          <div className="mb-4">
            <label id="name" className="block mb-2 text-sm font-bold text-gray-700">Email:</label>
            <Input type="email" className="form-input"></Input>
          </div>
          <div className="mb-4">
            <label id="name" className="block mb-2 text-sm font-bold text-gray-700">No.Hp:</label>
            <Input type="number" className="form-input"></Input>
          </div>
          <div className="mb-4">
            <label id="name" className="block mb-2 text-sm font-bold text-gray-700">Pesan:</label>
            <Textarea/>
          </div>
          <div>
            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Kirim</button>
            </div>
        </form>
          
        </div>
    </div>

    </Layout>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  try {
    const res = await axios.get(`http://localhost:8000/api/jurusan`);
    const sch = await axios.get(`http://localhost:8000/api/sekolah`);

    return {
      props: {
        data: res.data,
        infoData: sch.data
      }
    }
  } catch (error) {
    return {
      props: {
        data: null, // Atau berikan nilai default jika permintaan gagal
        infoData: null
      },
    };
  }
}

export default Contact