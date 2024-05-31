import React from 'react'
import OurTeamHeader from './OurTeamHeader'

import Header from '../../../components/shared/Header'
import Footer from '../../../components/shared/Footer'

import '../../Style'
import CoreTeam from './CoreTeam'
import Banner from '../OurTeam/Banner'
import { NextSeo } from 'next-seo'

import SeoTags from '@/components/SeoComponents/Seo';
import { usePathname } from 'next/navigation';

const index = () => {

  const pathname = usePathname();

  const pageTitle = "Core team - Green Foundation";
  const pageDescription = "Our Core team is built on the foundation of years of experience and expertise and brings with it immense knowledge and understanding on how to build communities.";
  const MetaImage = '';
  const url = `https://greenfoundation.in${pathname}`;

  return (
    <>

      <SeoTags pageTitle={pageTitle} pageDescription={pageDescription} MetaImage={MetaImage} url={url} />

      <Header />
      <OurTeamHeader />
      <Banner />
      <CoreTeam />
      <Footer />
    </>
  )
}

export default index