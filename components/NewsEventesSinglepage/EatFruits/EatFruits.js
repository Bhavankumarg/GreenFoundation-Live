import Link from 'next/link'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../../custom.css'

const EatFruits = () => {
    return (
        <Container fluid className='w-100'>
            <Container className='py-5 p-0'>
                <Link href='/news-and-events' className='d-flex flex-md-row flex-column gap-3 justify-md-content-start align-content-center align-items-center text-decoration-none '>
                    <Image src='/publications/our-stories/back_to_stories_icon_green.svg' alt='' />
                    <h5 className='p-0 m-0 text-green fw-bolder'>Back to News & Events</h5>
                </Link>

                <hr className='my-4' />

                <Row className='p-0 '>
                    <Col md={8} className='d-flex flex-column gap-2'>
                        <Image src='/publications/news-and-events/eat-the-fruits/eat_the_fruits_of_your_labour_img.png' alt='' fluid />
                        <h3>Eat the Fruits of Your Labour: Start Your Own kitchen Garden</h3>
                        <h6 className='text-green'>December 27, 2012</h6>

                        <Row className='d-flex flex-md-row flex-column'>
                            <Col md={4}>
                                <Image src='/publications/news-and-events/eat-the-fruits/kitchen_garden_1.jpg' alt='' fluid />
                            </Col>
                            <Col>
                                <p>
                                    Kitchen gardens can give an immense sense of satisfaction to gardening enthusiasts. But you don’t have to be an expert gardener to start a small one of your own. At GREEN, we believe that sustainability is as important in the urban context as it is in the rural one.
                                </p>
                            </Col>
                            <p>
                                So we’ve compiled a few steps that you should keep in mind when starting a kitchen garden of your own. We hope that it gets you on your way to a little Garden of Eden in your own backyard! Let us know what you think!
                            </p>
                        </Row>

                        <h3>Step 1: decide where to place your vegetable garden</h3>

                        <p>
                            Where you place your vegetables is essential to their growth, therefore, plan your garden well. You could design it to a convenient scale on paper, before deciding to prepare it on real ground. Take into mind the following considerations:
                        </p>

                        <p>
                            Sun: most vegetables require between 6 to 8 hrs of sunlight everyday, and this should be an important consideration in choosing the location of your garden.
                        </p>

                        <p>
                            Easy accessibility: this may seem quite obvious, but the garden should be in a place that has easy access to water. Vegetables must be watered regularly according to a schedule otherwise they tend to not grow properly.
                        </p>

                        <p>
                            Tools: basic tools you will need to begin include shovel, fork, trowel and tiller. Once the plants start to grow, you will also need a hoe, hose and nozzle. In Bangalore, you can buy these in Lalbagh.
                        </p>

                        <p>
                            No back yard? You can also grow vegetables in containers.
                        </p>

                        <p>
                            Container choices: window boxes are a good idea if you happen to have many windows. Terracotta pots allow plants to breathe easily, but they are difficult to move. Plastic containers, on the other hand, tend to make it difficult for plants to breathe, but they are an inexpensive alternative. You could use buckets or even polythene bags. N.B: the containers must have drainage holes for water to seep out. Containers cost anywhere between Rs. 300 to Rs. 70 or even lesser in case of plastic bags.
                        </p>

                        <h2>Step 2: Determine what to grow</h2>

                        <p>
                            A good way to start would be to make a list of all your favourite vegetables and then research on how best to grow each one. When researching, make sure to pay attention to the following features of each vegetable:
                        </p>

                        <ul>
                            <li>
                                When to plant and where to plant, for e.g. in shade or sunlight. Some vegetables should not be grown next to each other, so this should be kept in mind.
                            </li>
                            <li>
                                Are seedlings or seeds better
                            </li>
                            <li>
                                How to germinate the seeds and how to transplant them
                            </li>
                            <li>
                                How much sunlight is needed
                            </li>
                            <li>
                                When and how much to water them
                            </li>
                            <li>
                                What type of soil is required
                            </li>
                        </ul>

                        <Row className='d-flex flex-md-row flex-column'>
                            <Col md={4}>
                                <Image src='/publications/news-and-events/eat-the-fruits/kitchen_garden_2.jpg' alt='' fluid />
                            </Col>
                            <Col>
                                <p>
                                    Once this is done, you can narrow your list down to what vegetables you wish to start with first. Remember to keep find out if the vegetable you have chosen will grow in the agroclimatic zone you live in. Bangalore has lovely weather, and therefore, you could grow vegetables nearly all year round.
                                </p>
                            </Col>
                        </Row>

                        <h3>Step 3: Prepare the soil</h3>
                        <p>
                            This is very important, particularly for vegetables, as they are annuals that flower constantly. Compost can be added to enrich the soil. Potting mixture or compost such as vermiculite, cocopeat or perlite is good for your vegetables if you are growing them in containers. You can buy these in Bangalore at Lalbagh.
                        </p>

                        <Row className='d-flex flex-md-row flex-column'>
                            <Col md={4}>
                                <Image src='/publications/news-and-events/eat-the-fruits/kitchen_garden_3.jpg' alt='' fluid />
                            </Col>
                            <Col>
                                <p>
                                    A combination of loamy garden soil, sand and peat moss also makes a good growing mixture. An inch of sandy loam to two or three inches of compost is a good place to start. Before adding soil amendments, water dry soil and let it soak for a day or two.
                                </p>
                                <h3>Step 4: Seeds and seedlings</h3>
                                <p>
                                    Depending on your preference, you could choose to plant either seeds or saplings.
                                </p>
                            </Col>
                        </Row>
                        <p>
                            Vegetables that are Usually Direct Seeded are: Beans, beets, carrots, corn, cucumbers, garlic, lettuce, micro greens, muskmelons, okra, parsnips, peas, pumpkins, radishes, rutabaga, salsify, squash, turnips, watermelon.
                        </p>

                        <p>
                            Vegetables that Transplant Well: Basil, broccoli, brussels sprouts, cabbage, Chinese cabbage, cauliflower, celery, chard, chives, collards, eggplant, endive, escarole, kale, kohlrabi, leeks, mustard, okra, onions, parsley, peppers, tomatoes.
                        </p>

                        <p>
                            Seeds: When it comes to seeds, GREEN promotes the use of indigenous vegetable varieties in kitchen gardens. We also facilitate farmers to sell these seeds to supplement family income. Good quality indigenous seeds are better suited to the agroclimatic zones they are found in, and therefore produce good yields.
                        </p>

                        <p>
                            Seed starting, pre-germination: prepare a tray that is at least two inches deep with potting mixture (such as a mixture of perlite, coco peat and vermiculite) The tray should be filled until one inch from the top. Moisten the mixture such that it can be just squeezed into clumps in your hand.
                        </p>

                        <Row className='d-flex flex-md-row flex-column'>
                            <Col md={4}>
                                <Image src='/publications/news-and-events/eat-the-fruits/kitchen_garden_4.jpg' alt='' fluid />
                            </Col>
                            <Col>
                                <p>
                                    Now its time to plant the seeds. Some seeds need to be covered and others sunlight in order to grow. You research on each vegetable should tell you which needs what. You could plant the seeds in furrows or embed them directly into the soil. Once the sowing is finished, the tray should be covered with a polythene bag and left to germinate.
                                </p>
                            </Col>
                        </Row>

                        <p>
                            Germination: the tray should be checked regularly for signs of germination. There is no need to water during this time. Upon germination, a small hook-like sprout will appear and once this happens, the plastic bag should be removed. It is very important at this stage to move the tray to a place where there is plenty of sunshine.
                        </p>
                        <p>
                            Post germination: the seedlings should be exposed to increasing amounts of sunlight day by day and the tray should be kept moist at all times. The tray itself should be placed in a clean dry place where there is no fungus present. Fungus can lead to damp-off and this should be avoided.
                        </p>

                        <p>
                            Transplanting: always transplant early morning or late evening and water the seedlings after transplantation. If you are using containers, make sure to use ones that have the right depth for each vegetable and do not keep them in direct sunlight immediately after transplanting. Some vegetables must be transplanted deeper into the soil than others. Research this information while transplanting.
                        </p>

                        <p>
                            Seedlings: seedlings could be bought directly from nurseries and then transplanted into your garden or containers. Research how to transplant each vegetable before doing so, as there may be certain requirements that must be met for each vegetable.
                        </p>

                        <h3>Step 5: Tending to your vegetable garden:</h3>

                        <Row className='d-flex flex-md-row flex-column'>
                            <Col md={4}>
                                <Image src='/publications/news-and-events/eat-the-fruits/kitchen_garden_5.jpg' alt='' fluid />
                            </Col>
                            <Col>
                                <p>
                                    Watering: watering an inch or two once a week, every week is advisable. Watering should be regular and the best time to water is early morning, so that moisture on leaves can dry during the day. This also helps prevent diseases. It is best to give one deep watering once a week rather than shallow watering of greater frequency.
                                </p>
                            </Col>
                        </Row>
                        <p>
                            Weeding: you may have to do some hand weeding or hoeing, although if vegetables are grown in containers, this may be minimal. Mulching is a good option to prevent weeding. GREEN promotes mulching as this is also excellent for the soil.
                        </p>

                        <p>
                            Pest and disease control: the best disease control for your plants is to keep the leaves dry. Several organic pestticides can be used to prevent pest control.
                        </p>


                        <h4>Good references for your research include:</h4>

                        <ol>
                            <li> GREEN Publications: Sustainable Agricultural Practices</li>
                            <li>
                                <Link href="http://gardening.about.com/od/startingavegetablegarden/tp/Starting_a_Vegetable_Garden.htm" target='_blank'>
                                    http://gardening.about.com/od/startingavegetablegarden/tp/Starting_a_Vegetable_Garden.htm
                                </Link>
                            </li>
                            <li>
                                <Link href="http://geekgardener.in/2009/11/page/2/" target='_blank'>
                                    http://geekgardener.in/2009/11/page/2/
                                </Link>
                            </li>
                            <li>
                                <Link href="http://www.indiaparenting.com/home-and-decor/63_627/a-kitchen-garden-in-pots.html" target='_blank'>
                                    http://www.indiaparenting.com/home-and-decor/63_627/a-kitchen-garden-in-pots.html
                                </Link>
                            </li>
                            <li>
                                <Link href="http://www.rodsgarden.50megs.com/vegetables.htm" target='_blank'>
                                    http://www.rodsgarden.50megs.com/vegetables.htm
                                </Link>
                            </li>
                        </ol>






                    </Col>

                    <Col className='py-md-0 py-5'>
                        <h2>Related</h2>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default EatFruits