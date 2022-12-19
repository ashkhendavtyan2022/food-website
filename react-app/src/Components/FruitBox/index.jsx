import React, { Component } from "react";
import "./style.css";
import mango from "./../../assets/images/mango.jpg"

export class Fruit extends Component {
    constructor(props) {
        super(props)

    }
    render () {

        return(
            <div className="container"> 
                <div className="wrapper">
                    <div className="fruit-box">
                        <img src={mango} alt="mango" />
                        <div className="fruit-details">
                            <h4 className="title-style">Maecenas nulla neque</h4>
                            <p className="fruit-desc-style">Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.</p>
                            <button className="fruit-btn">Read More</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}