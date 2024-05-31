import React from 'react'

import Header from '@/components/shared/Header/Navbar'
import Footer from '@/components/shared/Footer/Footer'

import '../../Style'
import WeaTraning from './WeaTraning'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>
    <NextSeo
                title="WEA Training - Building Women Leaders - Green Foundation"
                description="I feel that this land belongs to me I am a farmer, but no one recognizes me as such, says Manasa from Challekere, in Chitradurga District She is not alone in her views Manasa’s sentiments are echoed by her peers and women farmers across India"
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'WEA Training - Building Women Leaders - Green Foundation',
                    description: 'I feel that this land belongs to me I am a farmer, but no one recognizes me as such, says Manasa from Challekere, in Chitradurga District She is not alone in her views Manasa’s sentiments are echoed by her peers and women farmers across India',
                    images: [
                        {
                            url: '/publications/news-and-events/wea_training_building_women_leaders.png',
                            width: 800,
                            height: 600,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        {
                            url: '/publications/news-and-events/wea_training_building_women_leaders.png',
                            width: 900,
                            height: 800,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        { url: '/publications/news-and-events/wea_training_building_women_leaders.png' },
                        { url: '/publications/news-and-events/wea_training_building_women_leaders.png' },
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
        <WeaTraning />
        <Footer />
    </>
  )
}

export default index