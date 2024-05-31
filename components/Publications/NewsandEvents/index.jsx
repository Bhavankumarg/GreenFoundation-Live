import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
// import NewsEventsLoopTemplate from '@/components/LoopTemplate/NewsEventsLoopTemplate'
import { NextSeo } from 'next-seo'
import NewsAndEvnetsPost from './NewsAndEvnetsPost'

import SeoTags from '@/components/SeoComponents/Seo';
import { usePathname } from 'next/navigation';

const index = () => {

  const pathname = usePathname();

  const pageTitle = "News and Events - Green Foundation";
  const pageDescription = "Explore our website for the latest news and events, offering a curated selection of informative content to keep you engaged and informed.";
  const MetaImage = '';
  const url = `https://greenfoundation.in${pathname}`;

  return (
    <>

      <SeoTags pageTitle={pageTitle} pageDescription={pageDescription} MetaImage={MetaImage} url={url} />

      <Header />
      <NewsAndEvnetsPost />
      {/* <NewsEventsLoopTemplate /> */}
      <Footer />
    </>
  )
}

export default index