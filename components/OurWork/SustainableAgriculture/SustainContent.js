'use client'

import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../ourwork.css'

const SustainContent = () => {
    return (
        <>
            <Container fluid style={{ background: '#7B9F4491' }}>
                <Container className='py-5 px-md-0 '>

                    <Row className='p-0 d-flex flex-md-row flex-column'>

                        <Col className='p-0'>
                            <Image src='/our-work/sustainable-agri/sustain_agri_left_img.png' alt='' width="100%" />
                        </Col>

                        <Col className='d-md-flex flex-wrap justify-content-center align-items-center my-md-2 rounded-5 rounded-start-0 d-none ' style={{ background: '#F8D790' }}>
                            <p className='p-4'>Sustainable agriculture is the production of plant and animal products in a way that uses farming techniques to protect the environment, ensure social and economic equity as well as gain economic profitability.</p>
                        </Col>

                        <Col className='d-flex flex-wrap justify-content-center align-items-center my-md-2 d-md-none d-block' style={{ background: '#F8D790' }}>
                            <p className='p-4'>Sustainable agriculture is the production of plant and animal products in a way that uses farming techniques to protect the environment, ensure social and economic equity as well as gain economic profitability.</p>
                        </Col>

                        <p className='pt-4 p-0'>GREEN Foundation initiated the formation of Janadhanya, an association of farming community members who are empowered to work collectively to conserve agro biodiversity, provide market linkage for farmer produce and promote organic farming, among many other objectives. Janadhanya provides a common platform for the farming community to strengthen their food and livelihood security while promoting concepts of sustainable agriculture at the grassroot level. Individual farmers become members of Janadhanya through their respective Self Help Groups. Janadhanya has also worked on enabling women with a means to generate income through the formation of enterprise groups. These alternate income generation programs strengthen the economic security of farming families and increases the agency of women, potentially enabling them to have a voice in the management of their family farms.</p>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default SustainContent