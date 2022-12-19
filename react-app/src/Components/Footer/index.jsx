import React, { Component } from "react";
import "./style.css";

export class Footer extends Component {
    constructor(props) {
        super(props)

    }
    render () {

        return(
            <div className="container"> 
                <div className="wrapper">
                    <p className="footer-p">Copyright © 2045 Simple House | Design: TemplateMo</p>   
                </div>

            </div>
        )
    }

}