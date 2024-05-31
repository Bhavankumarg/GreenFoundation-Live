import Link from 'next/link'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../../custom.css'

const UrbanKrishiMela = () => {
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
                        <Image src='/publications/news-and-events/urban-krishi/urban_krishi_mela_2014_img.png' alt='' fluid />


                        <h3>Urban Krishi Mela 2014</h3>
                        <h6 className='text-green'>December 2, 2014</h6>

                        <Col>
                            <Image src='/publications/news-and-events/urban-krishi/krishi_mela_2014_1.jpeg' alt='' fluid className='float-start pe-2' />

                            <p>
                                GREEN Foundation participated in the Annual Urban Krishi Mela held by University of Agricultural Sciences, Bangalore(UAS-B) at GKVK Campus, Bangalore from November 19th to 21st. The Mela exhibited different varieties of food grains like Ragi, Paddy, Field Beans, Cow pea, Red gram etc and most modern agricultural equipments. A new machine for weeding, sprayers, Value added products and handicrafts by different Self Help Groups, Nurseries of flowers and vegetable seedlings, Vegetable Seeds and Organic Food Products were showcased.
                            </p>
                        </Col>

                        <p>
                            Twenty five women farmer beneficiaries of Mahila Kisan Sashakthikaran Pariyojane(MKSP) from the Kodihalli division visited the Krishi Mela on the 20th to gain exposure on the latest agricultural developments. Government schemes like Samagra Jalanayana Abivruddhi and Nirmala Bharatha Abhiyana Yojane were demonstrated by village maps which helped the women farmers understand the objectives of these initiatives. Different stalls in the mela stressed importance of integrating Animal husbandry with the day-to-day farming to make it more profitable.
                        </p>
                        <Col>
                            <Image src='/publications/news-and-events/urban-krishi/krishi_mela_2014_2.jpg' alt='' fluid className='float-start pe-2' />

                            <p>
                                Janadhanya Farmers’ federation from Kanakapura and Prakruti Sarvadhanya Farmers’ Federation from Challekere participated in the Krishi Mela by setting up stalls where the different products by the farmers in these areas were offered to the customers. The main focus of participating in this event was to make the visitors aware of the various products offered by the farmers’ federations, the functionary benefits of a farmer’s federation and organic farming related information. Accordingly, the team had taken different products from different categories that the federations were offering, such as, indigenous vegetable seeds, organic inputs, food products and publications.
                            </p>
                        </Col>
                        <p>
                            Most of the customers were curious and intrigued by the idea of farmers’ federation, community seed banks, seed saving techniques, organic input preparation and organic farming. The visitors also took guidance on terrace and backyard gardening and bought organic inputs and native seeds for their gardens which were prepared by the MKSP beneficiaries and producer groups. The visitors also took information on federation’s functioning, the role of the Board Of Directors, the members and beneficiaries and the MKSP plan that is in action for these functionaries. The event helped Janadhanya gain great exposure in coming up with more customer centric approach with its products in the future which will intern help the MKSP beneficiaries gain a better livelihood. The event also served as information distribution center where a common man got to know the ground realities in rural India and how organic farming and government initiatives like MKSP can mitigate the livelihood related problems of the rural population.
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

export default UrbanKrishiMela