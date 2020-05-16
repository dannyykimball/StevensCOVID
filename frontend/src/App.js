import React from "react";
import "./colors.css";
import "./format.css";
import "./fonts.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Screens
import Home from "./Screens/HomePage/home-page.js";
import Error from "./Screens/ErrorPage/error-page.js";

export default function AppEngine() {
  return (
    <Router>
      <div id="App">
        {/* Screens */}
        <div id="CurrentScreen">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="*" component={Error} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
