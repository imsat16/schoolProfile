import Layouts from "../layouts";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/organism/Navbar";
import Button from "../components/atoms/Button";
import Sidebar from "../components/organism/Sidebar";

const a = [
  "asdasdasdasd adk lkad alk lorem ipsum dolor amet"
]

export default function Home() {
  return (
    <Layouts 
      title={'anjays'}
      description={a}
      className={'min-h-screen flex flex-col'}
    >
        <Navbar sidebar>
          <Button href={'/'}>Home</Button>
          <Button href={'/article'}>Article</Button>
          <Button href={'/ppdb'}>Pendaftaran</Button>
        </Navbar>
        {/* <Sidebar>
          asd
        </Sidebar> */}
      {/* <section className="text-center h-full z-10">
        <div className="h-screen relative">
          <Image
            alt=""
            src={'/bg.jpg'}
            fill
            className="object-cover -z-50"
          />
          <div className="absolute bg-black/30 text-white h-full w-full flex flex-col items-center justify-center gap-4">
            <h1 className="text-8xl">Lorem Ipsum Highschool</h1>
            <h1 className="text-5xl text-orange-300">Lorem Ipsum Highschool</h1>
          </div>
        </div>
        <div className="">
          <h1>Selamat Datang</h1>
          <div>
            <Link href={'/about'} className="hover:text-blue-500/30 font-medium text-blue-500">About</Link> | {" "}
            <Link href={'/article'} className="hover:text-blue-500/30 font-medium text-blue-500">Article</Link> | {" "}
            <Link href={'/contact'} className="hover:text-blue-500/30 font-medium text-blue-500">Contact</Link> |  {" "}
            <Link href={'/dashboard'} className="hover:text-blue-500/30 font-medium text-blue-500">Dashboard</Link>
          </div>
        </div>
      </section> */}
    </Layouts>
  )
}
