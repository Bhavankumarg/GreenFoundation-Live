import Link from 'next/link'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../../custom.css'

const CelebratingBiodiversity = () => {
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
                        <Image src='/publications/news-and-events/celebrating_biodiversity_img.png' alt='' fluid />
                        <h3>Celebrating Biodiversity</h3>
                        <h6 className='text-green'>February 21, 2013</h6>
                        <p>‘Unity for Diversity’ was the motto of the People’s Biodiversity Festival held in Hyderabad, Andhra Pradesh, from October 13 to 16, 2012. The program enabled local, regional, national and global networking for policy correction and collaboration regarding biodiversity, bringing together social enterprises from different states, policy makers, citizens, farmers, media, international delegates to the UN Convention on Biological Diversity (CBD) and youth. Above all, the festival was a celebration of biodiversity, aiming to adopt a people’s manifesto for biodiversity as a collective, open-source heritage, free of private Intellectual Property Rights; and reclaiming farmers’ crop varieties from institutional germplasm banks. The rich biodiversity of our world is the heritage of all its peoples, and not subject to controls or restrictions from institutions claiming to hold exclusive rights to it. Therefore an important objective of the program was safe-guarding the rights of farmers, adivasis, forest-dwellers, hill folk, fisher folk and future generations so that they may enjoy the existing biodiversity of today, which forms such an essential part of their culture and livelihood. Other objectives of the program included: – Promoting and supporting holistic ecological agriculture and bio-diverse forestry for local needs and health – Conserving and regenerating natural wealth, sustainable livelihoods &amp; traditional knowledge As a platform for information exchange, the festival enabled farmers and NGOs to showcase their work. GREEN participated in the event, expanding on the organization’s roles and activities and promoting its message of sustainable agricultural practices and community-based biodiversity conservation.
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

export default CelebratingBiodiversity