'use client'

import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const TrenchBundContent = () => {
    return (
        <Container fluid>
            <Container className='text-md-center text-start p-0 py-5'>

                <p>A bund is like an embankment, often built around the periphery of farmland to prevent water run-off. Bunds and trenches help reduce soil erosion and retain water during scanty rainfall. They also improve ground water levels by increasing filtration.</p>
                <p>GREEN guides farmers to build bunds and trenches around their farms as part of its soil and water conservation efforts. Bunds are trenches are built immediately after the first rain as it is easy to dig the soil at that period. Farmers are advised grow grass on their bunds in order to reduce the intensity of rain falling directly on them.
                </p>

                <Row className="p-md-3 p-2 rounded-4 d-flex flex-column flex-wrap align-items-md-center m-md-0 m-1" style={{ background: '#7B9F4427' }}>
                    <p>Soil and agricultural waste collected in trenches is used to enrich the soil in the area by mixing it back into the land. Rainwater collected in trenches is directed to kitchen gardens or used to grow trees in the trenches themselves. Many farmers, in fact, grow fruit trees in the bunds on their farms. Read more on our agroforestry efforts. Fruit trees not only supplement the family’s nutrition, but also generate additional income for the households when the fruit is sold.
                    </p>

                    {/* Desktop Image */}
                    <Image src='/our-work/trench-bund/trench_bund_content_img.png' alt='' className='w-75 d-md-block d-none' />

                    {/* Mobile Image */}
                    <Image src='/our-work/trench-bund/trench_bund_content_img.png' alt='' className='w-100 d-md-none d-block' />

                    <p className='mt-3'>Sujatha, who grows teak trees in the bunds on her farm, is very happy at the prospect of fetching an extra income. “We do not mind the slight loss in land owing to the bunds being built. After a few years, the trees we have planted in them will fetch me a good income.” Sujatha also grows plant varieties that provide fodder for her cattle.
                    </p>
                </Row>
            </Container>
        </Container>
    )
}

export default TrenchBundContent