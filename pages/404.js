import React from 'react'
import { Container, Image, Row } from 'react-bootstrap'

import Header from '@/components/shared/Header/Navbar';
import Footer from '@/components/shared/Footer/Footer';

import '../components/Style'
import Link from 'next/link';

const Custom404 = () => {

    const bgImage = {
        backgroundImage:
            "url('/404.png')",
        height: '100vh',
        fontSize: '50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <>
            <Header />
            <Container fluid style={bgImage} >
                <Container className='py-5'>
                    <Row className='text-md-start text-center shadow-lg px-0 py-2 d-inline-block rounded-3' style={{ background: ' #2E6339;' }} >
                        <Link href="/" className='d-flex flex-row align-items-center gap-2 text-decoration-none text-white' >
                            <Image src='/404_back_icon.svg' alt='' width={35} />
                            <h6 className='m-0'>Back to Home</h6>
                        </Link>
                    </Row>
                </Container>

                <Container className='h-50 d-flex text-center justify-content-center align-items-center' style={{ color: '#2E6339' }}>
                    <Row>
                        <h4 className='display-3 fw-bolder'>Oops!</h4>
                        <h1 style={{ fontSize: '200px', fontWeight: '900' }}>404</h1>
                    </Row>
                </Container>

            </Container>
            <Footer />
        </>
    )
}

export default Custom404