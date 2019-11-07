import React, { Component } from "react";
import "../style.css";

import back from "../img/back.png";
import pic from "../img/pic.png";
import pic2 from "../img/pic2.png";
import pic3 from "../img/pic3.png";
import pic4 from "../img/pic4.png";
import pic5 from "../img/pic5.png";
import pic6 from "../img/pic6.png";
import pic7 from "../img/pic7.png";
import pic8 from "../img/pic8.png";
import pic9 from "../img/pic9.png";



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
            <img className="d-block w-100 aboutt" src={pic} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 aboutt" src={pic2} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 aboutt" src={pic3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 aboutt" src={pic4} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 aboutt" src={pic5} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 aboutt" src={pic6} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 aboutt" src={pic7} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 aboutt" src={pic8} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 aboutt" src={pic9} alt="Third slide" />
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
