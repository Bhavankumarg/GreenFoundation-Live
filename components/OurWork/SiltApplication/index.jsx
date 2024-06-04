import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'
import SiltAppHeader from './SiltAppHeader'
import SiltAppBanner from './SiltAppBanner'
import SiltAppContent from './SiltAppContent'
import { NextSeo } from 'next-seo'
import WebsiteSchema from './WebsiteSchema'

const index = () => {
  return (
    <>

<NextSeo
      title="Silt application - Green Foundation"
      description="Learn about the advantages of applying silt to Indian agriculture. Green Foundation guides the farmers to raise crop yields in a sustainable manner and enhance soil fertility. Explore our efforts in promoting indigenous agricultural practices."
      canonical="https://greenfoundation.in/silt-application/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Silt application - Green Foundation',
        description: '',
        images: [
          {
            url: '',
            width: 800,
            height: 600,
            alt: 'Silt application - Green Foundation            ',
            type: 'image/jpeg',
          },
          {
            url: '',
            width: 900,
            height: 800,
            alt: 'Silt application - Green Foundation            ',
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

    <SiltAppHeader />
    <SiltAppBanner />
    <SiltAppContent />

    <Footer />
    </>
  )
}

export default index