import { Card } from '@/components/Card';
import Layout from '@/layouts'
import axios from 'axios';
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import React, { useRef } from 'react'

const Jurusan = ({ data, infoData }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const jurusan:any = data.data
  const info = infoData.data
  const prof = React.useRef(info.profile)
  const school = prof.current
  return (
    <Layout logo={school.logo}>
      <Head>
        <title>{school.nama} | Jurusan</title>
        <meta name="description" content={school.deskripsi} />
        <link href="/favicon.png" rel="icon" type={school.logo}></link>
        <meta property="og:image" content={school.logo}></meta>
        <meta property="og:type" content="website" />
        <meta property="og:description" content={school.deskripsi} />
      </Head>
      <div className="grid gap-10 lg:p-20">
      {jurusan!.map((_: any, index: any) => {
        const rtl = index % 2 === 0 ? true : false;
        return (
          <div key={index} className={`p-4 py-10 rounded-lg ${index % 2 ?"bg-[#f2f2f2]":""}`}>
            <Card
              rtl={rtl}
              title={_.nama_jurusan}
              desc={_.deskripsi}
              image={_.logo}
              link={`\jurusan/${_.slug}`}
            />
          </div>
        );
      })}
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
      props:{
        data: res.data,
        infoData: sch.data
      }
    }
  } catch(error){
    return {
      props: {
        data: null, // Atau berikan nilai default jika permintaan gagal
        infoData: null
      },
    };
  }
}

export default Jurusan