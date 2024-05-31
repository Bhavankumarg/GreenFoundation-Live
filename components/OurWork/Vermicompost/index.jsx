import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'

import VermicompostHeader from './VermicompostHeader'
import VermicompostBanner from './VermicompostBanner'
import VermicompostContent from './VermicompostContent'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
  <>
<NextSeo
      title="Vermicompost - Green Foundation
      "
      description=""
      canonical="https://www.canonical.ie/"
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

  <Header />
  <VermicompostHeader />
  <VermicompostBanner />
  <VermicompostContent />
  <Footer />
  </>
  )
}

export default index