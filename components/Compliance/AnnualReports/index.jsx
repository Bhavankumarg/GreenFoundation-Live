import React from 'react'

import Header from '@/components/shared/Header/Navbar'
import Footer from '@/components/shared/Footer/Footer'
import AnnualReportsHeader from './AnnualReportsHeader'
import AnnualReportsContent from './AnnualReportsContent'
import { NextSeo } from 'next-seo'

import '../../Style'

const index = () => {
  return (
    <>
      <NextSeo
        title="Annual Reports - Green Foundation"
        description="Empowering communities to conserve biological diversity practice sustainable agriculture through community seed banks GREEN s pioneering efforts inspire nationwide impact"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Annual Reports - Green Foundation',
          description: 'Empowering communities to conserve biological diversity practice sustainable agriculture through community seed banks GREEN s pioneering efforts inspire nationwide impact',
          images: [
            {
              url: '/compliance/Biennial_Report_2012-14.png',
              width: 800,
              height: 600,
              alt: 'Annual Reports',
              type: 'image/jpeg',
            },
            {
              url: '/compliance/Biennial_Report_2012-14.png',
              width: 900,
              height: 800,
              alt: 'Annual Reports',
              type: 'image/jpeg',
            },
            { url: '/compliance/Biennial_Report_2012-14.png' },
            { url: '/compliance/Biennial_Report_2012-14.png' },
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
      <AnnualReportsHeader />
      <AnnualReportsContent />
      <Footer />
    </>
  )
}

export default index