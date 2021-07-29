import React from 'react'
import "./About.css";

const About = () => {
    return (
        <div className="About-container">
            <h2 className="about-heading">I am a Software Developer</h2>
            <p className="about-para">
                I have a Strong background with demonstrated history of working in the Information technology and services industry. Skilled in MERN(Mongo, Express, React, Node) tech stack and programming languages like Java and Javascript.
            </p>
            <a href="/Avinash_Resume.pdf" target="_blank" download className="resume">Download Resume</a>
            <div className="random-image"></div>
        </div>
    )
}

export default About;
