import React from 'react'
import GoogleAnalyticsFile from '../GoogleAnalyticsFile'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import ResearchCommunicationBanner from './ResearchCommunicationBanner'
import ResearchCommunicationContent from './ResearchCommunicationContent'
import WebsiteSchema from './WebsiteSchema'

import '../Style'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>
    <NextSeo
        title="Research And Communication - Green Foundation"
        description="Explore the influence of research on sustainable agriculture and agrobiodiversity preservation via GREEN Foundation's initiatives focusing on value chains, indigenous seed diversity, and bolstering enterprises."
        canonical="https://greenfoundation.in/research-and-communication"
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
    <WebsiteSchema/>
    <Header />
    <GoogleAnalyticsFile/>
    <ResearchCommunicationBanner />
    <ResearchCommunicationContent />
    <Footer />
    </>
  )
}

export default index