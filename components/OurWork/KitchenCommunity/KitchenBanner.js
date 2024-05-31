'use client'

import Link from 'next/link'
import React from 'react'
import { Container, Row } from 'react-bootstrap'

const KitchenBanner = () => {
    return (
        <>
            <Container fluid className='m-0 p-0' style={{ backgroundImage: 'url("/our-work/kitche-community/kitchen_community_garden_banner.jpeg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '400px' }}>
                <Row className='p-2 position-absolute z-0' style={{ background: '#E8E8E8', display: 'inline-block' }}>
                    <Link href="/" className='text-decoration-none text-black'>Home </Link>
                    /
                    <Link href="/kitchen-and-community-gardens" className='text-decoration-none text-black'>Kitchen and Community Gardens</Link>

                </Row>
                <Container className='d-flex justify-content-center align-items-center' style={{ height: '400px' }}>
                    <Row className='text-white'>
                        <h1>Kitchen and Community Gardens</h1>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default KitchenBanner