import React, {Component} from "react";
import  "./nav.css";


class Navigation extends Component{
    render (){

     
   

        return(
            <nav id="navbar">
            <ul>
                <li class="item"><a href="#home">Home</a></li>
                <li class="item"><a href="#grid-container"> OurServices</a></li>
                <li class="item"><a href="#client-section">Our Clients</a></li>
                <li class="item"><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
        );
    }
}

export default Navigation