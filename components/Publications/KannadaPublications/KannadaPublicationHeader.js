'use client'

import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

import '../publications.css'

const KannadaPublicationHeader = () => {
    return (
        <Container fluid className='sticky-top bg-white z-1 custom-work-menu-header'>
            <div className='custom-row'>
                <Col className='m-2 p-2 border border-1 border-dark rounded'>
                    <Link href="/english-publication" className='text-decoration-none d-flex flex-row '>
                        <Image src='/publications/menu-icons/english_publication_black.svg' alt='' />
                        <h6 className='m-0 p-2 text-black'>English</h6>
                    </Link>
                </Col>
                <Col className='m-2 p-2 about-tap-bg border border-1 border-dark rounded'>
                    <Link href="/kannada-publication" className='text-decoration-none d-flex flex-row '>
                        <Image src='/publications/menu-icons/kannada_publication_white.svg' alt='' />
                        <h6 className='m-0 p-2 text-white'>Kannada</h6>
                    </Link>
                </Col>
            </div>
        </Container>
    )
}

export default KannadaPublicationHeader