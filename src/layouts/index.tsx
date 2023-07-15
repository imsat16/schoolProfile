import Button from '@/components/Button/PrimaryButton'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

interface Props {
   children: React.ReactNode
   logo?: string
   vocation?: any[]
}

const Layout: React.FC<Props> = ({ children, logo, vocation }) => {
   const router = useRouter()
   const getPage = () => {
      const path = router.asPath;
      if (path === "/") {
         return "/";
      } else if (path.startsWith("/article")) {
         return "/article";
      } else if (path.startsWith("/jurusan")) {
         return "/jurusan";
      } else if (path.startsWith("/ppdb")) {
         return "/ppdb";
      } else if (path.startsWith("/contact")) {
         return "/contact";
      } else {
         return "other"; // Halaman selain dashboard dan artikel
      }
   }
   return (
      <main>
         <Head>
            {/* <title>{profile.nama}</title>
            <meta name="description" content={profile.deskripsi} />
            <link href="/favicon.png" rel="icon" type={profile.logo}></link>
            <meta property="og:image" content={profile.logo}></meta>
            <meta property="og:type" content="website" />
            <meta property="og:description" content={profile.deskripsi} /> */}
         </Head>
         <Navbar withLogo={logo} show={false} sidebar>
            <Button
               active={getPage() === "/" ? true : false}
               href={'/'}
            >
               Home
            </Button>
            <Button 
               active={getPage() === "/jurusan" ? true : false}
               href={'/jurusan'}
            >
               Jurusan
            </Button>
            <Button 
               active={getPage() === "/article" ? true : false}
               href={'/article'}
            >
               Article
            </Button>
            <Button 
               active={getPage() === "/ppdb" ? true : false}
               href={'/ppdb'}
            >
                  Pendaftaran
            </Button>
            {/* <Button 
               active={getPage() === "/contact" ? true : false}
               href={'/contact'}
            >
                  Contact
            </Button> */}
            
         </Navbar>
         <section className="static -z-10">
            {children}
         </section>
         <footer className="py-4 bg-gray-200">
            <div className="container grid gap-4 mx-auto md:grid-cols-4">
               <div className="flex flex-col items-center p-4 mb-5">
                  <img src={logo} className='w-[40%]' alt="Footer Logo" />
                  <p className="mt-5 text-xs font-bold text-center">
                     Brilliant Entrepreneur Religious Active Nationality Integrity
                  </p>
                  <div className="flex gap-4 mt-5 text-2xl">
                     <div className="cursor-pointer">
                        <p><FaFacebook/></p>
                     </div>
                     <div className="cursor-pointer">
                        <p><FaInstagram/></p>
                     </div>
                     <div className="cursor-pointer">
                        <p><FaTwitter/></p>
                     </div>
                     <div className="cursor-pointer">
                        <p><FaLinkedin/></p>
                     </div>
                     <div className="cursor-pointer">
                        <p><FaYoutube/></p>
                     </div>
                  </div>
               </div>
               <div className="flex flex-col p-4">
                  <h2 className="mb-5 font-bold">About Us</h2>
                  <ul>
                     <li>Careers</li>
                     <li>Company Profile</li>
                     <li>Computer Based Test</li>
                     <li>Learning Management System</li>
                  </ul>
               </div>
               <div className="flex flex-col p-4">
                  <h2 className="mb-5 font-bold">Vocation</h2>
                  <div>
                     {vocation &&
                        vocation.map((_:any, idx:any)=>{
                           return(
                              <div key={idx} className="">
                                 <Link className='text-black hover:text-black hover:no-underline' href={`/jurusan/${_.slug}`}>{_.nama_jurusan}</Link>
                              </div>
                           )
                        })
                     }
                  </div>
               </div>
               <div className="flex flex-col p-4">
                  <h2 className="mb-5 font-bold">Address</h2>
                  <ul>
                     <li>Jalan Sekolah International No 1-6</li>
                     <li>No 1-6 Bandung</li>
                     <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone-fill" viewBox="0 0 16 16">
                           <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
                        </svg>
                        <span>081222342151</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                           <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                        </svg>
                        <span>example@example.com</span>
                     </div>
                  </ul>
               </div>
            </div>
            <div className="mt-10 text-center">
               <p className="text-sm text-gray-600">
                  &copy; {new Date().getFullYear()} Your Company. All rights reserved.
               </p>
            </div>
         </footer>
      </main>
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

export default Layout