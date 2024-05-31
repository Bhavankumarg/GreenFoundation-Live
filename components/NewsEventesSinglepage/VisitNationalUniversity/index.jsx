import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'
import VisitNationalUniversity from './VisitNationalUniversity'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>
     <NextSeo
                title="Visit by National Institute of Rural Development, Hyderabad - Green Foundation"
                description="Officials from National Institute of Rural Development, Hyderabad along with 28 delegates from 16 countries visited GREEN’s project area on 20th January 2015"
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'Visit by National Institute of Rural Development, Hyderabad - Green Foundation',
                    description: 'Officials from National Institute of Rural Development, Hyderabad along with 28 delegates from 16 countries visited GREEN’s project area on 20th January 2015',
                    images: [
                        {
                            url: '/publications/news-and-events/national-institute/national_institute_of_rural_development_hyderabad_1.png',
                            width: 800,
                            height: 600,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        {
                            url: '/publications/news-and-events/national-institute/national_institute_of_rural_development_hyderabad_1.png',
                            width: 900,
                            height: 800,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        { url: '/publications/news-and-events/national-institute/national_institute_of_rural_development_hyderabad_1.png' },
                        { url: '/publications/news-and-events/national-institute/national_institute_of_rural_development_hyderabad_1.png' },
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
    <VisitNationalUniversity />
    <Footer />
    </>
  )
}

export default index