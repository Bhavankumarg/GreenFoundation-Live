'use client'

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import '../ourwork.css'

const VermicompostContent = () => {
    return (
        <Container fluid style={{ backgroundL: '#F2F2F2' }}>
            <Container className='p-0 py-5 text-md-center text-start p-2'>
                <p>As part of its soil conservation efforts, GREEN trains farmers to make and use vermicompost effectively within their own farms through rigorous training sessions that place great emphasis on quality.
                </p>

                <Row className='vermicompost-content-bg '>
                    <Col className='bg-opacity-50 bg-black d-flex flex-column align-items-center justify-content-end text-white p-4'>
                        <p className='text-white'>This is 100% organic fertilizer is made by feeding farm waste material to certain species of worms. As the worms eat this biomass and pass it through their bodies, it is converted to vermicompost. Rich in all essential plant nutrients, vermicompost is both cost effective for the farmer and ideally suited for soil enrichment. It greatly reduces a farmer’s dependency on chemical fertilizers, enhances soil fertility while also increasing the quantity and quality of crops.
                        </p>
                    </Col>
                </Row>

                <p className='mt-3'>In many cases, this organic fertilizer also supplements family income, as many farmers sell the excess vermicompost in their farms at a good price.</p>

                <p>“Our family needed money. My father had a lot of difficulties paying back loans, which he had incurred from buying seeds for sowing. And even though we all have a lot of work at home and on the fields, I wanted to continue my studies. It was vermicompost that made the difference,” says Suvasini, at a Farmer’s Meet in Nidanegilu. Her family had learnt of the organic fertilizer through GREEN and its non-profit partner in the region Aranya Vikas.
                </p>

                <p>“A quintal of vermicompost can be sold for Rs. 500 – Rs. 600. So I started concentrating on the production of the compost and sold it just when I had to pay the examination fees,” says the 17-year-old. Read more of our stories.
                </p>
            </Container>
        </Container>
    )
}

export default VermicompostContent