'use client'

import Link from 'next/link'
import React from 'react'
import { Container, Row } from 'react-bootstrap'

const SeedBanksBanner = () => {
    return (
        <Container fluid className='m-0 p-0' style={{ backgroundImage: 'url("/our-work/seed-banks/seed_bank_banner.jpeg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '400px' }}>
            <Row className='p-2 position-absolute z-0' style={{ background: '#E8E8E8', display: 'inline-block' }}>
                <Link href="/" className='text-decoration-none text-black'>Home </Link>
                /
                <Link href="" className='text-decoration-none text-black'>Seed Banks</Link>

            </Row>
            <Container className='d-flex justify-content-center align-items-center text-center' style={{ height: '400px' }}>
                <Row className='text-white'>
                    <h1>Seed Banks</h1>
                </Row>
            </Container>
        </Container>
    )
}

export default SeedBanksBanner