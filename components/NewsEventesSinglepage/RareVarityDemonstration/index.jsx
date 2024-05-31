import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import RareVarity from './RareVarity'

import '../../Style'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>

<NextSeo
      title="Rare Variety Demonstration in Kanakapura - 2020-21 - Green Foundation"
      description="Rare Variety Demonstration is the process of demonstrating phenotypes varieties of different crops like Millets, Finger Millets, Paddy, Oil Seeds and other seeds to the community to enable them to select seeds for further propagation based on their preferences or choice of"
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Rare Variety Demonstration in Kanakapura - 2020-21 - Green Foundation',
        description: 'Rare Variety Demonstration is the process of demonstrating phenotypes varieties of different crops like Millets, Finger Millets, Paddy, Oil Seeds and other seeds to the community to enable them to select seeds for further propagation based on their preferences or choice of',
        images: [
          {
            url: '/news-and-events/rare_variety_demonstration_in_kanakapura_img_1.png',
            width: 800,
            height: 600,
            alt: 'green foundation img',
            type: 'image/jpeg',
          },
          {
            url: '/news-and-events/rare_variety_demonstration_in_kanakapura_img_1.png',
            width: 900,
            height: 800,
            alt: 'green foundation img',
            type: 'image/jpeg',
          },
          { url: '/news-and-events/rare_variety_demonstration_in_kanakapura_img_1.png' },
          { url: '/news-and-events/rare_variety_demonstration_in_kanakapura_img_1.png' },
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
        <RareVarity />
        <Footer />
    </>
  )
}

export default index