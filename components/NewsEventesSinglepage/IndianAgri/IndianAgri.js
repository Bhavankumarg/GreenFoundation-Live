import Link from 'next/link'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../../custom.css'

const IndianAgri = () => {
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
                        <Image src='/publications/news-and-events/indian-agri/indian_agri_img_1.png' alt='' fluid />
                        <h3>KISAN 2015 – Indian Agriculture Trade Fair</h3>
                        <h6 className='text-green'>January 17, 2015</h6>
                        <p>GREEN Foundation and Janadhanya Farmers Federation participated in the KISAN Fair that was held at Bangalore International Exhibition Center from February 9th -11th 2015. This event was supported by Ministry of Agriculture, Govt. of India and Department of Agriculture and Department of Horticulture, Govt.of Karnataka while the media support was received from All India Radio and Doordarshan. A prefarbricated stand was offered complimentary to promote GREEN’s pioneering research and development activities among farmers.
                        </p>

                        <p>
                            During the three days, around 15,000 farmers visited our stall along with scientists and staff from University of Agricultural sciences and other Goverment departments. The event was mainly used for knowledge dissemination on Sustainable agricultural practices where GREEN advocated the usage of organic inputs like vermicompost, pongamia powder, panchagavya etc instead of chemical fertilizers and pesticides. Also products from Janadhanya product list that included the local seeds,millets, value added products, organic inputs etc were displayed and the event served as a marketing and awareness platform that helped Janadhanya to reach out to a wider range of consumers.
                        </p>
                        <p>
                            Visitors to the fair were also interested in knowing more about vegetable production and kitchen garden methodolgies recommended by GREEN foundation – the local and indigenous varieties of seeds conserved by GREEN since its inception was well appreciated by our existing customers who visited the fair, this convinced some new customers to place an order with Janadhanya soon after they heard these feedback.
                        </p>


                        <Row className='d-flex flex-md-row flex-column'>
                            <Col md={7}>
                                <Image src='/publications/news-and-events/indian-agri/krishi_mela_cert.jpg' alt='' fluid />
                            </Col>
                            <Col>
                                <p>
                                    Publications by the GREEN foundation such as books, CDs, agricultural calendar for 2015 and charts attracted and inspired visitors to try some of the recommended practices while some agencies and farmers wanted to partner with Janadhanya for a consistent supply of products. As a token of appreciation for our active participation in the program, the organizers awarded a memento of mark of excellence to Janadhanya.
                                </p>
                            </Col>
                            <p>
                                GREEN foundation and Janadhanya expresses heart felt thanks to the organizers of the KISAN fair and look forwarding to participating in many more such fecund exhibitions in future.
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

export default IndianAgri