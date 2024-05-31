'use client'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../../app/globals.css'

const OurReach = () => {
    return (
        <>
            <Container fluid className='our-reach-banner d-flex flex-wrap flex-column justify-content-between'>
                <Container className='pt-4 w-100'>
                    <Row>
                        <h1 className='text-center text-white fw-bold'>Our Reach</h1>
                        <p className='text-center text-white'>The five project sites of GREEN along with the number of farmers it impacts are as follows:</p>
                    </Row>
                </Container>
                <Container className='w-100'>
                    <Row className='our-reach-main-container d-flex flex-md-row flex-column align-items-end'>
                        <Col className='ka-our-reach m-2 mb-0'>
                            <Image src='/home/our-reach/karnataka.svg' alt='karnataka' height={150} className='py-4' />
                            <h3 className='text-white custom-reach-para'>Karnataka</h3>

                            <Col className='green-bg-our-reach'>
                                <p className='text-white custom-reach-para'>Ramanagara District, Kanakapura Taluk – Community Seed Bank, Regenarative Agriculture and Bio-input Resource Centre</p>
                                <p className='text-white custom-reach-para'>Kalaburagi District, Sedam Block – Community Seed Bank and Bio- input Resource Centre</p>
                                <p className='text-white custom-reach-para'>Chikkabellapur District, Bagepalli Block – Agrobiodiversity Conservation</p>
                            </Col>

                        </Col>

                        <Col className='tn-our-reach m-2 mb-0'>
                            <Image src='/home/our-reach/tamilnadu.svg' alt='tamilnadu' height={150} className='py-4' />
                            <h3 className='text-white w-100'>Tamil Nadu</h3>
                            <Col className='green-bg-our-reach'>
                                <p className='text-white custom-reach-para'>Pudukkottai District, Tiruvarangulam and Karambakudi block – Community Seed Bank and Bio-Input Resource Centre</p>
                            </Col>
                        </Col>

                        <Col className='mp-our-reach m-2 mb-0'>
                            <Image src='/home/our-reach/madhyapradesh.svg' alt='madyapradesh' height={150} className='py-4' />
                            <h3 className='text-white'>Madhya Pradesh</h3>
                            <Col className='green-bg-our-reach'>
                                <p className='text-white custom-reach-para'>Bankhedi District, Hoshangabad – Agrobiodiversity Conservation</p>
                            </Col>
                        </Col>

                        <Col className='ch-our-reach m-2 mb-0'>
                            <Image src='/home/our-reach/chhattisgarh.svg' alt='chhattisgarh' height={150} className='py-4' />
                            <h3 className='text-white'>Chhattisgarh</h3>
                            <Col className='green-bg-our-reach'>
                                <p className='text-white custom-reach-para'>Kanker District, Kanker – Community Seed Bank and Bio Input Resource Center</p>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default OurReach