import React from 'react'

import Header from '@/components/shared/Header/Navbar'
import Footer from '@/components/shared/Footer/Footer'

import '../../Style'
import CelebratingBiodiversity from './CelebratingBiodiversity'
import { NextSeo } from 'next-seo'


const index = () => {
  return (
    <>
    <NextSeo
                title="Celebrating Biodiversity - Green Foundation"
                description="Unity for Diversity’ was the motto of the People’s Biodiversity Festival held in Hyderabad, Andhra Pradesh, from October 13 to 16, 2012 The program enabled local, regional, national and global networking for policy correction and collaboration"
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'Celebrating Biodiversity - Green Foundation',
                    description: 'Unity for Diversity’ was the motto of the People’s Biodiversity Festival held in Hyderabad, Andhra Pradesh, from October 13 to 16, 2012 The program enabled local, regional, national and global networking for policy correction and collaboration',
                    images: [
                        {
                            url: '/publications/news-and-events/celebrating_biodiversity_img.png',
                            width: 800,
                            height: 600,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        {
                            url: '/publications/news-and-events/celebrating_biodiversity_img.png',
                            width: 900,
                            height: 800,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        { url: '/publications/news-and-events/celebrating_biodiversity_img.png' },
                        { url: '/publications/news-and-events/celebrating_biodiversity_img.png' },
                    ],
                    siteName: 'SiteName',
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />

    <Header />
    <CelebratingBiodiversity /> 
    <Footer />
    </>
  )
}

export default index