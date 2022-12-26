import React, { Component } from "react";
import "./style.css"
import img1 from "./../../assets/images/01.jpg";
import img2 from "./../../assets/images/02.jpg";
import img3 from "./../../assets/images/03.jpg";
import img4 from "./../../assets/images/04.jpg";
import img5 from "./../../assets/images/05.jpg";
import img6 from "./../../assets/images/06.jpg";
import img7 from "./../../assets/images/07.jpg";
import img8 from "./../../assets/images/08.jpg";
import { FoodBox } from "../FoodBox";

export class Foods extends Component{
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    img: img1,
                    title: "Fusce dictum finibus",
                    description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$45 / $55",
                    type: "pizza",
                }, 
                {
                    img: img2,
                    title: "Aliquam sagittis",
                    description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$65 / $70",
                    type: "pizza",
                }, 
                {
                    img: img3,
                    title: "Sed varius turpis",
                    description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$30.50",
                    type: "pizza",
                }, 
                {
                    img: img4,
                    title: "Aliquam sagittis",
                    description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$25.50",
                    type: "pizza",
                }, 
                {
                    img: img5,
                    title: "Maecenas eget justo",
                    description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$80.25",
                    type: "pizza",
                }, 
                {
                    img: img6,
                    title: "Quisque et felis eros",
                    description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$20 / $40 / $60",
                    type: "pizza",
                }, 
                {
                    img: img7,
                    title: "Sed ultricies dui",
                    description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$94",
                    type: "pizza",
                }, 
                {
                    img: img8,
                    title: "Donec porta consequat",
                    description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$15",
                    type: "pizza",
                }, 
                {
                    img: img4,
                    title: "Salad Menu One",
                    description: "Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique",
                    price: "$25",
                    type: "salad",
                }, 
                {
                    img: img3,
                    title: "Second Title Salad",
                    description: "Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique",
                    price: "$30",
                    type: "salad",
                }, 
                {
                    img: img5,
                    title: "Third Salad Item",
                    description: "Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique",
                    price: "$45",
                    type: "salad",
                }, 
                {
                    img: img1,
                    title: "Superior Salad",
                    description: "Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique",
                    price: "$50",
                    type: "salad",
                }, 
                {
                    img: img8,
                    title: "Sed ultricies dui",
                    description: "Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique",
                    price: "$55 / $60",
                    type: "salad",
                }, 
                {
                    img: img7,
                    title: "Maecenas eget justo",
                    description: "Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique",
                    price: "$75",
                    type: "salad",
                },
                {
                    img: null,
                    title: null,
                    description: null,
                    price: null,
                    type: "salad",
                }, 
                {
                    img: null,
                    title: null,
                    description: null,
                    price: null,
                    type: "salad",
                }, 
                {
                    img: img8,
                    title: "Noodle One",
                    description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                    price: "$12.50",
                    type: "noodle",
                },
                {
                    img: img7,
                    title: "Noodle Second",
                    description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                    price: "$15.50",
                    type: "noodle",
                },
                
                {
                    img: img6,
                    title: "Third Soft Noodle",
                    description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                    price: "$20.50",
                    type: "noodle",
                }, 
                {
                    img: img5,
                    title: "Aliquam sagittis",
                    description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                    price: "$30.25",
                    type: "noodle",
                },
                {
                    img: img4,
                    title: "Maecenas eget justo",
                    description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                    price: "$35.50",
                    type: "noodle",
                },
                {
                    img: img3,
                    title: "Quisque et felis eros",
                    description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                    price: "$40.50",
                    type: "noodle",
                },
                {
                    img: null,
                    title: null,
                    description: null,
                    price: null,
                    type: "noodle",
                }, 
                {
                    img: null,
                    title: null,
                    description: null,
                    price: null,
                    type: "noodle",
                }, 
            ],
            active: false,
            filterlist: []
        }
    }

    componentDidMount(){
        this.FilterFood('pizza')
    }

    FilterFood = (a)=>{
        this.setState({filterlist : this.state.list.filter(x=>x.type === a)})
        this.setState({active: a})
    }

    render(){
        return <div >
                <div className="P-buttons">
                    <button 
                        className={`passive ${this.state.active === 'pizza'? "active" : null}`} 
                    onClick={()=>this.FilterFood('pizza')}>Pizza</button>

                    <button 
                        className={this.state.active === 'salad'? "active" : null} 
                        onClick={()=>this.FilterFood('salad')}>Salad</button>

                    <button 
                        className={this.state.active === 'noodle'? "active" : null} 
                        onClick={()=>this.FilterFood('noodle')}>Noodle</button>
                </div>
                <div className="P-food-main">
                {/* {this.state.filterlist.map((elem,index)=>{
                    return <div className="P-food-box" key={index}>
                        <img src={elem.img} alt="nkar"/>
                        <h3>{elem.title}</h3>
                        <p>{elem.description}</p>
                        <span>{elem.price}</span>
                    </div>
                })} */}
            
                {this.state.filterlist.map((elem,index)=>{
                    return <FoodBox 
                            key={index} 
                            img={elem.img} 
                            title={elem.title}
                            description={elem.description}
                            price={elem.price}/>
                })}
                </div>           
        </div>
    }
}

