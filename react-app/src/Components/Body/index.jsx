import React, { Component } from "react";
import { Foods } from "../Foods";
import { Fruit } from "../FruitBox";
import "./style.css"

export class Section extends Component{



    render(){

        return <div className="container">
            <div className="wrapper">
                <div className="P-main-section">
                <h2>Welcome to Simple House</h2>
                <p>
                    Total 3 HTML pages are included in this template. Header image has a parallax
                    effect. You can feel free to download, edit and use this TemplateMo layout for 
                    your commercial or non-commercial websites.
                </p>
            <Foods />
            <Fruit />
                </div>
            
            </div>
        
        </div>
    }
}