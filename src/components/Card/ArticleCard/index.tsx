import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  image: string
  title: string
  author:string
  desc: string
  date: number
  href: string
  colSpan?: string
}
const ArticleCard:React.FC<Props> = ({title,author, image, desc, date, href,colSpan}) => {
  const gambar = image
  const [imageSrc, setImageSrc] = React.useState('');


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
  return (
    <div className={`p-4 bg-white rounded-lg ${colSpan} `}>
      <div className="relative bg-gray-300 rounded-lg aspect-w-4 aspect-h-3">
        {imageSrc && <img src={imageSrc} className='object-cover rounded-lg' alt="Gambar Artikel" />}
      </div>
      <div className="">
        <h5 className='text-base md:text-lg line-clamp-2'>{title}</h5>
        <span className='text-xs md:text-base'><b>By</b> {author}</span>
        <p className='text-xs line-clamp-2 lg:line-clamp-3 md:text-base'>
          {desc?.split('\n').map((paragraph:string, index:any) => (
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
        <div className="flex flex-col items-center justify-between gap-3 pt-3 md:flex-row">
          <p className='w-full text-start'>{moment.unix(date).format("DD MMMM yyyy")}</p>
          <Link href={`/${href}`} className='w-full p-2 text-center text-white bg-black rounded-md hover:bg-black/75 hover:no-underline hover:text-white'>Read More</Link>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard