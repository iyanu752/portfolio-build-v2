import React from "react";
import Illustration from "../icons/cyborg.png";
import Resume from "../icons/icons8-resume-48.png";
import { TypeAnimation } from 'react-type-animation';


function Main() {
    return(
    <div className="container">

    <div className="illustration">
                <img className="cyborg-png" src= {Illustration}  alt="illustration"/>
            </div>

        <div className="paragraph-flex">
            <h1>{`Hi!, I'm Iyanu`} </h1>
                                <span className="wrap"><TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        'I am a Frontend developer',
                        1000,
                        'I am a Frontend engineer',
                        1000,
                    ]}
                    speed={50}
                    style={{ fontSize: '1.5em', fontFamily: 'Audiowide' }}
                    repeat={Infinity}
                    /></span>
                <p>
                        Hello there! My name is Iyanu, and I'm thrilled to welcome you to my portfolio website. I
                        am a passionate and creative frontend software developer with a wide range of interests and skills beyond coding.
                        When I'm not immersed in the world of programming, I find joy in expressing my artistic side. 
                        Drawing and animating allow me to explore my imagination and bring my ideas to life.
                </p>
                <p>
                        I invite you to explore my work, delve into my projects, and  thank you for visiting, and I hope you enjoy your time here. 
                        Feel free to reach out to me for any inquiries or collaboration opportunities,
                        I'm always excited to connect with fellow enthusiasts in the tech and creative communities. 
                </p>

                 <div className="buttons">
                <div className="contact-div">
                <button className="resume-btn">
                <div className="icons-flex">
                <div><a className="button-link" href="https://drive.google.com/file/d/1vj7WzDJ1J78HfcbK1AEX5XGzW8HF-qrp/view?usp=sharing/"target="_blank" rel="noopener noreferrer">Resume</a></div>
                <div><img className="resume-png" src= {Resume} alt="resume-png"/></div>
                </div>
                    </button>  
                </div>
                </div>            
                    
        </div>

        

    </div>
    );
}

export default Main;