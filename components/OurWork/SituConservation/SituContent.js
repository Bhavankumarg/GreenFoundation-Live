
'use client'

import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../ourwork.css'

const SituContent = () => {
    return (
        <>
            <Container fluid className='situ-custom-bg py-5'>
                <Container className=' text-center'>
                    <p>Conservation of indigenous seed varieties has been at the core of the Foundation’s work since it first began in 1994. In the early years, GREEN staff travelled scores of miles in their search for rare seed varieties. And each time a new variety was found, it was brought eagerly back to the research farm in Thalli for multiplication and further experimentation. These early trials formed the firm basis of the Foundation’s conservation efforts. Today, scores of indigenous crop and vegetable varieties have been re-introduced in farming areas where they had all but disappeared. Increasing numbers of farmers are now reverting to the cultivation of these varieties and the low-input sustainable agriculture they require.
                    </p>

                    <Image src='/our-work/insit/In-situ-and-Ex-situ-conservation.png' alt='' width="70%" />

                    <h4 className='py-3'>Our conservation efforts can be broken down into two categories:</h4>
                    <h4><b>in-situ and ex-situ conservation</b></h4>
                </Container>


                <Container className='text-center p-4 custom-situ-row y-3'>
                    <h2 className='text-green'>In-situ Conservation</h2>
                    <p>This is on-farm conservation, where farmers themselves conserve these seeds for cultivation in their farms. One particular advantage of in-situ conservation is that it also allows for the evolutionary process of crop-adaptation. It also gives farmers more control over their genetic resources. There are several initiatives that encourage in-situ conservation.</p>

                    <Row className='d-flex flex-wrap flex-md-row flex-column '>
                        <Col md={6}>
                            <Image src='/our-work/insit/in_situ_conver.png' alt='' width="100%" />
                        </Col>
                        <Col md={6} className='mt-md-0 mt-3'>
                            <Image src='/our-work/insit/In-situ-Conservation.png' alt='' width="100%" />
                        </Col>
                    </Row>

                    <Row className='d-flex flex-wrap flex-md-row flex-column '>
                        <Col md={6} className='p-3'>
                            <Image src='/our-work/insit/rare_varity_demonstration.svg' alt='' />
                            <h4 className='text-green py-3'>Rare Variety Demonstrations</h4>
                            <p>Selected farmers are given seeds of rare indigenous varieties for cultivation. These seeds are then collected and distributed for other interested farmers to grow in their own fields. Collected seeds are also stored in Community Seed Banks as repositories for future use.</p>
                        </Col>
                        <Col md={6} className='p-3'>
                            <Image src='/our-work/insit/kitchen_and.svg' alt='' />
                            <h4 className='text-green py-3'>Kitchen and Community Gardens</h4>
                            <p>GREEN initiates the set up of kitchen and community gardens, where farmers grow indigenous vegetables varieties in their own backyards and community owned plots for personal consumption. They also save seeds for future cultivation.</p>
                        </Col>
                    </Row>

                    <Row className='d-flex flex-wrap flex-md-row flex-column '>
                        <Col md={6} className='p-3'>
                            <Image src='/our-work/insit/individual_seed_saver.svg' alt='' />
                            <h4 className='text-green py-3'>Individual Seed Savers</h4>
                            <p>Certain members of the community are encouraged to grow and conserve seeds on their farms. They often become resource persons within the community, as they provide seeds to those who may need them as well as to seed banks.</p>
                        </Col>
                        <Col md={6} className='p-3'>
                            <Image src='/our-work/insit/seed_multiplication.svg' alt='' />
                            <h4 className='text-green py-3'>Seed Multiplication</h4>
                            <p>Farmers are asked to grow crop varieties for the specific purpose of multiplication of indigenous varieties. These organically grown seeds are then procured through Janadhanya, a farmer’s society initiated by GREEN, for further distribution.</p>
                        </Col>
                    </Row>
                </Container>
            </Container>


            <Container fluid className='py-5 ex-situ-bg'>
                <Container className='text-center p-4 custom-situ-row y-3'>
                    <h3 className='text-green'>Ex-situ Conservation</h3>
                    <p>Defined as off-farm conservation, where indigenous varieties are stored in repositories outside the farm, ex-situ conservation is an important initiative of GREEN. Ex-situ conservation excludes the critical role of farmers as conservers and selectors of seeds, which has historically added great value to the development of well-adapted indigenous varieties that have evolved in their natural surroundings.</p>

                    <Image src='/our-work/insit/ex_situ_conservation.png' alt='' width="70%" />

                    <Row className='d-flex flex-wrap flex-md-row flex-column '>
                        <Col md={6} className='p-3'>
                            <Image src='/our-work/insit/community_seed_bank.svg' alt='' />
                            <h4 className='text-green py-3'>Community Seed Banks (CSBs)</h4>
                            <p>These are community-managed sites where indigenous variety seeds are stored. They provide the community with free and easy access to seeds with the exception that a farmer must return twice the number of seeds he or she borrowed.</p>
                        </Col>
                        <Col md={6} className='p-3'>
                            <Image src='/our-work/insit/gene_bank.svg' alt='' />
                            <h4 className='text-green py-3'>Gene bank</h4>
                            <p>GREEN also maintains a gene bank where over 100 rare varieties are stored. Seeds cultivated each year in rare variety demonstrations are stored here for future use.</p>
                        </Col>
                    </Row>


                </Container>
            </Container>
        </>
    )
}

export default SituContent