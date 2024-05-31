'use client'

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Button, Image } from 'react-bootstrap';
import Link from 'next/link';
import Gtag from '../../../components/SeoComponents/GoogleAnalyticsCode'

import '../headerfooter.css'

const Header = () => {


    const contactFont = {
        background: '#2E6339',
        fontSize: '16px !important'
    }

    return (
        <>
            <Gtag />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

            <Navbar expand="lg" className="bg-body-tertiary p-0">
                <Container fluid style={{ background: '#FFF7D8' }}>
                    <Link href="/" className='w-50'>
                        <Image src="/header_footer/gf_logo.png" alt='cglogo' height={90} width={90} />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='d-md-flex flex-md-column flex-md-wrap align-content-md-end'>
                        <Nav className="me-auto w-75 d-md-flex flex-md-row flex-md-wrap justify-content-md-between">
                            <NavDropdown title="About Us" id="basic-nav-dropdown">
                                <Link href="/journey-so-far" className='header-links'>Journey So Far</Link>
                                <Link href="/why-we-do-this" className='header-links'>What Drives Us</Link>
                                <Link href="/our-reach" className='header-links'>Our Reach</Link>
                                <Link href="/partners" className='header-links'>Partners</Link>
                                <Link href="/core-team" className='header-links'>Our Team</Link>
                                <Link href="/awards-and-recognitions" className='header-links'>Awards and Recognitions</Link>
                            </NavDropdown>
                            <NavDropdown title="Our Work" id="basic-nav-dropdown">
                                <Link href="/agrobiodiversity-conservation" className='header-links'>Agrobiodiversity Conservation</Link>
                                <Link href="/sustainable-agriculture" className='header-links'>Sustainable Agriculture</Link>
                                <Link href="/farm-ponds" className='header-links'>Soil and Water Conservation</Link>
                                <Link href="/seed-banks" className='header-links'>Seed Projects</Link>
                                <Link href="/certification" className='header-links'>Certification</Link>
                                <Link href="/research-and-communication" className='header-links'>Research and Communication</Link>
                                <Link href="/policy-engagement" className='header-links'>Policy Engagement</Link>
                            </NavDropdown>
                            <NavDropdown title="Publications" id="basic-nav-dropdown">
                                <Link href="/news-and-events" className='header-links'>News & Events</Link>
                                <Link href="/english-publication" className='header-links'>Publications</Link>
                                <Link href="/our-stories" className='header-links'>Stories from the Field</Link>
                                <Link href="/greens-work-related-videos" className='header-links'>Videos</Link>
                            </NavDropdown>
                            <Link href='/contact'
                                className=' text-decoration-none'
                            >
                                <p
                                    className='text-white p-1 px-3 rounded-3'
                                    style={contactFont}
                                >
                                    Contact Us
                                </p>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header