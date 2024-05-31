'use client'

import React from 'react'
import { Container, Image } from 'react-bootstrap'

const RaisingAwareness = () => {
    return (
        <>
            <Container fluid className='py-5 ' style={{ background: '#F2F2F2' }}>
                <Container className='text-center'>
                    <h3 className=' text-green text-center'><b>Raising Awareness</b></h3>

                    <Image className='ps-md-5 ms-md-5' src='/aboutus/whatdriveus/raising_awareness_img.png' alt='ra' fluid />

                    <p>Fostering public awareness at a grassroots level has been essential in propelling the movement forward. GREEN initiates programs such as seed fares and yatras, which have proved a useful means of disseminating our core philosophy. Seminars and workshops on Government policy are held regularly held to sensitize farmers on issues directly concerning them.</p>

                    <p>We have also sought to increase general public awareness through radio programs, articles and regular columns in leading native-language newspapers. We recognize and encourage efforts of individual farmers who steadfastly uphold sustainable agricultural practices. ‘Beeje Maate’ Award was instituted for those farmers who have made outstanding contributions to seed conservation. Read more about our farmers.</p>

                    <h5 className='lime-green-bg p-4 rounded lh-lg' >“We want to spread the message of organic agriculture far and wide. When people visit us, we always give them gifts of seeds so that they can carry the concept of organic farming into more and more areas.”</h5>

                    <p className='py-3'>– Dr. Vanaja Ramprasad, Founding Trustee, GREEN Foundation</p>

                    <p>Dissemination of our message through publications has also helped strengthen the movement. Through innovative methodologies such as participatory rural appraisals we have also aimed to preserve and document the vast indigenous knowledge of the state of Karnataka.</p>



                </Container>
            </Container>
        </>
    )
}

export default RaisingAwareness