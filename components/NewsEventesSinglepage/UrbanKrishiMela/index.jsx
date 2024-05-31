import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'


import '../../Style'
import UrbanKrishiMela from './UrbanKrishiMela'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>

          <NextSeo
                title="Urban Krishi Mela 2014 - Green Foundation"
                description="GREEN Foundation participated in the Annual Urban Krishi Mela held by University of Agricultural Sciences, Bangalore UAS B at GKVK Campus, Bangalore from November 19th to 21st"
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'Urban Krishi Mela 2014 - Green Foundation',
                    description: 'GREEN Foundation participated in the Annual Urban Krishi Mela held by University of Agricultural Sciences, Bangalore UAS B at GKVK Campus, Bangalore from November 19th to 21st',
                    images: [
                        {
                            url: '/publications/news-and-events/urban-krishi/urban_krishi_mela_2014_img.png',
                            width: 800,
                            height: 600,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        {
                            url: '/publications/news-and-events/urban-krishi/urban_krishi_mela_2014_img.png',
                            width: 900,
                            height: 800,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        { url: '/publications/news-and-events/urban-krishi/urban_krishi_mela_2014_img.png' },
                        { url: '/publications/news-and-events/urban-krishi/urban_krishi_mela_2014_img.png' },
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
    <UrbanKrishiMela />
    <Footer />
    </>
  )
}

export default index