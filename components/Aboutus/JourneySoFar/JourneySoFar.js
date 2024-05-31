'use client'

import Link from 'next/link'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const JourneySoFar = () => {
    return (
        <>
            <Container fluid className='m-0 p-0' style={{ backgroundImage: 'url("/aboutus/journeysofar/Journey-So-Far_banner.jpeg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '400px' }}>
                <Row className='p-2 position-absolute' style={{ background: '#E8E8E8', display: 'inline-block' }}>
                    <Link href="/" className='text-decoration-none text-black'>Home </Link>
                    /
                    <Link href="/journey-so-far" className='text-decoration-none text-black'>About Us</Link>

                </Row>
                <Container className='d-flex justify-content-center align-items-center' style={{ height: '400px' }}>
                    <Row className='text-white'>
                        <h1>Journey So Far</h1>
                    </Row>
                </Container>
            </Container>

            <Container fluid style={{ background: '#F2F2F2' }} className='p-0 text-center'>
                <Container className='py-md-4 p-md-0 p-2'>
                    <Row className='w-100 p-0 mx-0'>
                        <Col md={4}>
                            <Image src='/aboutus/journeysofar/journey_left_img.png' alt='agri' fluid />
                        </Col>
                        <Col className='text-center w-100 pt-4 pt-md-0'>
                            <h4 className='border border-2 border-dark rounded-5 p-4 px-5 lh-base fs-3  w-100'>Our work to empower the small scale and marginal farmers of India first began in 1994 with a simple effort to distribute indigenous seed varieties in and around the village of Thalli, Tamil Nadu. This soon turned into a growing biodiversity conservation programme that has been central to our work ever since.</h4>
                            <p className='lh-base'>Side by side with farmers, a lot of research was conducted in the initial years to understand the various characteristics of indigenous seed varieties. Close to a 100 different varieties of minor millets, dry land paddy and oil seeds were tracked down and brought back to the farm at Thalli for further experimentation. Within a period of 3 years, the number of farmers we reached out to had increased from 5 to 105.</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default JourneySoFar