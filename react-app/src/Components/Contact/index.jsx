// {list? <div><p>Text<p/></div>: null}

import React from "react";
import "./style.css"
import IntroSection from "../Intro Section";
import { useState } from "react";
import FAQBox from "../FAQ Box";

const Contact = () => {

    const [questions, setQuestions] = useState([
        {
        q: "1. Fusce eu lorem et dui #09C maximus varius?",
        a: "Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat."
    },
    {
        q: "2. Vestibulum #999 ante ipsum primis in faucibus orci?",
        a: "Mauris euismod odio at commodo rhoncus. Maecenas nec interdum purus, sed auctor est. Sed eleifend urna nec diam consectetur, a aliquet turpis facilisis. Integer est sapien, sagittis vel massa vel, interdum euismod erat. Aenean sollicitudin nisi neque, efficitur posuere urna rutrum porta."
    },
    {
        q: "3. Um erat. Lorem ipsum dolor sit amet consectetur?",
        a: "Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis."
    },
    {
        q: "4. Ut ac erat sit amet neque efficitur faucibus et in lectus?",
        a: "Vivamus viverra pretium ultricies. Praesent feugiat, sapien vitae blandit efficitur, sem nulla venenatis nunc, vel maximus ligula sem a sem. Pellentesque ligula ex, facilisis ac libero a, blandit ullamcorper enim."
    }

])

    return <div className="container">
        <div className="wrapper">
            <div className="P-main-section">
                <IntroSection intro_title = "Contact Page" intro_description = "You may use Simple Contact Form to send email to your inbox. You can modify and use this template for your website. Header image has a parallax effect. Total 3 HTML pages included in this template."/>
            </div>

            <div className="info-box">
                <form className="contact-form">
                    <div className="contact-div btn-align">
                        <input className="name-input" type="text" name="name" placeholder="Name"/>
                        <input className="email-input" type="email" name="email" placeholder="Email" />
                        <textarea  className="msg-input" name="message" cols="30" rows="10" placeholder="Message"></textarea>
                        <button className="form-btn" type="button">Send</button>
                    </div>
                    
                </form>
                <div className="address">
                    <div className="contact-div">
                            <h4>Our Address</h4>
                            <p>
                                180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550
                            </p>
                        </div>
                </div>
            </div>

            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58765.1589232845!2d-43.40239972562247!3d-22.993556201600377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda4a27b6fe5d%3A0x63c3f6d1d89e0f4e!2sBarra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20State%20of%20Rio%20de%20Janeiro%2C%20Brazil!5e0!3m2!1sen!2s!4v1671794955650!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="P-main-section">
                <IntroSection intro_title = "FAQs" intro_description = "This section comes with Accordion tabs for different questions and answers about Simple House HTML CSS template. Thank you."/>
            </div>

            <div className="faq-boxes">
                {questions.map((item, index) => {
                    return <FAQBox 
                    key={index} 
                    question={item.q} 
                    answer={item.a}
                    />
                })}
            </div>
            
        </div>
        
    </div>
}

export default Contact