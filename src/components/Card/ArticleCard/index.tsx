import React from 'react'

const ArticleCard = () => {
  return (
    <div className='p-4 bg-white rounded-lg'>
      <div className="bg-gray-300 rounded-lg aspect-w-16 aspect-h-6">
        gambar
      </div>
      <div className="">
        <h5 className='text-lg line-clamp-2'>ARS Open House (Bincang Orang Tua Tentang ARS University)</h5>
        <span><b>By</b> {"Administator"}</span>
        <p className='line-clamp-3'>
          Bandung, 23 Mei 2023 bertempat di AULA ARS University lantai 5 ARS University mengadakan pertemuan dengan para orang tua mahasiswa baru, pertemuan ini bertujuan untuk perkenalan antara kampus dan orang tua mahasiswa baru.
        </p>
        <div className="flex items-center justify-between pt-3">
          <p>date</p>
          <button className='p-2 text-white bg-black rounded-md'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard