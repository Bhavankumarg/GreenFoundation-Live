import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'
import RareVarityVisit from './RareVarityVisit'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>
      <NextSeo
                title="Rare Variety Demonstration - A Visit - Green Foundation"
                description="The modern agricultural trend enhanced the erosion of agro biodiversity resulting in loss of valuable traditional crops and varietal local indigenous seeds"
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'Rare Variety Demonstration - A Visit - Green Foundation',
                    description: 'The modern agricultural trend enhanced the erosion of agro biodiversity resulting in loss of valuable traditional crops and varietal local indigenous seeds',
                    images: [
                        {
                            url: '/publications/news-and-events/rare-varity-visit/rare_variety_demonstration_visit.png',
                            width: 800,
                            height: 600,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        {
                            url: '/publications/news-and-events/rare-varity-visit/rare_variety_demonstration_visit.png',
                            width: 900,
                            height: 800,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        { url: '/publications/news-and-events/rare-varity-visit/rare_variety_demonstration_visit.png' },
                        { url: '/publications/news-and-events/rare-varity-visit/rare_variety_demonstration_visit.png' },
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
    <RareVarityVisit />
    <Footer />
    </>
  )
}

export default index