import React, { Component } from "react";
import { Card ,Image } from "react-bootstrap";
import "../style.css"
import pic from "../img/pic.png";

export default class Home extends Component {
  render() {
    return (
       <div>
        <Card>
        <Image  src = {pic}  alt = "" fluid style = {{ opacity:0.6 }} id = "home"/>
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
