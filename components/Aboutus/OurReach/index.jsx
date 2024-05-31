import React from 'react'

import Header from '@/components/shared/Header/Navbar'
import Footer from '@/components/shared/Footer/Footer'

import '../../Style'
import OurReachHeader from './OurReachHeader'
import OurReach from '@/components/Home/OurReach'
import { NextSeo } from 'next-seo'

import SeoTags from '@/components/SeoComponents/Seo';
import { usePathname } from 'next/navigation';

const index = () => {

  const pathname = usePathname();

  const pageTitle = "Impacting farmers across India";
  const pageDescription = "At Green Foundation, we have been impacting the lives of farmers acorss the states of Karnataka, Tamil Nadu, Madhya Pradesh and Chhattisgarh and will continue to reach to more";
  const MetaImage = '';
  const url = `https://greenfoundation.in${pathname}`;

  return (
    <>

      <SeoTags pageTitle={pageTitle} pageDescription={pageDescription} MetaImage={MetaImage} url={url} />

      <Header />
      <OurReachHeader />
      <OurReach />
      <Footer />
    </>
  )
}

export default index