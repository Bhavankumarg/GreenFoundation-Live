'use client'

import Link from 'next/link'
import React from 'react'
import { Container, Row } from 'react-bootstrap'

import '../aboutus.css'

const Banner = () => {
    return (
        <>
            <Container fluid className='m-0 p-0' style={{ backgroundImage: 'url("/aboutus/partners/partners.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '400px' }}>
                <Row className='p-2 position-absolute' style={{ background: '#E8E8E8', display: 'inline-block' }}>
                    <Link href="/" className='text-decoration-none text-black'>Home </Link>
                    /
                    <Link href="/journey-so-far" className='text-decoration-none text-black'>Partners</Link>

                </Row>
                <Container className='d-flex justify-content-center align-items-center' style={{ height: '400px' }}>
                    <Row className='text-white'>
                        <h1>Partners</h1>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Banner