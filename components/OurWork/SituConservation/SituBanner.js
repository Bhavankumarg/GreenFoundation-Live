'use client'

import Link from 'next/link'
import React from 'react'

import { Container, Row } from 'react-bootstrap'



const SituBanner = () => {
    return (
        <>
            <Container fluid className='m-0 p-0' style={{ backgroundImage: 'url("/our-work/insit/in_situ_ex_situ_banner.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '400px' }}>
                <Row className='p-2 position-absolute z-0' style={{ background: '#E8E8E8', display: 'inline-block' }}>
                    <Link href="/" className='text-decoration-none text-black'>Home </Link>
                    /
                    <Link href="/in-situ-and-ex-situ-conservation" className='text-decoration-none text-black'>In-situ and Ex-situ Conservation</Link>

                </Row>
                <Container className='d-flex justify-content-center align-items-center' style={{ height: '400px' }}>
                    <Row className='text-white'>
                        <h1>In-situ and Ex-situ Conservation</h1>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default SituBanner