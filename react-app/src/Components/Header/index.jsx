import React from "react";
import "./style.css";
import logo from "./../../assets/images/logo.png";

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <div className="container">
                <div className="wrapper">
                <div className="header-img">
                    <div className="header-row">
                        <div className="logo-div">
                            <img src={logo} alt="Logo" className="logo-img"/>
                            <div className="logo-text">
                                <h1>Simple House</h1>
                                <p>new restaurant template</p>
                            </div>
                           
                        </div>
                        <nav className="nav-div">
                            <ul className="menu-items">
                                <li className="menu-item menu-item-margin">Home</li>
                                <li className="menu-item menu-item-margin">About</li>
                                <li className="menu-item">Contact</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                </div>
            </div>
            
        )
    }
}

export default Header