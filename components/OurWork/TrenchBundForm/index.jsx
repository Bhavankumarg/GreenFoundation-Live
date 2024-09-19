import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import GoogleAnalyticsFile from '@/components/GoogleAnalyticsFile'
import '../../Style'
import TrenchBundHeader from './TrenchBundHeader'
import TrenchBundBanner from './TrenchBundBanner'
import TrenchBundContent from './TrenchBundContent'
import { NextSeo } from 'next-seo'
import WebsiteSchema from './WebsiteSchema'

const index = () => {
  return (
    <>
<NextSeo
      title="Trench and bund formation - Green Foundations        "
      description="Learn how soil and agricultural waste is collected in trenches and are used to enrich the soil. Rainwater collected in trenches is directed to kitchen gardens or used to grow trees in the trenches themselves and farmers, grow fruit trees in the bunds on their farms"
      canonical="https://greenfoundation.in/trench-and-bund-formation"
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


    <WebsiteSchema/>
    <Header />
    <GoogleAnalyticsFile/>
    <TrenchBundHeader />
    <TrenchBundBanner />
    <TrenchBundContent />

    <Footer />
    </>
  )
}

export default index