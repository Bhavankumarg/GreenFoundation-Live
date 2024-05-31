'use client'

import React from 'react'

import { Container, Image, Col } from 'react-bootstrap'
import Link from 'next/link'

import '../ourwork.css'

const IncomeHeader = () => {
    return (
        <Container fluid className='sticky-top bg-white z-1 custom-work-menu-header'>
            <div className='custom-row'>
                <Col className='m-2 p-2 border border-1 border-dark rounded'>
                    <Link href="/sustainable-agriculture" className='text-decoration-none d-flex flex-row '>
                        <Image src='/our-work/menu-icons/sustainable_agri_black.svg' alt='' />
                        <h6 className='m-0 p-2 text-dark'>Sustainable Agriculture</h6>
                    </Link>
                </Col>
                <Col className='m-2 p-2 border border-1 border-dark rounded'>
                    <Link href="/training-and-exposure-visits" className='text-decoration-none d-flex flex-row '>
                        <Image src='/our-work/menu-icons/situ_conservation_black.svg' alt='' />
                        <h6 className='m-0 p-2 text-black'>Training and Exposure Visits</h6>
                    </Link>
                </Col>
                <Col className='m-2 p-2  about-tap-bg'>
                    <Link href="/income-generation-programs" className='text-decoration-none d-flex flex-row '>
                        <Image src='/our-work/menu-icons/seed_white.svg' alt='' />
                        <h6 className='m-0 p-2 text-white'>Income Generation Programs</h6>
                    </Link>
                </Col>
            </div>
        </Container>
    )
}

export default IncomeHeader