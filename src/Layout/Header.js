import React from "react";
import logo from '../Assests/Images/logo-new.webp'
import '../Styles/Header.css'
function Header(props) {

    return(
        <div className="header-main-container">
            <div className="logo-container">
                <img src={logo} alt="logo image" width="110px" height="40px"/>
            </div>
            <div className="contact-us-container">
                <span className="con-details">
                    Contact Us  &nbsp;<i class="fa fa-phone"></i>&nbsp;8108622222
                </span>
            </div>
        </div>
    )
    
}

export default Header;