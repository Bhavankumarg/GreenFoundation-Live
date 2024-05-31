'use client'

import Link from 'next/link'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../custom.css'

const NewsandEvents = () => {
    return (
        <>

            <Container fluid className=' my-md-5 my-3' style={{ background: '#f8d790', height: 60 }}>

            </Container>

            <Container className='p-md-0 p-2 py-md-5 py-2 text-center w-100'>
                <h2 className='pb-3'>News & Events</h2>
                <Row className='d-flex flex-md-row flex-column text-start gap-md-0 gap-4'>
                    <Col md={6} >
                        <Image src='/publications/news-and-events/organic_farming_certification_meet_img.png' alt='' fluid />
                        <Link href="https://greenfoundation.in/organic-farming-certification-pgs-meet/" className='text-decoration-none text-black'><h3>Organic Farming Certification: PGS Meet</h3></Link>
                        <h6 className='text-green py-2'>November 22, 2011| News & Events</h6>
                        <h6 className='lh-base'>
                            The PGS Meet at Maralawadi Hobli, facilitated by GREEN on 25th August, aimed to raise awareness of organic farming certification in the project area, with the objective of increasing the number of certified farmers…
                        </h6>

                        <Link href="https://greenfoundation.in/organic-farming-certification-pgs-meet/" className='text-decoration-none text-black'><h6 className='bg-green text-white d-inline p-2 rounded-2'>Read More</h6></Link>

                    </Col>

                    <Col md={6} >
                        <Image src='/publications/news-and-events/food_from_your_garden_img.png' alt='' fluid />
                        <Link href="/food-from-your-garden-oota-from-thota/" className='text-decoration-none text-black'><h3>Food from Your Garden: ‘Oota from Thota’</h3></Link>
                        <h6 className='text-green py-2'>November 24, 2011 | News & Events</h6>
                        <h6 className='lh-base'>
                            A growing number of people in urban cities and towns are looking to adopt a healthier, better rounded lifestyle. Many are increasingly becoming aware of the benefits of organically grown produce and are enthusiastic…
                        </h6>

                        <Link href="/food-from-your-garden-oota-from-thota/" className='text-decoration-none text-black'><h6 className='bg-green text-white d-inline p-2 rounded-2'>Read More</h6></Link>
                    </Col>

                    <Col md={6} className='py-md-5'>
                        <Image src='/publications/news-and-events/sustainability_in_organic_farming_certification_img.png' alt='' fluid />
                        <Link href="/sustainability-in-organic-farming-certification/" className='text-decoration-none text-black'><h3>Sustainability in Organic Farming Certification</h3></Link>
                        <h6 className='text-green py-2'>December 27, 2011 | News & Events</h6>
                        <h6 className='lh-base'>
                            Recently, GREEN hosted a farmers’ meet in Kanakapura, for community members seeking organic farming certification through the Participatory Guarantee System (PGS).
                        </h6>
                        <Link href="/sustainability-in-organic-farming-certification/" className='text-decoration-none text-black'><h6 className='bg-green text-white d-inline p-2 rounded-2'>Read More</h6></Link>
                    </Col>

                    <Col md={6} className='py-md-5'>
                        <Image src='/publications/news-and-events/training_assesment.png' alt='' fluid />
                        <Link href="/training-on-assessment-of-climate-change-vulnerability-and-adaptation-strategies/" className='text-decoration-none text-black'><h3>Training on Assessment of Climate Change Vulnerability and Adaptation Strategies</h3></Link>
                        <h6 className='text-green py-2'>January 13, 2012 | News & Events</h6>
                        <h6 className='lh-base'>
                            The great body of research in the international community clearly highlights the gradual change in the earth’s atmospheric conditions and the impact this will have on human livelihoods. However, for millions of the world’s impoverished and disenfranchised, 75% of whom live…
                        </h6>
                        <Link href="/training-on-assessment-of-climate-change-vulnerability-and-adaptation-strategies/" className='text-decoration-none text-black'><h6 className='bg-green text-white d-inline p-2 rounded-2'>Read More</h6></Link>
                    </Col>
                </Row>
                <Col className='text-start mt-3'>
                    <Link href="/news-and-events/" className='text-decoration-none'>
                        <h6 className='text-green fw-bolder d-inline p-2 rounded-2'>
                            View All
                        </h6>
                    </Link>
                </Col>

            </Container>
        </>
    )
}

export default NewsandEvents