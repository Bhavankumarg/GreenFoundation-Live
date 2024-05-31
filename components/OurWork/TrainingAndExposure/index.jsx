import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer/'

import '../../Style'

import TrainingExposureHeader from './TrainingExposureHeader'
import TrainingExposureBanner from './TrainingExposureBanner'
import TrainingExposureContent from './TrainingExposureContent'
import { NextSeo } from 'next-seo'



const index = () => {
  return (
    <>
<NextSeo
      title="Training and Exposure Visits"
      description="Green Foundation’s training and exposure visits offer farmers the required knowledge and interactions with one another on sustainable agriculture, that empowers them as a community"
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Training and Exposure Visits',
        description: 'Green Foundation’s training and exposure visits offer farmers the required knowledge and interactions with one another on sustainable agriculture, that empowers them as a community',
        images: [
          {
            url: '/our-work/training-exposure/training_exposure_left_img.png',
            width: 800,
            height: 600,
            alt: 'Journey So Far',
            type: 'image/jpeg',
          },
          {
            url: '/our-work/training-exposure/training_exposure_left_img.png',
            width: 900,
            height: 800,
            alt: 'Journey So Far',
            type: 'image/jpeg',
          },
          { url: '/our-work/training-exposure/training_exposure_left_img.png' },
          { url: '/our-work/training-exposure/training_exposure_left_img.png' },
        ],
        siteName: 'SiteName',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />


    <Header/>
    <TrainingExposureHeader />
    <TrainingExposureBanner />
    <TrainingExposureContent />
    <Footer />
    </>

  )
}

export default index