import Link from 'next/link'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../../custom.css'

const WeaTraning = () => {
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
                        <Image src='/publications/news-and-events/wea_training_building_women_leaders.png' alt='' fluid />
                        <h3>WEA Training – Building Women Leaders</h3>
                        <h6 className='text-green'>February 21, 2013</h6>

                        <p>
                            “I feel that this land belongs to me. I am a farmer, but no one recognizes me as such,” says Manasa from Challekere, in Chitradurga District. She is not alone in her views; Manasa’s sentiments are echoed by her peers and women farmers across India.
                        </p>

                        <p>
                            “When I used to do all the activities right from preparing the land for sowing to sowing, weeding, harvesting and processing it was not acknowledged,” adds her friend Yashoda.
                        </p>

                        <p>
                            Both the women are currently a part of the leadership program that GREEN is implementing in collaboration with the Women’s Earth Alliance (WEA). The project is being carried out in the districts of Chitradurga and Kanakapura and involves approximately 40 women farmers. An intensive, long-term engagement of 18 months, its goal is to develop leadership skills in women so that they are empowered to, in turn, lead their own agrarian communities towards sustainability by training their fellow farmers in sustainable agricultural practices.
                        </p>

                        <p>
                            We aim to break through mental, social and cultural barriers that define women’s lives, in order that they may become true leaders of their communities. An important aspect of our approach, therefore, involves initiating discussion platforms that create an inclusive, safe atmosphere for women to express their struggles and gain the confidence needed to become strong advocates for their own cause. As a part of this effort, we recently conducted residential training sessions for two groups of 19 women from Chitradugra and Kanakapura, in Hotel Mayura Yatrinivas and Pyramid Valley respectively. The culmination of a 3-month series of trainings that began in November of 2012, the residential training was designed to create a paradigm shift in women’s minds by removing them from familiar surroundings and household duties to focus purely on self-advancement. “[As leaders] the women will have to take on a new role in society and the demands on them will only increase with time. Unless they are ready to think beyond regular chores, it is not possible to be an effective leader,” says Veena Hassan, who is spearheading the project.
                        </p>

                        <p>
                            Veena and our staff at GREEN, Chitrani and Sindhu, have used an intensive follow-up process to understand the forces that govern the lives of each woman in the program. Their comprehensive strategy includes visiting the women in their homes, talking to family members to gain their support of the program so that it is more effective, initiating discussions in local institutions such as Self Help Groups (SHGs), and holding special meetings with Mahila Sathis (a network of trained community women members initiated by GREEN to spread the message of sustainability) to gain a holistic perspective of the women we work with.
                        </p>

                        <p>
                            Such a nuanced understanding has been essential to fostering a strong relationship with the women farmers; it has made them feel free to share their life experiences and helped to overcome the initial resistance they had to the program. One of the biggest challenges our team has faced is the attitude of resigned acceptance to their disenfranchisement, and the inability to view long-term benefits of initiating proactive leadership in their lives. That attitude finds expression in an old Kannada saying, “In a life where bitter comes with sweet, struggle is inevitable. Thinking about all this is all very well and new, but tell us what you’re going to give us now.”
                        </p>

                        <h3>
                            The 2-day residential training was structured to highlight 3 key areas of capacity building:
                        </h3>
                        <ul>
                            <li>
                                livelihood-related issues of the women farmers, such as, sustainable agricultural practices, climate change impact, health and nutrition
                            </li>
                            <li>
                                understanding and fostering leadership by developing soft skills such as clear articulation of thoughts, ability to voice concerns in a relevant manner, listening, understanding the social identity of self in relation to their community, understanding the needs of the self
                            </li>
                            <li>
                                supportive information was provided such as, laws, their rights as women, government schemes, so that they are given their entitlements
                            </li>
                        </ul>

                        <p>
                            The residential training session has helped to remove barriers of strongly patriarchal mindsets of the women, which enforce upon themselves dogmatic definitions of their roles in society, awakening them to the possible change that they themselves can bring about if they so choose to do. “I have already started sharing my learning with the SHG members,” says Yashoda. “I want to support them to assert their rights, and help them access govt. schemes without having to pay bribes. Now many of them are exploited by the agents. I am also working towards stopping child marriages. When I was away in training an orphaned under age girl was married off by her aunt. Later that girl had a severe setback in her health. I got the girl treated in the hospital and negotiated with that aunt and other members of the family, and now the girl is in the aunt’s house.”
                        </p>

                        <p>
                            Like Yashoda and Manasa, the 40-odd women farmers in the program are being given the tools to transform their own communities. We are aiming to empower them to better access government entitlements and assert their rights as valuable members of society.
                        </p>
                        <p>
                            The project is ultimately geared towards enabling the women to take up at least one livelihood practice, turn that into a successful model through effective leadership, and initiate a chain of micro-enterprises within their own communities.
                        </p>
                    </Col>


                    <Col className='py-md-0 py-5'>
                        <h2>Related</h2>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default WeaTraning