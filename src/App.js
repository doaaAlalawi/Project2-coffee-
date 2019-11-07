import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import "./style.css";

import CoffeeType from "./component/CoffeeType";
import Home from "./component/Home";
import Menu from "./component/Menu";
import Contact from "./component/Contact";
import About from "./component/About";
import logo from "./img/logo2.png";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar, Nav, Image } from "react-bootstrap";

export default class App extends Component {
  state = {
    data: null
  };
  componentDidMount() {
    axios
      .get("https://cors-anywhere.herokuapp.com/https://intense-spire-23856.herokuapp.com/coffeebens.json")
      .then(res => {
        let doaa = res;
        let data = { ...this.state };
        data.data = doaa;
        this.setState({ data: res.data });
      }); }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar className="justify-content-center center" bg="navbar-expand-sm fixed-top navbar-light light" expand="lg" >
              <Nav className="mr-auto">
                <Image src={logo} style={{ width: "10rem" }} alt=""/>
              </Nav>
                <Nav className="justify-content-center mr-auto">
                <Navbar.Brand href="/Home"> Home </Navbar.Brand>
                <Navbar.Brand href="/CoffeeType"> Beanse we have </Navbar.Brand>
                <Navbar.Brand href="/About"> About Us</Navbar.Brand>
                <Navbar.Brand href="/Menu"> Menu </Navbar.Brand>
                <Navbar.Brand className="ml-auto" href="/Contact"> Contact Us </Navbar.Brand>
              </Nav>
            </Navbar>
          </div>
          <Switch>
            <Route path="/Home" component = {Home} />
            <Route exact path="/CoffeeType" render={() => this.state.data ? <CoffeeType data = {this.state.data} /> : null } />
            <Route path="/Menu" component = {Menu} />
            <Route path="/Contact" component = {Contact} />
            <Route path="/About" component = {About} />
            <Route path="/" component = {Home} />
            <Route path="*" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
