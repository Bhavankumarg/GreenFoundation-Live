import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer/'

import '../../Style'

import SustainHeader from './SustainHeader'
import SustainAgriBanner from './SustainAgriBanner'
import SustainContent from './SustainContent'
import { NextSeo } from 'next-seo'



const Index = () => {
  return (
    <> 

<NextSeo
      title="29 years of empowering small scale farmer communities"
      description="From empowering small scale farmers to initiating a growing biodiversity conservation programme, Green Foundation has taken a holistic approach to empower communities since 1994."
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: '29 years of empowering small scale farmer communities',
        description: 'From empowering small scale farmers to initiating a growing biodiversity conservation programme, Green Foundation has taken a holistic approach to empower communities since 1994.',
        images: [
          {
            url: 'https://greenfoundation.in/wp-content/uploads/2023/02/Group-25828.png',
            width: 800,
            height: 600,
            alt: 'Journey So Far',
            type: 'image/jpeg',
          },
          {
            url: 'https://greenfoundation.in/wp-content/uploads/2023/02/Group-25828.png',
            width: 900,
            height: 800,
            alt: 'Journey So Far',
            type: 'image/jpeg',
          },
          { url: 'https://greenfoundation.in/wp-content/uploads/2023/02/Group-25828.png' },
          { url: 'https://greenfoundation.in/wp-content/uploads/2023/02/Group-25828.png' },
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
    <SustainHeader />
    <SustainAgriBanner />
    <SustainContent />

    <Footer />
    </>
  )
}

export default Index