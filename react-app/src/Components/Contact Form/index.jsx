import React from "react";
import "./style.css";
import call from "./../../assets/icons/call.png";
import email from "./../../assets/icons/email.png";
import fb from "./../../assets/icons/fb.png";
import ig from "./../../assets/icons/ig.png";
import twit from "./../../assets/icons/twit.png" 
import { useState } from "react";

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    console.log(formData.message)
    const [error, setError] = useState({
        name_error: "",
        email_error: "",
        message_error: ""
    })

    const[isValid, setisValid] = useState(false)
    const[isSuccess, setisSuccess] = useState(false)

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData((prevProps) => ({
        ...prevProps,
        [name]: value,
        }))
    }

    const Validation = (e) => {
        e.preventDefault();

        if(!formData.name) {
            error.name_error = "*The Name Field is Required!";
            setisValid(!isValid)
        } else {
            error.name_error = "";
        }

        if(!formData.email) {
            error.email_error = "*The Email Field is Required!";
            setisValid(!isValid)
        } else {
            error.email_error = "";
        }

        if(!formData.message) {
            error.message_error = "*The Message Field is Required!";
            setisValid(!isValid)
        } else {
            error.message_error = "";
        }

        if(isValid) {
            formData.name = "";
            formData.email = "";
            formData.message = "";
        }
        
        
    }    

    console.log(isValid)

    return <div className="info-box">
    <form className="contact-form" onSubmit={Validation}>
        <div className="contact-div btn-align">
            <input 
                className="name-input" 
                type="text" 
                name="name" 
                placeholder="Name" 
                onChange={handleInput} 
                value={formData.name}/>

            <p className="error-style">{error.name_error}</p>    

            <input 
                className="email-input" 
                type="email" 
                name="email" 
                placeholder="Email" 
                onChange={handleInput} 
                value={formData.email} />

            <p className="error-style">{error.email_error}</p> 

            <textarea  
                className="msg-input" 
                name="message" 
                placeholder="Message" 
                onChange={handleInput} 
                value={formData.message}></textarea>

            <p className="error-style">{error.message_error}</p> 

            <button className="form-btn" type="submit" >Send</button>

            <p>{isSuccess}</p>
        </div> 
    </form>
    <div>
        <div className="contact-form">
                <h4>Our Address</h4>
                <address>
                    180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550
                </address>
                <div className="contact-details">
                    <a className="contact-a" href="tel+1800900110" target="_blank" rel="noreferrer">
                        <img src={call} alt="call icon" />
                        1800900110
                    </a>
                    <a className="contact-a" href="mailto:name@gmail.com" target="_blank" rel="noreferrer">
                        <img src={email} alt="email icon" />
                        info@company.co
                    </a>
                    <a className="social-a" href="https://www.facebook.com/">
                        <img src={fb} alt="fb icon" />
                    </a>
                    <a className="social-a" href="https://www.instagram.com/">
                        <img src={ig} alt="ig icon" />
                    </a>
                    <a className="social-a" href="https://twitter.com/?lang=en">
                        <img src={twit} alt="twitter icon" />
                    </a>
                </div>
               
                <div>

                </div>
            </div>
     </div>
    </div>
}

export default ContactForm