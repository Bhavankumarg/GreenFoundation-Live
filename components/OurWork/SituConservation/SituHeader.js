'use client'

import React from 'react'

import { Col, Container, Image } from 'react-bootstrap'
import Link from 'next/link'

import '../ourwork.css'
const SituHeader = () => {
    return (
        <Container fluid className='sticky-top bg-white z-1 custom-work-menu-header'>
            <div className='custom-row'>
                <Col className='m-2 p-2 border border-1 border-dark rounded'>
                    <Link href="/agrobiodiversity-conservation" className='text-decoration-none d-flex flex-row '>
                        <Image src='/our-work/menu-icons/agro_bio_black.svg' alt='' />
                        <h6 className='m-0 p-2 text-dark'>Agrobiodiversity Conservation</h6>
                    </Link>
                </Col>
                <Col className='m-2 p-2 about-tap-bg'>
                    <Link href="/in-situ-and-ex-situ-conservation" className='text-decoration-none d-flex flex-row '>
                        <Image src='/our-work/menu-icons/situ_conservation_white.svg' alt='' />
                        <h6 className='m-0 p-2 text-white'>In-situ and Ex-situ Conservation</h6>
                    </Link>
                </Col>
                <Col className='m-2 p-2 border border-1 border-dark rounded'>
                    <Link href="/seed-multiplication" className='text-decoration-none d-flex flex-row '>
                        <Image src='/our-work/menu-icons/seed_black.svg' alt='' />
                        <h6 className='m-0 p-2 text-dark'>Seed Multiplication</h6>
                    </Link>
                </Col>
                <Col className='m-2 p-2 border border-1 border-dark rounded'>
                    <Link href="/kitchen-and-community-gardens" className='text-decoration-none d-flex flex-row '>
                        <Image src='/our-work/menu-icons/garden_kitchen.svg' alt='' />
                        <h6 className='m-0 p-2 text-dark'>Kitchen and Community Gardens</h6>
                    </Link>
                </Col>
                <Col className='m-2 p-2 border border-1 border-dark rounded'>
                    <Link href="/awards-and-recognitions" className='text-decoration-none d-flex flex-row '>
                        <Image src='/our-work/menu-icons/documenting.svg' alt='' />
                        <h6 className='m-0 p-2 text-dark'>Documenting Indigenous Knowledge</h6>
                    </Link>
                </Col>
            </div>
        </Container>
    )
}

export default SituHeader