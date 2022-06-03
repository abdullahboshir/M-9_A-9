import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiRun } from 'react-icons/bi';
import '../Home/home.css'

const About = () => {
    const navigate = useNavigate()
    return (
        <div style={{display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center"}}>
            <h1>This page will be launched soon!!</h1>
            <BiRun style={{fontSize: "100px", color: "#FC9933", transform: "scaleX(-1)"}}></BiRun> <br />
            <button style={{width: "150px"}} className = "about-btn" onClick={() => navigate("/home")}>Go to Home</button>
        </div>
    );
};

export default About;