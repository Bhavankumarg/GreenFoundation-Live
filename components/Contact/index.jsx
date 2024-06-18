import React from 'react'

import Header from '../shared/Header/Navbar'
import Footer from '../shared/Footer/Footer'

import '../Style'
import ContactForm from './ContactForm'
import { NextSeo } from 'next-seo'
import AutoLayoutExample from './Contactus'
import Contact7Form from './Contact7Form'
import WebsiteSchema from './WebsiteSchema'

const index = () => {
  return (
    <>
      <NextSeo
        title="Contact - Green Foundation"
        description=""
        canonical="https://greenfoundation.in/contact-us"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Contact - Green Foundation',
          description: '',
          images: [
            {
              url: '',
              width: 800,
              height: 600,
              alt: 'Contact',
              type: 'image/jpeg',
            },
            {
              url: '',
              width: 900,
              height: 800,
              alt: 'Contact',
              type: 'image/jpeg',
            },
            { url: '' },
            { url: '' },
          ],
          siteName: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <WebsiteSchema/>
      <Header />
      <ContactForm />
      {/* <AutoLayoutExample /> */}

      {/* <Contact7Form /> */}
      <Footer />
    </>
  )
}

export default index