import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'
import SiltAppHeader from './SiltAppHeader'
import SiltAppBanner from './SiltAppBanner'
import SiltAppContent from './SiltAppContent'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>

<NextSeo
      title="Silt application - Green Foundation"
      description=""
      canonical="https://www.canonical.ie/"
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

    <Header />

    <SiltAppHeader />
    <SiltAppBanner />
    <SiltAppContent />

    <Footer />
    </>
  )
}

export default index