import React, { Component } from "react";
import "./component.css";
import { Link } from "react-router-dom";
import home from "../Assets/home.svg";
import logo from "../Assets/logo.png";

export default class NavigationBar extends Component {
  render() {
    return (
      <nav id="NavigationBar" className="navigation-bar yellow Chalk">
        <Link to="/" className="">
          <img src={home} alt="home" />
        </Link>
        <h1 className="website">
          <img src={logo} alt="logo" className="logo2" />
          <div> Learning Curve </div>
        </h1>
        <Link to="/covid" className="navLinkFont">
          <h3> COVID Resources </h3>
        </Link>
        <Link to="/studyplan" className="navLinkFont">
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
