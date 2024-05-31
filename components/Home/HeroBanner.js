'use client'

import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

import '../custom.css'
import Link from 'next/link'

const HeroBanner = () => {
    return (
        <>
            <Container fluid className='home-bg-container p-0'>
                <Container>
                    <Row className='d-flex flex-column justiy-content-center p-3 ' >
                        <Col md={7} className='p-4 text-white border border-1 rounded-4 home-text-bg gap-5' >
                            <h1 className='display-3 fw-bolder'>GREEN Foundation</h1>
                            <p className='text-white'>At the GREEN Foundation, we are driven by a powerful vision: a world where vulnerable communities are climate resilient, and our sectors and systems operate with carbon neutrality. Our core mission centers on biodiversity conservation and regenerative agriculture, guided by agro-ecological principles and a deep respect for planetary boundaries. By combining these approaches, we are working towards a sustainable, equitable and resilient future. Together, we can create a world where people and the planet thrive together, safeguarding our natural resources for generations to come.</p>
                            <Link className='bg-white text-dark px-4 text-green border-0 text-decoration-none p-2 rounded-3' href='/journey-so-far'>Learn More</Link>
                        </Col>
                    </Row>
                </Container>
            </Container >
        </>
    )
}

export default HeroBanner