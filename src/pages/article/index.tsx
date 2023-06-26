import { Button } from '@/components/Button'
import { ArticleCard } from '@/components/Card'
import Layout from '@/layouts'
import moment from 'moment'
import { InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import * as React from 'react'

interface Article {
  id: number
  author: string
  image: string
  judul: string
  content: string
}
const ArticlePages = ({ data, infoData }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const info = infoData.data
  const prof = React.useRef(info.profile)
  const voc = React.useRef(info.jurusan)
  const school = prof.current
  const jurusan = voc.current
  const article:any = data
  const higlight = article.data[0]
  const reversedData = [...article.data].reverse();
  return (
    <Layout logo={school.logo} vocation={jurusan}>
      <Head>
        <title>{school.nama} | Artikel</title>
        <meta name="description" content={school.deskripsi} />
        <link href="/favicon.png" rel="icon" type={school.logo}></link>
        <meta property="og:image" content={school.logo}></meta>
        <meta property="og:type" content="website" />
        <meta property="og:description" content={school.deskripsi} />
      </Head>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 bg-[#f2f2f2] p-4 lg:px-16 py-8">
        <div className="relative col-span-4 aspect-h-8 aspect-w-16 rounded-xl">
          <img src={higlight.gambar} alt={higlight.judul} className='object-cover rounded-xl' />
          <div className="absolute flex flex-col justify-end rounded-xl bg-gradient-to-bl from-black/30 to-black/70">
            <div className="lg:max-w-[50%] text-white p-8">
              <h2 className='text-xl md:text-3xl lg:text-5xl line-clamp-1 md:line-clamp-2 lg:line-clamp-none'>{higlight.judul}</h2>
              <p className='text-sm md:text-base'>By {higlight.author}</p>
              <p className='text-xs'>{moment.unix(higlight.tgl_dibuat).format("DD MMMM YYYY")}</p>
              <div className="inline-block float-right pt-4 md:float-none ">
                <Link href={`\article/${higlight.slug}`} className='hover:no-underline'>
                  <div className='p-2 px-6 font-medium text-black bg-white rounded-lg'>
                    Read more
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h3 className='col-span-4'>Latest Post</h3>
        <div className="grid w-full grid-cols-2 col-span-4 gap-5 md: md:grid-cols-3 lg:grid-cols-4">
          {article.data.map((ctx:any, idx:any)=>{
            if (idx !== 0) {
              return (
                <ArticleCard
                  key={idx}
                  title={ctx.judul}
                  author={ctx.author}
                  date={ctx.tgl_dibuat}
                  desc={ctx.isi_artikel}
                  href={`\article/${ctx.slug}`}
                  image={ctx?.gambar}
                  // colSpan={colSpan}
                />
              )
            }
            // const colSpan = idx === 0 ? ' md:col-span-2 lg:col-span-4' : 'lg:col-span-1';
          })}
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:8000/api/artikel`);
  const sch = await fetch(`http://localhost:8000/api/sekolah`);
  // const res = await fetch(`http://localhost:3000/dummydata/dummy.json`);
  const data: Article[] = await res.json();
  const infoData: any = await sch.json();
  // Pass data to the page via props
  return { props: { data, infoData } };
}


export default ArticlePages