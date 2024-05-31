import Link from 'next/link'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../../custom.css'

const FoodFromGarden = () => {
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
                        <Image src='/publications/news-and-events/food_from_your_garden_img.png' alt='' fluid />
                        <h3>Food from Your Garden: ‘Oota from Thota’</h3>
                        <h6 className='text-green'>November 24, 2011</h6>

                        <Row className='d-flex flex-md-row flex-column'>
                            <Col>
                                <Image src='/publications/news-and-events/food_from_garden_oota_from_thota_1.jpg' className='float-start pe-4' alt='' fluid />
                                <p>
                                    A growing number of people in urban cities and towns are looking to adopt a healthier, better rounded lifestyle. Many are increasingly becoming aware of the benefits of organically grown produce and are enthusiastic about setting up kitchen gardens in their homes. The program ‘Oota from Thota’ organized on 28th August, aimed to acquaint urban dwellers with the methods and processes involved in growing vegetables of their own. It also addressed the broader issues of global warming, pollution, waste management and environmental degradation.
                                </p>
                            </Col>
                        </Row>

                        <p>
                            GREEN Foundation had set up a stall at the event, where we placed on display many of the indigenous seed varieties that have been conserved through our efforts. Events such as these present good opportunities to spread the message of sustainable food to the broader public, and GREEN had also placed on display many of its publications on sustainable agriculture. We held demonstrations on organic methods of seed treatment and pest control, which garnered much interest among people attending the event. Over the years, the Foundation has had a great deal of experience in setting up kitchen gardens and this experience was shared with attendees.
                        </p>
                        <p>
                            In rural areas, GREEN facilitates small scale and marginal farmers to establish kitchen gardens of their own, as they provide low-income households with much needed nutrition all year round. These gardens also form excellent in-situ conservation sites for indigenous vegetable seed varieties. Read more on our kitchen garden initiatives.
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

export default FoodFromGarden