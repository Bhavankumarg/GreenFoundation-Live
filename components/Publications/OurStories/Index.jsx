import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import '../../Style'
import OurStoriesLoopTemplate from '@/components/LoopTemplate/OurStoriesLoopTemplate'
import { NextSeo } from 'next-seo'

import SeoTags from '@/components/SeoComponents/Seo';
import { usePathname } from 'next/navigation';

const index = () => {

  const pathname = usePathname();

  const pageTitle = "Stories of successful farmers that reiterate resilience";
  const pageDescription = "Impacting the lives of farmers from diverse backgrounds has been fulfilling. Our stories of success make us proud and inspire us to commit to the community even more.";
  const MetaImage = '';
  const url = `https://greenfoundation.in${pathname}`;

  return (
    <>

      <SeoTags pageTitle={pageTitle} pageDescription={pageDescription} MetaImage={MetaImage} url={url} />

      <Header />
      <OurStoriesLoopTemplate />
      <Footer />
    </>
  )
}

export default index