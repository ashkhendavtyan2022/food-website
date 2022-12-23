import React from "react";
import "./style.css";
import logo from "./../../assets/images/logo.png";
import {NavLink} from "react-router-dom";

const Header = () => {

    return <div className="container">
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
                                <li className="menu-item menu-item-margin">
                                    <NavLink className={({isActive}) => isActive ? "active": null} to="/">Home</NavLink>
                                </li>
                                <li className="menu-item menu-item-margin">
                                    <NavLink className={({isActive}) => isActive ? "active": null} to="/about">About</NavLink> 
                                </li>
                                <li className="menu-item">
                                    <NavLink className={({isActive}) => isActive ? "active": null} to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
            </div>
    </div>
}

export default Header