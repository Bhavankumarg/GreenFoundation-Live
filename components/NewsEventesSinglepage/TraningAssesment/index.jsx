import React from 'react'

import Header from '@/components/shared/Header/Navbar'
import Footer from '@/components/shared/Footer/Footer'
import TraningAssesment from './TraningAssesment'

import '../../Style'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>
    <NextSeo
                title="Training on Assessment of Climate Change Vulnerability and Adaptation Strategies - Green Foundation"
                description="The great body of research in the international community clearly highlights the gradual change in the earth’s atmospheric conditions and the impact this will have on human livelihoods However, for millions of the world’s impoverished and disenfranchised, 75 of whom live"
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'Training on Assessment of Climate Change Vulnerability and Adaptation Strategies - Green Foundation',
                    description: 'The great body of research in the international community clearly highlights the gradual change in the earth’s atmospheric conditions and the impact this will have on human livelihoods However, for millions of the world’s impoverished and disenfranchised, 75 of whom live',
                    images: [
                        {
                            url: '/publications/news-and-events/training_assesment.png',
                            width: 800,
                            height: 600,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        {
                            url: '/publications/news-and-events/training_assesment.png',
                            width: 900,
                            height: 800,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        { url: '/publications/news-and-events/training_assesment.png' },
                        { url: '/publications/news-and-events/training_assesment.png' },
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
    <TraningAssesment />
    <Footer />
    </>
  )
}

export default index