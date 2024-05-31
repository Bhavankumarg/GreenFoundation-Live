'use client'
import React, { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo';
import '../../Style'

import Header from '../../shared/Header/Navbar'
import Footer from '../../shared/Footer'

import JourneySoFar from './JourneySoFar'
import JourneyHeader from './JourneyHeader'
import GoogleAnalyticsCode from '@/components/SeoComponents/GoogleAnalyticsCode';
import Head from 'next/head';
import SeoTags from '@/components/SeoComponents/Seo';
import { usePathname } from 'next/navigation';




const index = () => {

  const pathname = usePathname();

  const [domainName, setDomainName] = useState('');

  useEffect(() => {
    setDomainName(window.location.hostname);
  }, []);

  const pageTitle = "29 years of empowering small scale farmer communities";
  const pageDescription = "From empowering small scale farmers to initiating a growing biodiversity conservation programme, Green Foundation has taken a holistic approach to empower communities since 1994.";
  const MetaImage = '/images/apparel_banner.jpeg';
  const url = `https://greenfoundation.in${pathname}`;

  return (
    <>

      <SeoTags pageTitle={pageTitle} pageDescription={pageDescription} MetaImage={MetaImage} url={url} />


      <Header />

      <JourneyHeader />
      <JourneySoFar />
      {/* <JourneySoFarTimeline /> */}
      <Footer />
    </>
  )
}

export default index
