import React, { Component } from "react";

import Data from "../Data";
import Menueitem from "./Menueitem"


export default class Menu extends Component {

  state = {
    data:Data.coffee
  };
  
  render() {
    console.log(this.state.data)
    let coffee =  this.state.data.map((item) => {
      return (
         <Menueitem beans = {item} key = {item.id}/>
      )
    });
    return (
      <div> {coffee} </div>
    );
  }
}
