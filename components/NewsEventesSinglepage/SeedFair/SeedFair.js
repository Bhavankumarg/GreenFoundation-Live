import Link from 'next/link'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../../custom.css'
import { NextSeo } from 'next-seo'

const SeedFair = () => {
    return (
        <>
            <Container fluid className='w-100'>
                <Container className='py-5 p-0'>
                    <Link href='/news-and-events' className='d-flex flex-md-row flex-column gap-3 justify-md-content-start align-content-center align-items-center text-decoration-none '>
                        <Image src='/publications/our-stories/back_to_stories_icon_green.svg' alt='' />
                        <h5 className='p-0 m-0 text-green fw-bolder'>Back to News & Events</h5>
                    </Link>

                    <hr className='my-4' />

                    <Row className='p-0 '>
                        <Col md={8} className='d-flex flex-column gap-2'>
                            <Image src='/news-and-events/seed_fair_news_event_img_2.png' alt='' fluid />
                            <h3>Seed Fair</h3>
                            <h6 className='text-green'>March 12, 2019</h6>
                            <p>Traditional seed fair was celebrated in Tamil Nadu, Pudukkottai district on 08-05-2018.GREEN Foundation and Vrutti jointly worked with three FPOs to set up a Community Seed Bank called Makarantham Community Seed Bank. Makarantham CSB members fully participated and…</p>
                        </Col>


                        <Col className='py-md-0 py-5'>
                            <h2>Related</h2>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default SeedFair