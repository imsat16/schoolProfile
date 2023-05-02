import { NextSeo } from 'next-seo'
import React, { useEffect, useState } from 'react'

const Layouts = ({
    title, 
    description, 
    children,
    image
    }) => {
  return (
    <>
        <NextSeo
            title={title}
            description={description}
            canonical="https://www.imsat.my.id/"
            openGraph={{
            url: 'https://www.imsat.my.id/',
            title: 'Open Graph Title',
            description: 'Open Graph Description',
            images: [
                {
                    url: image,
                    width: 800,
                    height: 600,
                    alt: title,
                    type: 'image/jpeg',
                },
                {
                    url: image,
                    width: 900,
                    height: 800,
                    alt: title,
                    type: 'image/jpeg',
                },
                { url: image },
                { url: image },
            ],
            siteName: 'imsat.my.id',
            }}
            twitter={{
                handle: '@handle',
                site: '@site',
                cardType: 'summary_large_image',
            }}
        />
        {children}
    </>
  )
}

export default Layouts