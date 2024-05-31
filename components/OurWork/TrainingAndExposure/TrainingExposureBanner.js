'use client'

import React from 'react'

import { Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const TrainingExposureBanner = () => {
    return (
        <>
            <Container fluid className='m-0 p-0' style={{ backgroundImage: 'url("/our-work/training-exposure/training_exposure_banner.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '400px' }}>
                <Row className='p-2 position-absolute z-0' style={{ background: '#E8E8E8', display: 'inline-block' }}>
                    <Link href="/" className='text-decoration-none text-black'>Home </Link>
                    /
                    <Link href="/sustainable-agriculture" className='text-decoration-none text-black'>Our work</Link>

                </Row>
                <Container className='d-flex justify-content-center align-items-center' style={{ height: '400px' }}>
                    <Row className='text-white'>
                        <h1>Training and Exposure Visits</h1>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default TrainingExposureBanner