import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'

import SeedMappingHeader from './SeedMappingHeader'
import SeedMappingContent from './SeedMappingContent'
import SeedMappingBanner from './SeedMappingBanner'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
   <>

  <NextSeo
        title="Seed Mapping"
        description="The Seed Mapping project from Green Foundation has helped is determining the variety of indigenous seeds present within a particular area, resulting in better outcomes"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Seed Mapping',
          description: 'The Seed Mapping project from Green Foundation has helped is determining the variety of indigenous seeds present within a particular area, resulting in better outcomes',
          images: [
            {
              url: '/our-work/seed-mapping/seed_mapping_img_1.png',
              width: 800,
              height: 600,
              alt: 'Seed Mapping',
              type: 'image/jpeg',
            },
            {
              url: '/our-work/seed-mapping/seed_mapping_img_1.png',
              width: 900,
              height: 800,
              alt: 'Seed Mapping',
              type: 'image/jpeg',
            },
            { url: '/our-work/seed-mapping/seed_mapping_img_1.png' },
            { url: '/our-work/seed-mapping/seed_mapping_img_1.png' },
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
   <SeedMappingHeader />
   <SeedMappingBanner />
   <SeedMappingContent />
   <Footer />
   </>
  )
}

export default index