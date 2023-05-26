import Layouts from "../../layouts";
import * as API from "../../pages/api/api"
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Navbar from "../../components/organism/Navbar";

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
      className={'bg-white min-h-screen'}
    >
      <Navbar sidebar>
        <Link href={'/'}>Home</Link>
        <Link href={'/article'}>Article</Link>
        <Link href={'/contact'}>Contact Us</Link>
        <Link href={'/ppdb'}>Pendaftaran</Link>
      </Navbar>
      <section className="container mx-auto my-4 flex flex-col gap-8">
        <div className="flex justify-center items-center w-full rounded-xl text-center bg-[#f2f2f2] p-8">
          <div className="lg:w-1/2 flex flex-col gap-4">
            <p className="text-black/70">WELCOME TO SCHOOL ARTICLE</p>
            <h1>WELCOME TO SCHOOL TO SCHOOL ARTICLE WELCOME TO SCHOOL ARTICLE</h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 p-4">
          <div className="lg:w-1/3 aspect-square relative">
            <Image
              alt=""
              src={'/bg.jpg'}
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="lg:w-2/3 flex flex-col gap-8">
            <p>Writer • Date</p>
            <h1 className="text-5xl lg:w-3/4">Lorem ipsum dolor sit amet consectetur.</h1>
            <p className="lg:w-3/5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nam accusamus aliquam quibusdam nemo molestias quas aliquid. Animi mollitia sunt consequuntur nam enim voluptate a ut tempora nisi quas veniam iste id dolore, eos esse possimus recusandae non! Impedit necessitatibus nemo quas consectetur tenetur commodi beatae, sapiente vero mollitia? Magnam!</p>
            <p>Tag1 • Tag2</p>
            <p className="lg:w-2/3 text-right">Selengkapnya</p>
          </div>
        </div>
      </section>
      <section className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((i,e)=>{
          return (
            <div key={e} className="flex flex-col gap-4">
              <div className="relative aspect-square">
                <Image
                  alt={i.title}
                  src={i.image}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-black/70">Writer • Date</p>
                <h2 className="line-clamp-2">{i.title}</h2>
                <span className="line-clamp-3">{i.description}</span>
                <p className="text-black/70">{i.category}</p>
                <p className="text-black/70 text-right cursor-pointer">Read More</p>
              </div>
            </div>
          )
        })}
        </section>
        {/* {data.map((i)=>{
          return (
            <Link key={i.id} href={`/article/${i.id}`}>
              <div className="">
                {i.title}
              </div rounded-lg>
            </Link>
          )
        })} */}
    </Layouts>
  )
}
