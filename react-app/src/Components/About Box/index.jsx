import React from "react";
import "./style.css";

const AboutBox = (props) => {
    const box_img = props.box_img;
    const box_desc = props.box_desc;
    const box_btn = props.box_btn;
    const box_color = props.box_color;

    return <div className="about-box">
            <img src={box_img} alt="box-img" />
            <p>{box_desc}</p>
            <button className={box_color}>{box_btn}</button>
    </div>

}

export default AboutBox