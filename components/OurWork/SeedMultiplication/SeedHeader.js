'use client'

import Link from 'next/link'
import React from 'react'

import { Col, Container, Image, Row } from 'react-bootstrap'

import '../ourwork.css'


const SeedHeader = () => {
    return (
        <Container fluid className='sticky-top bg-white z-1 custom-work-menu-header'>
            <div className='custom-row'>
                <Col className='m-2 p-2 border border-1 border-dark rounded'>
                    <Link href="/agrobiodiversity-conservation" className='text-decoration-none d-flex flex-row '>
                        <Image src='/our-work/menu-icons/agro_bio_black.svg' alt='' />
                        <h6 className='m-0 p-2 text-dark'>Agrobiodiversity Conservation</h6>
                    </Link>
                </Col>
                <Col className='m-2 p-2  border border-1 border-dark rounded'>
                    <Link href="/in-situ-and-ex-situ-conservation" className='text-decoration-none d-flex flex-row '>
                        <Image src='/our-work/menu-icons/situ_conservation_black.svg' alt='' />
                        <h6 className='m-0 p-2 text-dark'>In-situ and Ex-situ Conservation</h6>
                    </Link>
                </Col>
                <Col className='m-2 p-2 about-tap-bg'>
                    <Link href="/seed-multiplication" className='text-decoration-none d-flex flex-row '>
                        <Image src='/our-work/menu-icons/seed_white.svg' alt='' />
                        <h6 className='m-0 p-2 text-white'>Seed Multiplication</h6>
                    </Link>
                </Col>
                <Col className='m-2 p-2 border border-1 border-dark rounded'>
                    <Link href="/kitchen-and-community-gardens" className='text-decoration-none d-flex flex-row '>
                        <Image src='/our-work/menu-icons/garden_kitchen.svg' alt='' />
                        <h6 className='m-0 p-2 text-dark'>Kitchen and Community Gardens</h6>
                    </Link>
                </Col>
                <Col className='m-2 p-2 border border-1 border-dark rounded'>
                    <Link href="" className='text-decoration-none d-flex flex-row '>
                        <Image src='/our-work/menu-icons/documenting.svg' alt='' />
                        <h6 className='m-0 p-2 text-dark'>Documenting Indigenous Knowledge</h6>
                    </Link>
                </Col>
            </div>
        </Container>
    )
}

export default SeedHeader