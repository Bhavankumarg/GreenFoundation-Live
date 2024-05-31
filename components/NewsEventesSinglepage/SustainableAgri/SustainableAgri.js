import Link from 'next/link'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../../custom.css'

const SustainableAgri = () => {
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
                        <Image src='/publications/news-and-events/sustainability_in_organic_farming_certification_img.png' alt='' fluid />
                        <h3>Sustainability in Organic Farming Certification</h3>
                        <h6 className='text-green'>December 27, 2011</h6>
                        <p>
                            Recently, GREEN hosted a farmers’ meet in Kanakapura, for community members seeking organic farming certification through the Participatory Guarantee System (PGS). The main aim of this exercise was to identify, through interaction with the community, strategies that would make the certification process sustainable and completely independent from third party facilitators such as GREEN.
                        </p>
                        <p>
                            In the three years since PGS was introduced in Kanakapura, approximately 700 farmers have signed up for the certification process under GREEN’s guidance. Work initially began with sensitizing the community on the concept of PGS and its trust-based method of peer reviewed certification.
                        </p>

                        <p>
                            While many were initially unsure of the process and its advantages and hesitant to take it up, farmers in the area have now become enthusiastic proponents of the system. They have seen first hand the benefits of PGS in strengthening their livelihoods. However, there is still a lot to be done before the PGS process can be said to be sustainable. During the meet, discussions were held on what structures or processes could achieve this model of sustainability. Through this dialogue it became apparent that existing PGS groups must come under the umbrella of a community-lead society, made up of elected members, which would monitor and facilitate the PGS process among farmers interested in certification.
                        </p>

                        <p>
                            “Farmers should feel empowered to independently pursue the PGS system long after GREEN’s facilitation has ended. Our aim is that this should become a community-lead initiative that is self sustaining,” says Shivakumar, GREEN’s Chief Program Co-ordinator in Kanakapura.
                        </p>

                        <p>
                            Efforts are now underway at GREEN to initiate processes that will empower the farmers to become truly sustainable.
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

export default SustainableAgri