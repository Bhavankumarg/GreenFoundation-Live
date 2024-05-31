import React from 'react'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import MarketingExhibition from './MarketingExhibition'

import '../../Style'
import { NextSeo } from 'next-seo'

const index = () => {
  return (
    <>

            <NextSeo
                title="Marketing, Exhibition and Events 2018 - Green Foundation"
                description="We have taken many activities in order to create market linkages with GF farmer’s products which are produced by different producer groups from gross root level We participated in sale cum exhibition event at different places in Bangalore One of the programmes was"
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'Marketing, Exhibition and Events 2018 - Green Foundation',
                    description: 'We have taken many activities in order to create market linkages with GF farmer’s products which are produced by different producer groups from gross root level We participated in sale cum exhibition event at different places in Bangalore One of the programmes was',
                    images: [
                        {
                            url: '/news-and-events/marketing_exhibition_and_events_news_event_img_3.png',
                            width: 800,
                            height: 600,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        {
                            url: '/news-and-events/marketing_exhibition_and_events_news_event_img_3.png',
                            width: 900,
                            height: 800,
                            alt: 'green foundation img',
                            type: 'image/jpeg',
                        },
                        { url: '/news-and-events/marketing_exhibition_and_events_news_event_img_3.png' },
                        { url: '/news-and-events/marketing_exhibition_and_events_news_event_img_3.png' },
                    ],
                    siteName: 'SiteName',
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />

    <Header />
    <MarketingExhibition />
    <Footer />
    </>
  )
}

export default index