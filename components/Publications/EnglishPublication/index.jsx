import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'

import EnglishPublicationsLoopTemplate from '@/components/LoopTemplate/EnglishPublicationsLoopTemplate'
import EnglishPublicationHeader from './EnglishPublicationHeader'
import { NextSeo } from 'next-seo'


import SeoTags from '@/components/SeoComponents/Seo';
import { usePathname } from 'next/navigation';

const index = () => {

  const pathname = usePathname();

  const pageTitle = "English Publication - Green Foundation";
  const pageDescription = "";
  const MetaImage = '';
  const url = `https://greenfoundation.in${pathname}`;

  return (
    <>

      <SeoTags pageTitle={pageTitle} pageDescription={pageDescription} MetaImage={MetaImage} url={url} />

      <Header />
      <EnglishPublicationHeader />
      <EnglishPublicationsLoopTemplate />
      <Footer />
    </>
  )
}

export default index