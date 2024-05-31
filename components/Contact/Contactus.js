'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link'
import configData from '../../config.json';


function AutoLayoutExample() {


    const [post, setPost] = useState(null);
    const [yourName, setName] = useState(null);
    const [yourEmail, setEmail] = useState(null);
    const [yourSubject, setSubject] = useState(null);
    const [yourMessage, setMessage] = useState(null);
    const [spinner, setSpinner] = useState(false);
    const [loading, setLoading] = useState(false);
    const [disable, setDisabled] = useState(false);
    const [errrname, setErrName] = useState(null);
    const [errremail, setErrEmail] = useState(null);
    const [errrsubject, setErrSubject] = useState(null);
    const [success, setSuccess] = useState(true);
    const [error, setError] = useState(false);




    const handleSubmit = event => {
        // 👇️ prevent page refresh
        event.preventDefault();

    };

    function createPost() {

        setSpinner(true);


        axios.post(`${configData.SERVER_FROM}contact-form-7/v1/contact-forms/6602/feedback`,
            {
                'your-name': { yourName },
                'your-email': { yourEmail },
                'your-subject': { yourSubject },
                'your-message': { yourMessage },
            }, {
            headers: {
                "Content-Type": 'multipart/form-data',
            }

        })
            .then((response) => {
                setPost(response.data.message);

                // setErrMessage(response.data['invalid_fields'][1]['message']);
                const msg = response.data.status;
                if (msg == 'mail_sent') {
                    setLoading(true);
                    setSpinner(false);
                    setSuccess(false);
                    setError(false);

                }
                else {
                    setErrName(response.data['invalid_fields'][0]['message']);
                    setErrEmail(response.data['invalid_fields'][1]['message']);
                    //setErrSubject(response.data['invalid_fields'][2]['message']);
                    setSpinner(false);
                    //setLoading(true);
                    setError(true);
                }
                console.log(response.data)
            });


    }


    return (
        <Container fluid>

            <Row className="m-row">
                <Col style={{ backgroundImage: `url(/images/contact_us_banner.jpeg)` }} className="h-contact d-flex flex-column justify-content-center">

                    <h1 className="text-white fs-1 pt-4">Contact us</h1>
                    <p className="text-white">Contact us for Ship Management, Crew Management, Ship Agency & Logistics, Inspection and Commercial Ship Services. Simply fill the form and we will get in touch as soon as possible.</p>
                    <p className="text-white fs-2 r_phone"><Link href="tel:+914446849999">
                        <i className="fa fa-phone" /> +91 44 4684 9999</Link></p>
                    <hr className="r_line" />
                    <p className="text-white fs-2 r_email"><Link href="mailto:hello@nautilushipping.com">
                        <i class="fa fa-envelope-o" aria-hidden="true" /> hello@nautilushipping.com</Link></p>
                    <hr className="r_line" />
                </Col>
                <Col className="wbg-main pt-5">
                    <Container className="pt-4">
                        <p className="text-white">Note: Job Seekers, please visit our shipping job listing page</p>

                    </Container >
                    {success &&
                        <form
                            onSubmit={handleSubmit}
                            style={{ margin: '20px' }}>

                            <div className="mb-3 mt-3">
                                <label htmlfor="yourName" className="form-label text-white"><span className="errors">*</span>Your Name:</label>
                                <input
                                    //required
                                    type='text'
                                    className="form-control"
                                    id="yourName"
                                    name='yourName'
                                    placeholder="Ravi Kumar"
                                    value={yourName}
                                    onChange={event => setName(event.target.value)}
                                />
                                <span className="r_error">{errrname}</span>
                            </div>

                            <div className="mb-3 mt-3">
                                <label htmlfor="yourEmail" className="form-label text-white"><span className="errors">*</span>Your Email:</label>
                                <input
                                    //required
                                    type='email'
                                    className="form-control"
                                    id="yourEmail"
                                    name='yourEmail'
                                    placeholder="test@test.com"
                                    value={yourEmail}
                                    onChange={event => setEmail(event.target.value)}

                                /><span className="r_error">{errremail}</span>
                            </div>

                            <div className="mb-3 mt-3">
                                <label htmlfor="yourSubject" className="form-label text-white"><span className="errors">*</span>Subject:</label>
                                <input
                                    //required
                                    type='text'
                                    className="form-control"
                                    id="yourSubject"
                                    name='yourSubject'
                                    placeholder="your subject"
                                    value={yourSubject}
                                    onChange={event => setSubject(event.target.value)}

                                /><span className="r_error">{errrsubject}</span>
                            </div>

                            <div className="mb-3 mt-3">
                                <label htmlfor="yourMessage" className="form-label text-white"><span className="errors">*</span>Message:</label>
                                <textarea
                                    //required
                                    rows="4"
                                    cols="50"
                                    className="form-control"
                                    id="yourMessage"
                                    name='yourMessage'
                                    placeholder="your Message"
                                    value={yourMessage}
                                    onChange={event => setMessage(event.target.value)}

                                />
                            </div>
                            {spinner && <div className="spinner-border text-light" role="status" />}

                            <button type='submit' className='btn btn-primary register ' onClick={createPost}>Submit</button>


                        </form>
                    }
                    {loading && <h1 class="reg-success mt-4">{post}</h1>}
                    {error && <h1 class="reg-error mt-4">{post}</h1>}
                </Col>
            </Row>
        </Container>
    );
}

export default AutoLayoutExample;