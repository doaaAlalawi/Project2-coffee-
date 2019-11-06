import React, { Component } from "react";
import "../style.css";

import back from "../img/back.png";
import qute from "../img/qute.png";
import hello from "../img/hello.png";

import { Carousel, Card } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <div>
        <Carousel className="slid">
          <Carousel.Item>
            <img className="d-block w-100 aboutt" src={back} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 aboutt" src={qute} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 aboutt"
              src={hello}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <Card>
          <Card.Text className="title">STORY OF SHIFT :</Card.Text>
          <Card.Text className="story">
            Shift's name was chosen based on a shift in the mood of the person
            when trying our coffee.
            Through this philosophy, the name and the associated phrase were
            chosen.
            The font used has been carefully chosen so that it is comfortable to
            the eye and brings relaxation from his sight.
            As for the choice of colors we made sure to follow the attractive
            color and close to the color of coffee and also comfortable for the
            viewer
          </Card.Text>
        </Card>
      </div>
    );
  }
}
