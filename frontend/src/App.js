import React from "react";
import "./colors.css";
import "./format.css";
import "./fonts.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Screens
import Home from "./Screens/home-page.js";
import Entry from "./Screens/entry-page.js";
import Error from "./Screens/error-page.js";

//Components
import NavBar from "./Components/navigation-bar.component.js";

export default function AppEngine() {
  return (
    <Router>
      <div id="App">
        {/* Navigation Bar */}
        <NavBar />

        {/* Screens */}
        <div id="CurrentScreen" class="CurrentScreen">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/entry" exact component={Entry} />
            <Route path="*" component={Error} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
