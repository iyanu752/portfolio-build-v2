import { useState } from "react";
import React from "react";
import Logo from "../icons/logo.png";
import gitlogo from "../icons/icons8-github-64.png";
import linkedinlogo from "../icons/icons8-linkedin-64.png";




function Nav() {

    const [navBar, setNavBar] = useState(false);


// FEATURE: STICKY NAVBAR AND CHANGE BG COLOUR ON SCROLL
    const changeBackground = () => {

        if( window.scrollY >= 60) {
            setNavBar(true);
        }else {
            setNavBar(false);
        }

    };
 
    window.addEventListener('scroll', changeBackground); 


   
    return(

            <nav className={navBar ? "nav-bar active" : "nav-bar" }>
            <div className="flex-div">
            <div className="logo"><img className="logo" src= {Logo} alt="iyanu-logo" /></div>
            <div className="list-items">
            <ul className="el-ul">

                </ul>
            </div> 
             
                <div className="social-icons">
                    <ul>
                        <a href="https://github.com/iyanu752/"target="_blank" rel="noopener noreferrer" ><li className="social-list"> <img className="social-logo" src = {gitlogo} alt="github-logo" /></li></a>
                        <a href="https://www.linkedin.com/in/ahmed-iyanuoluwa-b4111a26a/"target="_blank" rel="noopener noreferrer"> <li className="social-list"><img className="social-logo" src = {linkedinlogo} alt="linkedin-logo" /></li></a>
                    </ul>    
                </div>
            </div>
   
        </nav>
    );
}

export default Nav;