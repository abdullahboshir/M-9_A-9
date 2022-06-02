import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>This is About</h1>
            <button onClick={() => navigate("/home")}>Go to Home</button>
        </div>
    );
};

export default About;