import Layout from '@/layouts'
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'

interface MyPageProps {
  data: any; // Ganti 'any' dengan tipe data yang sesuai
  infoData: any
}

const DetailJurusan = ({data, infoData}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const dt = data.data
  const info = infoData.data
  const prof = React.useRef(info.profile)
  const school = prof.current

  console.log(school)
  return (
    <Layout logo={school.logo}>
      <Head>
        <title>{dt.nama_jurusan} | {school.nama}</title>
        <meta name="description" content={dt.deskripsi} />
        <link href="/favicon.png" rel="icon" type={dt.logo}></link>
        <meta property="og:image" content={dt.logo}></meta>
        <meta property="og:type" content="website" />
        <meta property="og:description" content={dt.deskripsi} />
      </Head>
      <main className="">
      <div className="relative col-span-4 aspect-h-8 aspect-w-16">
          <img src={dt.logo} alt={dt.judul} className='object-cover' />
          <div className="absolute flex flex-col items-center justify-center text-white bg-gradient-to-bl from-black/30 to-black/70">
            <h1 className='text-2xl md:text-4xl lg:text-6xl line-clamp-2 lg:line-clamp-none'>{dt.nama_jurusan}</h1>
          </div>
        </div>
        <div className="p-10">
          <div>
            <h2>{dt.nama_jurusan}</h2>
            <p className='md:text-lg'>{dt.deskripsi}</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<MyPageProps> = async (context) => {
  const { slug } = context.query; // Mendapatkan nilai slug dari URL

  try {
    const response = await axios.get(`http://localhost:8000/api/jurusan/${slug}`);
    const sch = await axios.get(`http://localhost:8000/api/sekolah`);
    
    return {
      props: {
        data: response.data,
        infoData: sch.data
      },
    };
  } catch (error) {
    // Tangani kesalahan jika permintaan gagal
    console.error(error);
    return {
      props: {
        data: null, // Atau berikan nilai default jika permintaan gagal
        infoData: null
      },
    };
  }
};

export default DetailJurusan