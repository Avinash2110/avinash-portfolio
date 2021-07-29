import React, {useContext} from 'react'
import "./Navigation.css";
import {PageContext} from "../PageContext";

const Navigation = () => {

    const [pages, setPages] = useContext(PageContext);

    const changePage = name =>{
        setPages({about: false, skills: false, projects: false, contact: false});
        setPages({[name]: true});
    }

    return (
        <div className="side-nav">
            <div className="profile">
                <div className="dp"></div>
                <h2 className="name-text">Avinash Shukla</h2>
            </div>
            <div className="options">
                <h3 onClick={() => changePage("about")}>About Me</h3>
                <h3 onClick={() => changePage("skills")}>Skills</h3>
                <h3 onClick={() => changePage("projects")}>Projects</h3>
                <h3 onClick={() => changePage("contact")}>Contact Me</h3>
            </div>
        </div>
    )
}

export default Navigation;
