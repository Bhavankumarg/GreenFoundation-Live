'use client'

import React from 'react'

import { Col, Container, Image } from 'react-bootstrap'
import Link from 'next/link'

import '../ourwork.css'


const SeedYatrasHeader = () => {
    return (
        <Container fluid className='sticky-top bg-white z-1 custom-work-menu-header' style={{ background: '#E0E5D7' }}>
            <div className='custom-row-seed-projects'>
                <Col className='m-2 p-2 border border-1 border-dark rounded'>
                    <Link href="/seed-banks" className='text-decoration-none d-flex flex-row '>
                        <Image src='/our-work/menu-icons/seed_banks_black.svg' alt='' />
                        <h6 className='m-0 p-2 text-black'>Seed Banks</h6>
                    </Link>
                </Col>
                <Col className='m-2 p-2 border border-1 border-dark rounded'>
                    <Link href="/seed-mapping" className='text-decoration-none d-flex flex-row '>
                        <Image src='/our-work/menu-icons/seed_mapping_black.svg' alt='' />
                        <h6 className='m-0 p-2 text-black'>Seed Mapping</h6>
                    </Link>
                </Col>
                <Col className='m-2 p-2 about-tap-bg'>
                    <Link href="/seed-yatras-and-fairs" className='text-decoration-none d-flex flex-row '>
                        <Image src='/our-work/menu-icons/seed_yatras_white.svg' alt='' />
                        <h6 className='m-0 p-2 text-white'>Seed Yatras and Fairs</h6>
                    </Link>
                </Col>
            </div>
        </Container>
    )
}

export default SeedYatrasHeader