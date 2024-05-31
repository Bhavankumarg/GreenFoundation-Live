'use client'

import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../aboutus.css'

const WomenEmpowerment = () => {
    return (
        <>
            <Container fluid className='py-5' style={{ background: '#F5E7C9' }}>
                <Container className=''>
                    <h3 className=' text-green text-center py-3'><b>Women’s Empowerment</b></h3>

                    <Row className='yellow-lime-green-bg custom-drive-row'>
                        <Col className='custom-img-content-css' md={4}>
                            <Image src='/aboutus/whatdriveus/womens_empowerment.png' alt='ecological' width="100%"></Image>
                        </Col>
                        <Col className='p-md-4 p-2 text-white'>
                            <p className='text-white'>GREEN owes much of its early efforts to the initiative and dedication of a handful of women. It was with their help that we began our first efforts to empower the small scale and marginal farmers of India. In many ways, women have been the corner stone of GREEN and the driving impetus behind all of its work.</p>

                            <p className='text-white'>Recent studies in the gender division of labour in agriculture show that women do 37% of sowing, 59% of threshing and 69% of work related to animal tending*. Though they form a significant component of the workforce, the role of women in Indian agriculture has been unacknowledged. One of the biggest motivations behind GREEN’s work has been to bridge this gender gap. Therefore, in all of our work, we place great emphasis on the role of women in Indian agriculture.</p>
                        </Col>
                    </Row>


                    <Row className='p-0 pt-5 mx-md-1 empower-custom-container text-center'>

                        <p>Responsible, traditionally, for seed selection and storage, they are the custodians of biodiversity. Community Seed Banks initiated by GREEN in its efforts at biodiversity conservation, are managed mostly by women. GREEN has also empowered them to strengthen the food and economic security of their homes by facilitating the set up of kitchen gardens and alternate income generating programs. We have worked collectively with farmers to provide women with platforms which allow them to share their concerns and get involved in the decision making process of their communities.</p>

                        <p>Janadhanya, a farmer’s society initiated by GREEN, is one such platform. Village Development Committees (VDCs), which we facilitate, is another.</p>

                        <p>Though much has been accomplished, there is still more to be done if the gender gap is to be bridged. GREEN continues its effort to bring to the forefront, the crucial role played by women in the agricultural sector.</p>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default WomenEmpowerment