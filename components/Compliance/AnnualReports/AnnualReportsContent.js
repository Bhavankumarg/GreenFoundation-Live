'use client'

import Link from 'next/link'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../complience.css'

const AnnualReportsContent = () => {
    return (
        <Container className='p-0'>
            <h2 className='text-green fw-bolder py-4 text-center'>Annual Reports</h2>

            <Row className='d-flex flex-md-row flex-column gap-4 py-5'>

                <Col className='d-flex flex-md-row flex-column p-3 bg-custom-grey rounded-4 p-4'>
                    <Col>
                        <Image src='/compliance/Biennial_Report_2012-14.png' alt='' />
                    </Col>
                    <Col className='d-flex flex-column align-items-start justify-content-center gap-3 p-3'>
                        <h3>Biennial Report 2012-14</h3>
                        <Link href="/compliance/pdf/GREEN-Foundation-Bi-Annual-Report_2012-14.pdf" target='_blank' className='text-decoration-none text-white '>
                            <h6 className='bg-green p-2 rounded-2'>
                                Download PDF
                            </h6>
                        </Link>
                    </Col>
                </Col>


                <Col className='d-flex flex-md-row flex-column p-3 bg-custom-grey rounded-4 p-4'>
                    <Col>
                        <Image src='/compliance/Biennial_Report_2016-18.png' alt='' />
                    </Col>
                    <Col className='d-flex flex-column align-items-start justify-content-center gap-3 p-3'>
                        <h3>Biennial Report 2012-14</h3>
                        <Link href="/compliance/pdf/GF-Annual-report-2016-17-merged-compressed.pdf" target='_blank' className='text-decoration-none text-white '>
                            <h6 className='bg-green p-2 rounded-2'>
                                Download PDF
                            </h6>
                        </Link>
                    </Col>
                </Col>

            </Row>
        </Container>
    )
}

export default AnnualReportsContent