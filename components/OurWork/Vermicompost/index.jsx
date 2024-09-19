import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'
import GoogleAnalyticsFile from '@/components/GoogleAnalyticsFile'
import VermicompostHeader from './VermicompostHeader'
import VermicompostBanner from './VermicompostBanner'
import VermicompostContent from './VermicompostContent'
import { NextSeo } from 'next-seo'
import WebsiteSchema from './WebsiteSchema'

const index = () => {
  return (
  <>
<NextSeo
      title="Vermicompost - Green Foundation
      "
      description="GREEN trains farmers to make and use vermicompost effectively within their own farms through rigorous training sessions that place great emphasis on quality."
      canonical="https://greenfoundation.in/vermicompost"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Vermicompost - Green Foundation',
        description: '',
        images: [
          {
            url: '',
            width: 800,
            height: 600,
            alt: 'Vermicompost',
            type: 'image/jpeg',
          },
          {
            url: '',
            width: 900,
            height: 800,
            alt: 'Vermicompost',
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
  <VermicompostHeader />
  <VermicompostBanner />
  <VermicompostContent />
  <Footer />
  </>
  )
}

export default index