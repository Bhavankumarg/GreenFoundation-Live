'use client'

import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'

const AgroContent = () => {
    return (
        <>
            <Container className='py-5 text-center'>
                <p className='text-green'>Agrobiodiversity is a broad term that encompasses all components of biological diversity of relevance to food and agriculture as well as the larger agricultural ecosystems that contribute to production. Agrobiodiversity is the source of genetic material that is vital to future generations. Agrobiodiversity is crucial when it comes to preserving genes that could help improve crops, improving pest resistance, or adapting to climate change.
                </p>
                <Image src='/our-work/agrobio/agrobiodiversity_v.png' className='ps-md-5 ms-md-5' alt='' width="80%" />
            </Container>

            <Container fluid style={{ background: '#E4E4E4' }} >
                <Container className='py-3 p-0'>
                    <h3 className=' text-green text-center pb-3'>Preserve the Ecology</h3>
                    <Row>
                        <Col>
                            <Image className='' src='/our-work/agrobio/prevence_hand.svg' alt='' />
                            <p className='py-2'>At the root of our work is agrobiodiversity conservation. We enable the setting up of community seed banks and networks which act as seed repositories that provide farmers free access to indigenous seeds. We facilitate in-situ conservation through kitchen and community gardens as well as on-farm rare variety demonstrations. We conserve seeds ex-situ in a gene bank that contains hundreds of indigenous seed varieties.</p>
                        </Col>

                        <Col>
                            <Image src='/our-work/agrobio/preserve_the_ecology_icon_2.svg' alt='' />
                            <p className='py-2'>We facilitate farmers to adopt various soil and water conservation techniques that preserve the delicate ecology of their lands. We sensitize them on the climate change issues that have a direct impact on agriculture and train them on organic farming practices that replace harmful ones. Farmers are encouraged to use indigenous seed varieties that are well adapted to local climatic conditions, more resilient and less in need of chemical inputs.</p>
                        </Col>
                    </Row>

                </Container>
            </Container>

            <Container fluid style={{ background: '#126634' }} className='p-0'>
                <Container className='text-white  py-5 p-0 w-100'>
                    <Col className='text-center w-100'>
                        <h3>Community Seed Banks</h3>
                        <p className='text-white'>Community Seed Banks (CSBs) are places of storage where indigenous seed varieties are conserved and managed by community members. These ex-situ conservation sites provide farmers with free and easy access to traditional seeds.
                        </p>

                        <p className='text-white'>Managed mostly by women, CSBs have successfully harnessed the role of women in Indian agriculture as custodians of biodiversity. Traditionally, it has been women who select and store seeds after every harvest. In CSBs their understanding as resource persons is used to good effect, empowering them with a sense of pride and accomplishment that raises their footing in the community. We facilitate the set up of these seed banks by building a strong relationship with the community. Members are trained on seed selection, storage, record keeping and other aspects of seed bank management.
                        </p>

                        <Image className='ps-md-5 ms-md-5' src='/our-work/agrobio/community_seed_banks_img.png' alt='' width="80%" />
                    </Col>


                    <div className='community-row'>
                        <Row className='community-scroll d-flex flex-column flex-wrap flex-md-row p-2'>
                            <Col className='community-seed-bank' >
                                <Image src='/our-work/agrobio/slider_icon_1.svg' alt='' />
                                <p className='community-para text-white'>There are currently three CSBs in Kanakapura Taluk which combinedly has 142 varieties of Ragi and minor millet, 78 varieties of Paddy, 19 varieties of vegetables, 7 varieties of pulses and 9 varieties of oilseeds.
                                </p>
                            </Col>
                            <Col className='community-seed-bank'>
                                <Image src='/our-work/agrobio/community_seed_banks_icon_slider.svg' alt='' />
                                <p className='community-para text-white'>Through collaboration with 11 other NGOs, GREEN has also initiated the setting up of 34 seed banks in 9 of Karnataka’s 10 agro-climatic zones. These seed banks formed a Community Seed Bank Network (CSBN) developed to address the dire need for agrobiodiversity conservation in Karnataka.
                                </p>
                            </Col>
                            <Col className='community-seed-bank'>
                                <Image src='/our-work/agrobio/rupee_slider.svg' alt='' />
                                <p className='community-para text-white'>GREEN’s pioneering efforts at biodiversity has galvanized whole communities to spread its message of sustainability. The effectiveness of these seed banks has influenced the Karnataka Govt. to fund the establishment of CSBs throughout the state.
                                </p>
                            </Col>
                            <Col className='community-seed-bank'>
                                <Image src='/our-work/agrobio/slider_icon_1.svg' alt='' />
                                <p className='community-para text-white'>GREEN started its CSB in Pudukkottai at Tamil Nadu and Kalaburigi in Karnataka. Both the places Women farmers saving their indigenous varieties of Millets, Paddy, oil seeds, vegetable seeds, and pulses.
                                </p>
                            </Col>
                            <Col className='community-seed-bank'>
                                <Image src='/our-work/agrobio/slider_icon_2.svg' alt='' />
                                <p className='community-para text-white'>CSBs have proved to be more than just seed repositories. They have provided a platform for community members to set up alternate income generating schemes. The information sharing that often takes place at seed bank meetings raises awareness of sustainable agriculture within a community. Through these meetings, many more farmers are persuaded to adopt organic farming practices.
                                </p>
                            </Col>
                        </Row>
                    </div>

                </Container>
            </Container>
        </>
    )
}

export default AgroContent