import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import "./style.css";

import CoffeeType from "./component/CoffeeType";
import Home from "./component/Home";
import Menu from "./component/Menu";
import Contact from "./component/Contact";
import About from "./component/About";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default class App extends Component {
  state = {
    data: null
  };
  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://intense-spire-23856.herokuapp.com/coffeebens.json"
      )
      .then(res => {
        // let doaa = res;
        // let data = { ...this.state };
        // data.data = doaa;
        this.setState({ data: res.data });
      });
    // .then(res => res.json())
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar collapseOnSelect expand="lg" bg="navbar-expand-sm fixed-top navbar-light light" className="justify-content-end">
              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
              <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav className="mr-auto" >
                  <Nav.Link className="font" href="/Home">Home</Nav.Link>
                  <Nav.Link className="font" href="/Menu">Menu</Nav.Link>
                  <Nav.Link className="font" href="/CoffeeType">Beans we use</Nav.Link>
                  <Nav.Link className="font" href="/About">About Us</Nav.Link>
                  <Nav.Link className="font" href="/Contact">ContactUs</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <Switch>
            <Route path="/Home" component={Home} />
            <Route
              exact
              path="/CoffeeType"
              render={() =>
                this.state.data ? <CoffeeType data={this.state.data} /> : null
              }
            />
            <Route path="/Menu" component={Menu} />
            <Route path="/Contact" component={Contact} />
            <Route path="/About" component={About} />
            <Route path="/" component={Home} />
            <Route path="*" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
