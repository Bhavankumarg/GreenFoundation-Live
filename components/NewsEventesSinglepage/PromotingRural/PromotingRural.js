import Link from 'next/link'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../../custom.css'

const PromotingRural = () => {
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
                        <Image src='/publications/news-and-events/promoting-rural/promoting_rural_entrepreneurship_produce_groups_img.png' alt='' fluid />
                        <h3>Promoting Rural Entrepreneurship – Producer Groups</h3>
                        <h6 className='text-green'>October 22, 2014</h6>

                        <Row className='d-flex flex-md-row flex-column'>
                            <Col md={7}>
                                <Image src='/publications/news-and-events/promoting-rural/promoting_rural_1.jpg' alt='' fluid />
                            </Col>
                            <Col>
                                <p>
                                    As part of Mahila Kisan Sashaktikaran Pariyojana(MKSP), Producer Groups have been set up in GREEN’s project area with the goal of providing alternative income generating opportunities to strengthen the rural economy. These agricultural producer groups consist of 10-20 women members trained by the GREEN Foundation to effectively manage the day-to-day functioning of the group.
                                </p>
                            </Col>
                            <p>
                                The current year is anticipated to be an agricultural lean period since the rainfall has been scanty and the cultivable farmer lands totally rely on rainfall for irrigation. The producer groups will provide end to end  support to the farming community  with a wide range of products from organic inputs like Vermicompost, Panchagavya and Puchimarundu to processing millets like Ragi(Finger millet), Foxtail and Little millets after the harvest. Seed Producer groups are established with the intent of supplying local and indigenous seeds not treated with chemicals to the farming community, the seed producer groups also encourage seed saving in the community by procuring these seeds from the farmers. These seeds will be made available to the interested customers through Janadhanya Farmers’ federation.
                            </p>
                        </Row>


                        <Row className='d-flex flex-md-row flex-column'>
                            <Col md={7}>
                                <Image src='/publications/news-and-events/promoting-rural/promoting_rural_2.jpg' alt='' fluid />
                            </Col>
                            <Col>
                                <p>
                                    The producer collectives improve the collective bargaining power of the farmers and  internalize market activities like bulking, primary and secondary processing which improve the rural livelhoods. These institutions would take the roles of planning, mobilizing resources, organizing production and take up post harvest management and marketing activities.


                                </p>
                            </Col>
                            <p>
                                The Ragi (Finger Millet) Producer group was inaugurated by the KSRLM officials in the month of September, the Ragi producer group currently processes Ragi to be sold to urban markets and prepares Ragi flour for Janadhanya and local needs . Recently a shipment of 3 tonnes of Ragi was dispatched to Pristine Organics, Bangalore. Value added products like Ragi malt, millet baby food, Ragi Ambli powder is planned soon in the future.
                            </p>
                            <p>
                                The founding trustee of GREEN Foundation, Dr. Vanaja Ramprasad visited the Millet and Shadenet producer groups in the month of October to provide guidance and appreciate the women members of the group.The visit not only gave the group members an opportunity to meet Dr. Vanaja but also share their views and ideas which further inpired them to continue to put in their best efforts.
                            </p>
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

export default PromotingRural
