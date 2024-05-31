import React from 'react'

import Header from '../../shared/Header'
import Footre from '../../shared/Footer'
import OrgonicCorps from './OrgonicCorps'


import '../../Style'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>

     <NextSeo
                title="Reaping the Organic Crops with Big Smiles - Green Foundation"
                description="The Savyava Bhagya Yojane Organic Village Program was initiated in 5 villages of Kanakapura during the beginning of this year in collaboration with the Karnataka State Agriculture Department Janadhanya Farmers Federation supplied"
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'Reaping the Organic Crops with Big Smiles - Green Foundation',
                    description: 'The Savyava Bhagya Yojane Organic Village Program was initiated in 5 villages of Kanakapura during the beginning of this year in collaboration with the Karnataka State Agriculture Department Janadhanya Farmers Federation supplied',
                    images: [
                        {
                            url: '/publications/news-and-events/reaping-organic/reaping_the_organic_img.png',
                            width: 800,
                            height: 600,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        {
                            url: '/publications/news-and-events/reaping-organic/reaping_the_organic_img.png',
                            width: 900,
                            height: 800,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        { url: '/publications/news-and-events/reaping-organic/reaping_the_organic_img.png' },
                        { url: '/publications/news-and-events/reaping-organic/reaping_the_organic_img.png' },
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
    <OrgonicCorps />
    <Footre />
    </>
  )
}

export default index