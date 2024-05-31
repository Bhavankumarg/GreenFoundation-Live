'use client'

import React from 'react'

import { Container, Row, Col, Image } from 'react-bootstrap'

import '../ourwork.css'

const TrainingExposureContent = () => {
    return (
        <>
            <Container fluid className='training-exposure-custom-container' >
                <Container className='text-center py-5'>

                    <h4 className='text-green'>Training</h4>

                    <p>GREEN conducts training within communities so that they are empowered to adopt sustainable agricultural practices. Over 450 training sessions have been held in 2011 alone through our efforts. These workshops include teaching farmers how to make biopesticides and organic fertilizers such as vermicompost, training them on practices such as the Guli method for ragi cultivation and the SRI method for dry land paddy cultivation, educating them on proper seed storage and crop improvement techniques, among many others.</p>

                    <Row className='p-0 d-flex flex-md-row flex-column'>
                        <Col className='p-0'>
                            <Image src='/our-work/training-exposure/training_exposure_left_img.png' alt='' width="100%" />
                        </Col>

                        <Col className='d-md-flex flex-wrap justify-content-center align-items-center my-md-2 rounded-5 rounded-start-0 d-none ' style={{ background: '#7B9F44' }}>
                            <p className='p-4 text-white'>Sustainable agriculture is the production of plant and animal products in a way that uses farming techniques to protect the environment, ensure social and economic equity as well as gain economic profitability.</p>
                        </Col>

                        <Col className='d-flex flex-wrap justify-content-center align-items-center my-md-2 d-md-none d-block' style={{ background: '#7B9F44' }}>
                            <p className='p-4'>Sustainable agriculture is the production of plant and animal products in a way that uses farming techniques to protect the environment, ensure social and economic equity as well as gain economic profitability.</p>
                        </Col>

                        <h4 className='text-green pt-4'>Exposure Visits</h4>
                        <p className='pt-4 p-0'>Exposure visits enable farmers from different regions to interact with and learn from each other, allowing them to view practical examples of successful integration of sustainable practices in farming communities like their own. They are integral to sensitizing the farmer to GREEN’s message of sustainable agriculture. “We had heard of seed banks from GF staff before but we understood the concept only after they took us to a community seed bank. As soon as we saw it, we were very eager to start one in our village,” says Jayamma of Kanavemadhapura.</p>

                        <p className='pt-4 p-0'>GREEN facilitates approximately 6 to 8 exposure visits per year. These visits also include rare variety demonstrations that inform farmers of the characteristics and advantages of indigenous crops.</p>

                        <p className='pt-4 p-0'>Farmers are also asked to select which varieties presented would be best suited to their needs and agroclimatic zone, so that we may popularize those varieties within the area. At least once a year, GREEN also facilitates exposure visits to other non-profits working in Indian agriculture in order to initiate information exchange. These visits often instill a sense of purpose and enthusiasm among farmers as they are able to see, first hand, the results of adopting the organic practices GREEN advocates. This is particularly useful in convincing farmers to aim for organic farming certification, because it shows them the advantages certified farmers in other areas have, when marketing their produce.
                        </p>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default TrainingExposureContent