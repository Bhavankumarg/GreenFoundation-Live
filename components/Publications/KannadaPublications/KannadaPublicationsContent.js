'use client'

import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../publications.css'
import Link from 'next/link'

const KannadaPublicationsContent = () => {
    return (
        <Container>
            <Row className='d-flex flex-wrap flex-md-row flex-column gap-4 py-4'  >
                <Col className='bg-custom-grey p-3 rounded-4'>
                    <Col className='d-flex flex-md-row flex-column'>
                        <Col md>
                            <Image src='/publications/kannada-publications/suthira_krishi.png' alt='' fluid />
                        </Col>
                        <Col>
                            <h4>Susthira Krishi Paddhathigalu</h4>
                            <p className='Kannada-publication-para'>
                                This documents the various organic farming and sustainable practices GREEN introduces to farmers in its training sessions. It gives detailed, step-by-step procedures to various farming practices such as seed treatment and storage techniques, organic manure and herbal pesticide preparations, improved agricultural practices such as System of Rice Intensification (SRI) etc.
                            </p>
                        </Col>
                    </Col>
                    <Link href="/susthira_krishi_paddhathigalu.pdf.html" className='text-decoration-none text-white'>
                        <h6 className='bg-green d-inline-block p-2 rounded-2 kannada-publication-btn-loop-font'>
                            View PDF version
                        </h6>
                    </Link>
                </Col>
                <Col className='bg-custom-grey p-3 rounded-4 d-flex flex-column'>
                    <Col className='d-flex flex-md-row flex-column'>
                        <Col>
                            <Image src='/publications/kannada-publications/beejada_butti.png' alt='' fluid />
                        </Col>
                        <Col>
                            <h4>Beejada Butti</h4>
                            <p className='Kannada-publication-para'>
                                A compilation and varietal description of indigenous seed varieties.
                            </p>
                        </Col>
                    </Col>
                    <Link href="" className='text-decoration-none text-white'>
                        <h6 className='bg-green d-inline-block p-2 rounded-2 kannada-publication-btn-loop-font'>
                            View PDF version
                        </h6>
                    </Link>
                </Col>

            </Row>
        </Container >
    )
}

export default KannadaPublicationsContent