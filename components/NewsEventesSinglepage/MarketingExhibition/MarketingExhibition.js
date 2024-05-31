import Link from 'next/link'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../../custom.css'

const MarketingExhibition = () => {
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
                        <Image src='/news-and-events/marketing_exhibition_and_events_news_event_img_3.png' alt='' fluid />
                        <h3>Marketing, Exhibition and Events 2018</h3>
                        <h6 className='text-green'>March 12, 2019</h6>

                        <p>We have taken many activities in order to create market linkages with GF farmer’s products which are produced by different producer groups from gross root level. We participated in sale-cum-exhibition event at different places in Bangalore. One of the programmes  was organised by Infosys.</p>

                        <Row className='d-flex flex-md-row flex-column p-0 gap-md-0 gap-4'>
                            <Col>
                                <Image src='/publications/news-and-events/Marketing-Exhibition/excibition_events_1.jpeg' alt='' fluid />
                            </Col>
                            <Col>
                                <Image src='/publications/news-and-events/Marketing-Exhibition/excibition_events_2.jpeg' alt='' fluid />
                            </Col>
                        </Row>
                        <p>
                            In addition to this, GREEN Foundation participated in another event which was organised by Mindtree at Global village, Bangalore. It was organised on 13th and 14th , August 2018 in collaboration with Mindtree, an outlet has been opened at the Mindtree Global Village Campus in Bangalore, which facilitates direct sale to Mindtree employees.
                        </p>

                        <p>
                            Intel IT company staff volunteers have come forward to work on field to help the farmers. 140 members participated in this event. They have Demonstrated SRI Paddy, Guli Ragi seedling transplantation and Vermicompost pit filling.
                        </p>
                        <Row className='d-flex flex-md-row flex-column gap-md-0 gap-4'>
                            <Col className='d-flex flex-column gap-2'>
                                <Image src='/publications/news-and-events/Marketing-Exhibition/intel_event_3.jpeg' alt='' fluid />
                                <h6><i>SRI Paddy transplantation</i></h6>
                            </Col>
                            <Col className='d-flex flex-column gap-2'>
                                <Image src='/publications/news-and-events/Marketing-Exhibition/intel_event_4.jpeg' alt='' fluid />
                                <h6><i>Guli Rgi Seedlings Transplantation</i></h6>
                            </Col>
                        </Row>



                    </Col>

                    <Col className='py-md-0 py-5'>
                        <h2>Related</h2>
                    </Col>
                </Row>
            </Container>
        </Container >
    )
}

export default MarketingExhibition