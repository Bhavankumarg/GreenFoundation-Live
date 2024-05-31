'use client'

import React from 'react'

import '../aboutus.css'

import { Col, Container, Image, Row } from 'react-bootstrap'

const PoliticalReasons = () => {
    return (
        <>
            <Container fluid className='bg-custom-grey'>
                <Container className='py-5 text-center'>
                    <h3 className=' text-green text-center'>Political Reasons</h3>
                    <h4 className='lime-green-bg p-5 rounded lh-lg text-center' >The research and development initiatives of the Green Revolution brought to the world, and particularly to India, a new, hybrid variety of seeds with the aim of increasing yields and reducing the food deficit of the country. They also introduced a chemical intensive form of agriculture highly dependant on external inputs that many farmers in India could ill afford. ‘Two decades of subsidizing agriculture with chemicals has impoverished the farmer and degraded the natural resources and diversity of food without reaching the goal of feeding the hungry.’</h4>

                    <p>— Hidden Harvests, GREEN Foundation</p>
                    <Image className='ps-md-5 ms-md-5' src='/aboutus/whatdriveus/political_reasones.png' alt='political_reasons' fluid />
                    <p>GREEN’s work has challenged the alleged benefits of this form of agriculture, raising urgent questions on the sustainability of these practices and their ability to ensure food security for the future. Close interactions with the community, has shown us the devastation caused through the widespread adoption of these practices. We have aimed to demonstrate through quantifiable results that a more viable form of agriculture, one which provides adequate food security for India’s small scale and marginal farmers, is possible.</p>
                </Container>
            </Container>
        </>
    )
}

export default PoliticalReasons