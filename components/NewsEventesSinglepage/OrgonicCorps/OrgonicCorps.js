import Link from 'next/link'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../../custom.css'

const OrgonicCorps = () => {
    return (
        <Container fluid className='w-100'>
            <Container className='py-5 p-0'>
                <Link href='/news-and-events' className='d-flex flex-md-row flex-column gap-3 justify-md-content-start align-content-center align-items-center text-decoration-none '>
                    <Image src='/publications/our-stories/back_to_stories_icon_green.svg' alt='' />
                    <h5 className='p-0 m-0 text-green fw-bolder'>Back to News & Events</h5>
                </Link>

                <hr className='my-4' />

                <Row className='p-0 '>
                    <Col md={8} className='d-flex flex-column gap-2'>
                        <Image src='/publications/news-and-events/reaping-organic/reaping_the_organic_img.png' alt='' fluid />
                        <h3>Reaping the Organic Crops with Big Smiles</h3>
                        <h6 className='text-green'>November 7, 2014</h6>

                        <Row className='d-flex flex-md-row flex-column'>
                            <Col md={7}>
                                <Image src='/publications/news-and-events/reaping-organic/organic_crops_1.jpg' alt='' fluid />
                            </Col>
                            <Col>
                                <p>
                                    The Savyava Bhagya Yojane(Organic Village Program) was initiated in 5 villages of Kanakapura during the beginning of this year in collaboration with the Karnataka State Agriculture Department. Janadhanya Farmers Federation supplied the seeds for this cropping season and field staff from GREEN Foundation provided guidance to the community on the sustainable agricultural practices.
                                </p>
                            </Col>
                            <p>
                                Different varieties of Finger millet(Sharavathi Ragi, Kempu Ragi, Dodda Ragi andBonda Ragi), Red Groundnut, Red Gram(Tur), Little Millet and Foxtail millet are the crops that were grown in more than sixty acres by thirty farmers in the village of Kemmale in Sathanur Hobli. Officials from the Agriculture department and a scientist from GKVK visited the Kemmale village in the month of october while the crops were being harvested.
                            </p>
                        </Row>

                        <Row className='d-flex flex-md-row flex-column'>
                            <Col md={7}>
                                <Image src='/publications/news-and-events/reaping-organic/organic_crops_2.jpg' alt='' fluid />
                            </Col>
                            <Col>
                                <p>
                                    Farmers in the program testified that the local and indigenous varieties of seeds gave good yields – Narase Gowda, a farmer got his best yield of groundnut this year whereas Ningegowda vouched on his yield from Sharavathi Ragi. During their interactions with the officials, they shared their observations when they grew crops using organic methods and experiences in using the local varieties of seeds.
                                </p>
                            </Col>
                        </Row>

                    </Col>


                    <Col className='py-md-0 py-5'>
                        <h2>Related</h2>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default OrgonicCorps