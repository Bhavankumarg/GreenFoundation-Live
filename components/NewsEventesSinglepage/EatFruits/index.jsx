import React from 'react'

import Header from '@/components/shared/Header/Navbar'
import Footer from '@/components/shared/Footer/Footer'

import '../../Style'
import EatFruits from './EatFruits'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>
            <NextSeo
                title="Eat the Fruits of Your Labour: Start Your Own kitchen Garden - Green Foundation"
                description="Kitchen gardens can give an immense sense of satisfaction to gardening enthusiasts But you don t have to be an expert gardener to start a small one of your own At GREEN, we believe that sustainability is as important in the urban context as it is in the rural one"
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'Eat the Fruits of Your Labour: Start Your Own kitchen Garden - Green Foundation',
                    description: 'Kitchen gardens can give an immense sense of satisfaction to gardening enthusiasts But you don t have to be an expert gardener to start a small one of your own At GREEN, we believe that sustainability is as important in the urban context as it is in the rural one',
                    images: [
                        {
                            url: '/publications/news-and-events/eat-the-fruits/eat_the_fruits_of_your_labour_img.png',
                            width: 800,
                            height: 600,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        {
                            url: '/publications/news-and-events/eat-the-fruits/eat_the_fruits_of_your_labour_img.png',
                            width: 900,
                            height: 800,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        { url: '/publications/news-and-events/eat-the-fruits/eat_the_fruits_of_your_labour_img.png' },
                        { url: '/publications/news-and-events/eat-the-fruits/eat_the_fruits_of_your_labour_img.png' },
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
    <EatFruits />
    <Footer />
    </>
  )
}

export default index