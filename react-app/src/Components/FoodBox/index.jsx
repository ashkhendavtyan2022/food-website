import React from "react";
import { Component } from "react";
import "./style.css"


export class FoodBox extends Component{




    render(){
        const {img,title,description,price} = this.props

        return <div className="P-food-box">
        <img className="img-style" src={img} alt="nkar"/>
        <h3 className="title-style">{title}</h3>
        <p className="desc-style">{description}</p>
        <span className="price-style">{price}</span>
    </div>

    }
}