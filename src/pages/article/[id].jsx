import Layouts from "@/layouts";
import * as API from "@/pages/api/api"
import * as React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Home() {
    const [data, setData] = React.useState([])

    const router = useRouter()
    const {id} = router.query

    React.useEffect(() => {
      API.getProductsId(id).then(e=>setData(e)).catch(err=>alert(err))
    //   return () => {
    //     second
    //   }
    }, [id])

    
  return (
    <Layouts 
      title={data.title}
      description={data.description}
      image={data.image}
    >
      <>
        <div className="relative aspect-w-16 aspect-h-9">
          <Image 
            src={data.image} 
            alt={data.title} 
            fill
            className="object-cover"
          />
        </div>
        {data.description}
      </>
    </Layouts>
  )
}
