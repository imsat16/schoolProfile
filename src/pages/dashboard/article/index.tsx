import DashboardLayout from "@/layouts/DashboardLayout"
import axios from "axios";
import moment from "moment";
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link"
import { ReactNode, useEffect, useState } from "react";
import { HiOutlineTrash, HiOutlineViewGrid, HiViewGrid, HiOutlineGlobeAlt } from "react-icons/hi";
import { MdEdit, MdOutlineFormatListBulleted } from "react-icons/md";

const ArticleDashboard = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const article:any = data.data
  
  const [layout, setLayout] = useState(false)
  // useEffect(()=>{
  //   axios.get("/dummydata/dummy.json")
  //   .then(res=>{
  //     setData(res.data)
  //     console.log(res.data)
  //   })
  // },[])
  return (
    <DashboardLayout>
      <Head>
        <title>Article</title>
      </Head>
      <Link className="text-black hover:no-underline" href={'/dashboard/article/create'}>Mulai Menulis</Link>
      
      <div className="flex justify-end gap-3 p-2 text-2xl">
        <button 
          className={layout?"bg-blue-300 rounded-md p-1 text-white":" p-1"} 
          onClick={()=>setLayout(true)}>
            {layout?<HiViewGrid/>:<HiOutlineViewGrid/>}
        </button>
        <button 
          className={layout?" p-1":"bg-blue-300 rounded-md p-1 text-white"} 
          onClick={()=>setLayout(false)}>
            {layout?<MdOutlineFormatListBulleted/>:<MdOutlineFormatListBulleted/>}
        </button>
      </div>
      <div className={`${layout?"grid md:grid-cols-2 lg:grid-cols-3":"flex flex-col"} gap-5 `}>
      {article?.map((ctx:any, idx:any)=>{
        // console.log(data)
        return (
          <div className={`bg-white rounded-lg ${layout?"flex flex-col gap-3":"grid grid-cols-3 lg:w-10/12"} min-h-[10rem]`} key={idx}>
            <div className={`bg-gray-300 ${layout?"aspect-w-6 aspect-h-3":"w-full aspect-w-6 aspect-h-3 rounded-lg"}`}>
              <Image
                src={ctx.gambar}
                alt=""
                fill
                className={`object-cover ${layout?"rounded-t-lg":"rounded-l-lg"}`}
              />
            </div>
            <div className={`relative col-span-2 p-3 flex flex-col gap-3 ${layout?"px-3 py-0":""}`}>
              <h3 className="text-xl leading-none line-clamp-2 md:text-2xl">{ctx.judul}</h3>
              <p className='leading-snug text-justify line-clamp-3'>
                  {ctx.isi_artikel.split('\n').map((paragraph:string, index:any) => (
                    <span key={index}>
                      {paragraph.includes('**')
                        ? paragraph.split('**').map((text:string, index:any) =>
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
                <div className="flex justify-between">
                  <p>
                    {moment.unix(ctx.tgl_dibuat).format("dddd, DD MMMM YYYY")}
                    </p>
                <div className={`${layout?"py-3":"absolute bottom-3 right-2"} flex justify-end gap-2 `}>
                  <button className="flex items-center justify-center w-8 h-8 p-1 text-xl rounded-md hover:text-red-600 hover:bg-red-200"><HiOutlineTrash/></button>
                  <Link title="Edit" href={`\article/edit/${ctx.slug}`} className="text-[#252525]">
                   <button className="flex items-center justify-center w-8 h-8 p-1 text-xl rounded-md hover:text-blue-600 hover:bg-blue-200"><MdEdit/></button>
                  </Link>
                  <Link title="preview" target="_blank" href={`/article/${ctx.slug}`} className="text-[#252525]">
                    <div className="flex items-center justify-center w-8 h-8 p-1 text-xl rounded-md hover:text-gray-600 hover:bg-gray-200"><HiOutlineGlobeAlt/></div>
                  </Link>
                </div>
                </div>
            </div>
          </div>
        )
      })}
      </div>
    </DashboardLayout>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:8000/api/artikel`);
  // const res = await fetch(`http://localhost:3000/dummydata/dummy.json`);
  const data: any = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

export default ArticleDashboard