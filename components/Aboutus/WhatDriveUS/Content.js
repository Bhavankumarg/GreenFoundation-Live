'use client'

import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import '../aboutus.css'

const Content = () => {
    return (
        <>
            <Container fluid className='bg-custom-grey'>
                <Container className='py-5 text-center '>
                    <p className='bg-p-green px-md-5 py-md-4 p-2 text-white w-100'>At the GREEN Foundation, we are driven by a powerful vision: a world where vulnerable communities are climate resilient, and our sectors and systems operate with carbon neutrality. Our core mission centers on biodiversity conservation and regenerative agriculture, guided by agro-ecological principles and a deep respect for planetary boundaries. By combining these approaches, we are working towards a sustainable, equitable and resilient future. Together, we can create a world where people and the planet thrive together, safeguarding our natural resources for generations to come.</p>
                    <h2 className='my-3 text-green '>Preserve the Ecology</h2>

                    <h4 className='lime-green-bg p-4 rounded lh-base'>“It was worrying that farmers had lost the pride and sense <br />
                        of ownership towards their own traditional knowledge.”</h4>

                    <p>– Dr. Vanaja Ramprasad, Founding Trustee, GREEN Foundation</p>
                    <p>When GREEN Foundation initially started its work, we became aware that much of the indigenous knowledge and oral tradition had been lost within a few short decades. Moreover, farmers had lost a sense of pride in their own culture. This knowledge provided invaluable understanding to sustainable practices that could greatly benefit the agricultural sector.</p>

                    <p>Our efforts have been focused on verifying, documenting and disseminating the centuries old indigenous knowledge of farmers. GREEN has used the Participatory Rural Appraisal method to document much of this oral tradition.</p>

                    <p>“Once, when I wanted to sow dodda jowar, a local variety of millet, I treated the seeds with a mixture of gandaka and tutte (local medicinal plants) soaked in water. After the seeds were completely dried, I decided to sow them. After sowing more than three fourths of the land, I ran short of treated seeds. Hence I sowed the remaining land with the untreated seeds that I had brought along. When the crop was 3 feet high, it was attacked by smut disease and I realized that the portion of the crop with treated seeds was free from this disease. That is when I realized the importance of seed treatment,” says Shri Chouti of Chinnikatte village.</p>

                    <p>Many traditional practices like the one described by Shri Chouti hold vital clues to sustainability. We believe that forgotten cultural practices must be revived within the community so that farmers in the future may have access to this alternate, sustainable means of agriculture.</p>
                </Container>

            </Container>
            <Container fluid className='lime-green-bg py-5'>
                <Container>
                    <h3 className='my-3 text-green text-center pb-5'>Ecological Reasons</h3>
                    <Row className='yellow-lime-green-bg custom-drive-row text-white'>
                        <Col className='custom-img-content-css' md={4}>
                            <Image src='/aboutus/whatdriveus/Ecological_reasons.png' alt='ecological' width="100%"></Image>
                        </Col>
                        <Col className='p-md-4 p-2 text-white'>
                            <p className='text-white'>“We realized there was something wrong with this method of agriculture when the fertility of the soil began diminishing,” says Vijayamma, a farmer in Tamil Nadu, of the chemical farming methods her family used to practise until they were introduced to GREEN. For small scale and marginal farmers like Vijayamma, this was particularly worrying, because land is their lifeline to food security.</p>

                            <p className='text-white'>“In spite of getting reduced yields the costs of cultivation had remained the same. But we did not know where to turn for help,” she adds.</p>

                            <p className='text-white'>With a large part of India’s land (nearly 49%) utilized in agriculture, unsustainable agricultural practices can lead to untold consequences for the country’s ecology. For example, it has been shown that a single acre of chemically grown sugarcane requires as much water as would suffice for 25 acres of indigenous variety maize (a crop which also enriches a farming household’s nutrient intake).</p>

                            <p className='text-white'>In light of facts such as these, it becomes clear the extensive change that can be brought about for India’s ecology through correct agricultural</p>
                        </Col>
                    </Row>
                </Container>
            </Container>

        </>
    )
}

export default Content