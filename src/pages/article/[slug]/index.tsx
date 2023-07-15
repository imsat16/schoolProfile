import { ArticleCard } from '@/components/Card'
import Layout from '@/layouts'
import axios from 'axios'
import moment from 'moment'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface MyPageProps {
  data: any; // Ganti 'any' dengan tipe data yang sesuai
  infoData: any;
}

// const DetailArticle = () => {
const DetailArticle = ({ data, infoData }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const article: any = data.data
  const [imageSrc, setImageSrc] = React.useState('');
  const [articleList, setArticleList]:any = React.useState([]);

  const gambar = article.gambar

  const info = infoData.data
  const prof = React.useRef(info.profile)
  const school = prof.current
  

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/artikel');
        setArticleList(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);


  React.useEffect(() => {
    const fetchImage = async () => {
      try {
        // Mengambil gambar sebagai Blob
        const response = await fetch(gambar);
        const blob = await response.blob();

        // Mengonversi Blob menjadi URL gambar
        const imageURL = URL.createObjectURL(blob);
        setImageSrc(imageURL);

        // Membersihkan URL saat komponen tidak lagi digunakan
        return () => {
          URL.revokeObjectURL(imageURL);
        };
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, [gambar]);

  console.log(articleList)


  const [listArticle, setListArticle]: any = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/artikel`);
        setListArticle(response.data.data);
        // console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // console.log(listArticle)

  return (
    <Layout logo={school.logo}>
      <Head>
        <title>{article.judul}</title>
        <meta name="description" content={article.isi_artikel} />
        <link href={school.logo} rel="icon" type="image/png"></link>
      </Head>
      <div className=" bg-[#f2f2f2] md:py-8 flex justify-center items-center ">
        <div className="container flex flex-col justify-center min-h-screen gap-4 lg:flex-row">
          <div className="flex-1">
            <div className="relative aspect-h-8 aspect-w-16">
              {imageSrc && <img src={imageSrc} className='object-cover md:rounded-xl' alt="Gambar Artikel" />}
            </div>
            <div className="p-4 md:px-0 ">
              <h2>{article.judul}</h2>
                <p className='font-light'>Di posting oleh <strong>{article.author}</strong>, {moment.unix(article.tgl_dibuat).format("DD MMMM yyyy")}</p>
              <p className='text-lg'>
                {article.isi_artikel?.split('\n').map((paragraph: string, index: any) => (
                  <span key={index}>
                    {paragraph.includes('**')
                      ? paragraph.split('**').map((text: string, index: any) =>
                        index % 2 === 0 ? (
                          text
                        ) : (
                          <strong key={index}>{text}</strong>
                        )
                      )
                      : paragraph}
                    <br />
                  </span>
                ))
                }
              </p>
            </div>
          </div> 

          <div className="flex flex-col gap-3 px-4 w-full lg:w-[25%]">
            <h3>
              Latest Article
            </h3>
            <div className="grid flex-col grid-cols-2 gap-5 lg:flex ">
              {articleList?.slice(0,3).map((ctx: any, idx: any) => {
                return (
                  <ArticleCard
                    key={idx}
                    author={ctx.author}
                    date={ctx.tgl_dibuat}
                    desc={ctx.isi_artikel}
                    image={ctx.gambar}
                    href={`\article/${ctx.slug}`}
                    title={ctx.judul}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<MyPageProps> = async (context) => {
  const { slug } = context.query; // Mendapatkan nilai slug dari URL

  try {
    const response = await axios.get(`http://localhost:8000/api/artikel/slug/${slug}`);
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
export default DetailArticle