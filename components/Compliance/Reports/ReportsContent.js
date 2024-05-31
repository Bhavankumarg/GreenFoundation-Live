'use client'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../complience.css'
import Link from 'next/link';

const ReportsContent = () => {


    return (
        <Container className='p-md-0 text-center w-100'>
            <h2 className='text-green fw-bolder'>Reports</h2>

            <h4 className='text-green fw-lighter py-4'>Foreign Contributions Receipts</h4>

            <Tabs className="text-start py-4">
                <TabList>
                    <Tab>FY 2020-21</Tab>
                    <Tab>FY 2019-20</Tab>
                    <Tab>FY 2018-19</Tab>
                    <Tab>FY 2017-18</Tab>
                    <Tab>FY 2016-17</Tab>
                    <Tab>FY 2015-16</Tab>
                </TabList>

                <TabPanel className="mt-2">
                    {/* <h2>Any content 1</h2> */}
                </TabPanel>
                <TabPanel>
                    {/* <h2>Any content 2</h2> */}
                </TabPanel>
            </Tabs>



            <h4 className='text-green fw-lighter py-2'>Organisation Related Documents</h4>

            <Row className='py-5 d-flex flex-md-row flex-column  '>
                <Col className=' p-0  p-2' lg={3}>
                    <Col className='pdf-customized d-flex flex-row justify-content-end align-items-end rounded-4 '>
                        <Col className='d-flex flex-wrap flex-column align-items-center custom-pdf-text-container p-2'>
                            <Image src='/compliance/pdf_img.svg' alt='' />
                            <h5>Society Registration Certificate</h5>
                            <Link href="/compliance/pdf/GF-Registered-trust-deed.pdf" target='_blank' className='text-decoration-none'>
                                <h5 className='bg-custom-green p-2 rounded text-white hide-view-now'>
                                    View Now
                                </h5>
                            </Link>
                        </Col>
                    </Col>
                </Col>

                <Col className=' p-0  p-2' lg={3}>
                    <Col className='pdf-customized d-flex flex-row justify-content-end align-items-end rounded-4 '>
                        <Col className='d-flex flex-wrap flex-column align-items-center custom-pdf-text-container '>
                            <Image src='/compliance/pdf_img.svg' alt='' />
                            <h5>12A Registration Certificate</h5>
                            <Link href="/compliance/pdf/Green-Foundation-12A-Certificate.pdf" target='_blank' className='text-decoration-none'>
                                <h5 className='bg-custom-green p-2 rounded text-white hide-view-now'>
                                    View Now
                                </h5>
                            </Link>
                        </Col>
                    </Col>
                </Col><Col className=' p-0  p-2' lg={3}>
                    <Col className='pdf-customized d-flex flex-row justify-content-end align-items-end rounded-4 '>
                        <Col className='d-flex flex-wrap flex-column align-items-center custom-pdf-text-container p-2'>
                            <Image src='/compliance/pdf_img.svg' alt='' />
                            <h5>80G Registration Certificate</h5>
                            <Link href="/compliance/pdf/Green-Foundation-80G.pdf" target='_blank' className='text-decoration-none'>
                                <h5 className='bg-custom-green p-2 rounded text-white hide-view-now'>
                                    View Now
                                </h5>
                            </Link>
                        </Col>
                    </Col>
                </Col><Col className=' p-0  p-2' lg={3}>
                    <Col className='pdf-customized d-flex flex-row justify-content-end align-items-end rounded-4 '>
                        <Col className='d-flex flex-wrap flex-column align-items-center custom-pdf-text-container p-2'>
                            <Image src='/compliance/pdf_img.svg' alt='' />
                            <h5>FCRA Certificate</h5>
                            <Link href="/compliance/pdf/FCRA-2016-2021.pdf" target='_blank' className='text-decoration-none'>
                                <h5 className='bg-custom-green p-2 rounded text-white hide-view-now'>
                                    View Now
                                </h5>
                            </Link>
                        </Col>
                    </Col>
                </Col><Col className=' p-0  p-2' lg={3}>
                    <Col className='pdf-customized d-flex flex-row justify-content-end align-items-end rounded-4 '>
                        <Col className='d-flex flex-wrap flex-column align-items-center custom-pdf-text-container p-2'>
                            <Image src='/compliance/pdf_img.svg' alt='' />
                            <h5>PAN Card</h5>
                            <Link href="/compliance/pdf/Green-Foundation-PAN-Card.pdf" target='_blank' className='text-decoration-none'>
                                <h5 className='bg-custom-green p-2 rounded text-white hide-view-now'>
                                    View Now
                                </h5>
                            </Link>
                        </Col>
                    </Col>
                </Col>

            </Row>


            <h4 className='text-green fw-lighter py-2'>Organisation Bank Details</h4>


            <Row className='bank-details d-flex flex-md-row flex-column rounded-4 p-4 my-5 gap-md-5 m-1'>
                <Col>
                    <Row className='d-flex flex-row text-start'>
                        <Col xs={6}>
                            <p className='fw-bolder'>Beneficiary Name :</p>
                            <p className='fw-bolder'>Beneficiary Account No:</p>
                            <p className='fw-bolder'>Bank Name:</p>
                            <p className='fw-bolder'>Account Type:</p>
                        </Col>
                        <Col xs={6}>
                            <p>Green Foundation</p>
                            <p>0492201000605</p>
                            <p>Canara Bank</p>
                            <p>Current Account</p>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Col className='d-flex flex-row text-start'>
                        <Col>
                            <p className='fw-bolder'>IFSC Code :</p>
                            <p className='fw-bolder'>Swift Code:</p>
                            <p className='fw-bolder'>Bank Address:</p>
                        </Col>
                        <Col>
                            <p>Green Foundation</p>
                            <p>0492201000605</p>
                            <p>827, 24th main, 12th cross, J . P. Nagar ii Phase, Bangalore 560078</p>



                        </Col>
                    </Col>
                </Col>
            </Row>
        </Container >
    )
}

export default ReportsContent