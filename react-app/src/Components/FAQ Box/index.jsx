import React from "react";
import "./style.css";
import arrow from "./../../assets/images/arrow.png"
import { useState } from "react";

const FAQBox =(props) => {
    const question = props.question;
    const answer = props.answer;

    const[isOpen, setisOpen] = useState(false)
    const onClickQuestion = () => {
        setisOpen(!isOpen)
    }

    return <div className="faq-box">
        <div className="q-div" onClick={onClickQuestion}>{question} <img src={arrow} alt="arrow icon"/></div>
        <div className={`a-div ${isOpen ? "a-div-active" : ""}`}>{answer}</div>
    </div>
}

export default FAQBox
