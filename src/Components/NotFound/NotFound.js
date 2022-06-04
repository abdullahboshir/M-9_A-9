import React from 'react';
import { BiRun } from 'react-icons/bi';
import '../Home/home.css'
import img from '../../img/pngegg.png';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", height: "300px", position: "fixed", marginLeft: "425px"}}> 
            <h1 style={{margin: "0"}}>AHHHHHHH! YOU FOUND ME!</h1>
            <p style={{ width: "450px", textAlign: "center"}}>Uh oh, we can't seem to find the page you're looking for. Try going back to the previous page!</p>
            <BiRun style={{fontSize: "100px", color: "#FC9933", transform: "scaleX(-1)"}}></BiRun>
             <br />
            <button style={{width: "150px", marginRight: "10px"}} className = "about-btn" onClick={() => navigate("/home")}>Go to Home</button>
           <div>

           <span className="notAPage" style={{width: "80px", top: "0", marginLeft: "550px", position: "absolute", height: "800px"}} src={img} alt="" />

           <img style={{width: "270px", top: "225px", marginLeft: "330px", position: "absolute"}} src={img} alt="" />
{/* 
           <img style={{width: "370px", top: "135px", marginLeft: "330px", position: "absolute"}} src={img} alt="" /> */}

           </div>
        </div>
    );
};

export default NotFound;