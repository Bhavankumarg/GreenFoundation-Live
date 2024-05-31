import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer/'
import '../../Style'
import FarmHeader from './FarmHeader'
import FarmBanner from './FarmBanner'
import FarmContent from './FarmContent'
import { NextSeo } from 'next-seo'


const index = () => {
  return (
    <>
<NextSeo
      title="Boost Resilience with Farm Ponds: Sustainable Water Source"
      description="Discover how farm ponds empower farmers with reliable pond water for irrigation, reducing dependence on ground water and enhancing resilience to climate change"
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Boost Resilience with Farm Ponds: Sustainable Water Source',
        description: 'Discover how farm ponds empower farmers with reliable pond water for irrigation, reducing dependence on ground water and enhancing resilience to climate change',
        images: [
          {
            url: '',
            width: 800,
            height: 600,
            alt: 'Farm Ponds',
            type: 'image/jpeg',
          },
          {
            url: '',
            width: 900,
            height: 800,
            alt: 'Farm Ponds',
            type: 'image/jpeg',
          },
          { url: '' },
          { url: '' },
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
        <FarmHeader />
        <FarmBanner />
        <FarmContent />
    <Footer />
    </>
  )
}

export default index