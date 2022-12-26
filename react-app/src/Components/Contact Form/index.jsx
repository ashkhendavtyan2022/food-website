import React from "react";
import "./style.css";
import call from "./../../assets/icons/call.png";
import email from "./../../assets/icons/email.png";
import fb from "./../../assets/icons/fb.png";
import ig from "./../../assets/icons/ig.png";
import twit from "./../../assets/icons/twit.png" 
import { useState } from "react";

const ContactForm = () => {
    const isRequired = (value) =>
    value.length ? null : "This Field is Required";
    
  const validateEmail = (value) => {
    const rgx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return rgx.test(String(value).toLowerCase())
      ? null
      : "Please Write a Valid Email";
  };

  const [messageData, setMessageData] = useState({
    name: {
      value: "",
      error: null,
      validations: [isRequired],
    },
    email: {
      value: "",
      error: null,
      validations: [isRequired, validateEmail],
    },
    message: {
      value: "",
      error: null,
      validations: [isRequired],
    },
  });

  const [isSuccess, setisSuccess] = useState("");

  const messageHandleChange = (e) => {
    const { value, name } = e.target;
    const { validations } = messageData[name];

    let error;

    for (let i = 0; i < validations.length; i++) {
      const validation = validations[i];
      const errorMessage = validation(value);

      if (errorMessage) {
        error = errorMessage;
        break;
      }
    }
    setMessageData((prev) => {
      return {
        ...prev,
        [name]: {
          ...prev[name],
          value,
          error,
        },
      };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (
        messageData.email.error !== null ||
        messageData.name.error !== null ||
        messageData.message.error !== null
    ) {
        console.log(messageData.name.error)
        setisSuccess("All fields are required ");
    } else {
        setisSuccess("pass");
        e.target.reset();
    }
  };


   /*
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
    */
    return <div className="info-box">
    <form className="contact-form" onSubmit={submitForm}>
        <div className="contact-div btn-align">
            <input 
                className="name-input" 
                type="text" 
                name="name" 
                placeholder="Name" 
                required
                onChange={messageHandleChange}/>

            <p className="error-style">{messageData.name.error}</p>    

            <input 
                className="email-input" 
                type="email" 
                name="email" 
                placeholder="Email" 
                required
                onChange={messageHandleChange} />

            <p className="error-style">{messageData.email.error}</p> 

            <textarea  
                className="msg-input" 
                name="message" 
                placeholder="Message" 
                required
                onChange={messageHandleChange}></textarea>

            <p className="error-style">{messageData.message.error}</p> 

            <button className="form-btn" type="submit">
                Send
            </button>

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