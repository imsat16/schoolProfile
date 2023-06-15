
import { useState } from 'react';
import Link from 'next/link';


const Navbar = () => {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const toggleMobileMenu = () => {
setIsMobileMenuOpen(!isMobileMenuOpen);
};
return (
<div>
   <nav className="bg-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
               <img src="/mvp.png" width={168}
                  height={50}
                  className="w-168 h-50"/>
            </div>
            <div className="hidden md:block">
               <div className="ml-4 flex items-center space-x-4">
                  <div className="relative group">
                     <button className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                     Aktifitas
                     </button>
                     <div className="absolute z-10 hidden bg-white text-gray-900 py-2 mt-2 rounded-md group-hover:block">
                        <a href="#" className="block px-4 py-2 min-w-[120px]">BKK</a>
                        <a href="#" className="block px-4 py-2 min-w-[120px]">E-Learning</a>
                        <a href="#" className="block px-4 py-2 min-w-[120px]">Kesiswaan</a>
                        <a href="#" className="block px-4 py-2 min-w-[120px]">Kurikulum</a>
                     </div>
                  </div>
                  <div className="relative group">
                     <button className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                     Jurusan
                     </button>
                     <div className="absolute z-10 hidden bg-white text-gray-900 py-2 mt-2 rounded-md group-hover:block min-w-max">
                        <a href="#" className="block px-4 py-2">Teknik Komputer dan Jaringan</a>
                        <a href="#" className="block px-4 py-2">Rekayasa Perangkat Lunak</a>
                        <a href="#" className="block px-4 py-2">Perhotelan</a>
                        <a href="#" className="block px-4 py-2">Farmasi Klinis dan Komunitas</a>
                        <a href="#" className="block px-4 py-2">Tata Boga</a>
                        <a href="#" className="block px-4 py-2">Otomatisasi dan Tata Kelola Perkantoran</a>
                        <a href="#" className="block px-4 py-2">Akuntansi dan Keuangan Lembaga</a>
                        <a href="#" className="block px-4 py-2">Teknik dan Bisnis Sepeda Motor</a>
                        <a href="#" className="block px-4 py-2">Perhotelan</a>
                     </div>
                  </div>
                  <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                  PPDB 2023
                  </a>
                  <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                  Contact Us
                  </a>
                  <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                  Online Register
                  </a>
               </div>
            </div>
            <div className="-mr-2 flex md:hidden">
               <button onClick={toggleMobileMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:text-white">
                  <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
               </button>
            </div>
         </div>
      </div>
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
         <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">
         Home
         </a>
         <div className="relative group">
            <button className="text-white block px-3 py-2 rounded-md text-base font-medium">
            Aktifitas
            </button>
            <div className="absolute z-10 hidden bg-white text-gray-900 py-2 mt-2 rounded-md group-hover:block">
               <a href="#" className="block px-4 py-2 min-w-[120px]">BKK</a>
               <a href="#" className="block px-4 py-2 min-w-[120px]">E-Learning</a>
               <a href="#" className="block px-4 py-2 min-w-[120px]">Kesiswaan</a>
               <a href="#" className="block px-4 py-2 min-w-[120px]">Kurikulum</a>
            </div>
         </div>
         <div className="relative group">
            <button className="text-white block px-3 py-2 rounded-md text-base font-medium">
            Jurusan
            </button>
            <div className="absolute z-10 hidden bg-white text-gray-900 py-2 mt-2 rounded-md group-hover:block">
               <a href="#" className="block px-4 py-2">Teknik Komputer dan Jaringan</a>
               <a href="#" className="block px-4 py-2">Rekayasa Perangkat Lunak</a>
               <a href="#" className="block px-4 py-2">Perhotelan</a>
               <a href="#" className="block px-4 py-2">Farmasi Klinis dan Komunitas</a>
               <a href="#" className="block px-4 py-2">Tata Boga</a>
               <a href="#" className="block px-4 py-2">Otomatisasi dan Tata Kelola Perkantoran</a>
               <a href="#" className="block px-4 py-2">Akuntansi dan Keuangan Lembaga</a>
               <a href="#" className="block px-4 py-2">Teknik dan Bisnis Sepeda Motor</a>
               <a href="#" className="block px-4 py-2">Perhotelan</a>
            </div>
         </div>
         <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">
         PPDB 2023
         </a>
         <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">
         Contact Us
         </a>
         <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">
         Online Register
         </a>
      </div>
</div>
</nav>

</div>
);
};
export default Navbar;