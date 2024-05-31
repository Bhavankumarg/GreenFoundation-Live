import React from 'react'

import Header from '../shared/Header'
import Footer from '../shared/Footer'
import PolicyEngagementBanner from './PolicyEngagementBanner'
import PolicyEngagementContent from './PolicyEngagementContent'

import '../Style'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>
    <NextSeo
        title="Our Policy Engagement"
        description="Read about Green Foundation s stance and focus on policies for a variety of topics including Hybrid seeds, Organic seeds, seed production and more"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Our Policy Engagement',
          description: 'Read about Green Foundation s stance and focus on policies for a variety of topics including Hybrid seeds, Organic seeds, seed production and more',
          images: [
            {
              url: '',
              width: 800,
              height: 600,
              alt: 'Awards and Recognitions',
              type: 'image/jpeg',
            },
            {
              url: '',
              width: 900,
              height: 800,
              alt: 'Awards and Recognitions',
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
    <PolicyEngagementBanner />
    <PolicyEngagementContent />
    <Footer />
    </>
  )
}

export default index