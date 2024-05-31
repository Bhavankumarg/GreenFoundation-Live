import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer/'
import '../../Style'

import IncomeHeader from './IncomeHeader'
import IncomeBanner from './IncomeBanner'
import IncomeContent from './IncomeContent'
import { NextSeo } from 'next-seo'


const index = () => {
  return (
    <>


<NextSeo
      title="Livelihood Opportunities"
      description="In farming communities, Green Foundation facilitates training in handicraft making with an aim to increase the livelihood opportunities of farmers Here s how"
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Livelihood Opportunities',
        description: 'In farming communities, Green Foundation facilitates training in handicraft making with an aim to increase the livelihood opportunities of farmers Here s how',
        images: [
          {
            url: '/our-work/income-generation/income_left_img.png',
            width: 800,
            height: 600,
            alt: 'Awards and Recognitions',
            type: 'image/jpeg',
          },
          {
            url: '/our-work/income-generation/income_left_img.png',
            width: 900,
            height: 800,
            alt: 'Awards and Recognitions',
            type: 'image/jpeg',
          },
          { url: '/our-work/income-generation/income_left_img.png' },
          { url: '/our-work/income-generation/income_left_img.png' },
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
    
    <IncomeHeader />
    <IncomeBanner />
    <IncomeContent />

    <Footer />
    </>
  )
}

export default index