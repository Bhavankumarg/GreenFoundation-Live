import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'
import SeedBanksHeader from './SeedBanksHeader'
import SeedBanksBanner from './SeedBanksBanner'
import SeedBanksContent from './SeedBanksContent'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>
<NextSeo
        title="Seed banks - Green Foundation"
        description=""
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Seed banks - Green Foundation',
          description: '',
          images: [
            {
              url: '/our-work/seed-banks/seed_banks_left_img.png',
              width: 800,
              height: 600,
              alt: 'Seed banks',
              type: 'image/jpeg',
            },
            {
              url: '/our-work/seed-banks/seed_banks_left_img.png',
              width: 900,
              height: 800,
              alt: 'Seed banks',
              type: 'image/jpeg',
            },
            { url: '/our-work/seed-banks/seed_banks_left_img.png' },
            { url: '/our-work/seed-banks/seed_banks_left_img.png' },
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
    <SeedBanksHeader />
    <SeedBanksBanner />
    <SeedBanksContent />
    <Footer />
    </>
  )
}

export default index