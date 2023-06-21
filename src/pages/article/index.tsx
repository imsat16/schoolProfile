import { ArticleCard } from '@/components/Card'
import Layout from '@/layouts'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ArticlePages = () => {

  const [data,setData]:any = React.useState<any[]>([])
  React.useEffect(()=>{
    axios.get("/dummy.json")
    .then(res=>{
      setData(res.data)
      console.log(res.data)
    })
  },[])
  return (
    <Layout>ArticlePages
      <div>
        <div className='text-red-400 box-border h-32 w-32 p-4 border-4 relative'>
        <Image className="object-cover" src={"/banner.png"} alt='' fill/>
        </div>
        <div className='grid-cols-4 grid '>
        {data.map((ctx:any,index:any)=>{
         <div key={index}>
          <ArticleCard/>
         </div>
          
        })}
        
        </div>
      </div>




    </Layout>
  )
}

export default ArticlePages