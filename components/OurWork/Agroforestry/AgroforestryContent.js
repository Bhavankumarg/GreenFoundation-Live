'use client'

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import '../ourwork.css'

const AgroforestryContent = () => {
    return (
        <Container fluid>
            <Container className='p-0 py-5 text-md-center text-start '>
                <p>GREEN initiates farmers to take up agroforestry in their landholdings by growing trees in bunds and trenches around their farms. Saplings are first produced in a nursery before being transplanted to the main field. Incorporating agroforestry in farms is an ages old tradition in India that has recently faded out of farming practices. GREEN aims to revive this practice in order that farmers may benefit from its many advantages. Read more on how we revive other farming practices.</p>

                <Row className='agroforesty-content-bg shadow-sm d-flex justify-content-end align-content-center p-3'>
                    <Col md={5} className='bg-black bg-opacity-75 p-4 border border-1 border-white text-start'>
                        <Col className='border border-4 border-white mb-4' md={2} xs={2}></Col>
                        <p className='text-white'>Through our efforts, nearly 10,000 saplings were raised by women farmers in the villages of Aralagadakalu and Veeraiahanadoddi. Read more on women as custodians of biodiversity. Around 2500 trees were also planted in the areas as part of the Organic Village Program of the Govt. of Karnataka.
                        </p>
                    </Col>
                </Row>

                <Row className='p-md-5 p-3 mt-3' style={{ background: '#F5E7C8' }}>
                    <h4 className='text-green fw-bold pb-4'>Advantages of Agroforestry</h4>
                    <ul className='text-start px-md-5 '>
                        <li>
                            <p>Agroforestry is a collective name for land use systems and practices in which woody perennials are deliberately integrated with crops and/or animals on the same land management units as agricultural crops and/or animals, in some form of spatial arrangement or temporal sequence. In agroforestry systems there are both ecological and economical interactions between the different components.
                            </p>
                        </li>

                        <li>
                            <p>
                                It enhances soil fertility and water use efficiency within farming systems. Trees increase biomass and their fallen leaves and twigs, when transformed into humus, can be reused in the main field in order to increase soil fertility. Certain trees also enrich the nutrient cycle by aiding processes such as nitrogen fixation. The improve water efficiency by curbing run-off, drainage and soil evaporation. The trees around farms tend to act as windbreakers, protecting agricultural crops on the mainland. Deep tree roots also help prevent soil erosion.
                            </p>
                        </li>

                        <li>
                            <p>
                                Agroforestry systems can also be used as carbon sinks within an environment, and to an extent, help counter the effects of continued deforestation on the carbon cycle.
                            </p>
                        </li>

                        <li>
                            <p>
                                It can reduce the pressure on natural forests: many rural farmers are still dependant on natural forests as resource pools for their livelihood; for example, in many areas of India, forests are still the main source of firewood. By growing selected, domesticated trees in their own fields, farmers can reduce the pressure on rapidly depleting natural forests.
                            </p>
                        </li>

                        <li>
                            <p>
                                It also aids biological pest control: trees such as the neem tree have inherent, proven medicinal properties that allow farmers to pursue organic pest control mechanisms. Contribute to livelihood improvement. The trees planted can often fetch alternate sources of income. Excess fruits can be sold in the market; wood from trees can be used to make handicrafts and carvings. Trees can also be grown as fodder for livestock or used to make manure.
                            </p>
                        </li>

                    </ul>
                </Row>
            </Container>
        </Container >
    )
}

export default AgroforestryContent