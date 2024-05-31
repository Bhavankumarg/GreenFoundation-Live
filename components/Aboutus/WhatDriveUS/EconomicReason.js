'use client'

import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../aboutus.css'

const EconomicReason = () => {
    return (
        <>
            <Container fluid className='py-5' style={{ background: '#F5E7C9' }}>
                <Container className=''>
                    <h3 className=' text-green text-center'>Economic Reason</h3>
                    <h4 className='pb-md-5 text-center'>Poverty in the Indian Agricultural Sector</h4>

                    <Row className='yellow-lime-green-bg custom-drive-row text-white'>
                        <Col className='custom-img-content-css ' md={4}>
                            <Image src='/aboutus/whatdriveus/ecomomic_reason.png' alt='ecological' fluid></Image>
                        </Col>
                        <Col className='p-md-4 pb-md-5 p-2 text-white'>
                            <p className='text-white'>One of GREEN Foundation’s driving forces is to empower farmers to achieve economic security. We help farming households do this through various initiatives such as kitchen gardens, alternate income generating programs, community seed banks etc. We provide farmers training in sustainable practices which reduce their dependency on expensive inputs.</p>

                            <p className='text-white'>We help organic farmers gain certification through the PGS system so that their produce is more marketable. To achieve this aim, we have also initiated the formation of Janadhanya, a society which aims to strengthen farmers’ economic security through the collective efforts of the community.</p>
                        </Col>
                    </Row>
                </Container>

                <Container className='p-4 ecomomic-custom-container text-center'>
                    <p>Over the years, as government policies encouraged the use of high-yielding exotic crop varieties introduced by the ‘Green Revolution’, many farmers took up the cultivation of these crops in the hopes of increasing incomes. Unfortunately, the high yields they attained did not necessarily translate into higher incomes or economic security for farming families. Cultivation of these exotic varieties inadvertently meant adopting cash intensive methods of farming that required high inputs. These inputs were often unaffordable to the small scale farmer and marginal farmers who make up more than 83% of all farmers in the country. In order to sustain this type of agriculture, many were then forced to take out loans in order to meet their expenses, leading them into debt. Trapped in a vicious cycle of unsustainable practices, they were facing the cold reality of hunger, malnutrition and economic insecurity.</p>

                    <p>“I had reached a stage when I was deeply in debt, owing to chemical farming and wanted to give up agriculture and go to the city in search of a job,” says Choode Gowda, a farmer in Karnataka. Like thousands around him, he was struggling to make ends meet. Read more on what farmers have to say.</p>

                    <p>Many of India’s poverty issues are directly linked to the plight of the farmer. Though nearly 52% of India’s labour force (some 250 million) is in agriculture, the sector makes up only 18.5% of the country’s GDP*. Our country’s growth and development in the modern world depends as much on its cities and towns as it does on the rural communities that make up a majority of its population. Tackling our country’s poverty concerns must therefore begin with empowering the Indian farmer. This fact has always been one of GREEN’s driving forces, and always will be.</p>

                    <h4><b>Rise in Food Insecurity Due to Changing Agricultural Practices</b></h4>

                    <Image src='/aboutus/whatdriveus/rice_food.png' alt='rice' className='ps-md-5 ms-md-5' fluid />

                    <p>When farmers switched from the cultivation of traditional food crops like ragi to cash crops such as cotton, their daily diet also changed significantly. Many food crops used for personal consumption were not available to them after this shift in their cropping patterns, depriving their households of much-needed nutrition. Sadly, this shift in agricultural practices also resulted in a large scale loss of biodiversity in many areas because farmers simply stopped cultivating local seed varieties.</p>

                    <p>As the Great Famine of Ireland has historically shown, biodiversity is crucial to the food security of farmers and, indeed, the entire nation. GREEN’s efforts at strengthening this security include extensively promoting the use and conservation of indigenous seed varieties through various initiatives.</p>

                    <p>These varieties are most often food crops that the farmer can then use for personal consumption. They have a natural resilience to local conditions and this means that farmers are less likely to lose their harvests to unexpected, extreme weather changes. This is essential, particularly in the state of Karnatka (where much of GREEN’s work is based), as it is the 2nd most drought prone area in India**. In fact, studies show 68% of the country is vulnerable to drought**. There is another advantage to the use of these indigenous seed varieties: they have lead to a revival of traditional Indian agricultural practices that are inherently sustainable.</p>

                    <p>For farmers like Choode Gowda, whose families are threatened by food insecurity, these measures have proved extremely successful. “I was then exposed to organic agriculture and put the small piece of land I had to good use. I began to use traditional seeds, and also grew a variety of vegetables and fruits. Slowly, my financial condition improved and I have now been able to settle all the debts I had incurred…None of us needs to migrate now,” adds Choode Gowda.</p>
                </Container>
            </Container>


        </>
    )
}

export default EconomicReason