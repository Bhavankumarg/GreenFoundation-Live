import React from 'react'

import Header from '@/components/shared/Header/Navbar'
import Footer from '@/components/shared/Footer/Footer'

import '../../Style'
import SustainableAgri from './SustainableAgri'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>
    <NextSeo
                title="Sustainability in Organic Farming Certification - Green Foundation"
                description="Recently, GREEN hosted a farmers’ meet in Kanakapura, for community members seeking organic farming certification through the Participatory Guarantee System PGS"
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'Sustainability in Organic Farming Certification - Green Foundation',
                    description: 'Recently, GREEN hosted a farmers’ meet in Kanakapura, for community members seeking organic farming certification through the Participatory Guarantee System PGS',
                    images: [
                        {
                            url: '/publications/news-and-events/sustainability_in_organic_farming_certification_img.png',
                            width: 800,
                            height: 600,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        {
                            url: '/publications/news-and-events/sustainability_in_organic_farming_certification_img.png',
                            width: 900,
                            height: 800,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        { url: '/publications/news-and-events/sustainability_in_organic_farming_certification_img.png' },
                        { url: '/publications/news-and-events/sustainability_in_organic_farming_certification_img.png' },
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
    <SustainableAgri />
    <Footer />
    </>
  )
}

export default index