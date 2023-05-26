import { NextSeo } from 'next-seo'
import React from 'react'
import Sidebar from '../components/organism/Sidebar'

const Layouts = ({
    title, 
    description, 
    children,
    image,
    className,
    navbar,
    sidebar
    }) => {
  return (
    <main className={`${className}`}>
        <NextSeo
            title={title}
            description={description}
            canonical="https://www.imsat.my.id/"
            openGraph={{
            url: 'https://www.imsat.my.id/',
            title: {title},
            description: {description},
            images: [
                {
                    url: {image},
                    width: 800,
                    height: 600,
                    alt: title,
                    type: 'image/jpeg',
                },
                {
                    url: {image},
                    width: 900,
                    height: 800,
                    alt: title,
                    type: 'image/jpeg',
                },
                { url: {image} },
                { url: {image} },
            ],
            siteName: 'imsat.my.id',
            }}
            twitter={{
                handle: '@handle',
                site: '@site',
                cardType: 'summary_large_image',
            }}
        />
        <section>
            {children}
        </section>
    </main>
  )
}

export default Layouts