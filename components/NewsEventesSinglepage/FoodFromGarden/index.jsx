import React from 'react'

import Header from '@/components/shared/Header/Navbar'
import Footer from '@/components/shared/Footer/Footer'

import '../../Style'
import FoodFromGarden from './FoodFromGarden'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>
    <NextSeo 
                title="Food from Your Garden: Oota from Thota - Green Foundation"
                description="A growing number of people in urban cities and towns are looking to adopt a healthier, better rounded lifestyle Many are increasingly becoming aware of the benefits of organically grown produce and are enthusiastic"
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'Food from Your Garden: Oota from Thota - Green Foundation',
                    description: 'A growing number of people in urban cities and towns are looking to adopt a healthier, better rounded lifestyle Many are increasingly becoming aware of the benefits of organically grown produce and are enthusiastic',
                    images: [
                        {
                            url: '/publications/news-and-events/food_from_your_garden_img.png',
                            width: 800,
                            height: 600,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        {
                            url: '/publications/news-and-events/food_from_your_garden_img.png',
                            width: 900,
                            height: 800,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        { url: '/publications/news-and-events/food_from_your_garden_img.png' },
                        { url: '/publications/news-and-events/food_from_your_garden_img.png' },
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
    <FoodFromGarden />
    <Footer />
    </>
  )
}

export default index