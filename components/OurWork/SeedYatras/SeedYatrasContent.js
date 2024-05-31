'use client'

import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

import '../ourwork.css'

const SeedYatrasContent = () => {
    return (
        <>
            <Container fluid style={{ background: '#F5E7C8' }} >
                <Container className='p-0 py-5 d-flex flex-column align-items-center text-md-center text-start'>
                    <h4 className='text-green pb-3'>Seed Yatras</h4>
                    <p>
                        These provide a means to spread the message of sustainable farming through a traditional Indian medium of story telling. Decorated bullock carts travel from village to village informing and educating farmers in the locale on sustainable agricultural practices. They employ methods such as music, dance and theater to raise awareness through entertainment. Samples of indigenous seeds are also distributed for farmers to grow in their own fields.
                    </p>
                    <Col md={6}>
                        <Image src='/our-work/seed-yatras/seed_yatras_img.png' alt='' />
                    </Col>
                </Container>
            </Container>

            <Container fluid style={{ background: '#F2F2F2' }}>
                <Container className='p-0 py-5 d-flex flex-column align-items-center text-md-center text-start'>
                    <h4 className='text-green'>Seed Fairs</h4>
                    <p>
                        Usually held at the end of the harvest season seed fairs allow farmers to network and learn different methods of sustainable and organic farming. On average, GREEN facilitates two seed fairs every year and these fairs have become an essential platform for raising awareness. In fact GREEN facilitated some of the very first seed fairs in the state of Karnataka. Traditionally, farmers had a base for this type of information exchange and mutual learning in the village ‘santhe’ that used to take place regularly.
                    </p>

                    <p>
                        This tradition has slowly fallen away and with it has disappeared an opportunity for farmers to improve on their knowledge of farming practices through networking. GREEN therefore, aims to revive this culture through seed fairs.
                    </p>

                    <Image src='/our-work/seed-yatras/seed_fairs_img.png' alt='' />

                </Container>
            </Container>
        </>
    )
}

export default SeedYatrasContent