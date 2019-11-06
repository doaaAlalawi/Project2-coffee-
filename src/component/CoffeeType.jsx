import React, { Component } from "react";
import '../style.css'
 import CoffeeCont from './CoffeeCont'
// import { Card } from 'react-bootstrap';
// import back from "../img/back.png";

export default class CoffeeType extends Component {
  render() {
    //console.log(this.props.data[1].desctrption)
     let coffee =  this.props.data.map((item) => {
      return (
       // console.log(item)
         <CoffeeCont beans = {item} key = {item.id}/>
      )
    });
    console.log(this.props.data.desctrption)
    return (
      <div>
       {coffee}
      </div>
    );
  }
}
