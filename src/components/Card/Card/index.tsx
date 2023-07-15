import { Button } from '@/components/Button'
import Image from 'next/image'
import React from 'react'

interface Props {
  title: string
  desc: string
  link?: string
  image: string
  rtl?: boolean
  descClamp? : 'line-clamp-1'| 'line-clamp-2'|'line-clamp-3'|'line-clamp-4'|'line-clamp-5'
}
const Card:React.FC<Props> = ({title, desc, descClamp, link, image, rtl = false}) => {
  return (
    <div dir={rtl?"rtl":"ltr"} className="flex flex-col gap-6 px-6 md:px-20 lg:flex-row">
      <div dir={rtl?"ltr":"lg:rtl"} className="w-full">
      <h2>{title}</h2>
      <p className={`${descClamp} text-justify`}>
        {desc}
      </p>
      <div className="float-right pt-4">
        <Button href={link}>Selengkapnya</Button>
      </div>
      </div>
      <div className="relative aspect-h-1 aspect-w-2 lg:w-3/4 lg:aspect-h-1 lg:aspect-w-4">
        <Image fill src={image} alt="Image" className="object-cover mx-auto rounded-lg"/>
      </div>
    </div>
  )
}

export default Card