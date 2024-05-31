'use client'

import React from 'react'

import { Container, Image, Row } from 'react-bootstrap'
import Link from 'next/link'

import '../ourwork.css'

const SustainAgriBanner = () => {
    return (
        <>
            <Container fluid className='m-0 p-0' style={{ backgroundImage: 'url("/our-work/sustainable-agri/sustainable_agriculture_banner.jpeg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '400px' }}>
                <Row className='p-2 position-absolute z-0' style={{ background: '#E8E8E8', display: 'inline-block' }}>
                    <Link href="/" className='text-decoration-none text-black'>Home </Link>
                    /
                    <Link href="/sustainable-agriculture" className='text-decoration-none text-black'>Our work</Link>

                </Row>
                <Container className='d-flex justify-content-center align-items-center' style={{ height: '400px' }}>
                    <Row className='text-white'>
                        <h1>Sustainable Agriculture</h1>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default SustainAgriBanner