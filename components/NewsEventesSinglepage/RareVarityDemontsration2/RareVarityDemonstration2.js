import Link from 'next/link'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../../custom.css'

const RareVarityDemonstration2 = () => {

    const tableBg = {
        background: '#ffffc7'
    }

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
                        <Image src='/news-and-events/rare_variety_demonstration_2.png' alt='' fluid />
                        <h3>Rare Variety demonstration</h3>
                        <h6 className='text-green'>March 11, 2019</h6>

                        <p>
                            RVD for Raagi was done at Veerayanadoddi, Hunusanahalli cluster. It was done on 10 Guntas (0.25 acre) of land. Raagi seeds were collected from various seed banks and 92 varieties were selected for RVD. Then nursery for Raagi was prepared, seeds were sown and covered with vermicompost. Then regular irrigation and weeding followed. After few days, layout was prepared for 92 varieties and and FYM and Pongamia powder was applied. Seedlings were uprooted from the nursery with their tags, treated with Panchagavya and transplanted to the main field.
                        </p>

                        <Row className='d-flex flex-md-row flex-column w-100'>
                            <Col >
                                <Image src='/publications/news-and-events/rare-demnstr-2/rare_varity_demonstration_1.jpg' alt='' fluid />
                                <p><i>RVD paddy master seed sample</i></p>
                            </Col>
                            <Col>
                                <Image src='/publications/news-and-events/rare-demnstr-2/rare_varity_demonstration_2.jpg' alt='' fluid />
                                <p>
                                    <i>
                                        RVD Ragi master seed sample
                                    </i>
                                </p>
                            </Col>
                        </Row>

                        <table class="table table-bordered table-hover mt-md-4 a">
                            <tbody>
                                <tr className=' process-bg-2-hover' style={tableBg}>
                                    <td>Village		</td>
                                    <td>Cluster</td>
                                    <td>Crop</td>
                                    <td>No. of varieties</td>
                                </tr>
                                <tr>
                                    <td>Veerayanadoddi</td>
                                    <td>Hunasanahalli</td>
                                    <td>Ragi</td>
                                    <td>92</td>
                                </tr>
                                <tr className='table-light'>
                                    <td>Settikeraidoddi</td>
                                    <td>Kodahalli</td>
                                    <td>Paddy</td>
                                    <td>54</td>
                                </tr>
                            </tbody>
                        </table>

                        <p>
                            RVD for paddy was carried out in Kodihalli cluster and was done in 10 Gunta (0.25 ac) of land at Settikeraidoddi. 54 varieties of paddy were selected for the purpose from the seed banks. Then nursery was prepared, seeds were sown and covered with vermicompost . This was followed by irrigation and weeding. After a few days, the main field was ploughed and FYM and Pongamia powder was applied. The seedlings were then uprooted from the nursery after few days of germination, treated with Beejamrutha and transplanted to the main RVD plots.
                        </p>


                        <p>
                            As mentioned earlier Rare Variety Demonstration is the process of demonstrating phenotypes of different crops like Millets, Finger Millets, Paddy, Oil Seeds and other seeds to the community and enable the community to select seeds for further propagation based on their preferences or choice of characteristics. This is done at the time of maturity of the crops. Field Day was organised for Finger Millet in Veerayanadoddi village on 30th November 2018 for 120 varieties of Finger Millet. One hundred and twenty women farmers and seed savers and individual farmer conservationist came together with GREEN Foundation to conduct a participatory mapping of the Finger Millet varieties. Mapping was done on three characteristics, i.e., strength of the plant, size of the ear-head and suitability for fodder. Three coloured ribbons were given to the farmers to do the mapping. Subsequently there was a discussion on the the local varieties and importance of conservation.
                        </p>

                        <p>
                            GREEN Foundation collaborated with Ghani Khan, a celebrated Farmer Conservationist having long-standing association with the organisation, to collect master seed sample, with quality seeds, which could then be used for multiplication next year and conservation in the seed banks. The team conducted basic plant measurement as a part of the broader process to identify robust varieties. The characteristics were: (i) Height of the plant, (ii) Number of tillers, (iii) Productive tillers, (iv) date of flowering, (v) numbers of ear-heads, (vi) number of fingers and (vii) length of fingers. This data is being digitised for later use. Out of the 120 varieties, 92 varieties germinated well and have been conserved in the seed banks.
                        </p>
                    </Col>


                    {/* Related Stories */}
                    <Col>
                        <h2>Related stories</h2>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default RareVarityDemonstration2