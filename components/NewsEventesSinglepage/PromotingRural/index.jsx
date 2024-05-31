import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import PromotingRural from './PromotingRural'

import '../../Style'
import { NextSeo } from 'next-seo'

const index = () => {
    return (
        <>
         <NextSeo
                title="Promoting Rural Entrepreneurship - Producer Groups - Green Foundation"
                description=""
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'Promoting Rural Entrepreneurship - Producer Groups - Green Foundation',
                    description: '',
                    images: [
                        {
                            url: '/publications/news-and-events/promoting-rural/promoting_rural_entrepreneurship_produce_groups_img.png',
                            width: 800,
                            height: 600,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        {
                            url: '/publications/news-and-events/promoting-rural/promoting_rural_entrepreneurship_produce_groups_img.png',
                            width: 900,
                            height: 800,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        { url: '/publications/news-and-events/promoting-rural/promoting_rural_entrepreneurship_produce_groups_img.png' },
                        { url: '/publications/news-and-events/promoting-rural/promoting_rural_entrepreneurship_produce_groups_img.png' },
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
            <PromotingRural />
            <Footer />
        </>
    )
}

export default index