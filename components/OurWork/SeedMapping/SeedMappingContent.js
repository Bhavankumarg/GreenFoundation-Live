'use client'

import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const SeedMappingContent = () => {
    return (
        <>
            <Container fluid style={{ background: '#E0E5D7' }}>
                <Container className='p-0 py-5 text-md-center text-start'>
                    <p>
                        Seed mapping is determining the variety of indigenous seeds present within a particular area. It is carried out using the Participatory Rural Appraisal (PRA) technique. This involves a close interaction with community members, especially its elders, to determine the existing biodiversity of the region. Community members are invited to discussions and their collective knowledge of indigenous seeds present in a particular area is documented. The technique gives a good indication of the extent of biodiversity loss. All available seed varieties in the community are collected and distributed among farmers for further multiplication and use, thereby enriching the biodiversity of the region. Indigenous crop varieties that may have disappeared from the area are restored to it by sourcing them from other regions.
                    </p>

                    <Row className='d-flex flex-md-row flex-column py-3 gap-3 gap-md-0'>
                        <Col md={6}>
                            <Image src='/our-work/seed-mapping/seed_mapping_img_1.png' alt='' width="90%" />
                        </Col>
                        <Col >
                            <Image src='/our-work/seed-mapping/seed_mapping_img_2.png' alt='' width="100%" />
                        </Col>
                    </Row>
                    <p >
                        The close interaction with communities also allows us to raise awareness of other types of traditional, sustainable practices while encouraging farmers to adopt these practices. Find out how PRA is also used to revive traditional practices. Through techniques such PRA, GREEN has been able to rediscover nearly 420 indigenous seed varieties since it first began its work in Thalli in 1997.
                    </p>
                </Container>
            </Container>
        </>
    )
}

export default SeedMappingContent