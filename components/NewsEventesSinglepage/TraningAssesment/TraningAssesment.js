import Link from 'next/link'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../../custom.css'

const TraningAssesment = () => {
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
                        <Image src='/publications/news-and-events/training_assesment.png' alt='' fluid />
                        <h3>Training on Assessment of Climate Change Vulnerability and Adaptation Strategies</h3>
                        <h6 className='text-green'>January 13, 2012</h6>
                        <p>
                            The great body of research in the international community clearly highlights the gradual change in the earth’s atmospheric conditions and the impact this will have on human livelihoods. However, for millions of the world’s impoverished and disenfranchised, 75% of whom live in rural communities where agriculture is the main source of income, the concept of climate change, as understood by the scientific community, is an alien one.
                        </p>
                        <Col>
                            <Image src='/publications/news-and-events/traingin_assesment_1.jpg' alt='' fluid className='float-start pe-3' />


                            <p>
                                Yet in many ways, farmers are the most vulnerable to this change and its effects because their livelihoods depend, to a large extent, on the weather patterns in their locality. Nowhere is this truer than in the India, where 52% of the country’s labour force finds employment in agriculture and its related activities. Assessing the impact of climate change and its effects therefore, becomes essential in assuring the food and economic security of millions, not only in the rural areas, but the urban markets they serve as well. This is even more crucial for the large majority of India’s farmers who are small scale and marginal. For many such farmers, irrigation is a remote dream, drought wreaks havoc and unpredictable rains force families to migrate in search of work and economic security. The multifarious problems farmers face due to climate variations can be best understood and evaluated through a participatory approach. And understanding these problems is the first step to finding solutions that will make communities resilient to climate change.
                            </p>
                        </Col>
                        <p>
                            The ‘Training on assessment of climate change vulnerability and adaptation strategies’ which took place from the 3rd to 6th of November 2011, in the Bijapur district of North Karnataka was a collaborative effort conducted by GREEN Foundation in association with LI-BIRD, Nepal and POWER, Karnataka, India.
                        </p>

                        <p>
                            The three day workshop aimed to train attendants on step by step participatory tools that encouraged discussions with community members in order that the impact of climate change on communities may be thoroughly assessed. It also taught participants to properly evaluate these tools before suggesting solutions that could be implemented to make the community more resilient. One of the main objectives of the training program was to highlight the need for this bottom-up community-lead approach. Scientific research and study, though extensive on the subject, is still lacking in that it is not exhaustive. This means that local climatic variations and their impact on communities, especially in a country as vast as India, are not thoroughly assessed, let alone addressed. The responsibility for combating the effects of climate change therefore, falls on farmers themselves.
                        </p>
                        <p>
                            The national level workshop, which included over 25 participants from the states of Orissa, Andhra Pradesh, Maharashtra and Karnataka, was a part of the CBM-SA program. Field visits and community group discussions threw to light the great need for proper climate change assessment. The solutions that could be implemented to combat climate change could very well mean the difference between prosperity and poverty for the Indian farmer.
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

export default TraningAssesment