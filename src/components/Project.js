import React from 'react'
import "./Project.css";

const Project = () => {
    return (
        <div className="project-container">
            <h2 className="project-heading">My Work</h2>
            <div className="project-card-container">
                <a href="https://avinash2110.github.io/gitFire/" className="project-card back1">
                    <h3 className="project-text">Gitfire</h3>
                </a>
                <a href="https://avinash2110.github.io/covid-tracker/" className="project-card back2">
                    <h3 className="project-text">Covid-Tracker</h3>
                </a>
                <a href="*" className="project-card back3">
                    <h3 className="project-text">Portfolio</h3>
                </a>
            </div>
        </div>
    )
}

export default Project;
