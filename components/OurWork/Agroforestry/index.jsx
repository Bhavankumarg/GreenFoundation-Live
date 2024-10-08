import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import GoogleAnalyticsFile from '@/components/GoogleAnalyticsFile'
import AgroforestryHeader from './AgroforestryHeader'
import AgroforestryBanner from './AgroforestryBanner'
import AgroforestryContent from './AgroforestryContent'
import WebsiteSchema from './WebsiteSchema'

import '../../Style'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>
<NextSeo
      title="Agroforestry - Green Foundation"
      description="Empowering communities to conserve biological diversity practice sustainable agriculture through community seed banks GREEN s pioneering efforts inspire nationwide impact"
      canonical="https://greenfoundation.in/agroforestry"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Agroforestry - Green Foundation',
        description: 'Empowering communities to conserve biological diversity practice sustainable agriculture through community seed banks GREEN s pioneering efforts inspire nationwide impact',
        images: [
          {
            url: '',
            width: 800,
            height: 600,
            alt: 'Agroforestry',
            type: 'image/jpeg',
          },
          {
            url: '',
            width: 900,
            height: 800,
            alt: 'Agroforestry',
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

    <WebsiteSchema/>
    <Header />
    <GoogleAnalyticsFile/>
        <AgroforestryHeader />
        <AgroforestryBanner />
        <AgroforestryContent />
    <Footer />
    </>
  )
}

export default index