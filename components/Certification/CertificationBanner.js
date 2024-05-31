'use client'

import Link from 'next/link'
import React from 'react'
import { Container, Row } from 'react-bootstrap'

const CertificationBanner = () => {
    return (
        <Container fluid className='m-0 p-0' style={{ backgroundImage: 'url("/certification/certification_banner.jpeg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '400px' }}>
            <Container className='d-flex justify-content-center align-items-center text-center' style={{ height: '400px' }}>
                <Row className='text-white'>
                    <h1>Certification</h1>
                </Row>
            </Container>
        </Container>
    )
}

export default CertificationBanner