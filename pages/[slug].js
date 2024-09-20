import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Link from 'next/link';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import { NextSeo } from 'next-seo';
import GoogleAnalyticsFile from '@/components/GoogleAnalyticsFile';
import config from '../config.json';
import WebsiteSchema from './our_stories/WebsiteSchema';
export default function Page({ data }) {
    const URL_SEO = `${config.apiDomain}posts/${data[0]?.slug}&_embed`;

    const formatPublishedDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <>  
            <WebsiteSchema/>
            <Header />
            <GoogleAnalyticsFile/>
            <Container fluid className="w-100">
                <Container className="py-5 p-0">
                    {/* Yoast SEO */}
                    <div>
                        {data.map((item) => (
                            <div key={item.id}>
                                <NextSeo
                                    title={item.yoast_head_json?.title}
                                    description={item.yoast_head_json?.description}
                                    canonical={`https://greenfoundation.in/${item.slug}`}
                                    openGraph={{
                                        title: item.yoast_head_json?.title,
                                        description: item.yoast_head_json?.description,
                                        url: URL_SEO,
                                        images: [
                                            {
                                                url: item._embedded['wp:featuredmedia'][0].source_url,
                                                width: 800,
                                                height: 600,
                                                alt: item.title?.rendered,
                                            },
                                        ],
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    <Link href="/news-and-events" className="d-flex flex-md-row flex-column gap-3 justify-md-content-start align-content-center align-items-center text-decoration-none">
                        <Image src="/publications/our-stories/back_to_stories_icon_green.svg" alt="" />
                        <h5 className="p-0 m-0 text-green fw-bolder">Back to News & Events</h5>
                    </Link>

                    <hr className="my-4" />

                    <Row className="p-0">
                        <Col md={8} className="d-flex flex-column gap-2">
                            {data.map((items) => (
                                <div key={items.id}>
                                    <Image src={items._embedded['wp:featuredmedia'][0].source_url} alt={items.title.rendered} fluid />
                                    <div className="py-2">
                                        <h1 className="fs-3" dangerouslySetInnerHTML={{ __html: items.title.rendered }} />
                                    </div>

                                    <p style={{ fontSize: '11px !important', color: '#126634' }}> {formatPublishedDate(items.date)} </p>

                                    <div dangerouslySetInnerHTML={{ __html: items.content.rendered }} />
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Footer />
        </>
    );
}

// Fetch data server-side
export async function getServerSideProps(context) {
    const { slug } = context.params;
    const url = `https://beta.greenfoundation.in/wp-json/wp/v2/posts?slug=${slug}&_embed`;
    const res = await fetch(url);
    const data = await res.json();

    // If no data is found, redirect to the 404 page
    if (!data || data.length === 0) {
        return {
            notFound: true, // This triggers the Next.js 404 page
        };
    }

    return {
        props: {
            data,
        },
    };
}
