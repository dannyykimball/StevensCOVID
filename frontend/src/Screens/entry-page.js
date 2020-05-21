import React from "react";

import Register from "../Components/register.component";
import Login from "../Components/login.component";
import signin from "../Assets/signin.png";
import "./entry-page.css";

export default function EntryEngine() {
  return (
    <div id="EntryPage" className="section">
      <div className="left">
        <Register />
        <Login />
      </div>
      <div className="right">
        <img src={signin} alt="signin" className="img" />
      </div>
    </div>
  );
}
