import Link from 'next/link'
import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'

// import Image from 'next/image'

import '../../custom.css'

const OrganicFarmingCertification = () => {
    return (
        <Container fluid className='w-100'>
            <Container className='py-5 p-0 '>
                <Link href='/news-and-events' className='d-flex flex-md-row flex-column gap-3 justify-md-content-start align-content-center align-items-center text-decoration-none '>
                    <Image src='/publications/our-stories/back_to_stories_icon_green.svg' alt='' className='' fluid />
                    <h5 className='p-0 m-0 text-green fw-bolder'>Back to News & Events</h5>
                </Link>

                <hr className='my-4' />

                <Row className='p-0 '>
                    <Col md={8} className='d-flex flex-column gap-2 '>
                        <Image src='/publications/news-and-events/organic_farming_certification_meet_img.png' alt='' width={730} height={360}
                            className='news-singlepage-next-img' />
                        <h3>Organic Farming Certification: PGS Meet</h3>
                        <h6 className='text-green'>November 22, 2011</h6>
                        <p>
                            The PGS Meet at Maralawadi Hobli, facilitated by GREEN on 25th August, aimed to raise awareness of organic farming certification in the project area, with the objective of increasing the number of certified farmers within the community. Certification is done through the Participatory Guarantee System (PGS) which is defined as a locally focused quality assurance system that certifies producers based on the active participation of stakeholders. GREEN serves as a monitoring body providing guidance to those seeking certification. Currently, the area is home to 32 organically certified farms, with 72 undergoing the conversion process.
                        </p>

                        <Row className='d-flex flex-md-row flex-column w-100'>
                            <Col>
                                <Image src='/publications/news-and-events/organic_farming_pgs_meet_1.jpg' className="float-start pe-4 " alt="" />
                                <p>
                                    As with all of GREEN’s initiatives, the meet took a participatory approach to sensitizing the community, with attendees sharing their own experiences in organic farming. One such farmer was seventy-year-old Hombalamma, whose role in biodiversity conservation and sustainable agriculture has earned her the ‘Beeja Mathe’ (Seed Mother) award by the Govt. of Karnataka. Hombalamma highlighted the benefits PGS certification to those present. Her produce has been fetching higher prices since she received certification, said this progressive farmer, and she is very pleased with the results.

                                </p>
                            </Col>
                        </Row>

                        <p>
                            Hombalamma’s personal experience, as well as those of others, did much to address farmers’ doubts as to the benefits of organic farming certification. Many were unsure of its advantages. They were made aware that certification is essential, as it provides credible quality assurance for consumers seeking organic products and increases product marketability. Many other issues related to certification were also discussed in the meet in an effort to encourage farmers to enroll in the process. Read more on what our farmers have to say.
                        </p>

                        <p>
                            Community members also noted the increase in demand of indigenous seed varieties brought about by GREEN’s intervention programs. Where earlier most of these varieties had almost disappeared, they were now in such great demand that local seed banks were falling short. The Foundation’s Executive Director, Mr. K. P. Suresha underlined this gradual shift in agriculture that has taken place over the past few decades.
                        </p>

                        <p>
                            This transformation was best evidenced in the number of people who enthusiastically attended the meet. More than a 100 strong gathered at Maralawadi in the hopes of strengthening their economic security through sustainable agriculture and organic farming.
                        </p>


                    </Col>


                    <Col className='py-md-0 py-5'>
                        <h2>Related</h2>
                    </Col>
                </Row>
            </Container >
        </Container >
    )
}

export default OrganicFarmingCertification