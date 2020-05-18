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
        <Link to="/">
          <h3> Home </h3>
        </Link>
        <Link to="/entry">
          <h3> SignUp </h3>
        </Link>
      </nav>
    );
  }
}
