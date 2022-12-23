import React from "react";
import "./style.css"

const IntroSection = (props) => {
    const intro_title = props.intro_title;
    const intro_description = props.intro_description;
    
    return <div className="P-main-section">
        <h2>{intro_title}</h2>
        <p >{intro_description}</p>
    </div>

}

export default IntroSection