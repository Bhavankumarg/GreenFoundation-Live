import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'
import TrenchBundHeader from './TrenchBundHeader'
import TrenchBundBanner from './TrenchBundBanner'
import TrenchBundContent from './TrenchBundContent'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>
<NextSeo
      title="Trench and bund formation - Green Foundations        "
      description=""
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Seed Banks: Preserving Agrobiodiversity',
        description: '',
        images: [
          {
            url: '/our-work/trench-bund/trench_bund_content_img.png',
            width: 800,
            height: 600,
            alt: 'Trench and bund',
            type: 'image/jpeg',
          },
          {
            url: '/our-work/trench-bund/trench_bund_content_img.png',
            width: 900,
            height: 800,
            alt: 'Trench and bund',
            type: 'image/jpeg',
          },
          { url: '/our-work/trench-bund/trench_bund_content_img.png' },
          { url: '/our-work/trench-bund/trench_bund_content_img.png' },
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

    <TrenchBundHeader />
    <TrenchBundBanner />
    <TrenchBundContent />

    <Footer />
    </>
  )
}

export default index