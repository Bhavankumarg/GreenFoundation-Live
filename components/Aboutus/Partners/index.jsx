import React from 'react'
import PartnersHeader from './PartnersHeader'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'
import Banner from './Banner'
import OurPartners from './OurPartners'
import { NextSeo } from 'next-seo'

import SeoTags from '@/components/SeoComponents/Seo';
import { usePathname } from 'next/navigation';

const index = () => {

  const pathname = usePathname();

  const pageTitle = "Green Foundation I Partners";
  const pageDescription = "Green Foundation takes pride in working with partners who share the same vision of conserving agrobiodiversity and building health, wealth and resilience of small farmers";
  const MetaImage = '';
  const url = `https://greenfoundation.in${pathname}`;

  return (
    <>

      <SeoTags pageTitle={pageTitle} pageDescription={pageDescription} MetaImage={MetaImage} url={url} />

      <Header />
      <PartnersHeader />
      <Banner />
      <OurPartners />
      <Footer />
    </>
  )
}

export default index