import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import SeedFair from './SeedFair'

import '../../Style'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>
        <NextSeo
                title="Seed Fair - Green Foundation"
                description="Traditional seed fair was celebrated in Tamil Nadu, Pudukkottai district on 08 05 2018 GREEN Foundation and Vrutti jointly worked with three FPOs to set up a Community Seed Bank called Makarantham Community Seed Bank Makarantham CSB members fully participated and…"
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'Seed Fair - Green Foundation',
                    description: 'Traditional seed fair was celebrated in Tamil Nadu, Pudukkottai district on 08 05 2018 GREEN Foundation and Vrutti jointly worked with three FPOs to set up a Community Seed Bank called Makarantham Community Seed Bank Makarantham CSB members fully participated and…',
                    images: [
                        {
                            url: '/news-and-events/seed_fair_news_event_img_2.png',
                            width: 800,
                            height: 600,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        {
                            url: '/news-and-events/seed_fair_news_event_img_2.png',
                            width: 900,
                            height: 800,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        { url: '/news-and-events/seed_fair_news_event_img_2.png' },
                        { url: '/news-and-events/seed_fair_news_event_img_2.png' },
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
    <SeedFair />
    <Footer />
    </>
  )
}

export default index