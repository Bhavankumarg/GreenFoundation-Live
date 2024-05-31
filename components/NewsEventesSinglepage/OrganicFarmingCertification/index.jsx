import React from 'react'

import Header from '@/components/shared/Header/Navbar'
import Footer from '@/components/shared/Footer/Footer'

import '../../Style'
import OrganicFarmingCertification from './OrganicFarmingCertification'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>
     <NextSeo 
                title="Organic Farming Certification: PGS Meet - Green Foundation"
                description="The PGS Meet at Maralawadi Hobli, facilitated by GREEN on 25th August, aimed to raise awareness of organic farming certification in the project area, with the objective of increasing the number of certified farmers"
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'Organic Farming Certification: PGS Meet - Green Foundation',
                    description: 'The PGS Meet at Maralawadi Hobli, facilitated by GREEN on 25th August, aimed to raise awareness of organic farming certification in the project area, with the objective of increasing the number of certified farmers',
                    images: [
                        {
                            url: '/publications/news-and-events/organic_farming_certification_meet_img.png',
                            width: 800,
                            height: 600,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        {
                            url: '/publications/news-and-events/organic_farming_certification_meet_img.png',
                            width: 900,
                            height: 800,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        { url: '/publications/news-and-events/organic_farming_certification_meet_img.png' },
                        { url: '/publications/news-and-events/organic_farming_certification_meet_img.png' },
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
    <OrganicFarmingCertification />
    <Footer />
    </>
  )
}

export default index