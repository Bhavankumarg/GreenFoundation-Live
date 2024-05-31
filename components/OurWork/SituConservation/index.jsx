import React from 'react'

import SituHeader from './SituHeader'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import '../../Style'
import SituBanner from './SituBanner'
import SituContent from './SituContent'
import { NextSeo } from 'next-seo'

import SeoTags from '@/components/SeoComponents/Seo';
import { usePathname } from 'next/navigation';

const index = () => {

  const pathname = usePathname();

  const pageTitle = "Green Foundation I In-Situ Conservation";
  const pageDescription = "Conservation of indigenous seed varieties has been at the core of the Foundation’s work Learn more about seed multiplication and our approach through in situ and ex situ conservation";
  const MetaImage = '';
  const url = `https://greenfoundation.in${pathname}`;

  return (
    <>

      <SeoTags pageTitle={pageTitle} pageDescription={pageDescription} MetaImage={MetaImage} url={url} />

      <Header />
      <SituHeader />
      <SituBanner />
      <SituContent />
      <Footer />
    </>
  )
}

export default index