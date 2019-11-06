import React, { Component } from "react";
import Menueitem from "./Menueitem";

import Data from "../Data";
import { Card, ListGroup } from "react-bootstrap";

export default class Menu extends Component {
  state = {
    data: Data.coffee
  };
  render() {
    return (
      <div className="menu">
        <Card style={{ width: "15rem", height: "20rem" }}>
          <Card.Header>Category</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Coffee's </ListGroup.Item>
            <ListGroup.Item>Breakfast</ListGroup.Item>
            <ListGroup.Item>Dessert </ListGroup.Item>
          </ListGroup>
        </Card>
        {/* <Menueitem /> */}
        
      </div>
    );
  }
}
