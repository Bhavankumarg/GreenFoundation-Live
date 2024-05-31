'use client'

import React from 'react'

import { Container, Row } from 'react-bootstrap'

const ResearchCommunicationBanner = () => {
    return (
        <Container fluid className='m-0 p-0' style={{ backgroundImage: 'url("/research-communication/research_and_communication_banner.jpeg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '400px' }}>
            <Container className='d-flex justify-content-center align-items-center text-center' style={{ height: '400px' }}>
                <Row className='text-white'>
                    <h1>Research and Communication</h1>
                </Row>
            </Container>
        </Container>
    )
}

export default ResearchCommunicationBanner