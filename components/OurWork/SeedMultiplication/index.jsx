import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import '../../Style'
import SeedHeader from './SeedHeader'
import SeedBanner from './SeedBanner'
import SeedContent from './SeedContent'
import { NextSeo } from 'next-seo'

import SeoTags from '@/components/SeoComponents/Seo';
import { usePathname } from 'next/navigation';

const index = () => {

  const pathname = usePathname();

  const pageTitle = "Seed Multiplication";
  const pageDescription = "Seed multiplication is important in that it helps enrich the biodiversity of a local area by making available many indigenous seed varieties Learn more";
  const MetaImage = '';
  const url = `https://greenfoundation.in${pathname}`;

  return (
    <>

      <SeoTags pageTitle={pageTitle} pageDescription={pageDescription} MetaImage={MetaImage} url={url} />

      <Header />
      <SeedHeader />
      <SeedBanner />
      <SeedContent />
      <Footer />
    </>
  )
}

export default index