import React from 'react'

import Header from '@/components/shared/Header/Navbar'
import Footer  from '@/components/shared/Footer/Footer'
import MahilaSamvada from './MahilaSamvada'

import '../../Style'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>
     <NextSeo
                title="Mahila Samvada 2014 - Green Foundation"
                description="Mahila Samvada, a set of interactive capacity building programs for rural women farmers were conducted in the month of August from 19th to 25th, totalling 5 batches in 5 days The dates on which these capacity building training"
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'Mahila Samvada 2014 - Green Foundation',
                    description: 'Mahila Samvada, a set of interactive capacity building programs for rural women farmers were conducted in the month of August from 19th to 25th, totalling 5 batches in 5 days The dates on which these capacity building training',
                    images: [
                        {
                            url: '/publications/news-and-events/mahila_samvada_2014_img.png',
                            width: 800,
                            height: 600,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        {
                            url: '/publications/news-and-events/mahila_samvada_2014_img.png',
                            width: 900,
                            height: 800,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        { url: '/publications/news-and-events/mahila_samvada_2014_img.png' },
                        { url: '/publications/news-and-events/mahila_samvada_2014_img.png' },
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
        <MahilaSamvada />
        <Footer />
    </>
  )
}

export default index