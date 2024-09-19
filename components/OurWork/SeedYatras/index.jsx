import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import GoogleAnalyticsFile from '@/components/GoogleAnalyticsFile'
import '../../Style'
import SeedYatrasHeader from './SeedYatrasHeader'
import SeedYatrasBanner from './SeedYatrasBanner'
import SeedYatrasContent from './SeedYatrasContent'
import { NextSeo } from 'next-seo'
import WebsiteSchema from './WebsiteSchema'
const index = () => {
  return (
    <>

      <NextSeo
        title="Seed yatras and fairs - Green Foundation"
        description="Explore India's vibrant cultural legacy and discover sustainable farming practices on our platform. Experience the innovative use of adorned bullock carts to promote awareness through music, dance, and theater, fostering empowerment among farmers by providing them with indigenous seeds for their fields."
        canonical="https://greenfoundation.in/seed-yatras-and-fairs"
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


      <WebsiteSchema />
      <Header />
      <GoogleAnalyticsFile/>
      <SeedYatrasHeader />
      <SeedYatrasBanner />
      <SeedYatrasContent />
      <Footer />
    </>
  )
}

export default index