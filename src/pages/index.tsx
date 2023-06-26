import Layout from '@/layouts'
import * as CR from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ArticleCard, Card } from '@/components/Card';
import * as React from "react"
import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';

const Home = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const school = data.data
  const [showAll, setShowAll] = React.useState(false);
  // console.log(school)
  const sp = React.useRef(school.profile)
  const ar = React.useRef(school.artikel)
  const jur = React.useRef(school.jurusan)
  const bnr = React.useRef(school.banner)
  const profile = sp.current
  const artikel = ar.current
  const jurusan = jur.current
  const banner = bnr.current

  const limitedJurusan = showAll ? jurusan : jurusan.slice(0, 3);

  return (
    <Layout logo={profile.logo} vocation={jurusan}>
      <Head>
        <title>{profile.nama}</title>
        <meta name="description" content={profile.deskripsi} />
        <link href="/favicon.png" rel="icon" type={profile.logo}></link>
        <meta property="og:image" content={profile.logo}></meta>
        <meta property="og:type" content="website" />
        <meta property="og:description" content={profile.deskripsi} />
      </Head>
      <CR.Carousel showThumbs={false} autoPlay stopOnHover infiniteLoop interval={3000}>
        {banner.map((_: any, idx: any) => {
          return (
            <div key={idx}>
              <div className="relative aspect-w-3 aspect-h-4 lg:aspect-w-16 lg:aspect-h-7">
                <img src={_.img} alt='adsadsds' className='object-cover' />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="px-4 space-y-4">
                  <h1 className="text-6xl font-bold text-white">{_.deskripsi}</h1>
                  <h4 className="text-3xl font-bold text-yellow-600">{_?.deskripsi}</h4>
                </div>
              </div>
            </div>
          )
        })
        }
      </CR.Carousel>
      <div className="flex flex-col gap-20 py-16">
        <div className="flex flex-col gap-6 px-6 py-10 md:px-20 lg:flex-row">
          <div className="w-full">
            <h2 className="text-yellow-600 ">PROFILE SEKOLAH</h2>
            <h1>{profile.nama}</h1>
            <p className="text-justify md:mb-10">
              {profile.deskripsi}
            </p>
          </div>
          <div className="relative w-full lg:w-2/5">
            <img src={profile.logo} title={`logo ${profile.nama}`} alt="logo" className='object-cover' />
            {/* <Image fill src="/artikel.png" alt="Image" className="object-cover mx-auto rounded-lg" /> */}
          </div>
        </div>
        <div className="flex flex-col gap-6 px-6 py-10 bg-gray-100 md:px-20 lg:flex-row">
          <div className="grid w-full gap-6">
            <h2 className="text-center text-yellow-600">Aktivitas</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {artikel?.map((ctx: any, idx: any) => {
                return (
                  <ArticleCard
                    key={idx}
                    title={ctx.judul}
                    author={ctx.author}
                    date={ctx.tgl_dibuat}
                    desc={ctx.isi_artikel}
                    href={`\article/${ctx.slug}`}
                    image={ctx?.gambar}
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
                title={_.nama_jurusan}
                desc={_.deskripsi}
                image={_.logo}
                link={`/jurusan/${_.slug}`}
              />
            </div>
          );
        })}
        {jurusan > 3 &&
        !showAll && (
          <button onClick={() => setShowAll(true)}>Show All</button>
        )}
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:8000/api/sekolah`);
  // const res = await fetch(`http://localhost:3000/dummydata/dummy.json`);
  const data: any = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

export default Home