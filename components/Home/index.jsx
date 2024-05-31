'use client'
import React, { useEffect, useState } from 'react'
import HeroBanner from './HeroBanner'
import OurWork from './OurWork'
import NewsandEvents from './NewsandEvents'
import OurReach from './OurReach'
import Partners from './Partners'
import FormHome from './Form'
import Header from '../shared/Header/Navbar'
import Footer from '../shared/Footer/Footer'
import WebsiteSchema from '../shared/WebsiteSchema'
import { NextSeo } from 'next-seo'


import '../Style'
import SeoTags from '../SeoComponents/Seo'
import { usePathname } from 'next/navigation'

const index = () => {
  const pathname = usePathname();

  const [domainName, setDomainName] = useState('');

  useEffect(() => {
    setDomainName(window.location.hostname);
  }, []);

  const pageTitle = "29 years of empowering small scale farmer communities";
  const pageDescription = "From empowering small scale farmers to initiating a growing biodiversity conservation programme, Green Foundation has taken a holistic approach to empower communities since 1994.";
  const MetaImage = '/images/apparel_banner.jpeg';
  const url = `${domainName}${pathname}`;




  return (
    <>

      <SeoTags pageTitle={pageTitle} pageDescription={pageDescription} MetaImage={MetaImage} url={url} />

      <WebsiteSchema />
      <Header />
      <HeroBanner />
      <OurWork />
      <NewsandEvents />
      <OurReach />
      <Partners />
      <FormHome />
      <Footer />
    </>
  )
}

export default index