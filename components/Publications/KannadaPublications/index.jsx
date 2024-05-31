import React from 'react'

import Header from '@/components/shared/Header/Navbar'
import Footer from '@/components/shared/Footer/Footer'

import '../../Style'
import Head from 'next/head'
import KannadaPublicationHeader from './KannadaPublicationHeader'
import KannadaPublicationsContent from './KannadaPublicationsContent'
import { NextSeo } from 'next-seo'


import SeoTags from '@/components/SeoComponents/Seo';
import { usePathname } from 'next/navigation';

const index = () => {

  const pathname = usePathname();

  const pageTitle = "Kannada Publication - Green Foundation";
  const pageDescription = "";
  const MetaImage = '';
  const url = `https://greenfoundation.in${pathname}`;

  return (
    <>

      <SeoTags pageTitle={pageTitle} pageDescription={pageDescription} MetaImage={MetaImage} url={url} />

      <Header />
      <KannadaPublicationHeader />
      <KannadaPublicationsContent />
      <Footer />
    </>
  )
}

export default index