import React from 'react'

import Header from '../shared/Header'
import Footer from '../shared/Footer'

import '../Style'
import CertificationBanner from './CertificationBanner'
import CertificationContent from './CertificationContent'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>
  <NextSeo
        title="Certification in Organic Farming"
        description="GREEN facilitates organic farming certification using a Participatory Guarantee System PGS which provides credibility for farmers and a higher rate for their produce"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Certification in Organic Farming',
          description: 'GREEN facilitates organic farming certification using a Participatory Guarantee System PGS which provides credibility for farmers and a higher rate for their produce',
          images: [
            {
              url: '/certification/participatory_guarantee_system_img.png',
              width: 800,
              height: 600,
              alt: 'Certification',
              type: 'image/jpeg',
            },
            {
              url: '/certification/participatory_guarantee_system_img.png',
              width: 900,
              height: 800,
              alt: 'Certification',
              type: 'image/jpeg',
            },
            { url: '/certification/participatory_guarantee_system_img.png' },
            { url: '/certification/participatory_guarantee_system_img.png' },
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
    <CertificationBanner />
    <CertificationContent />
    <Footer />
    </>
  )
}

export default index