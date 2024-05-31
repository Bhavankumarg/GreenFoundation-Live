import Link from 'next/link'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../../custom.css'

const OpenUniversity = () => {
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
                        <Image src='/publications/news-and-events/open_university_workshop_2.png' alt='' fluid />
                        <h3>Open University Workshop</h3>
                        <h6 className='text-green'>March 10, 2019</h6>
                        <h2>Change in Farming Lives in South India, Past and Present</h2>
                        <h5 className='fw-bolder'>Purpose of the Research</h5>
                        <ul>
                            <li>PURPOSE OF THE RESEARCH</li>
                            <li>RESEARCH AREA</li>
                            <li>INITIAL DIFFICULTIES</li>
                            <li>FINDINGS OF THE RESEARCH AND PRESENTATIONS</li>
                            <li>CONCLUSION</li>
                        </ul>

                        <p>The research helped to explore a strong interdisciplinary framework, in particular the various aspects of history in the farming culture, also documented the creative and sustainable community farming practices both past and present. The first workshop was conducted on 2018 February and the sharing research finding workshop was conducted on 2019 January.
                        </p>

                        <h5 className='fw-bolder'>Research Area</h5>
                        <p>
                            The researchers Dr. Sandip Hazareesingh, Open University, Tsveti Bendakova, Edinburgh University, co-ordinator, Sara Penrhyn Jones, media producer did their research in our project area to document creative and sustainable community farming practices. The farmers in this cluster were having indigenous knowledge to share with. We know our challenge will be intensive to make them talk. The open university professor selected around 20 to 25 farming community women to interview and documented their traditional knowledge on the farming practices.
                        </p>

                        <h5 className='fw-bolder'>Initial difficulties</h5>
                        <p>
                            Initially the younger farmers not involved much with the research and they thought that the older farmers may not be able to share their knowledge. But once the researchers started chatting with the older farmers , they were interested to share their knowledge as well with them.
                        </p>

                        <h5 className='fw-boder'>Findings from the research and presentations</h5>
                        <p>
                            The researchers took four main topics for the discussion and for research. The videos and presentations prepared on those topics. The elderly women,men and younger generation farmers are also interviewed for collecting information on the topic. Around 25 farmers are interviewed. The elderly people shared their indigenous knowledge for documentation.The knowledge is divided into 4 main categories as follows which are relevant to the research and traditional knowledge were extracted from the farmers.
                        </p>
                        <ol>
                            <li>Our Grandmother used to sing whilst weeding</li>
                            <li>Beeja matha</li>
                            <li>Now we have more time</li>
                            <li>The grinding stone.</li>
                        </ol>


                        <Row className='d-flex flex-md-row flex-column'>
                            <Col md={3}>
                                <Image src='/publications/news-and-events/open-university/shivamma.jpg' alt='' className='float-start' fluid />
                                <h6><i>Shivamma</i></h6>
                            </Col>
                            <Col>
                                <h5 className='fw-bolder'>Our Grandmother used to sing whilst weeding</h5>
                                <p>
                                    The farmers usually used to sing whilst they are doing farming activities. This indigenous knowledge was documented and videographed by the researchers.
                                </p>
                                <p>
                                    Mrs. Shivamma the sustainable farmers shared her experience whilst weeding. After her marriage, during farming, she started singing When working together with other farmers. They are singing to feel good, bring down the tension, feel comfortable in all kind of weather. Also, they have to face the damages made by wild animals. Men used to drive away the wild animals during the night.
                                </p>
                            </Col>
                        </Row>

                        <Row className='d-flex flex-md-row flex-column'>
                            <Col md={3}>
                                <Image src='/publications/news-and-events/open-university/hombalamma.jpg' alt='' fluid />
                                <h6><i>hombalamma</i></h6>
                            </Col>
                            <Col>
                                <h5 className='fw-bolder'>Beeja Matha(Mother of Seeds)</h5>
                                <p>She said that we need to sow seed , water it, nurture it to grow as a plant.She is uneducated but has high level of indigenous knowledge.she has got knowledge to conserve and preserve seeds in a way that they aren’t infected with pests. She used to share these seeds with other farmers. Past 22 years she used to conserve seeds and sharing with other farmers. So she is called as “Beeja Matha”.
                                </p>
                                <p>
                                    Mrs. Hombalamma was interviewed for the broad knowledge she has to share about seeds. She used to conserve broad bean, bottle gourd, turdal, foxtail millet, pumpkin seeds for sowing every season.
                                </p>
                            </Col>
                        </Row>

                        <Row className='d-flex flex-md-row flex-column'>
                            <Col md={3}>
                                <Image src='/publications/news-and-events/open-university/leelavathy_and_krishnakumari.jpg' alt='' fluid />
                                <h6><i>Leelavathy and Krishnakumari</i></h6>
                            </Col>
                            <Col>
                                <h5 className='fw-bolder'>Now we have more time</h5>
                                <p>
                                    Gollaradoddi in Karnataka is a small village, GREEN Foundation project area.Mrs. Krishnakumari and Mrs. Leelavathy were interviewed. In olden days they used to boil,clean,and pound the millets manually. Nowadays they are using millet processing machines and destoner for cleaning the millets which was donated by GREEN Foundation. The machine is used for clean and process the millets. Nowadays they are willing to grow small millets as they have the millet processing machine to clean the millets and Ragi. They have more time to do other jobs for extra earning. They spent time with their children as well.
                                </p>
                            </Col>
                        </Row>

                        <Row className='d-flex flex-md-row flex-column'>
                            <Col >
                                <Image src='/publications/news-and-events/open-university/muniamma_and_gundamma.jpg' alt='' fluid />
                                <h6><i>Gundamma and Muniamma</i></h6>
                            </Col>
                            <Col>
                                <h5 className='fw-bolder'>Grinding stone</h5>
                                <p>
                                    Mrs. Gundamma and Mrs. Muniamma were from Bellalam , Thally. They used to make flour using hand pounding machine.They used to sing random song during their work for not getting sleep. They are able to grind 20 to 30 kg of Ragi.
                                </p>
                            </Col>
                        </Row>
                        <p>
                            But nowadays the farmers are buying Ragi flour from the shop.They have an opinion that the hand pounding ragi has more taste than the flour we got from the shop.They are particular about the ragi texture. That texture they will get only by hand grinding.
                        </p>

                        <p>
                            This grinding with stone is an old traditional method. The process is passed through generations. These two farmers are very happy to teach their techniques of grinding to the next generations.
                        </p>
                        <h5 className='fw-bolder'>Conclusion</h5>
                        <p>
                            The documenting traditional history was successively completed and the findings are shared in front of the farmers.The main aim of the project is to build and stimulate farmers creativity in developing resilient to livelihood challenges for food , biodiversity and climate change. It is very useful for GREEN Foundation for the further analysis of their farming history and traditional methods.
                        </p>
                    </Col>



                    <Col className='py-md-0 py-5'>
                        <h2>Related</h2>
                    </Col>
                </Row>
            </Container>
        </Container >
    )
}

export default OpenUniversity