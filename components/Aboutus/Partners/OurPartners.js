'use client'

import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../aboutus.css'

const OurPartners = () => {
    return (
        <>
            <Container fluid className='py-5' style={{ background: '#E0E9D3' }}>
                <Container className='text-center'>
                    <p>GREEN Foundation, over the years, has worked with many partners who have supported us in our efforts to conserve agrobiodiversity and build health, wealth and resilience of small farmers. Through resources, research and on-ground support, our partners have added value to our work in protecting the interests of smallholder farmers.</p>

                    <Row className='d-flex flex-row justify-content-center align-items-center'>
                        <Col md={2} xs={6} className='m-md-2 p-3 '>
                            <Image src='/aboutus/partners/vrutti.svg' alt='' fluid />
                        </Col>
                        <Col md={2} xs={6} className='m-md-2 p-3'>
                            <Image src='/aboutus/partners/swasti.svg' alt='' fluid />
                        </Col>
                        <Col md={2} xs={6} className='m-md-2 p-3'>
                            <Image src='/aboutus/partners/cms.svg' alt='' fluid />
                        </Col>
                        <Col md={2} xs={6} className='m-md-2 p-3'>
                            <Image src='/aboutus/partners/fuzhio.svg' alt='' fluid />
                        </Col >
                        <Col md={2} xs={6} className='m-md-2 p-3'>
                            <Image src='/aboutus/partners/CG.svg' alt='' fluid />
                        </Col>
                        <Col md={2} xs={6} className='m-md-2 p-3'>
                            <Image src='/aboutus/partners/covid.svg' alt='' fluid />
                        </Col>
                        <Col md={1} xs={6} className='m-md-2 p-3'>
                            <Image src='/aboutus/partners/gha.svg' alt='' fluid />
                        </Col>
                        <Col md={2} xs={6} className='m-md-2 p-3'>
                            <Image src='/aboutus/partners/access_agri.svg' alt='' fluid />
                        </Col>
                        <Col md={3} xs={6} className='m-md-2 p-3'>
                            <Image src='/aboutus/partners/rra_network.svg' alt='' fluid />
                        </Col>
                        <Col md={1} xs={6} className='m-md-2 p-3'>
                            <Image src='/aboutus/partners/pgs.svg' alt='' fluid />
                        </Col>
                        <Col md={2} xs={6} className='m-md-2 p-3'>
                            <Image src='/aboutus/partners/rcrc.svg' alt='' fluid />
                        </Col>
                        <Col md={2} xs={6} className='m-md-2 p-3'>
                            <Image src='/aboutus/partners/ncnf.svg' alt='' fluid />
                        </Col>
                        <Col md={1} xs={6} className='m-md-2 p-3'>
                            <Image src='/aboutus/partners/open_university.svg' alt='' fluid />
                        </Col>
                        <Col md={2} xs={6} className='m-md-2 p-3'>
                            <Image src='/aboutus/partners/cabe.svg' alt='' fluid />
                        </Col>
                        <Col md={2} xs={6} className='m-md-2 p-3'>
                            <Image src='/aboutus/partners/svp.svg' alt='' fluid />
                        </Col>
                        <Col md={2} xs={6} className='m-md-2 p-3'>
                            <Image src='/aboutus/partners/united_way.svg' alt='' fluid />
                        </Col>
                        <Col md={1} xs={6} className='m-md-2 p-3'>
                            <Image src='/aboutus/partners/ahc.svg' alt='' fluid />
                        </Col>
                        <Col md={2} xs={6} className='m-md-2 p-3'>
                            <Image src='/aboutus/partners/step.png' alt='' width={120} fluid />
                        </Col>
                        <Col md={1} xs={6} className='m-md-2 p-3'>
                            <Image src='/aboutus/partners/janadhanya.svg' alt='' fluid />
                        </Col>


                    </Row>
                </Container>


            </Container>
        </>
    )
}

export default OurPartners