import React from "react";
import personImage from "../Assests/Images/Rupesh-Kadam 1.png";

import '../Styles/Banner.css';
function Banner(props) {
    
    return(
        <div className="banner-main-container">
            {/* <img src={bannerImg} width={"100%"}/> */}
            <div className="left-image-container">
                <img src={personImage} width="420px" height="500px"/>
            </div>
            <div className="middle-text-container">
                <div className="finicial-info">
                    <div>A financial awareness and wellbeing initiative</div>
                    <div>for MOFSL employees</div>
                </div>
                <div className="first-text">I started investing early for my</div>
                <h1 className="large-text">Happy Tommorrows</h1>
                <h2 className="middle-text">Have You?</h2>
                <div className="prof-details">
                    <span className="name">Mr. Rupesh Kamble</span>
                    <span className="destignation">(Senior Executive, Investment Product Operations)</span>
                </div>
            </div>
        </div>
    )
}

export default Banner;