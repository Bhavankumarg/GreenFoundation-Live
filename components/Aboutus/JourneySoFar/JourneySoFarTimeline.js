'use client'

import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import './timeline.css'

const JourneySoFarTimeline = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scale = 1.9 + scrollPosition * .0005; // Adjust the scale factor as needed

    return (
        <div className="zoom-container" style={{ transform: `scale(${scale})` }}>
            <p>Scroll Position: {scrollPosition}</p>
            {/* Your zoomable content here */}
        </div>
    );
};


export default JourneySoFarTimeline