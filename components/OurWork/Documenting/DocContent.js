'use client'

import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../ourwork.css'

const DocContent = () => {
    return (
        <>
            <Container fluid className='doc-content-contaiter'>
                <Container className='text-center py-5'>
                    <p>GREEN employs the Participatory Rural Appraisal (PRA) method to document indigenous knowledge. This begins first and foremost with strong community ties that lead to a thorough understanding of the area’s social values. GREEN takes great care to foster these relationships with farmers, holding regular meetings to address their concerns regarding modern day agriculture. All members of the community, especially its eldest members, are invited to these meetings. Here, they are encouraged to share the knowledge, preserved through oral tradition, within their own families. We then document this indigenous knowledge as well as related scientific information garnered through formal research.</p>

                    <h4 className='lh-base'>This is on-farm conservation, where farmers themselves conserve these seeds for cultivation in their farms. One particular advantage of in-situ conservation is that it also allows for the evolutionary process of crop-adaptation. It also gives farmers more control over their genetic resources. There are several initiatives that encourage in-situ conservation.</h4>

                    <Row className='py-4 d-flex flex-wrap flex-md-row flex-column'>
                        <Col >
                            <Image src='/our-work/documenting/dic_img_1.png' alt='' width="100%" />
                        </Col>
                        <Col className='py-md-0 py-4'>
                            <Image src='/our-work/documenting/dic_img_2.png' alt='' width="100%" />
                        </Col>
                    </Row>
                    <p className='text-white'>This indigenous knowledge, which often includes organic farming methods such as seed treatment techniques, organic biopesticide preparations etc. is then assessed through experimentation based on sound scientific principles. GREEN works hand in hand with farmers throughout this process. Many of these initiatives can be termed as Participatory Technology Development. When a particular farming method withstands this test, we formally document the methodology.</p>

                    <p className='text-white'>Disseminating and reviving indigenous knowledge is essential if the farming community at large is to benefit. This GREEN has done through publications, periodicals, fares and various media outlets. Training programs and exposure visits for farmers have been extremely important in reviving indigenous methods. Through our efforts, we have aimed to document and revive many successful organic practices. Read more on indigenous knowledge documented in our publications.</p>
                </Container>
            </Container>

        </>
    )
}

export default DocContent