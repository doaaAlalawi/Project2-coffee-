import React, { Component } from "react";
import { Card ,Image } from "react-bootstrap";
import "../style.css"
// import sadeem from '../img/sadeem.png'
import sadeem from "../img/sadeem.png";

export default class Home extends Component {
  render() {
    return (
       <div>

         {/* <h1>welcome </h1>
         <img src={sadeem} alt="" className ="sadeem"/> */}
         
        <Card>
        <Image  src = {sadeem}  alt = "" fluid style = {{ opacity:0.6 }}/>
          <Card.ImgOverlay>
          <Card.Text className="centertext2">
          Welcome!
            </Card.Text>
          <Card.Text className="centertext">
          Make your day with a cup of coffee
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card> 
        <Card.Text className="center">
            2019  By: Doaa Alalawi
    </Card.Text>
        </Card>
      </div>
    );
  }
}
