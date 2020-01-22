import React, { Component } from "react";
import "../style.css";

import { Card, Row, Col } from "react-bootstrap";

export default class CoffeeCont extends Component {
  render() {
    return (
      <div className="beens">
        <Row>
          <Col xs={4} md={4}>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={this.props.beans.img}/>
              <Card.Body>
                <Card.Title>{this.props.beans.name} </Card.Title>
                <Card.Text>{this.props.beans.desctrption} </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* list menulist */}
      </div>        
    );
  }
}
