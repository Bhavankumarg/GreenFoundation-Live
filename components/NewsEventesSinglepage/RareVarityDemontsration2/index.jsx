import Header from '@/components/shared/Header/Navbar'
import React from 'react'
import RareVarityDemonstration2 from './RareVarityDemonstration2'
import Footer from '@/components/shared/Footer/Footer'

import '../../Style'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>
            <NextSeo
                title="Rare Variety demonstration - Green Foundation"
                description="RVD for Raagi was done at Veerayanadoddi, Hunusanahalli cluster It was done on 10 Guntas 0 25 acre of land Raagi seeds were collected from various seed banks and 92 varieties were selected for RVD Then nursery for Raagi was prepared, seeds were sown and covered with vermicompost"
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'Rare Variety demonstration - Green Foundation',
                    description: 'RVD for Raagi was done at Veerayanadoddi, Hunusanahalli cluster It was done on 10 Guntas 0 25 acre of land Raagi seeds were collected from various seed banks and 92 varieties were selected for RVD Then nursery for Raagi was prepared, seeds were sown and covered with vermicompost',
                    images: [
                        {
                            url: '/news-and-events/rare_variety_demonstration_2.png',
                            width: 800,
                            height: 600,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        {
                            url: '/news-and-events/rare_variety_demonstration_2.png',
                            width: 900,
                            height: 800,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        { url: '/news-and-events/rare_variety_demonstration_2.png' },
                        { url: '/news-and-events/rare_variety_demonstration_2.png' },
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
            <RareVarityDemonstration2 />
        <Footer />
    </>
  )
}

export default index