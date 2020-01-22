import React, { Component } from "react";

import '../App.css'
import { Card, Row,Col } from "react-bootstrap";

export default class Menueitem extends Component {
  render() {
    return (
           <div className = "menue">
           <Row>
             <Col>
               <Card style={{ width: "15rem" }} className="center">
                 <Card.Img variant="top" src={this.props.beans.img}/>
                 <Card.Body>
                   <Card.Title>{this.props.beans.type} </Card.Title>
                 </Card.Body>
               </Card>
             </Col>
           </Row>
         </div>   
        //  list menulist menu center
    );
  }
}
