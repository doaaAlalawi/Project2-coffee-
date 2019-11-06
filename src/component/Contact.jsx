import React, { Component } from 'react'
import contact from "../img/contact.png";
import { Image } from "react-bootstrap";
export default class Contact extends Component {
    render() {
        return (
            <div>
                <Image  src = {contact}  alt = "" fluid style = {{ opacity:0.6 }}/>
                
            </div>
        )
    }
}
