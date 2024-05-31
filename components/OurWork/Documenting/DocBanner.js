'use client'

import React from 'react'

import { Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const DocBanner = () => {
    return (
        <>
            <Container fluid className='m-0 p-0' style={{ backgroundImage: 'url("/our-work/documenting/documenting_indigenious_knowledge_banner.jpeg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '400px' }}>
                <Row className='p-2 position-absolute z-0' style={{ background: '#E8E8E8', display: 'inline-block' }}>
                    <Link href="/" className='text-decoration-none text-black'>Home </Link>
                    /
                    <Link href="/documenting-indigenous-knowledge" className='text-decoration-none text-black'>Documenting Indigenous Knowledge</Link>

                </Row>
                <Container className='d-flex justify-content-center align-items-center' style={{ height: '400px' }}>
                    <Row className='text-white'>
                        <h1>Documenting Indigenous Knowledge</h1>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default DocBanner