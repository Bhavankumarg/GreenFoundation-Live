import Link from 'next/link'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../../custom.css'

const VisitNationalUniversity = () => {
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
                        <Image src='/publications/news-and-events/national-institute/national_institute_of_rural_development_hyderabad_1.png' alt='' fluid />
                        <h3>Visit by National Institute of Rural Development, Hyderabad</h3>
                        <h6 className='text-green'>January 23, 2015</h6>

                        <Row>
                            <Col md={7}>
                                <Image src='/publications/news-and-events/national-institute/visit_by_NIRD1.jpg' alt='' fluid />
                                <h6><i>Visit by NIRD</i></h6>
                            </Col>
                            <Col>
                                <p>
                                    Officials from National Institute of Rural Development, Hyderabad along with 28 delegates from 16 countries visited GREEN’s project area on 20th January 2015 for an exposure on the impact of MKSP in the lives of rural women farmers. The group consisting of officials from NIRD, KSRLPS, RDPR and Zilla Parishath got together with the MKSP women beneficiaries of the villages of Byregowdanadoddi, Chikamaralwadi and Terubeedi of Maralwadi division.
                                </p>
                            </Col>
                            <p>
                                Around 40 women farmers interacted with the visitors and explained the functioning of theSHGs(Self Help Groups), Vermicompost producer group in Byregowdanadoddi and the Terubeedi Community Seed bank. The visitors were also briefed on the seed conservation, multiplication and quality maintenance techniques followed and the local millet and vegetable varieties conserved by the farmers, under the guidance of GREEN. The group also checked out the seed varieties exhibited at the Community seed bank.
                            </p>
                        </Row>

                        <Row>
                            <Col md={7}>
                                <Image src='/publications/news-and-events/national-institute/visit_by_NIRD2.jpg' alt='' fluid />
                                <h6><i>Visit by NIRD</i></h6>
                            </Col>
                            <Col>
                                <p>
                                    Two of the Board of directors of Janadhanya, Nagarathnamma and Sumathi, apprised the visitors on the role of Janadhanya and its women members in the marketing of seeds, food grains, organic inputs and other value added products.
                                </p>
                            </Col>
                            <p>
                                The group was amazed by the collection of local indigenous seed varieties in the community seed bank and appreicated the impact of producer group in improving the livelihoods of farmers in the local and neigbouring villages.
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

export default VisitNationalUniversity