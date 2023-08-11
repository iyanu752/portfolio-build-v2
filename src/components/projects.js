import React from "react"; 
import Slider from "react-slick";
import Huddle from "../images/huddle.jpg";
import Lead from "../images/lead tracker.jpg";
import Face from "../images/Face-Attendance.jpg";
import Todo from "../images/todolist app.jpg";



function Projects () {

    var settings = {
        dots: false,
        infinite: true,
        className: "center",
        centerMode: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },

          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };




    return(
        <div>
            <div className=" projects-cont">
                <h2> PROJECTS </h2>
                <Slider {...settings}>
                    <div className="projects-spacing">

                        <div className="projects-div">
                            <img className ="img-adj" src={Lead} alt="LEAD TRACKER IMG"/>
                            <div className=" disc">
                             <h3 className="project-dis">LEAD-TRACKER-CHROME-EXTENTION</h3>
                             <p className="project-p">
                                I created a Lead tracker chrome extension, The Lead Tracker Chrome Extension is a  tool that helps you manage leads and maximize your sales potential.
                            </p>
                                <div className="project-btns">
                                    <button className="projects-btn" ><a href="https://drive.google.com/drive/folders/1JhUR0sxo15ING_HnNQNgPjoW6fur5Yh3?usp=sharing/"target="_blank" rel="noopener noreferrer"> Download Extension</a></button>
                                 <button className="projects-btn"><a href="https://github.com/iyanu752/LEAD-TRACKER-CHROME-EXTENTION/tree/main/"target="_blank" rel="noopener noreferrer">  Source Code </a></button>
                                 </div>
                            </div>
                        </div>
                    </div>


                    <div className="projects-spacing">
                        <div className="projects-div">
                            <img  className ="img-adj" src= {Todo} alt="Todo list APP"/>
                            <div className=" disc">
                                <h3 className="project-dis">TODO-LIST-APP</h3>
                                <p className="project-p">
                                    I created a todo list app, is a user-friendly tool that allowas you to track yout tasks effortlessly.
                                    </p>
                                <div className="project-btns">
                                 <button className="projects-btn"><a href="https://todo-list-app-nine-beta.vercel.app/"target="_blank" rel="noopener noreferrer" > live site </a></button>
                                    <button className="projects-btn"><a href="https://github.com/iyanu752/todo-list-app"target="_blank" rel="noopener noreferrer" > Source Code </a> </button>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="projects-spacing">
                        <div className="projects-div">
                        <img className ="img-adj"  src= {Face} alt="FACIAL RECOGNITION ATTENDANCE" />
                            <div className=" disc">
                                <h3 className="project-dis">Facial-recognition-attendance-app</h3>
                                <p className="project-p"> I created a facial recognition attendance application as my final year project for my University</p>
                                <div className="project-btns">
                                    <button className="projects-btn"><a href="https://github.com/iyanu752/Facial-recognition-attendance-app/"target="_blank" rel="noopener noreferrer" > Source Code </a></button>
                                </div>
                            </div>
                        </div>

                    </div>



                    <div className="projects-spacing">
                        <div className="projects-div">
                        <img className ="img-adj" src= {Huddle} alt="LANDING PAGE WITH THREE CURVED SECTIONS"/>
                            <div className=" disc">
                                <h3 className="project-dis">huddle-landing-page-with-curved-sections</h3>
                                <p className="project-p">   This is a submission i made for the front end mentor challenge huddle-landing-page-with-curved-sections</p>
                                <div className="project-btns">
                                 <button className="projects-btn"><a href="https://iyanu752.github.io/huddle-landing-page-with-curved-sections/"target="_blank" rel="noopener noreferrer"> live site </a></button>
                                    <button className="projects-btn"> <a href="https://github.com/iyanu752/huddle-landing-page-with-curved-sections"target="_blank" rel="noopener noreferrer"> Source Code </a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>
                
            </div>
        </div>
    )
}

export default Projects;