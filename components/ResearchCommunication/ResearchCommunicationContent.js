'use client'

import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../custom.css'

const ResearchCommunicationContent = () => {


    return (
        <>

            <Container fluid className='reseach-custom-bg-contanier'>
                <Container className='p-0 d-flex flex-column align-items-center gap-3 py-4 text-md-center text-start'>
                    <Col md={9}>
                        <h4 className='text-green fw-bolder'>
                            Research Enables Us to Achieve Our Goals in Sustainable Agriculture and Agrobiodiversity Conservation.
                        </h4>
                    </Col>

                    <Row className='p-4 rounded-4' style={{ background: '#F8D790A3' }}>
                        <Col className='text-start'>
                            <p >
                                GREEN Foundation has undertaken many research projects related to value chains, local seed varieties and enterprises support. Some of the key projects are listed here:
                            </p>

                            <ul className=''>
                                <li className='green-marker'>
                                    <p>
                                        Value chain analysis of millets, pulses and vegetables, to help develop strategies for B2B and B2C sales of Janadhanya Products
                                    </p>
                                </li>
                                <li className='green-marker'>
                                    <p>
                                        Enterprise assessments to understand the viability of the enterprise groups under the Janadhanya Producer company
                                    </p>
                                </li>
                                <li className='green-marker'>
                                    <p>
                                        Identification and listing of local and indigenous varieties of key crops (paddy, millets) in Gulbarga and Pudukkottai
                                    </p>
                                </li>
                                <li className='green-marker'>
                                    <p>
                                        Genetic finger printing of the indigenous finger millet varieties collected from Kanakapura, with the support of National Bureau of Plant Genetic Resources, Indian Council of Agricultural Research
                                    </p>
                                </li>
                            </ul>
                        </Col>
                    </Row>

                    <h4 className='fw-bolder text-green'>
                        Changing Farming Lives in South India, Past and Present
                    </h4>

                    <Col md={6}>
                        <iframe width="700" height="400" src="https://www.youtube.com/embed/Ym2uEcW4CPw" title="David Araku" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='research-yt-video'></iframe>
                    </Col>

                    <p>
                        The Open University in collaboration with GREEN Foundation conducted a research on farming lives in South India, past and present. The project brings an original arts and humanities perspective to the crucial development challenges of food security, biodiversity, and climate adaptation faced by small and marginal farmers. Focusing on South India, it explores the potential of history, film, and sound, to document and support small farmer creativity in developing resilience to these livelihood challenges. The preliminary workshop for on Sustainable Farming Practices was organized in Bengaluru on 21st and 22nd of February, 2018.
                    </p>

                    <p>
                        The research helped to explore a strong interdisciplinary framework, in particular the various aspects of history in the farming culture, also documented the creative and sustainable community farming practices both past and present. The first workshop was conducted on 2018 February and the sharing research finding workshop was conducted on 2019 January.
                    </p>

                    <h4 className='fw-bolder text-green'>
                        Research Area
                    </h4>

                    <p>
                        The researchers Dr. Sandip Hazareesingh, Open University, Tsveti Bendakova, Edinburgh University, co-ordinator, Sara Penrhyn Jones, media producer did their research in our project area to document creative and sustainable community farming practices. The farmers in this cluster were having indigenous knowledge to share with. We know our challenge will be intensive to make them talk. The open university professor selected around 20 to 25 farming community women to interview and documented their traditional knowledge on the farming practices.
                    </p>

                    <h4 className='fw-bolder text-green'>
                        Initial Difficulties
                    </h4>

                    <p>
                        Initially the younger farmers not involved much with the research and they thought that the older farmers may not be able to share their knowledge. But once the researchers started chatting with the older farmers , they were interested to share their knowledge as well with them.
                    </p>

                    <Row className='d-flex flex-md-row flex-column gap-3 p-4 py-5 text-white rounded-4' style={{ background: '#7B9F44' }}>
                        <Col md={12}>
                            <h5>
                                Findings from the Research and Presentations
                            </h5>
                            <p className='text-white'>
                                The researchers took four main topics for the discussion and for research. The videos and presentations prepared on those topics. The elderly women, men and younger generation farmers are also interviewed for collecting information on the topic. Around 25 farmers are interviewed. The elderly people shared their indigenous knowledge for documentation. The knowledge is divided into 4 main categories as follows which are relevant to the research and traditional knowledge were extracted from the farmers.
                            </p>
                        </Col>

                        <Col className='bg-white text-black p-5 rounded-4 d-flex flex-column justify-content-center'  >
                            <h5 className='p-0 m-0 lh-base'>
                                Our Grandmothers Used to Sing Whilst Weeding
                            </h5>
                        </Col>
                        <Col className='bg-white text-black p-5 rounded-4 d-flex flex-column justify-content-center'  >
                            <h5 className='p-0 m-0 lh-base'>
                                Beeja Matha
                            </h5>
                        </Col>
                        <Col className='bg-white text-black p-5 rounded-4 d-flex flex-column justify-content-center'  >
                            <h5 className='p-0 m-0 lh-base'>
                                Now We Have More Time
                            </h5>
                        </Col>
                        <Col className='bg-white text-black p-5 rounded-4 d-flex flex-column justify-content-center' >
                            <h5 className='p-0 m-0 lh-base'>
                                The Grinding Stone
                            </h5>
                        </Col>
                    </Row>

                    <h4 className='text-green fw-bolder'>
                        Our Grandmothers Used to Sing Whilst Weeding
                    </h4>
                    <p>
                        Initially the younger farmers not involved much with the research and they thought that the older farmers may not be able to share their knowledge. But once the researchers started chatting with the older farmers , they were interested to share their knowledge as well with them.
                    </p>

                    <Row className='d-flex flex-md-row flex-column ' >
                        <Col md={6}>
                            <Image src='/research-communication/grandmother_seeding_farm_img.png' alt='' width="100%" />
                        </Col>

                        <Col className='text-start d-flex flex-column justify-content-center'>
                            <p>
                                The farmers usually sang while they were out in the fields engaged in farming activities, Mrs. Shivamma, one of the farmers interviewed said.
                            </p>
                            <p>
                                After her marriage, while farming, she would sing as she worked together with other farmers in the fields. Singing songs would help them forget some of the hardships of their profession, including working under the harsh sun and constant menace from wild animals.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container fluid className='bg-lightgreen'>
                <Container className='p-0 text-md-center text-start py-5'>
                    <h4 className='text-green fw-bolder py-3'>
                        Beeja Matha (Mother of Seeds)
                    </h4>
                    <Row className='d-flex flex-md-row flex-column'>
                        <Col md={6}>
                            <Image src='/research-communication/Beeja_Matha_Mother_of_Seeds_img_final.png' alt='' fluid />
                        </Col>
                        <Col md={6} className='d-flex flex-column justify-content-end text-start'>
                            <p>
                                Mrs. Hombalamma is widely known in her community as Beeja Matha, meaning seed mother, was interviewed for the broad knowledge she had to share about seeds. She’s considered a repository of indegenous knowledge of conserving and preserving seeds. For the past 22 years she has been conserving Broad Beans, Bottle Gourd, Tur Dal, Foxtail Millet, Pumpkin Seeds and other seeds for sowing every season, and sharing these seeds with other farmers.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container fluid className='bg-liteyellow'>
                <Container className='p-0 text-center d-flex flex-column justify-content-center align-items-center py-5'>
                    <h4 className='text-green fw-bolder py-3'>
                        Now We Have More Time
                    </h4>
                    <Col md={7} className='p-0'>
                        <Image src='/research-communication/now_we_have_more_time_img.png' alt='' fluid />
                        <p>
                            Mrs. Krishnakumari and Mrs. Leelavathy from Gollaradoddi, a small village in
                            Karnataka and a GREEN Foundation project area, were interviewed.
                        </p>
                    </Col>
                    <p>
                        While they used to boil, clean and pound the millets manually back in the day, today they use millet processing machines and destoners, which were donated by GREEN Foundation, for cleaning and processing the millets. Nowadays they are willing to grow small millets as they have the millet processing machine to clean the millets and Ragi. They also reported having more time to do other jobs for an additional income and are able to spend time time with their children as well.
                    </p>
                </Container>
            </Container>

            <Container fluid className='bg-grey'>
                <Container className='p-0 py-5 d-flex flex-column justify-content-center align-items-center text-md-center text-start'>
                    <h4 className='text-green fw-bolder'>
                        Grinding Stone
                    </h4>
                    <Col md={8} className=' d-flex flex-column align-items-center'>
                        <Image src='/research-communication/grinding_stone_img.png' alt='' width="90%" />
                        <p>
                            Mrs. Gundamma and Mrs. Muniamma from Bellalam, Thally, make flour using a hand
                            pounding machine. They’re able to grind 20 to 30 kg of Ragi.
                        </p>
                    </Col>
                    <p>
                        Nowadays, farmers buy Ragi flour from the market. The two women are of the opinion that the hand pounded Ragi is tastier than the flour they get from the shop. They particularly speak of the texture of the flour, which can be achieved only by grinding with a stone.
                    </p>
                    <p>
                        Grinding with stone is a traditional method of making flour. The practice has been passed through generations and the two farmers are happy to pass on these techniques to the next generations.
                    </p>
                </Container>
            </Container>


            <Container fluid >
                <Container className='p-0 py-5 text-center'>
                    <Row className='p-md-4 bg-litegreen rounded-4' >
                        <h4 className='text-green  fw-bolder'>
                            Conclusion
                        </h4>
                        <p>
                            Documenting the traditional history of farmers was successfully completed and findings were shared with the farmers. The main aim of the project was to build and stimulate farmers’ creativity in developing resilience to livelihood challenges for food, biodiversity and climate change. It is also very useful for GREEN Foundation for the further analysis of their farming history and traditional methods.
                        </p>
                    </Row>
                </Container>
            </Container >
        </>
    )
}

export default ResearchCommunicationContent