import Image from 'next/image'
import Layout from '@/layouts'
import * as CR from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ArticleCard, Card } from '@/components/Card';
import * as React from "react"
import axios from 'axios';
import Head from 'next/head';
export default function Home() {
  const [jurusan, setJurusan]:any = React.useState([])
  const [showAll, setShowAll] = React.useState(false);
  const limitedJurusan = showAll ? jurusan : jurusan.slice(0, 3);
  const [data, setData]=React.useState([])
  React.useEffect(() => {
    axios.get("/dummydata/jurusan.json")
    .then(
      res=>{
        setJurusan(res.data)
        console.log(res.data)
      }
    )
    axios.get("/dummydata/dummy.json")
    .then(
      res=>{
        setData(res.data)
        console.log(res.data)
      }
    )
  }, [])
  
  return (
    <Layout>
      <Head>
        <title>SMK MVP ARS</title>
        <meta name="description" content="SMK MVP ARS Internasional adalah salah satu sekolah yang mempunyai makna Sekolah Menengah Kejuruan Multi Vocational Platform. Sekolah ini telah berdiri sejak tahun 2009 di bawah naungan Yayasan Graha Bina Pendidikan Internasional dan beralamat di Jalan Sekolah Internasional No. 1-6 Bandung. Sekolah ini memiliki program GO DIGITAL ! yang mana sekolah ini akan berkembang menjadi sekolah digital dengan mengembangkan slogan B.E.R.A.N.I walaupun Sekolah sudah memiliki Sistem informasi teknologi sebelumnya terbukti dengan adanya pembelajaran secara online. Selain itu sekolah ini juga menawarkan berbagai kompetensi keahlian atau jurusan bagi peserta didiknya." />
        <link href="/favicon.png" rel="icon" type="image/png"></link>
        <meta property= "og:image" content = "ogimg.png"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:description" content="SMK MVP ARS Internasional adalah salah satu sekolah yang mempunyai makna Sekolah Menengah Kejuruan Multi Vocational Platform. Sekolah ini telah berdiri sejak tahun 2009 di bawah naungan Yayasan Graha Bina Pendidikan Internasional dan beralamat di Jalan Sekolah Internasional No. 1-6 Bandung. Sekolah ini memiliki program GO DIGITAL ! yang mana sekolah ini akan berkembang menjadi sekolah digital dengan mengembangkan slogan B.E.R.A.N.I walaupun Sekolah sudah memiliki Sistem informasi teknologi sebelumnya terbukti dengan adanya pembelajaran secara online. Selain itu sekolah ini juga menawarkan berbagai kompetensi keahlian atau jurusan bagi peserta didiknya." />
      </Head>
      <CR.Carousel showThumbs={false} autoPlay stopOnHover infiniteLoop interval={3000}>
        <div>
          {/* <img src="/wisuda1.jpg" alt="Carousel 1" className="darken-image" /> */}
          <div className="relative aspect-w-3 aspect-h-4 lg:aspect-w-16 lg:aspect-h-7">
            <Image src={"/wisuda1.jpg"} alt='adsadsds' fill className='object-cover' />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="px-4 space-y-4">
              <h1 className="text-6xl font-bold text-white">SMK MVP ARS</h1>
              <h4 className="text-3xl font-bold text-yellow-600">Brilliant, Entrepreneur, Religious, Active, Nationality, Integrity</h4>
            </div>
          </div>
        </div>
        <div>
          {/* <img src="/wisuda1.jpg" alt="Carousel 1" className="darken-image" /> */}
          <div className="relative aspect-w-3 aspect-h-4 lg:aspect-w-16 lg:aspect-h-7">
            <Image src={"/wisuda2.jpg"} alt='adsadsds' fill className='object-cover' />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="px-4 space-y-4">
              <h1 className="text-6xl font-bold text-white">SMK MVP ARS</h1>
              <h4 className="text-3xl font-bold text-yellow-600">Brilliant, Entrepreneur, Religious, Active, Nationality, Integrity</h4>
            </div>
          </div>
        </div>
        <div>
          {/* <img src="/wisuda1.jpg" alt="Carousel 1" className="darken-image" /> */}
          <div className="relative aspect-w-3 aspect-h-4 lg:aspect-w-16 lg:aspect-h-7">
            <Image src={"/wisuda3.jpg"} alt='adsadsds' fill className='object-cover' />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="px-4 space-y-4">
              <h1 className="text-6xl font-bold text-white">SMK MVP ARS</h1>
              <h4 className="text-3xl font-bold text-yellow-600">Brilliant, Entrepreneur, Religious, Active, Nationality, Integrity</h4>
            </div>
          </div>
        </div>
      </CR.Carousel>
      <div className="flex flex-col gap-20 py-16">
        <div className="flex flex-col gap-6 px-6 py-10 md:px-20 lg:flex-row">
          <div className="w-full">
            <h2 className="text-yellow-600 ">PROFILE SEKOLAH</h2>
            <h1>SMK MVP ARS Internasional</h1>
            <p className="text-justify md:mb-10">
              SMK MVP ARS Internasional adalah salah satu sekolah yang mempunyai makna Sekolah Menengah Kejuruan Multi Vocational Platform. Sekolah ini telah berdiri sejak tahun 2009 di bawah naungan Yayasan Graha Bina Pendidikan Internasional dan beralamat di Jalan Sekolah Internasional No. 1-6 Bandung. Sekolah ini memiliki program GO DIGITAL! yang mana sekolah ini akan berkembang menjadi sekolah digital dengan mengembangkan slogan B.E.R.A.N.I walaupun Sekolah sudah memiliki Sistem informasi teknologi sebelumnya terbukti dengan adanya pembelajaran secara online. Selain itu sekolah ini juga menawarkan berbagai kompetensi keahlian atau jurusan bagi peserta didiknya.
            </p>
          </div>
          <div className="relative lg:w-3/4">
            <Image fill src="/artikel.png" alt="Image" className="object-cover mx-auto rounded-lg"/>
          </div>
        </div>
        <div className="flex flex-col gap-6 px-6 py-10 bg-gray-100 md:px-20 lg:flex-row">
          <div className="grid w-full gap-6">
            <h2 className="text-center text-yellow-600">Aktivitas</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {data?.map((ctx:any, idx:any)=>{
                return(
                  <ArticleCard 
                    key={idx}
                    title={ctx.title}
                    author={ctx.author}
                    date='16 January 2003'
                    desc={ctx.content}
                    href=''
                    image={ctx.image}
                  />
                )
              })}
            </div>
          </div>
        </div>
        {limitedJurusan.map((_: any, index: any) => {
        const rtl = index % 2 === 0 ? true : false;
        return (
          <div key={index}>
            <Card
              rtl={rtl}
              title={_.title}
              desc={_.desc}
              image={_.image}
              link={_.slug}
            />
          </div>
        );
      })}
      {!showAll && (
        <button onClick={() => setShowAll(true)}>Show All</button>
      )}
      </div>
    </Layout>
  )
}
