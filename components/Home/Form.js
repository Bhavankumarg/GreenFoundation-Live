'use client'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import axios from "axios";
import configData from '../../config.json';



import '../Style'

import '../custom.css'

const Form = () => {

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

    const siteUrl = configData.domain;

    const handleSubmit = event => {
        // 👇️ prevent page refresh
        event.preventDefault();
    };

    function createPost() {
        setSpinner(true);
        axios.post(`${siteUrl}wp-json/contact-form-7/v1/contact-forms/7036/feedback`,
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
                    // setErrName(response.data['invalid_fields'][0]['message']);
                    // setErrEmail(response.data['invalid_fields'][1]['message']);
                    //setErrSubject(response.data['invalid_fields'][2]['message']);
                    setSpinner(false);
                    //setLoading(true);
                    setError(true);
                }
                console.log(response.data)
            });
    }


    return (
        <>
            <Container className='py-5 text-center w-100'>
                <h5>GREEN Foundation welcomes volunteers, who are committed to contribute substantially in terms of concepts and field work.</h5>
                {success &&
                    <form
                        onSubmit={handleSubmit}>
                        <Row className='gap-3 py-4 d-flex flex-md-row flex-column'>
                            <Col>
                                <input
                                    type="name"
                                    class="form-control"
                                    id="name"
                                    aria-describedby="name"
                                    placeholder="Name"
                                    value={yourName}
                                    onChange={event => setName(event.target.value)}
                                />
                                <span
                                    className="r_error"
                                >
                                    {errrname}
                                </span>
                            </Col>
                            <Col >
                                <input
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    placeholder="Email"
                                    value={yourEmail}
                                    onChange={event => setEmail(event.target.value)}

                                />
                                <span
                                    className="r_error"
                                >
                                    {errremail}
                                </span>

                            </Col>
                            <Col>
                                <input
                                    type="city"
                                    class="form-control"
                                    id="city"
                                    placeholder="City"
                                    value={yourSubject}
                                    onChange={event => setSubject(event.target.value)}
                                />
                                <span
                                    className="r_error"
                                >
                                    {errrsubject}
                                </span>
                            </Col>
                            <Col md={12}>
                                <textarea class="form-control"
                                    id=""
                                    rows="3"
                                    placeholder='Message'
                                    value={yourMessage}
                                    onChange={event => setMessage(event.target.value)}
                                />
                            </Col>
                        </Row>
                        {spinner && <div className="spinner-border text-light" role="status" />}
                        <button type='submit' className='btn btn-primary register ' onClick={createPost}>Submit</button>
                    </form>
                }
                {loading && <h1 class="reg-success mt-4">{post}</h1>}
                {error && <h1 class="reg-error mt-4">{post}</h1>}

            </Container>
        </>
    )
}

export default Form