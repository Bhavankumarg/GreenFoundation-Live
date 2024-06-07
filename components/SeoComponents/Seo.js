'use client'
import React from 'react'
import Head from 'next/head';





function SeoTags({ pageTitle, pageDescription, MetaImage, url, }) {


    // const pageTitle = "Resolving complex problems and ensuring workforce well-being";
    // const pageDescription = "Ensuring social development opportunities for front line workers by creating impactful collaborations, empowering workforces and promoting social security.";
    // const MetaImage = '/images/apparel_banner.jpeg';
    // const url = "https://upfront.global/how-we-work";

    const structuredData = {
        "@context": "https://schema.org/",
        "@type": "website",
        "name": "greenfoundation",
        "url": `https://greenfoundation.in/`,
        "potentialAction": {
            "@type": "SearchAction",
            "target": `${url}/{ search_term_string }`,
            "query-input": "required name=search_term_string"
        }
    };


    return (
        <>
            <Head>
                {/* <!-- HTML Meta Tags --> */}
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription}></meta>
                <meta http-equiv="content-language" content="en"></meta>
                <meta name="robots" content="index,follow"></meta>
                <link rel="canonical" href={url} />
                {/* <!-- Google / Search Engine Tags --> */}
                <meta itemprop="name" content={pageTitle}></meta>
                <meta itemprop="description" content={pageDescription}></meta>
                <meta itemprop="image" content={MetaImage}></meta>

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content={url}></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content={pageTitle}></meta>
                <meta property="og:description" content={pageDescription}></meta>
                <meta property="og:image" content=""></meta>

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="twitter:title" content={pageTitle}></meta>
                <meta name="twitter:description" content={pageDescription}></meta>
                <meta name="twitter:image" content={MetaImage}></meta>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head >
        </>
    )
}

export default SeoTags
