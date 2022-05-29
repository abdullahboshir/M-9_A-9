import React from 'react';
import './home.css'
import image from "../../img/VR-Pro2.jpg"

const Home = () => {
    return (
        <div className='products-container'>
            <div className="products-info">
                <h1>VIVE PRO 2 HEADSET</h1>
                <h1>SHARP. PRECISE. IMMERSIVE</h1>
            </div>
            <div className="products-img">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Home;