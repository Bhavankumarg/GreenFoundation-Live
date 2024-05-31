import Link from 'next/link'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../../custom.css'

const RareVarity = () => {

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
                        <Image src='/news-and-events/rare_variety_demonstration_in_kanakapura_img_1.png' alt='' fluid />
                        <h3>Rare Variety Demonstration in Kanakapura – 2020-21</h3>
                        <h6 className='text-green'>April 10, 2021</h6>

                        <p>
                            <Link href="">Rare Variety Demonstration</Link> is the process of demonstrating phenotypes (varieties) of different  crops like Millets, Finger Millets, Paddy, Oil Seeds and other seeds to the community to enable them to select seeds for further propagation based on their preferences or choice of characteristics. The seeds collected are also conserved in Community Seed Banks for future use.
                        </p>

                        <p>
                            In 2020, Rare Variety Demonstration was carried out for Ragi, Paddy and other Millets. The process began in May 2020 by sourcing the various varieties of indegenous seeds from across our seed banks. A farmer each was handpicked from the Hunasanahalli and Maralwadi clusters to multiply paddy and ragi seeds, respectively. In June 2020, seed germination tests were carried out before sowing the seeds for multiplication.
                        </p>

                        <table class="table table-bordered text-center table-hover ">
                            <tbody>
                                <tr className='table-light process-bg-2-hover'>
                                    <td>Village	</td>
                                    <td>Cluster</td>
                                    <td>Crop</td>
                                    <td>No. of varieties</td>
                                </tr>
                                <tr>
                                    <td>Banukondanahalli	</td>
                                    <td>Hunasanahalli</td>
                                    <td>Paddy</td>
                                    <td>80</td>
                                </tr>
                                <tr className='table-light'>
                                    <td>Hosadoddi</td>
                                    <td>Maralwadi</td>
                                    <td>Ragi, Millet</td>
                                    <td>110, 17</td>
                                </tr>
                            </tbody>
                        </table>

                        <h4>RVD for Ragi and Millets</h4>

                        <Col className='d-flex flex-column align-items-center'>
                            <Col md={6} >
                                <Image src='/publications/news-and-events/rare-varity/rvd_for_ragi.png' alt='' width="100%" />
                            </Col>
                        </Col>

                        <p>
                            RVD was carried out for Ragi (finger millet) and other millets in the Hosadoddi and Maralwadi clusters in Kanakapura in 10 guntas (0.25 acres) of land. Indegenous varieties of Ragi and Millet seeds were sourced from various seed banks and selected for RVD. The seeds were treated with vermicompost and sown in the nursery for germination. After a few days, the seedlings were uprooted with their tags, treated with Panchagavya and transplanted onto the main field which was treated with Pongamia powder, vermicompost and farmyard manure. Ragi was cultivated using the Guli method which produces higher yields. It is a method of transplanting ragi seedlings by maintaining a 25×25 cm distance between each crop. The advantages of this method are an increase in the number of productive tillers per hill, so more yield per unit of cropped land, ease of doing intercultural operations and ease of adopting machine harvesting etc.
                        </p>

                        <Col className='d-flex flex-column align-items-center'>
                            <Col md={10} >
                                <Image src='/publications/news-and-events/rare-varity/rvd-for-ragi-2.jpeg' alt='' width="100%" />
                            </Col>
                        </Col>
                        <p>Weeding, roguing and application of bio-inputs such as Panchagavya and Jeevamrutha were carried out regularly for these crops.</p>

                        <p>
                            The 110 varieties of Ragi and 17 varieties of Millets were harvested. Roguing, threshing, packing and labelling were done and 110 master samples of ragi were collected.
                        </p>
                        <h4>RVD for Paddy</h4>


                        <Col className='d-flex flex-column align-items-center'>
                            <Col md={8} >
                                <Image src='/publications/news-and-events/rare-varity/rvd_for_paddy.jpeg' alt='' width="100%" />
                            </Col>
                        </Col>

                        <p>
                            RVD was carried out for Paddy in the Banukondanahalli and Hunasanahalli clusters in Kanakapura. 81 indegenous varieties of Paddy were selected for cultivation under RVD. The nursery was prepared and seeds were sown after treating with Trichoderma. This was followed by irrigation and weeding. After a few days, the main field was ploughed and farm yard manure and Pongamia powder was applied. The seedlings were then uprooted from the nursery after a few days of germination, treated with Beejamrutha and transplanted to the main RVD plots.
                        </p>
                        <p>
                            Paddy was cultivated using the SRI (System of Rice Intensification) method. Similar to the Guli Ragi method, in SRI, seedlings are transplanted with 25×25 cm distance between each row and crop. Its advantages include more number of tillers per hill, less water requirement as there’s no need to keep standing water in the field, more number of productive tillers per hill so more yield per unit of cropped land, ease of doing intercultural operations, ease of mechanisation in the field and better management of micro-climate of the field due of good air circulation and better penetration of light.
                        </p>
                        <p>
                            In November 2020, renowned conservationist Ghani Khan visited the fields and helped in identifying the seeds best suitable for multiplication and identifying the special morphological characteristics of the crops and seeds. Master seed samples of 80 varieties of Paddy and data on morphological characteristics of 110 Ragi varieties were collected. Characteristics such as the size of grain, colour, aroma, the height of the plant, disease resistance, nutritional value, fodder quality, vegetative growth, neck width, etc. were recorded and analysed.
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

export default RareVarity