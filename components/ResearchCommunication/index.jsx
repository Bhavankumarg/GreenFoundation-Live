import React from 'react'

import Header from '../shared/Header'
import Footer from '../shared/Footer'
import ResearchCommunicationBanner from './ResearchCommunicationBanner'
import ResearchCommunicationContent from './ResearchCommunicationContent'

import '../Style'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>
    <NextSeo
        title="Research And Communication - Green Foundation"
        description=""
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Research And Communication - Green Foundation',
          description: '',
          images: [
            {
              url: '/research-communication/grandmother_seeding_farm_img.png',
              width: 800,
              height: 600,
              alt: 'Awards and Recognitions',
              type: 'image/jpeg',
            },
            {
              url: '/research-communication/grandmother_seeding_farm_img.png',
              width: 900,
              height: 800,
              alt: 'Awards and Recognitions',
              type: 'image/jpeg',
            },
            { url: '/research-communication/grandmother_seeding_farm_img.png' },
            { url: '/research-communication/grandmother_seeding_farm_img.png' },
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
    <ResearchCommunicationBanner />
    <ResearchCommunicationContent />
    <Footer />
    </>
  )
}

export default index