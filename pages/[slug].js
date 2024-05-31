
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Col, Container, Image, Row } from 'react-bootstrap';
import Link from 'next/link';

import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer';
import { NextSeo } from 'next-seo';

import config from '../config.json'



export default function Page() {
    const router = useRouter()
    const [data, setData] = useState([]);
    const slug = router.query.slug;

    const URL_SEO = `${config.apiDomain}posts/${slug}&_embed`;


    const FetchPost = async () => {
        const URL_Fetchpost = `${config.apiDomain}posts?&slug=${slug}&_embed=1`;
        // const url = `https://beta.greenfoundation.in/wp-json/wp/v2/posts?&slug=${slug}&_embed`;
        let result = await fetch(URL_Fetchpost);
        result = await result.json();
        setData(result);
        // console.log(result);

    }

    console.log()

    useEffect(() => {

        FetchPost();
    }, [slug])


    const formatPublishedDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <>
            <Header />

            <Container fluid className='w-100'>
                <Container className='py-5 p-0'>

                    {/* Yoast SEO */}
                    <div>
                        {data.map((item) => (
                            <div key={item.id}>
                                {/* Other post details */}
                                <NextSeo
                                    title={item.yoast_head_json?.title}
                                    description={item.yoast_head_json?.description}
                                    canonical={URL_SEO}
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

                    <Link href='/news-and-events' className='d-flex flex-md-row flex-column gap-3 justify-md-content-start align-content-center align-items-center text-decoration-none '>
                        <Image src='/publications/our-stories/back_to_stories_icon_green.svg' alt='' />
                        <h5 className='p-0 m-0 text-green fw-bolder'>Back to News & Events</h5>
                    </Link>


                    <hr className='my-4' />

                    <Row className='p-0 '>
                        <Col md={8} className='d-flex flex-column gap-2'>

                            {data.map((items) => (
                                <div key={items.id}>
                                    <Image src={items._embedded['wp:featuredmedia'][0].source_url} alt={items.title.rendered} fluid />
                                    <div className='py-2'>
                                        <h1 className='fs-3' dangerouslySetInnerHTML={{ __html: items.title.rendered }} />
                                    </div>

                                    <p style={{ fontSize: '11px !important', color: '#126634' }}> {formatPublishedDate(items.date)} </p>

                                    {/* <p dangerouslySetInnerHTML={{ __html: items.content.rendered }} /> */}
                                    {/* <div dangerouslySetInnerHTML={{ __html: items.content.rendered.replace(/http:\/\/localhost:3000/g, config.apiDomain) }} /> */}
                                    <div dangerouslySetInnerHTML={{ __html: items.content.rendered }} />

                                    {/* <p>
                                        {items.content.rendered}
                                    </p> */}
                                </div>
                            ))}
                        </Col>


                        <Col className='py-md-0 py-5'>
                            <h2>Related</h2>
                        </Col>
                    </Row>
                </Container>
            </Container>



            <Footer />
        </>
    )
}
