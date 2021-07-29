import React from 'react'
import "./Contact.css";
import { FaLinkedin, FaGithub, FaFacebookSquare} from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact-container">
            <h2 className="contact-heading">Get in touch with me</h2>
            <p className="contact-text">You can react out to me and send your query at {`avinashshukla0784@gmail.com`}</p>
            <div className="social-media-container">
                <a href="https://www.linkedin.com/in/avinash-shukla-6b6a19151/" className="social-icon-container">
                    <FaLinkedin className="social-icons" style={{color: "#0e76a8"}}/>
                </a>
                <a href="https://github.com/Avinash2110" className="social-icon-container">
                    <FaGithub className="social-icons" style={{color: "#211F1F"}}/>
                </a>   
                <a href="https://www.facebook.com/avinash.shukla.507679" className="social-icon-container">
                    <FaFacebookSquare className="social-icons" style={{color: "#3b5998"}}/>
                </a>
            </div>
            <div className="done-img"></div>
        </div>
    )
}

export default Contact;
