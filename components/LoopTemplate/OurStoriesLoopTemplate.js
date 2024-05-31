'use client'

import React from 'react'
import slugify from 'slugify';

import items from '../Data/ourstoriesdata';
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../Style'

import '../custom.css'

import Link from 'next/link';
const OurStoriesLoopTemplate = () => {

    const rows = [];
    for (let i = 0; i < items.length; i += 2) {
        const rowItems = [items[i], items[i + 1]].filter(Boolean); // Filter out undefined items
        rows.push(
            <div key={i / 2} className="row-english-loop-publication py-0">
                {rowItems.map((item) => (
                    <Row key={item.title} className="item-englsih-loop rounded-4" >
                        <Col>
                            <Link href={`/our_stories/${slugify(item.title, { lower: true })}`}>
                                <Image src={item.image} alt='' width={240} height={240} />
                            </Link>
                        </Col>
                        <Col>
                            <Link href={`/our_stories/${slugify(item.title, { lower: true })}`}>
                            </Link>
                            <div>
                                <h4 className='our-stories-head-loop-font'>{item.title}</h4>
                                <p className='our-stories-para-loop-font'> {item.excerpt}</p>
                            </div>
                        </Col>
                        <div className='english-pblication-btn'>
                            <Link href={`/our_stories/${slugify(item.title, { lower: true })}`} className='text-decoration-none'>
                                <h6 className='our-storis-btn-loop-font rounded-1'>Read More</h6>
                            </Link>
                        </div>
                    </Row>
                ))}
            </div>
        );
    }
    return (
        <>
            <h1 className='text-green text-center py-4'>Stories from the field</h1>

            <Container className="d-flex flex-wrap py-2 p-0" style={{}}>{rows}</Container>;

            {/* 
            <Container className='d-flex flex-md-row flex-column pb-4 p-0'>
                {posts.map(post => (
                    <Row key={post.title} className='m-2 p-3 rounded-4 d-flex flex-md-row flex-column' style={{ background: '#f0f0f0' }}>
                        <Col>
                            <Link href={`/our_stories/${slugify(post.title, { lower: true })}`}>
                                <Image src={post.image} alt='' width="100%" />
                            </Link>
                        </Col>
                        <Col>
                            <Link href={`/our_stories/${slugify(post.title, { lower: true })}`}>
                            </Link>
                            <div>
                                <h4 className='our-stories-head-loop-font'>{post.title}</h4>
                                <p className='our-stories-para-loop-font'> {post.excerpt}</p>
                            </div>
                        </Col>

                        <Link href={`/our_stories/${slugify(post.title, { lower: true })}`} className='text-decoration-none'>
                            <h6 className='our-storis-btn-loop-font rounded-1'>Read More</h6>
                        </Link>
                    </Row>
                ))}
            </Container> */}
        </>
    )
}

export default OurStoriesLoopTemplate