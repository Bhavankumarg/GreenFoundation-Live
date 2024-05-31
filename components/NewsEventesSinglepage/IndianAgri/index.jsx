import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import IndianAgri from './IndianAgri'

import '../../Style'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>
         <NextSeo
                title="KISAN 2015 – Indian Agriculture Trade Fair - Green Foundation"
                description="GREEN Foundation and Janadhanya Farmers Federation participated in the KISAN Fair that was held at Bangalore International Exhibition Center from February 9th 11th 2015 This event was supported by Ministry of Agriculture, Govt"
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'KISAN 2015 – Indian Agriculture Trade Fair - Green Foundation',
                    description: 'GREEN Foundation and Janadhanya Farmers Federation participated in the KISAN Fair that was held at Bangalore International Exhibition Center from February 9th 11th 2015 This event was supported by Ministry of Agriculture, Govt',
                    images: [
                        {
                            url: '/publications/news-and-events/indian-agri/indian_agri_img_1.png',
                            width: 800,
                            height: 600,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        {
                            url: '/publications/news-and-events/indian-agri/indian_agri_img_1.png',
                            width: 900,
                            height: 800,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        { url: '/publications/news-and-events/indian-agri/indian_agri_img_1.png' },
                        { url: '/publications/news-and-events/indian-agri/indian_agri_img_1.png' },
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
    <IndianAgri />
    <Footer />
    </>
  )
}

export default index