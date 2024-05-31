import React from 'react'

import Header from '../../../components/shared/Header'
import Footer from '../../../components/shared/Footer'

import '../../Style'
import AwardsHeader from './AwardsHeader'
import AwardsBanner from './AwardsBanner'
import Awards from './Awards'
import { NextSeo } from 'next-seo'

import SeoTags from '@/components/SeoComponents/Seo';
import { usePathname } from 'next/navigation';

const index = () => {

  const pathname = usePathname();

  const pageTitle = "Recognition that reinforces our mission";
  const pageDescription = "Our work in building communities through agro biodiversity conversation has won us many accolades and awards The recognition is proof we are heading in the right direction";
  const MetaImage = '';
  const url = `https://greenfoundation.in${pathname}`;

  return (
    <>

      <SeoTags pageTitle={pageTitle} pageDescription={pageDescription} MetaImage={MetaImage} url={url} />

      <Header />
      <AwardsHeader />
      <AwardsBanner />
      <Awards />
      <Footer />
    </>
  )
}

export default index