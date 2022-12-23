import React from "react";
import "./style.css";
import IntroSection from "../Intro Section";
import { useState } from "react";
import about1 from "./../../assets/images/about-01.jpg";
import about2 from "./../../assets/images/about-02.jpg";
import about3 from "./../../assets/images/about-03.jpg";
import about4 from "./../../assets/images/about-04.jpg";
import fb from "./../../assets/icons/facebook.png";
import ig from "./../../assets/icons/instagram.png";
import twitter from "./../../assets/icons/twitter.png";
import youtube from "./../../assets/icons/youtube.png";
import about5 from "./../../assets/images/about-05.jpg";
import about6 from "./../../assets/images/about-06.png";
import about7 from "./../../assets/images/about-07.png";
import about8 from "./../../assets/images/about-08.png";
import AboutBox from "../About Box";

const About = () => {
    const[peopleList, setPeopleList] = useState([
        {
            img: about1,
            name: "Jennifer Soft",
            position: "Founder and CEO",
            desc: "Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.",
            fb: fb,
            fbURL: "https://www.facebook.com/",
            twitter: twitter, 
            twitterURL: "https://twitter.com/?lang=en",
            ig: ig,
            igURL: "https://www.instagram.com/"
    }, 
        {
            img: about2,
            name: "Daisy Walker",
            position: "Executive Chef",
            desc: "Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.",
            fb: fb,
            fbURL: "https://www.facebook.com/",
            twitter: twitter, 
            twitterURL: "https://twitter.com/?lang=en"
        },
        {
            img: about3,
            name: "Florence Nelson",
            position: "Kitchen Manager",
            desc: "Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.",
            fb: fb,
            fbURL: "https://www.facebook.com/",
            ig: ig, 
            igURL: "https://www.instagram.com/"
        },
        {
            img: about4,
            name: "Valentina Martin",
            position: "Valentina Martin",
            desc: "Praesent non vulputate elit. Orci varius natoque penatibus et magnis montes, nascetur ridiculus mus.",
            fb: fb,
            fbURL: "https://www.facebook.com/",
            twitter: twitter,
            twitterURL: "https://twitter.com/?lang=en",
            ig: ig, 
            igURL: "https://www.instagram.com/",
            youtube: youtube,
            youtubeURL: "https://www.youtube.com/",
        },
])

const[boxInfo, setBoxInfo] = useState([
    {
        icon: about6,
        desc: "Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.",
        btn: "Read More",
        color: "blue_btn",
    }, 
    {
        icon: about7,
        desc: "Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit. Nam sed suscipit odio. Morbi in dolor finibus, consequat nisl.",
        btn: "Read More",
        color: "green_btn"
    },
    {
        icon: about8,
        desc: "Morbi in dolor finibus, consequat nisl eget, pretium nunc. Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit.",
        btn: "Read More",
        color: "red_btn"
    }
])

    


    return <div className="container">
        <div className="wrapper">
            <div className="P-main-section">
                <IntroSection intro_title = "About Simple House" intro_description = "This is about page of simple house template. You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect."/>
            </div>
            
            <div className="people-box">
             {peopleList.map((person, index) => {

                return <div className="person-box">
                    <img className="" src={person.img} alt="nkar"/>
                    <div className="person-details">
                        <h4>{person.name}</h4>
                        <p className="person-position">{person.position}</p>
                        <p className="person-desc">{person.desc}</p>
                        <div className="social-icons">
                            {person.fb ? <img src={person.fb} alt="fb icon" />: null}
                            {person.twitter ? <img src={person.twitter} alt="twitter icon" />: null}
                            {person.ig ? <img src={person.ig} alt="ig icon" />: null}
                            {person.youtube ? <img src={person.youtube} alt="youtube icon" /> : null}
                        </div>
                    </div>
                    
                </div>
                })}
            </div>

            {/* <div className="mirror-effect">
                <img src={about5} alt="nkar" />
                 
            </div> */}
            <div className="box-style">
                {boxInfo.map((box, index) => {
                    return <AboutBox 
                    key={index} 
                    box_img={box.icon} 
                    box_desc={box.desc}
                    box_btn={box.btn}
                    box_color = {box.color}
                    />
                })}
            </div>
            
        </div>
        
    </div>
}

export default About