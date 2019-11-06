import React, { Component } from "react";

import { Card , CardDeck ,ListGroup } from "react-bootstrap";

export default class Menueitem extends Component {
  render() {
    return (
      <div>
            <div className="menu">
        <Card style={{ width: "15rem" , height:"20rem"}}>
          <Card.Header>Category</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Coffee's </ListGroup.Item>
            <ListGroup.Item>Breakfast</ListGroup.Item>
            <ListGroup.Item>Dessert  </ListGroup.Item>
          </ListGroup>
        </Card>
        <Menueitem/>
      </div>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          {/* <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card> */}
        </CardDeck>
      </div>
    );
  }
}
