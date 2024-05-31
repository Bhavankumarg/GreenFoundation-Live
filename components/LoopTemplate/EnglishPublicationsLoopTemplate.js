'use client'

import React from 'react'

import Link from 'next/link'
import items from '../Data/englishdata'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../Style'

import '../custom.css'

const EnglishPublicationsLoopTemplate = () => {

    const rows = [];
    for (let i = 0; i < items.length; i += 2) {
        const rowItems = [items[i], items[i + 1]].filter(Boolean); // Filter out undefined items
        rows.push(
            <div key={i / 2} className="row-english-loop-publication py-md-3 py-0">
                {rowItems.map((item) => (
                    <Row key={item.title} className="item-english-loop rounded-4 ">
                        <Col>
                            <Image src={item.imageUrl} alt={item.title} width="100%" />
                        </Col>
                        <Col>
                            <h4 className='englis-publication-head-loop-font'>{item.title}</h4>
                            <p className='englis-publication-para-loop-font'>{item.excerpt}</p>
                        </Col>
                        <div className='english-pblication-btn'>
                            <Link href={item.pdfurl} target='_blank' className='englis-publication-btn-loop-font'>View PDF version</Link>
                        </div>
                    </Row>
                ))}
            </div>
        );
    }
    return (
        <>
            <Container className="d-flex flex-wrap py-4">{rows}</Container>
        </>
    )
}

export default EnglishPublicationsLoopTemplate