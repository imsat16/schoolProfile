import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  image: string
  title: string
  author:string
  desc: string
  date:string
  href: string
}
const ArticleCard:React.FC<Props> = ({title,author, image, desc, date, href}) => {
  return (
    <div className='p-4 bg-white rounded-lg'>
      <div className="bg-gray-300 rounded-lg aspect-w-8 aspect-h-5">
        <Image 
          src={image}
          alt=''
          fill
          className='object-cover rounded-t-lg'
        />
      </div>
      <div className="">
        <h5 className='text-lg line-clamp-2'>{title}</h5>
        <span><b>By</b> {author}</span>
        <p>
          {desc.split('\n').map((paragraph:string, index:any) => (
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
        <div className="flex items-center justify-between pt-3">
          <p>{date}</p>
          <Link href={href} className='p-2 text-white bg-black rounded-md'>Read More</Link>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard