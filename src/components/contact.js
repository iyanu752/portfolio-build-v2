import React from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

  
     function Contact () {


        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_3aog7oz', 'template_wv42zt8', form.current, 'px_x-fWkV-aMX9yL1')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
                <p className="istrue"> Message sent!</p>
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                <p className="isfalse">An error occoured</p>
            });
        };


    return(
        <div className="contact-bg">
            <div className="contact-h2"> <h2> CONTACT ME </h2></div>

                    <form ref={form} onSubmit={sendEmail}>

                    <div className="contact-cont">
                            <div className="contact-row">
                                <div className="submit-name">
                                    <input placeholder="Your name"  name="User_name"   className="contact-box"/>
                                </div>

                                <div className="submit-name">
                                    <input placeholder="example@gmail"  name="User_email" className="contact-box"/>
                                </div>

                                <div className="submit-message">
                                    <textarea type="text" name="message"  placeholder="put in a message for me" className="message-box"/>
                                </div>

                                <div className="submit-div">
                                <button className="submit-btn" value="Send" type="submit">Submit</button>
                            </div>

                            </div>

                           
                    </div>
                                    
                    </form>
        </div>
    )
}

export default Contact;