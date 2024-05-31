'use client'

import React from 'react'

import { Container, Col, Image } from 'react-bootstrap'
import Link from 'next/link'

import '../ourwork.css'

const VermicompostHeader = () => {
    return (
        <Container fluid className='sticky-top bg-white z-1 custom-work-menu-header'>
            <div className='custom-row-sustain'>
                <Col className='m-2 p-2 border border-1 border-dark rounded'>
                    <Link href="/farm-ponds" className='text-decoration-none d-flex flex-row '>
                        <Image src='/our-work/menu-icons/farm_ponds_black.svg' alt='' />
                        <h6 className='m-0 p-2 text-dark'>Farm Ponds</h6>
                    </Link>
                </Col>
                <Col className='m-2 p-2 border border-1 border-dark rounded'>
                    <Link href="/silt-application" className='text-decoration-none d-flex flex-row '>
                        <Image src='/our-work/menu-icons/silt_app_black.svg' alt='' />
                        <h6 className='m-0 p-2 text-black'>Silt Application</h6>
                    </Link>
                </Col>
                <Col className='m-2 p-2 border border-1 border-dark rounded'>
                    <Link href="/trench-and-bund-formation" className='text-decoration-none d-flex flex-row '>
                        <Image src='/our-work/menu-icons/trench_and_bund_black.svg' alt='' />
                        <h6 className='m-0 p-2 text-black'>Trench and Bund Formation</h6>
                    </Link>
                </Col>
                <Col className='m-2 p-2 about-tap-bg'>
                    <Link href="/vermicompost" className='text-decoration-none d-flex flex-row '>
                        <Image src='/our-work/menu-icons/vermicompost_white.svg' alt='' />
                        <h6 className='m-0 p-2 text-white'>Vermicompost</h6>
                    </Link>
                </Col>
                <Col className='m-2 p-2 border border-1 border-dark rounded'>
                    <Link href="/agroforestry" className='text-decoration-none d-flex flex-row '>
                        <Image src='/our-work/menu-icons/agroforestry_black.svg' alt='' />
                        <h6 className='m-0 p-2 text-black'>Agroforestry</h6>
                    </Link>
                </Col>
            </div>
        </Container>
    )
}

export default VermicompostHeader