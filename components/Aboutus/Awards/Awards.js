'use client'

import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'

const Awards = () => {
    return (
        <>
            <Container fluid style={{ background: '#F2F2F2' }}>
                <Container className='py-5'>
                    <Row className='d-flex flex-wrap justify-content-evenly gap-md-0 gap-3'>
                        <Col md={3}>
                            <Image src='/aboutus/awards-recog/awards_2004.png' alt='' width="100%" />
                            <h4 className='mt-3'><b>EQUATOR Initiative Award 2004</b></h4>
                            <p>For its pioneering work GREEN Foundation received the EQUATOR Initiative Award 2004 in recognition of their…</p>
                            <Button href='https://www.equatorinitiative.org/2017/05/28/genetic-resource-energy-ecology-and-nutrition-green-foundation/' target='_blank' className='award-know-btn border-0'>
                                <h5 className='m-0 px-3'><b>Know more</b></h5>
                            </Button>
                        </Col>

                        <Col md={3}>
                            <Image src='/aboutus/awards-recog/awards_2010_11.png' alt='' width="100%" />
                            <h4 className='mt-3'><b>ROTARY Service Award 2010-11</b></h4>
                            <p>ROTARY Service Award 2010-11 for excellence among voluntary organisation working in Environment Conservation.</p>
                            <Button href='https://www.deccanherald.com/content/115106/green-foundation-wins-rotary-service.html' target='_blank' className='award-know-btn border-0'>
                                <h5 className='m-0 px-3 border-0'><b>Know more</b></h5>
                            </Button>
                        </Col>

                        <Col md={3}>
                            <Image src='/aboutus/awards-recog/green_globe_award.png' alt='' width="100%" />
                            <h4 className='mt-3'><b>GREEN GLOBE Foundation Awards, 2011</b></h4>
                            <p>GREEN GLOBE Foundation Awards, 2011 for extraordinary work by an Non Governmental…</p>
                            <Button href='' target='_blank' className='award-know-btn border-0'>
                                <h5 className='m-0 px-3'>Know More</h5>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Awards