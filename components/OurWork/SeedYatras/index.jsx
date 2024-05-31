import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'
import SeedYatrasHeader from './SeedYatrasHeader'
import SeedYatrasBanner from './SeedYatrasBanner'
import SeedYatrasContent from './SeedYatrasContent'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>

<NextSeo
        title="Seed yatras and fairs - Green Foundation"
        description=""
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Seed yatras and fairs - Green Foundation',
          description: '',
          images: [
            {
              url: '/our-work/seed-yatras/seed_yatras_img.png',
              width: 800,
              height: 600,
              alt: 'Awards and Recognitions',
              type: 'image/jpeg',
            },
            {
              url: '/our-work/seed-yatras/seed_yatras_img.png',
              width: 900,
              height: 800,
              alt: 'Awards and Recognitions',
              type: 'image/jpeg',
            },
            { url: '/our-work/seed-yatras/seed_yatras_img.png' },
            { url: '/our-work/seed-yatras/seed_yatras_img.png' },
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
    <SeedYatrasHeader />
    <SeedYatrasBanner />
    <SeedYatrasContent />
    <Footer />
    </>
  )
}

export default index