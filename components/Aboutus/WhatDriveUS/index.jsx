import React from 'react'
import WhatDriveHeader from './WhatDriveHeader'

import Header from '../../shared/Header/Navbar'
import Footer from '../../shared/Footer'

import '../../Style'

import WhatDriveUs from './WhatDriveUsBanner'
import Content from './Content'
import TabsFunction from './TabsFunction'
import EconomicReason from './EconomicReason'
import PoliticalReasons from './PoliticalReasons'
import SeekingLegislativeSupport from './SeekingLegislativeSupport'
import RaisingAwareness from './RaisingAwareness'
import WomenEmpowerment from './WomenEmpowerment'
import { NextSeo } from 'next-seo'


import SeoTags from '@/components/SeoComponents/Seo';
import { usePathname } from 'next/navigation';

const index = () => {

  const pathname = usePathname();

  const pageTitle = "Why We Do This - Green Foundation";
  const pageDescription = "Our reasons to build the community for farmers range from Ecological to Economic, and from Political to raising awareness about it. Learn more.";
  const MetaImage = '';
  const url = `https://greenfoundation.in${pathname}`;

  return (
    <>

      <SeoTags pageTitle={pageTitle} pageDescription={pageDescription} MetaImage={MetaImage} url={url} />

      <Header />
      <WhatDriveHeader />
      <WhatDriveUs />
      <Content />
      <TabsFunction />
      <EconomicReason />
      <PoliticalReasons />
      <SeekingLegislativeSupport />
      <RaisingAwareness />
      <WomenEmpowerment />
      <Footer />
    </>
  )
}

export default index