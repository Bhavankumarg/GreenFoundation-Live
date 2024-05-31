'use client'

import React from 'react'

import Link from 'next/link'
import posts from '../Data/newsevenetdata'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../custom.css'

import '../Style'


const NewsEventsLoopTemplate = () => {
    const rows = [];
    for (let i = 0; i < posts.length; i += 2) {
        const rowItems = [posts[i], posts[i + 1]].filter(Boolean); // Filter out undefined items
        rows.push(
            <div key={i / 2} className="row-english-loop-publication py-md-3 py-0">
                {rowItems.map((post) => (
                    <Row key={post.title} className="item-news-loop rounded-4 ">
                        <Link href={post.singpageUrl} className=''>
                            <Image src={post.image} alt={post.title} width="100%" />
                        </Link>

                        <h3 className='news-event-template-head'>{post.title}</h3>
                        <h6 className='text-green py-3'>{post.date}</h6>
                        <p className='news-event-template-excerpt'>{post.excerpt}</p>
                        <div className='news-event-btn-div'>
                            <Link href={post.singpageUrl} className='news-event-btn-loop d-flex'>Read More</Link>
                        </div>
                    </Row>
                ))
                }
            </div >
        );
    }
    return (
        <>
            <Container className="d-flex flex-wrap py-4">{rows}</Container>
        </>
    )
}

export default NewsEventsLoopTemplate