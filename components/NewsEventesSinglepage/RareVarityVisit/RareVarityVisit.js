import React from 'react'

import '../../custom.css'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Link from 'next/link'

const RareVarityVisit = () => {
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
                        <Image src='/publications/news-and-events/rare-varity-visit/rare_variety_demonstration_visit.png' alt='' fluid />
                        <h3>Rare Variety Demonstration – A Visit</h3>
                        <h6 className='text-green'>December 27, 2014</h6>

                        <Col className=''>
                            <Image src='/publications/news-and-events/rare-varity-visit/rare_variety_demonstration_2.jpg' alt='' fluid className='float-start pe-2' />

                            <p>
                                The modern agricultural trend enhanced the erosion of agro biodiversity resulting in loss of valuable traditional crops and varietal local indigenous seeds.Conserving the diverse indigenous crop varieties has been an ongoing program by GREEN Foundation. The prime objective of the rare variety demonstrations is to make the community aware of the diversity they possessed and compare the performances of each variety with the existing locally cultivated strains. These demo plots not only showcase the varietal richness, but also used as a platform for farmers to evaluate these varieties with respect to pest resistance, yield and fodder qualities.
                            </p>

                        </Col>

                        <p>
                            GREEN Foundation(GF) facilitates Rare Variety demonstrations(RVD) through the community seed banks(CSB) and the farmers in the local community are trained by GF with the objective of building awareness on these local indigenous species and encouraging them to conserve these rare variety seeds.
                        </p>

                        <Col>
                            <Image src='/publications/news-and-events/rare-varity-visit/rare_variety_demonstration_3.jpg' alt='' fluid className='float-start pe-2' />

                            <p>
                                Rare Variety Demonstration visit for the GF Self Help Group(SHG) farmers and other farmers from the local community was held on 5th of December to Godur and Therubeedi villages of Maralvadi division. 37 paddy varieties were showcased in the plot of Honnamma, a progressive MKSP farmer from Godur Village – the participants were divided into 7 groups who picked the best yielding variety, best fodder variety and the variety that gives good yield as well as good fodder. The popular varieties chosen by the farmers included HMT, Nadanthara Sali, Mysore Sanna, Sannakki Batha, Gandhasale and Bale suli.
                            </p>
                        </Col>

                        <p>
                            41 rare Millet varieties(36 Finger millet and 5 Little millet varieties) were grown in the field of Anila, a progressive farmer and MKSP beneificiary from Therubeedi village and Majjige Ragi, Pichakaddi Ragi, Karikaddi Ragi, Bonda Ragi, Karimundaga Ragi, Kempu Ragi, Halukuli Ragi and Sharavathi Ragi were the popular varieties chosen by the participants.
                        </p>
                        <p>
                            The RVD visit was a huge success as 90 farmers turned up inspite of it being the Ragi Harvest season when the farmers had to be at their fields.
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

export default RareVarityVisit