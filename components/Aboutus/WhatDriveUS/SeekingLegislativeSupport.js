'use client'


import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../aboutus.css'

const SeekingLegislativeSupport = () => {
    return (
        <Container fluid className='py-5' style={{ background: '#F5E7C9' }}>
            <Container className=''>
                <h3 className=' text-green text-center'><b>Seeking Legislative Support</b></h3>

                <Row className='yellow-lime-green-bg custom-drive-row'>
                    <Col className='custom-img-content-css' md={4}>
                        <Image src='/aboutus/whatdriveus/seeking_legestive_img.png' alt='ecological' width="100%"></Image>
                    </Col>
                    <Col className='p-md-3 p-2 text-white'>
                        <p className='text-white'>
                            Lasting change can only be brought about through legislation that supports and protects the rights of individual farmers and strengthens their livelihoods. Such legislation must also aim to conserve the biodiversity and natural ecology that is essential to Indian agriculture. Yet over the years, Govt. policies have promoted the use of high yielding exotic seed varieties and the chemical inputs they require. Unfortunately, this has lead farmers to adopt unsustainable practices.
                        </p>

                        <p className='text-white'>
                            Through dialogue with key stakeholders, including the Government, GREEN has been lobbying for policy changes that encourage small scale and marginal farmers to pursue sustainable agriculture. GREEN has worked along with farmers to bring their concerns to the forefront of political dialogue. We have also appealed to the Government to highlight the role of women in Indian agriculture conservation.
                        </p>
                    </Col>
                </Row>



                <Row className='p-4 pt-5 mx-md-0  seeking-custom-container text-center'>
                    <p>Through projects that address their needs. They are in many ways the backbone of the sector, and sustainability is not possible without their contributions, particularly in the case of biodiversity. Such progress owes as much to the perseverance of individual farmers themselves as to the collective efforts of a community of people within the non-profit sector. Strengthening the movement for sustainability, GREEN initiated the formation of Janadhayna, a farmers’ society which empowers farming communities to work collectively to avail the benefits of sustainable agriculture. Janadhanya has proved to be a means through which the movement has rapidly progressed, allowing community members themselves to take the core philosophy of organic practices to those who need it most: their fellow farmers.</p>
                </Row>
            </Container>

        </Container>
    )
}

export default SeekingLegislativeSupport