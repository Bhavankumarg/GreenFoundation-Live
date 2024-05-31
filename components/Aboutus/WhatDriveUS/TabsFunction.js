'use client'

import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { TabList, TabPanel, Tab, Tabs } from 'react-tabs'

import '../aboutus.css'

const TabsFunction = () => {
    return (
        <>
            <Container fluid className='lime-green-bg'>
                <Container className='py-md-5 d-md-block d-none'>
                    <Tabs className="d-md-flex custom-tab-deisgn py-md-5">
                        <TabList className="d-flex flex-column">
                            <Tab>SEED</Tab>
                            <Tab>SOIL</Tab>
                            <Tab>WATER</Tab>
                        </TabList>

                        <TabPanel>
                            <h4 className='text-green'><b>SEED</b></h4>
                            <p>One of the first steps to preserving India’s ecology is the conservation of its agrobiodiversity. This begins, first and foremost with the conservation of indigenous variety seeds. By conserving the biodiversity of a region and encouraging the use of indigenous seed varieties that require low inputs, we aim to reduce the strain being felt on the region’s natural resources.</p>
                            <p>‘The loss of these indigenous varieties would mean…the possible loss of a means to sustainable agriculture and its role in the conservation of the ecosystem as a whole’**.</p>
                            <p>This importance of agrobiodiversity and its role in food security was well demonstrated in the early days of GREEN’s work. When drought hit some of the farmers in our operation area, they were surprised to note that the indigenous crop varieties we had encouraged them to grow were resilient and drought resistant. The exotic varieties on the other hand, introduced as high-yielding crops with the promise of a larger incomes, had been destroyed.</p>
                            <p>Over the years, GREEN has worked extensively to conserve the rich agrobiodiversity of the country, spurred on by the steadfast belief that it is this biodiversity which holds the key to the future food security and ecological well being of India. We have always sought to recognize the role of farmers as scientists whose experience can provide important clues to ecological conservation. Using participatory techniques (such as Participatory Crop Improvement) we have worked with them side by side experimenting, testing and implementing successful conservation practices.</p>
                            <Row>
                                <Col>
                                    <Image src='/aboutus/whatdriveus/seed_img.png' alt='seed' width="100%" />
                                </Col>
                                <Col className='d-flex flex-column justify-content-end'>
                                    <p>For its efforts in this area, GREEN received the prestigious Equator Initiative Prize by UNDP in 2004.</p>
                                </Col>
                            </Row>
                        </TabPanel>
                        <TabPanel >
                            <h4 className='text-green'><b>SOIL</b></h4>
                            <p>The relationship between soil and plant is a complex one. It is through the soil that a plant derives much of its nutrition. Therefore, rich soil, full of plant nutrients will give high yields of good quality. This, in turn, will result in a greater income for the farmer. Poor soil fertility, on the other hand, can have a great negative effect on crop yields.</p>
                            <p>GREEN recognizes this important relationship with the soil and has, for this reason, extensively promoted the use of sustainable practices aimed at increasing soil fertility. We train farmers on the use and production of biopesticides and biofertilizers (such as vermicompost) which are soil friendly and do not destroy beneficial micro-organisms. We also educate farmers on natural pest management systems, crop rotation methods and multicropping patterns that are beneficial to the soil. As part of our core philosophy, we also advocate the use of indigenous seed varieties that are suited to local agro-climatic conditions and require low inputs. This further helps to reduce the strain on the soil.
                            </p>

                            <Row>
                                <Col>
                                    <Image src='/aboutus/whatdriveus/water_img.png' alt='seed' width="100%" />
                                </Col>
                                <Col className='d-flex flex-column justify-content-end'>

                                </Col>
                            </Row>

                        </TabPanel>

                        <TabPanel>
                            <h4 className='text-green'><b>WATER</b></h4>
                            <p>‘Over 77% of the country’s water consumption is in irrigation* and by 2050 it is predicted that the production of water intensive crops will increase by 80%. The demand on the country’s water supplies will be more than ever. In fact, it has been shown that in 1975 India had enough water to meet its demands, but by 2000 there was severe strain on its water sources**.’</p>

                            <p>With agriculture accounting for a majority of the country’s water consumption, proper farming techniques that minimize water usage are essential to the ecology of India. This is even more crucial in light of the fact that nearly 68% of India is vulnerable to drought and ground water resources are rapidly depleting. The Indian farmer therefore, has most to gain, and most to lose on the issue of water. The role he plays in water conservation is a large one.</p>

                            <Row>
                                <Col>
                                    <Image src='/aboutus/whatdriveus/water_img.png' alt='seed' width="100%" />
                                </Col>
                                <Col className='d-flex flex-column justify-content-end'>
                                    <p>GREEN therefore, encourages farmers to employ water conservation measures within their own farms by facilitating the construction of ponds, in the lowest lying area of their farmland. A network of channels drains runoff into the pond. GREEN also facilitates farmers in building bunds around their farmland to catch runoff.</p>
                                </Col>
                            </Row>

                            <p>Farmers are trained to use farming methods that require less water consumption. One such example is the SRI method for dry land paddy cultivation, which requires as much as 30% less water. By encouraging farmers to use indigenous seed varieties that naturally require low water inputs, we hope to reduce the overall water consumption of crops. Read more on water conservation techniques.</p>
                        </TabPanel>
                    </Tabs>
                </Container>
            </Container>
        </>
    )
}

export default TabsFunction