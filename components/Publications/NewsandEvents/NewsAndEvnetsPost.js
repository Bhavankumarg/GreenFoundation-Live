'use client'

import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import config from '../../../config.json';
import '../publications.css';
import Link from 'next/link';

const NewsAndEventsPost = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        try {
            let result = await fetch(`${config.apiDomain}posts?_embed&per_page=100`);
            result = await result.json();
            setData(result);
        } catch (error) {
            console.log('Error fetching data: ', error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const formatPublishedDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <>
            <style>
                {
                    `
                    .news-event-card {
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                    }

                    .news-event-card .flex-grow-1 {
                        flex-grow: 1;
                    }

                    .custom-img-news {
                        height:240px;
                    }

                    .excerpt {
                        display: -webkit-box;
                        -webkit-line-clamp: 4;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        height: calc(1.5em * 4); /* Assuming line-height is 1.5em, adjust if needed */
                    }

                    @media(max-width: 767px) {
                        height:auto !important;
                    }
                `
                }
            </style>
            <Container>
                <h1 className="pt-4 text-center" style={{ color: '#126634' }}>News & Events</h1>
                <Row className="d-flex flex-lg-row flex-column">
                    {data.map((story) => (
                        <Col key={story.id} md={6} className="align-self-lg-stretch p-4 d-flex">
                            <div className="news-event-card d-flex flex-column">
                                <Image src={story._embedded['wp:featuredmedia'][0].source_url} alt={story.title.rendered} fluid className='custom-img-news' />
                                <div className="py-2">
                                    <h4 dangerouslySetInnerHTML={{ __html: story.title.rendered }} />
                                </div>
                                <p style={{ fontSize: '11px', color: '#126634' }}>{formatPublishedDate(story.date)} | News & Events</p>
                                <div className="d-flex flex-column justify-content-between flex-grow-1">
                                    <div className="p-1">
                                        <p dangerouslySetInnerHTML={{ __html: story.excerpt.rendered }} className="font16px excerpt" />
                                    </div>
                                    <div>
                                        <Link href={`/${story.slug}`} className="text-decoration-none px-3 p-2 text-white rounded-2" style={{ background: '#2e6339', fontSize: '16px' }}>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default NewsAndEventsPost;



// 'use client'

// import React, { useEffect, useState } from 'react'
// import { Col, Container, Image, Row } from 'react-bootstrap';
// import config from '../../../config.json'
// import '../publications.css'
// import Link from 'next/link';

// const NewsAndEvnetsPost = () => {

//     const [data, setData] = useState([]);

//     const loadData = async () => {
//         try {
//             let result = await fetch(`${config.apiDomain}posts?_embed&per_page=100`);
//             result = await result.json();

//             setData(result);
//             // console.log(result);
//         } catch (error) {
//             console.log('Error fetching data: ', error);
//         }
//     };

//     useEffect(() => {
//         loadData();
//     }, []);

//     const formatPublishedDate = (dateString) => {
//         const options = { year: 'numeric', month: 'long', day: 'numeric' };
//         return new Date(dateString).toLocaleDateString(undefined, options);
//     };

//     return (
//         <>
//             <Container>
//                 <h1 className='pt-4 text-center' style={{ color: '#126634' }}>
//                     News & Events

//                 </h1>

//                 <Row className='d-flex flex-lg-row flex-column'>
//                     {data.map((story) => (

//                         <Col key={story.id} md={6} className='align-self-lg-stretch p-4' >
//                             <Image src={story._embedded['wp:featuredmedia'][0].source_url} alt={story.title.rendered} fluid />
//                             <div className='py-2'>
//                                 <h4 dangerouslySetInnerHTML={{ __html: story.title.rendered }} />
//                             </div>

//                             <p style={{ fontSize: '11px !important', color: '#126634' }}> {formatPublishedDate(story.date)} | News & Events</p>

//                             <div className='d-flex flex-column justify-content-between' style={{ maxHeight: '100%' }}>
//                                 <div className='p-1'>
//                                     <p dangerouslySetInnerHTML={{ __html: story.excerpt.rendered }}
//                                         className='font16px'
//                                     />
//                                 </div>

//                                 <div>
//                                     <Link
//                                         href={`/${story.slug}`}
//                                         className='text-decoration-none px-3 p-2 text-white rounded-2'
//                                         style={{ background: '#2e6339', fontSize: '16px' }}
//                                     >
//                                         Read More
//                                     </Link>
//                                 </div>
//                             </div>
//                         </Col>
//                     ))}
//                 </Row>
//             </Container >
//         </>
//     );
// };

// export default NewsAndEvnetsPost;