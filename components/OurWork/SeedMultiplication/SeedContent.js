'use client'

import React from 'react'
import { Container, Image } from 'react-bootstrap'

import '../ourwork.css'

const SeedContent = () => {
    return (
        <>
            <Container fluid style={{ background: '#E0E9D3' }}>
                <Container className='text-center py-5'>
                    <p>Seed multiplication is important in that it helps enrich the biodiversity of a local area by making available many indigenous seed varieties to farmers who hitherto had no access to the seeds. It is also an income generating scheme where individual farmers are compensated for their efforts in seed production.</p>
                    <p>Farmers are encouraged to take up seed production by being provided with seeds for this specific purpose. Most often, these seeds are sourced from the community seed bank. Interested farmers then multiply these seeds to return to the bank, which distributes them to members outside the community or village, with profits from the endeavour being used to expand the seed bank.</p>

                    <Image src='/our-work/seedmultiplication/seed_multiplication.png' alt='' width="70%" />
                    <p>Seeds produced are also sold through the farmers’ society of Janadhanya, which works in collaboration with community seed banks and farmers to further develop farmer initiatives within an area.</p>
                </Container>
            </Container>
        </>
    )
}

export default SeedContent