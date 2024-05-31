import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import '../../Style'
import KitchenHeader from './KitchenHeader'
import KitchenBanner from './KitchenBanner'
import KitchenContent from './KitchenContent'
import { NextSeo } from 'next-seo'



import SeoTags from '@/components/SeoComponents/Seo';
import { usePathname } from 'next/navigation';

const index = () => {

  const pathname = usePathname();

  const pageTitle = "Kitchen and Community Gardens";
  const pageDescription = "Our Initiative of setting up over 950 kitchen and community gardens throughout Karnataka by providing resources and training has helped many farmers";
  const MetaImage = '';
  const url = `https://greenfoundation.in${pathname}`;

  return (
    <>

      <SeoTags pageTitle={pageTitle} pageDescription={pageDescription} MetaImage={MetaImage} url={url} />


      <Header />
      <KitchenHeader />
      <KitchenBanner />
      <KitchenContent />
      <Footer />
    </>
  )
}

export default index