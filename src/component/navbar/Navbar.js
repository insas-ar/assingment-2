import React, { Component } from "react";
import  Menu  from './Menuitems'
import './Navbar.css'
class Navbar  extends Component {
    render(){
        return(
            <nav className="Navbar">
                <h1 className="logo">InvestUp</h1>
                <ul className="items">
                    {Menu.map((item,index) =>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
            </nav>
        )
    }

}

export default Navbar