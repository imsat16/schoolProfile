import Layouts from "@/layouts";
import * as API from "API/api"
import Link from "next/link";
import * as React from "react";

const a = [
  "asdasdasdasd adk lkad alk lorem ipsum dolor amet"
]

export default function Home() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    API.getProducts().then(e=>setData(e)).catch(err=>alert(err))
  //   return () => {
  //     second
  //   }
  }, [])

  console.log(data)
  
  return (
    <Layouts 
      title={"Artikel"}
      description={"Artikel dari blablabla"}
    >
        {data.map((i)=>{
          return (
            <Link key={i.id} href={`/article/${i.id}`}>
              <div className="">
                {i.title}
              </div>
            </Link>
          )
        })}
    </Layouts>
  )
}
