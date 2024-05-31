import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'
import PoweredByNature from './PoweredByNature'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>
     <NextSeo
                title="Powered by Nature - Organic Inputs - Green Foundation"
                description=""
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'Powered by Nature - Organic Inputs - Green Foundation',
                    description: '',
                    images: [
                        {
                            url: '/publications/news-and-events/powered-by-nature/powered_by_nature_img.png',
                            width: 800,
                            height: 600,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        {
                            url: '/publications/news-and-events/powered-by-nature/powered_by_nature_img.png',
                            width: 900,
                            height: 800,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        { url: '/publications/news-and-events/powered-by-nature/powered_by_nature_img.png' },
                        { url: '/publications/news-and-events/powered-by-nature/powered_by_nature_img.png' },
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
        <PoweredByNature />
        <Footer />
    </>
  )
}

export default index