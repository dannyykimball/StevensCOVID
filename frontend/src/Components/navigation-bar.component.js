import React, { Component } from "react";
import "./component.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

export default class NavigationBar extends Component {
  render() {
    return (
      <nav id="NavigationBar" class="navigation-bar">
        <img src={logo} alt="logo" className="logo" />
        <h1> Learning Curve </h1>
        <Link to="/" className="navLinkFont">
          <h3> Home </h3>
        </Link>
        <Link to="/sessions" className="navLinkFont">
          <h3> Sessions </h3>
        </Link>
        <Link to="/entry" className="navLinkFont">
          <h3> SignUp </h3>
        </Link>
      </nav>
    );
  }
}
