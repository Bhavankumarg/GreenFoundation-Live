'use client'

import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import '../ourwork.css'

const FarmContent = () => {
    return (
        <>
            <Container fluid >
                <Container className='p-0'>
                    <Row className='d-flex flex-md-row flex-column align-items-center p-md-0 p-3 py-md-5 gap-md-3 gap-4'>
                        <Col className='shadow-lg  farm-ponds-content-row text-center p-4 rounded-4 m-2'>
                            <Image src='/our-work/farm-ponds/farm_ponds_paint.svg' alt='' height={80} />
                            <p className='text-white py-5 px-2'>GREEN facilitates farmers to dig farm ponds in the lowest lying area of their land holdings, guiding them on where to locate their ponds, how to excavate them, how to create a network of drainage channels that lead to the pond, among many others.
                            </p>
                        </Col>
                        <Col className='shadow-lg farm-ponds-content-row text-center p-4 rounded-4 m-2'>
                            <Image src='/our-work/farm-ponds/farm_ponds_green_grow.svg' alt='' height={80} />
                            <p className='text-white py-5 px-2'>Made for the purpose of catching and storing rain water, farm ponds have drainage channels which direct run-off to the pond. Outlets built into the pond help discharge excess water into surrounding areas. Water in the ponds is most often used for irrigation purposes within a farm.
                            </p>
                        </Col>
                        <Col className='shadow-lg farm-ponds-content-row text-center p-4 rounded-4 m-2'>
                            <Image src='/our-work/farm-ponds/farm_ponds_recycle.svg' alt='' height={80} />
                            <p className='text-white py-5 px-2'>One of the biggest advantages of farm ponds is that they help reduce farmers’ dependence on ground water or rain. As a water source during dry spells, they help increase farmers’ resilience to climate change. They also replenish ground water supplies, improve moisture levels in the soil and recharge borehole water supplies.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default FarmContent