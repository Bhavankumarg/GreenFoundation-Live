'use client'

import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../custom.css'

const CertificationContent = () => {
    return (
        <>
            <Container fluid style={{ background: '#E0E5D7' }}>
                <Container className='p-0 py-5 text-md-center text-start'>
                    <h4 className='text-green fw-bolder'>Participatory Guarantee System (PGS)</h4>

                    <Row className='d-flex flex-md-row flex-column align-items-center my-4' style={{ background: '#F8D790' }} >
                        <Col className='p-0 custom-'>
                            <Image fluid src='/certification/participatory_guarantee_system_img.png' alt='' />
                        </Col>
                        <Col >
                            <p>
                                GREEN facilitates organic farming certification using a Participatory Guarantee System (PGS). This is a collaborative approach which involves farmers and other stakeholders in verifying the authenticity of organic produce. PGS replaces expensive third party audits, making organic farming certification possible for the small scale and marginal farmers that make up nearly 70% of India’s agricultural sector. It relies inherently on the trust and transparency of community members to certify farmers and is in use all over the world, including countries such as New Zealand, USA and Brazil.
                            </p>
                        </Col>
                    </Row>
                    <p>
                        Certification provides credibility for consumers seeking organic produce. It is also extremely beneficial to farmers, as they are able to fetch a higher rate for their produce, thereby strengthening their economic security. Our efforts to help provide farmers with organic farming certification began in 2006. As a member of the PGS Organic India Council, GREEN has facilitated the certification of 82 PGS groups to date. GREEN sensitizes farmers to the need for certification, educating them on the advantages they will have if they do so, as many farmers are unaware of the benefits of being certified.
                    </p>
                </Container>
            </Container>

            <Container className='p-0 py-5 text-md-center text-start d-flex flex-column align-items-center gap-md-4 gap-3'>
                <h4 className='text-green fw-bolder'>PGS Certification Process</h4>

                <Col className='p-3 rounded-4 text-white' style={{ background: '#7B9F44' }}>
                    <h4 className=''>Guidelines</h4>
                    <p className='text-white'>
                        The Organic Farming Association of India (OFAI) has outlined and published the criteria that all farmers seeking certification must meet. These PGS guidelines are appropriate to small scale and regional farmers of India and are defined by principles which promote organic agriculture.
                    </p>
                </Col>

                <Col className='p-3 rounded-4 text-white' style={{ background: '#7B9F44' }}>
                    <h4 className=''>Formation of a Local Group</h4>
                    <p className='text-white'>
                        The certification procedure outlined by the OFAI is only possible if farmers organize themselves into Local Groups (LGs). Therefore, each farmer must join a Local Group within his community and become an OFAI member. He must fill in the relevant OFAI forms and read an OFAI Basic Standards document that outlines organic farming standards that must followed in order to be certified. The farmer must also sign a pledge to follow these standards within his farm.
                    </p>
                </Col>
                <Col md={6} className='p-md-0 p-3 text-center'>
                    <Image fluid src='/certification/pgs_img.png' alt='' />
                </Col>

                <p className='p-md-0 p-3'>
                    GREEN facilitates all these procedures, initiating local groups within communities, outlining certification procedures to farmers and ensuring that they thoroughly understand the Basic Standards document.
                </p>

                <Col className='p-3 rounded-4 text-white' style={{ background: '#7B9F44' }}>
                    <h4 className=''>Inspection by a Peer Appraisal Group</h4>
                    <p className='text-white'>
                        GREEN facilitates each LG to form a ‘peer appraisal group’ which will inspect the farms of members within the LG. The appraisal statement signed by the peer appraisal group is then discussed within the LG, under the guidance of GREEN, in order determine which farmers qualify for certification. If certification is denied, GREEN provides further guidance so that the concerned farmer can become organic. We also empower farmers through training programs, exposure visits, regular meetings, etc.
                    </p>

                    <p className='text-white'>
                        Local Groups are recognized by a Regional Council (OFAI NSC). Those groups that do not comply with set standards are derecognized by the council. The PGS India Council maintains all records of LGs, providing them with identification. It also maintains a website database of PGS Organic India.
                    </p>
                </Col>


            </Container >
        </>
    )
}

export default CertificationContent