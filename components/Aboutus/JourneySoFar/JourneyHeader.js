'use client'

import Link from 'next/link'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../aboutus.css'

const JourneyHeader = () => {
    return (
        <Container fluid className='sticky-top bg-white z-0 custom-about-menu-header '>
            <div className='custom-row'>
                <Col className='about-tap-bg m-2 p-2 '>
                    <Link href="/journey-so-far" className='text-decoration-none d-flex flex-row '>
                        <Image src='/aboutus/menu-icons/journey_white.svg' fill alt='' />
                        <h6 className='m-0 p-2 text-white'>Journey So Far</h6>
                    </Link>
                </Col>
                <Col className='m-2 p-2 border border-1 border-dark rounded'>
                    <Link href="/why-we-do-this" className='text-decoration-none d-flex flex-row '>
                        <Image src='/aboutus/menu-icons/function-1.svg' alt='' />
                        <h6 className='m-0 p-2 text-dark'>What Drives Us</h6>
                    </Link>
                </Col>
                <Col className='m-2 p-2 border border-1 border-dark rounded'>
                    <Link href="/our-reach" className='text-decoration-none d-flex flex-row '>
                        <Image src='/aboutus/menu-icons/network.svg' alt='' />
                        <h6 className='m-0 p-2 text-dark'>Our Reach</h6>
                    </Link>
                </Col>
                <Col className='m-2 p-2 border border-1 border-dark rounded'>
                    <Link href="/partners" className='text-decoration-none d-flex flex-row '>
                        <Image src='/aboutus/menu-icons/partners.svg' alt='' width={25} />
                        <h6 className='m-0 p-2 text-dark'>Partners</h6>
                    </Link>
                </Col>
                <Col className='m-2 p-2 border border-1 border-dark rounded'>
                    <Link href="/core-team" className='text-decoration-none d-flex flex-row '>
                        <Image src='/aboutus/menu-icons/teams.svg' alt='' width={25} />
                        <h6 className='m-0 p-2 text-dark'>Our Team</h6>
                    </Link>
                </Col>
                <Col className='m-2 p-2 border border-1 border-dark rounded'>
                    <Link href="/awards-and-recognitions" className='text-decoration-none d-flex flex-row '>
                        <Image src='/aboutus/menu-icons/awards.svg' alt='' width={25} />
                        <h6 className='m-0 p-2 text-dark'>Awards and Recognitions</h6>
                    </Link>
                </Col>
            </div>
            {/* </Row> */}
        </Container>
    )
}

export default JourneyHeader