import React from "react";
import Photoshop from "../icons/icons8-photoshop-96.png";
import Figma from "../icons/icons8-figma-96.png";
import Git from "../icons/icons8-git-96.png";
import Vscode from "../icons/icons8-vs-code-96.png";
import Marquee from "react-fast-marquee";

function Tools () {
    return(
        <div className="skills-ip">
        <h2> TOOLS </h2>

        <div className="skills-scroll">

            <div className="scroll-items">

            <Marquee direction="right" pauseOnHover>
            <div className="scroll-container">
                    <div className="skill-img-div">
                        <img className="skill-img" src= {Photoshop} alt="skills"/>
                    </div>
                    <div className="skill-name-div">
                        <h4 className="skill-names"> PHOTOSHOP </h4>
                    </div>
                    
                </div>

                <div className="scroll-container">
                    <div className="skill-img-div">
                        <img className="skill-img" src={Figma} alt="skills"/>
                    </div>
                    <div className="skill-name-div">
                        <h4 className="skill-names"> FIGMA </h4>
                    </div>
                    
                </div>

                <div className="scroll-container">
                    <div className="skill-img-div">
                        <img className="skill-img" src={Git} alt="skills"/>
                    </div>
                    <div className="skill-name-div">
                        <h4 className="skill-names"> GIT </h4>
                    </div>
                    
                </div>


                
                <div className="scroll-container">
                    <div className="skill-img-div">
                        <img className="skill-img" src={Vscode} alt="skills"/>
                    </div>
                    <div className="skill-name-div">
                        <h4 className="skill-names"> VS CODE </h4>
                    </div>
                    
                </div>
            </Marquee>

            </div>

        </div>

        </div>
    )
}

export default Tools;