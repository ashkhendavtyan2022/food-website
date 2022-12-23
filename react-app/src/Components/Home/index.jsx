import React, { Component } from "react";
import { Foods } from "../Foods";
import { Fruit } from "../FruitBox";
import IntroSection from "../Intro Section";
import "./style.css"

export class Home extends Component{



    render(){
        

        return <div className="container">
            <div className="wrapper">
                <div>
                    <IntroSection intro_title = "Welcome to Simple House" intro_description = "Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites."/>
            <Foods />
            <Fruit />
                </div>
            
            </div>
        
        </div>
    }
}