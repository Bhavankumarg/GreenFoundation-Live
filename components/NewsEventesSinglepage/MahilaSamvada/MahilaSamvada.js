import Link from 'next/link'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../../custom.css'

const MahilaSamvada = () => {
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
                        <Image src='/publications/news-and-events/mahila_samvada_2014_img.png' alt='' fluid />
                        <h3>Mahila Samvada 2014</h3>
                        <h6 className='text-green'>October 1, 2014</h6>

                        <p>
                            Mahila Samvada, a set of interactive capacity building programs for rural women farmers were conducted in the month of August from 19th to 25th, totalling 5 batches in 5 days. The dates on which these capacity building training sessions were conducted are 19th, 20th, 23rd, 24th and 25th. The participants of these trainings included 2 SHG members from each total 128 SHGs of 11 different Panchayats. The initiative was spearheaded by Bouyancee, Bangalore under the MKSP course of “Mahila Samvada” organised by the Green Foundation, facilitated by Janadhanya Farmers’ Federation.
                        </p>

                        <p>
                            GREEN Foundation, with its initiative on Leadership Program for Rural women engaged in Sustainable Agriculture under MKSP in which as the name suggests focuses on women’s participation in agricultural activities, has been witness to various dimensions of women’s learning. Most of these learning interactions were focussed on gaining knowledge to better the economic condition of the family. Creating space to acknowledge and articulate different dimensions of women’s dialogues so that the process of empowerment becomes more integrated is the main objective of Mahila Samvada. Following outcomes are expected out of this program:
                        </p>

                        <p>
                            Fine tune the leadership qualities of women
                        </p>
                        <p>
                            Encourage participation of women in democracy with added awareness of the environment and systems.
                        </p>
                        <p>
                            Encourage omen to participate actively in different levels of governance.
                        </p>
                        <p>
                            Create a forum for women to discover their strengths, potential, limitations and challenges and find spaces of creative expressions of the same.
                        </p>




                    </Col>


                    <Col className='py-md-0 py-5'>
                        <h2>Related</h2>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default MahilaSamvada