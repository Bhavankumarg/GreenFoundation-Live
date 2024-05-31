
'use client'

import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import config from '../../../config.json'
import '../publications.css'
import Link from 'next/link';

const NewsAndEvnetsPost = () => {

    const [data, setData] = useState([]);

    // const URL = `${config.apiDomain}/posts?_embed&posts_per_page=-1`;

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('https://beta.greenfoundation.in/wp-json/wp/v2/posts');
    //             const posts = response.data;

    //             setImpactStories(posts);
    //             console.log(posts);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchData();
    // }, []);


    const loadData = async () => {
        try {
            let result = await fetch(`${config.apiDomain}posts?_embed&per_page=100`);
            result = await result.json();

            setData(result);
            console.log(result);
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
            <Container>
                <h1 className='pt-4 text-center' style={{ color: '#126634' }}>
                    News & Events

                </h1>

                <Row className='d-flex flex-lg-row flex-column'>
                    {data.map((story) => (

                        <Col key={story.id} md={6} className='align-self-lg-stretch p-4' >
                            <Image src={story._embedded['wp:featuredmedia'][0].source_url} alt={story.title.rendered} fluid />
                            <div className='py-2'>
                                <h4 dangerouslySetInnerHTML={{ __html: story.title.rendered }} />
                            </div>

                            <p style={{ fontSize: '11px !important', color: '#126634' }}> {formatPublishedDate(story.date)} | News & Events</p>

                            <div className='p-1'>
                                <p dangerouslySetInnerHTML={{ __html: story.excerpt.rendered }}
                                    className='font16px'
                                />
                            </div>

                            <Link
                                href={`/${story.slug}`}
                                className='text-decoration-none px-3 p-2 text-white rounded-2'
                                style={{ background: '#2e6339', fontSize: '16px' }}
                            >
                                Read More
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container >
        </>
    );
};

export default NewsAndEvnetsPost;