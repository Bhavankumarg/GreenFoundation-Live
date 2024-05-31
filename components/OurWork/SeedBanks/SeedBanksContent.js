'use client'

import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../ourwork.css'

const SeedBanksContent = () => {
    return (
        <>
            <Container fluid className='seed-bank-container'>
                <Container className='p-0 py-5 text-md-center text-start'>
                    <p>
                        “The community seed bank is not just a store where seed is kept for distribution or marketing, or a sophisticated storage facility which has temperature and humidity control. It is a system in the process of community agriculture which includes village level facilities a garden or field where traditional varieties are safeguarded. Through this system, farmers have played a key role in the creation, maintenance and promotion of crop genetic diversity. With the help of traditional skill which they have developed over centuries, they have been selecting crop varieties to meet their specific needs such as quality, resistance to pests and pathogens, adaptation to soils, water and climate etc. Under this system local farmers have established their own seed networks to facilitate seed supply to their families and local markets.
                    </p>
                    <Row className='d-flex flex-md-row flex-column text-start p-0'>
                        <Col >
                            <Image src='/our-work/seed-banks/seed_banks_left_img.png' alt='' width="100%" />
                        </Col>

                        <Col className='d-flex flex-column'>
                            <Col xs={3} className='border border-3 my-4' style={{ borderColor: '#2E6339 !important' }}></Col>
                            <h4 className='lh-lg'>Community seed bank therefore is a system composed of all of the above. It is among the major strategies for maintaining genetic diversity in crop/plant species.” – Regassa Fyissaa
                            </h4>
                        </Col>
                    </Row>

                    <p className='py-4'>
                        Under this project, three existing Community Seed Banks in the GREEN’s project area – Veeraiyanadoddi, Gulganahalli and Terubeedi – are supported by the National Biodiversity Authority for the improvement of infrastructure facilities and expansion of its functions.
                    </p>

                    <Col className='rounded-4 py-md-3 px-md-5 p-2  text-start' style={{ background: '#F5E7C8' }}>
                        <Col className='d-flex seed-custom-bg-list'>
                            <Image src='/our-work/seed-banks/circle_white.svg' alt='' className='p-2' width={30} />
                            <p className='m-0 text-white'>
                                To conserve indigenous and inter species variation suited to the ecological niche.
                            </p>
                        </Col>
                        <Col className='d-flex seed-custom-bg-list'>
                            <Image src='/our-work/seed-banks/circle_white.svg' alt='' className='p-2' width={30} />
                            <p className='m-0 text-white'>
                                To integrate on-farm conservation through participation of the farming community.
                            </p>
                        </Col>
                        <Col className='d-flex seed-custom-bg-list'>
                            <Image src='/our-work/seed-banks/circle_white.svg' alt='' className='p-2' width={30} />
                            <p className='m-0 text-white'>
                                Collection, selection and production of indigenous crop diversity
                            </p>
                        </Col>
                        <Col className='d-flex seed-custom-bg-list'>
                            <Image src='/our-work/seed-banks/circle_white.svg' alt='' className='p-2' width={30} />
                            <p className='m-0 text-white'>
                                To ensure quality seed and planting material production.
                            </p>
                        </Col>
                        <Col className='d-flex seed-custom-bg-list'>
                            <Image src='/our-work/seed-banks/circle_white.svg' alt='' className='p-2' width={30} />
                            <p className='m-0 text-white'>
                                To minimize the farmer dependency on the public and private seed supply system and strengthening farmer to farmer exchange system
                            </p>
                        </Col>
                        <Col className='d-flex seed-custom-bg-list'>
                            <Image src='/our-work/seed-banks/circle_white.svg' alt='' className='p-2' width={30} />
                            <p className='m-0 text-white'>
                                To provide infrastructure for storage facilities and developing a resource and training centre for the community.
                            </p>
                        </Col>
                    </Col>

                    <Col className='py-5 '>
                        <h4 className='text-green fw-bold'>Expected Impact</h4>

                        <p className='py-3'>
                            The ultimate aim is to sustain and to maintain the seed banks while encouraging the farmers to grow the local crop varieties like Ragi which is the staple food of the area. A proposal has been already submitted to NBA to declare the areas served by these three seed banks as Ragi Heritage Sites
                        </p>

                        <Image src='/our-work/seed-banks/expected_impact.png' alt='' className='d-md-inline d-none' />
                        <Image src='/our-work/seed-banks/expected_impact.png' alt='' className='w-100 d-md-none d-inline' />

                    </Col>
                </Container>
            </Container>
        </>
    )
}

export default SeedBanksContent