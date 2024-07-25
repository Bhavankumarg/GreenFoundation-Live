'use client'

import Link from 'next/link';
import React from 'react';
import { Col, Container, Image } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import '../custom.css'

import '../Style'

const Partners = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 1 // Change to 1 for smoother transition
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // Change to 1 for smoother transition
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // Change to 1 for smoother transition
        }
    };

    return (
        <Container fluid style={{ background: '#ede2cc' }} className='py-4'>
            <Container>
                <h2 className='text-center text-black'>
                    Group Partners
                </h2>

                <Col className='py-4'>
                    <Carousel
                        swipeable={false}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000} // Speed in milliseconds
                        keyBoardControl={true}
                        customTransition="transform 0.5s ease-in-out" // Custom transition effect
                        transitionDuration={500} // Transition duration in milliseconds
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        <div className='p-4'>
                            <Image src='/home/partners/vrutti.svg' alt='' width="100%" />
                        </div>
                        <div className='p-4'>
                            <Image src='/home/partners/swasti.svg' alt='' width="100%" />
                        </div>
                        <div className='p-4'>
                            <Image src='/home/partners/cms.svg' alt='' width="100%" />
                        </div>
                        <div className='p-4'>
                            <Image src='/home/partners/fuzhio.svg' alt='' width="100%" />
                        </div>
                        <div className='p-4'>
                            <Image src='/home/partners/CG.svg' alt='' width="100%" />
                        </div>
                    </Carousel>
                </Col>

                <Col className='text-center'>
                    <Link
                        href="/partners"
                        target='_blank'
                        className='text-decoration-none text-white px-3 py-2 rounded-3'
                        style={{ background: '#2e6339' }}
                    >
                        See Our List of Partners
                    </Link>
                </Col>
            </Container>
        </Container>
    )
}

export default Partners
