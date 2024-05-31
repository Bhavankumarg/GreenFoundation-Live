'use client'

import React from 'react'

import { Container, Row, Col, Image } from 'react-bootstrap'

import '../ourwork.css'

const SiltAppContent = () => {
    return (
        <Container fluid style={{ background: '#F5E7C8' }} >
            <Container className='py-5 p-0'>
                <Row className='d-flex flex-md-row flex-column text-md-center text-start p-0 gap-md-0 gap-3'>
                    <Col md={6}>
                        <Image src='/our-work/silt-application/silt_app_icon_1.svg' alt='' />
                        <p className='p-md-2'>Silt is fine granular material derived from rock or soil. Suspended as particulate matter in running water, it settles at the bottom of standing water bodies as fine sediment. In traditional Indian agricultural methods, silt gathered in village tanks and lakes was reapplied to fields in order to improve soil fertility. There are a reported 36,000 tanks in 26,000 villages of Karnataka state, built with centuries old expertise, that act as water storage systems for communities. They also trap the silt in run-off, and this silt, rich in plant nutrients, is an economically viable means of increasing soil fertility.
                        </p>
                    </Col>

                    <Col md={6} >
                        <Image src='/our-work/silt-application/silt_app_icon_2.svg' alt='' />
                        <p className='p-md-2'>However, the shift away from traditional practices towards chemical fertilizers has meant that many farmers now no longer use silt as a type of organic manure. The resulting increase in siltation in tanks and lakes has reduced their water holding capacities. GREEN has aimed to revive the traditional practice of silt application by guiding farmers through the process. This counters the effects of siltation while improving soil fertility. Read more on how we revive other indigenous agricultural practices. Silt collected from tanks and lakes is then spread evenly on the field before sowing.
                        </p>
                    </Col>


                    <Col md={6} >
                        <Image src='/our-work/silt-application/silt_app_icon_3.svg' alt='' />
                        <p className='p-md-3'>Farmers are advised to use between 20 -25 tractor loads of silt per acre of land. To prepare the land for silt application, they must first plough it and make sure to build bunds and trenches along its margin to prevent run-off. The adhesive properties of silt allow it to mix with soil in the main fields during the first monsoon rains. As silt composition varies from area to area, farmers are advised to have their soil tested before applying the necessary lab recommendations. Silt can be applied to soil once in 3 years in order to improve soil conditions.
                        </p>
                    </Col>

                    <Col md={6} >
                        <Image src='/our-work/silt-application/silt_app_icon_4.svg' alt='' />
                        <p className='p-md-2'>Advantages of silt application include increased soil fertility and, therefore, crop yields, increased moisture content of soil, improvement in water table due to increased filtration, among many others. Upon being initiated by GREEN to take up silt application, many farmers reported a significant increase in crop yields. In particular, yields were doubled in farmers who were growing ragi in their fields. These encouraging results have persuaded many more community members to take up silt application in their own farms. Click here to view results of silt application on ragi yields.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default SiltAppContent