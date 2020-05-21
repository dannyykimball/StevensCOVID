import React, { Component } from "react";
import "./component.css";
import { Link } from "react-router-dom";
//import logo from "../Assets/logo.png";
//<img src={logo} alt="logo" />
export default class NavigationBar extends Component {
  render() {
    return (
      <nav id="NavigationBar" className="navigation-bar yellow Chalk">
        <Link to="/" className="logo"></Link>
        <h1 className="website"> Learning Curve </h1>
        <Link to="/" className="navLinkFont">
          <h3> COVID Resources </h3>
        </Link>
        <Link to="/" className="navLinkFont">
          <h3> K-12 Resources </h3>
        </Link>
        <Link to="/sessions" className="navLinkFont">
          <h3> Sessions </h3>
        </Link>
        <Link to="/entry" className="navLinkFont">
          <h3> Get Started </h3>
        </Link>
      </nav>
    );
  }
}
