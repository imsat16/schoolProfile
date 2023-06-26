import Image from 'next/image';
import React from 'react'

interface props {
    title: string;
    content: string;
    images: string;
}

const Article:React.FC<props> = ({title, content, images}) => {
  return (
    <div>
        <div className="aspect-w-14 aspect-h-6">
            <Image
                src={images}
                alt={title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='object-cover'
            />
        </div>
        <h3 className='py-4 text-3xl font-medium'>{title}</h3>
        <p>
          {content?.split('\n').map((paragraph:any, index:any) => (
            <span key={index}>
              {paragraph.includes('**')
                ? paragraph.split('**').map((text:any, index:any) =>
                    index % 2 === 0 ? (
                      text
                    ) : (
                      <strong key={index}>{text}</strong>
                    )
                  )
                : paragraph}
              <br />
            </span>
          ))}
        </p>
    </div>
  )
}

export default Article