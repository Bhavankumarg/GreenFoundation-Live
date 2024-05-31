'use client'

import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

import '../complience.css'

const FinancialHeader = () => {
    return (
        <Container fluid className='sticky-top bg-white z-1 custom-about-menu-header'>
            <div className='custom-row'>
                <Col className='m-2 p-2 border border-1 border-dark rounded'>
                    <Link href="/reports" className='text-decoration-none d-flex flex-row '>
                        <Image src='/compliance/reports_black.svg' alt='' />
                        <h6 className='m-0 p-2 text-black'>Transparency</h6>
                    </Link>
                </Col>
                <Col className='m-2 p-2 about-tap-bg'>
                    <Link href="/financials" className='text-decoration-none d-flex flex-row '>
                        <Image src='/compliance/financial_white.svg' alt='' />
                        <h6 className='m-0 p-2 text-white'>Financials</h6>
                    </Link>
                </Col>

                <Col className='m-2 p-2 border border-1 border-dark rounded'>
                    <Link href="/annual-reports" className='text-decoration-none d-flex flex-row '>
                        <Image src='/compliance/annual_report_black.svg' alt='' />
                        <h6 className='m-0 p-2 text-dark'>Annual Reports</h6>
                    </Link>
                </Col>
            </div>
        </Container>
    )
}

export default FinancialHeader