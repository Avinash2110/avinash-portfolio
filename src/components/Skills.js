import React from 'react'
import "./Skills.css";
import { FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Skills = () => {

    const Tooltip = ({name, perentage}) =>{
        return(
            <div className="tooltip-container">
                <h2 className="tooltip-text">{name}</h2>
                <h3 className="tooltip-text">Rating: {perentage}</h3>
            </div>
        )
    }

    return (
        <div className="skills-container">
            <h2 className="skills-title">View My Expertise</h2>
            <div className="icon-containers">
                <Tippy content={<Tooltip name="HTML" perentage="90%"/>}>
                    <div className="card">
                        <FaHtml5
                            style={{width: "70%", height: "80%", color: "#E07C24"}}
                        />
                    </div>
                </Tippy>
                <Tippy content={<Tooltip name="CSS" perentage="70%"/>}>
                    <div className="card">
                        <FaCss3
                            style={{width: "70%", height: "80%", color: "#03203C"}}
                        />
                    </div>
                </Tippy>
                <Tippy content={<Tooltip name="Javascript" perentage="80%"/>}>
                    <div className="card">
                        <SiJavascript
                            style={{width: "70%", height: "80%", color: "#DDD101"}}
                        />
                    </div>
                </Tippy>
                <Tippy content={<Tooltip name="React.js" perentage="70%"/>}>
                    <div className="card">
                        <FaReact
                            style={{width: "70%", height: "80%", color: "#12B0E8"}}
                        />
                    </div>
                </Tippy>
                <Tippy content={<Tooltip name="Node.js" perentage="60%"/>}>
                    <div className="card">
                        <FaNodeJs
                            style={{width: "70%", height: "80%", color: "#1FAA59"}}
                        />
                    </div>
                </Tippy>
                <Tippy content={<Tooltip name="Mongodb" perentage="70%"/>}>
                    <div className="card">
                        <SiMongodb
                            style={{width: "70%", height: "80%", color: "#02B290"}}
                        />
                    </div>
                </Tippy>
            </div>
        </div>
    )
}

export default Skills;
