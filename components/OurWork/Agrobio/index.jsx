'use client'
import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer/'

import '../../Style'

import AgroHeader from './AgroHeader'
import AgroBanner from './AgroBanner'
import AgroContent from './AgroContent'
import { NextSeo } from 'next-seo'

import SeoTags from '@/components/SeoComponents/Seo';
import { usePathname } from 'next/navigation';

const Agro = () => {

  const pathname = usePathname();

  const pageTitle = "Seed Banks: Preserving Agrobiodiversity";
  const pageDescription = "Empowering communities to conserve biological diversity practice sustainable agriculture through community seed banks GREEN s pioneering efforts inspire nationwide impact";
  const MetaImage = '';
  const url = `https://greenfoundation.in${pathname}`;

  return (
    <>

      <SeoTags pageTitle={pageTitle} pageDescription={pageDescription} MetaImage={MetaImage} url={url} />

      <Header />
      <AgroHeader />
      <AgroBanner />
      <AgroContent />
      <Footer />
    </>

  )
}

export default Agro