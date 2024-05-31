import Link from 'next/link'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../../custom.css'

const PoweredByNature = () => {
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
                        <Image src='/publications/news-and-events/powered-by-nature/powered_by_nature_img.png' alt='' fluid />
                        <h3>Powered by Nature – Organic Inputs</h3>
                        <h6 className='text-green'>October 23, 2014</h6>
                        <Col>
                            <Image src='/publications/news-and-events/powered-by-nature/organic_inputs_1.jpg' alt='' fluid className='float-start pe-2' />

                            <p>
                                Organic inputs are an integral part of sustainable agriculture and alternatives to chemical fertilizers and pesticides playing an active role in the act of eco-intensification. A fertile soil should have the right porosity, water holding capacity and organic matter in addition to containing all the essential nutrients required for plant growth. Organic inputs use the crop waste materials, animal manure and other plant parts strengthening the interdependence of agriculture, agro forestry and animal husbandry. Organic farming is biodiversity in action and organic inputs build the long-term environmental and economic performance of the actual farm enhancing the biodiversity and ecosystem services at both the micro and the macro level. The natural process of nutrient cycling is intensified by stimulating soil biology through practices such as composting and crop rotation which in turn enhance system health, vitality and productivity. Increasing organic matter in the soil enhances water holding and cycling. Avoidance of toxic pesticides and the utilization of diverse species enhance rather than inhibit nature’s constant drive for balance thereby enabling the ecosystem to regulate pest and disease. At the macro level the integration of landscape elements such as trees and hedges with the appropriate combination of organic practices can bring severely degraded land back into production.
                            </p>
                        </Col>


                        <p>
                            A two day comprehensive training on organic input preparation and usage has been imparted to the field staff and community Resource persons of GREEN foundation during which practical solutions were offered to the commonly encountered problems they may face. The training was attended by 70 participants from Maralvadi and Kodihalli hoblis of Kanakapura Taluk. The Community Service Providers of the Digital Green Project recorded videos from the training so that it can be disseminated to a wider public in future. This training is intended to better equip GREEN’s field staff on organic input preparations so that they can pass it on to the farmers of the project area. The training also served as refresher training for the community Resource persons building their confidence to share knowledge in their communities.
                        </p>
                        <p>
                            Practical demonstrations of the various organic inputs were held during which the field managers and CRPs themselves prepared the inputs, thus giving them a hands-on experience. Following organic inputs were covered in the sessions :
                        </p>

                        <Col md={7}>
                            <Image src='/publications/news-and-events/powered-by-nature/organic_inputs_2.jpg' alt='' fluid />
                        </Col>

                        <ul>
                            <li>Vermiwash</li>
                            <li>Vermicompost</li>
                            <li>Panchagavya</li>
                            <li>Puchi marundu</li>
                            <li>Jeevamrut</li>
                            <li>Chilly garlic Concoction</li>
                            <li>Seed treatment methods like Cow urine method</li>
                            <li>Beejamrut</li>
                            <li>Fish oil</li>
                            <li>Amrut Pani</li>
                        </ul>

                        <p>
                            Janadhanya Farmers’ Federation currently markets organic inputs prepared by the SHGs in the project area and this training is aimed at encouraging more community members to produce organic inputs in their SHGs.
                        </p>

                        <p>
                            An organic Input Tip : Jeevamrut has been found to be very useful in improving crop yields from Plantains. A farmer from Hosadoddi village reported miraculous revival of the whole orchard which was disease struck and on the verge of ruination.
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

export default PoweredByNature