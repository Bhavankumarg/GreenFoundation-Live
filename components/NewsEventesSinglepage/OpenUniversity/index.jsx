import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import OpenUniversity from './OpenUniversity'

import '../../Style'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>
      <NextSeo
                title="Open University Workshop - Green Foundation"
                description="The research helped to explore a strong interdisciplinary framework, in particular the various aspects of history in the farming culture, also documented the creative and sustainable community farming practices both past and present"
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'Open University Workshop - Green Foundation',
                    description: 'The research helped to explore a strong interdisciplinary framework, in particular the various aspects of history in the farming culture, also documented the creative and sustainable community farming practices both past and present',
                    images: [
                        {
                            url: '/publications/news-and-events/open_university_workshop_2.png',
                            width: 800,
                            height: 600,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        {
                            url: '/publications/news-and-events/open_university_workshop_2.png',
                            width: 900,
                            height: 800,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        { url: '/publications/news-and-events/open_university_workshop_2.png' },
                        { url: '/publications/news-and-events/open_university_workshop_2.png' },
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
    <OpenUniversity />
    <Footer />
    </>
  )
}

export default index