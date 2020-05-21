import React from "react";
import "./colors.css";
import "./format.css";
import "./fonts.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Screens
import Home from "./Screens/home-page.js";
import Entry from "./Screens/entry-page.js";
import Error from "./Screens/error-page.js";
import Sessions from "./Screens/sessions-page";
import Covid from "./Screens/covid-page";
import Studyplan from "./Screens/studyplan-page";
//Components
import NavBar from "./Components/navigation-bar.component.js";

export default function AppEngine() {
  return (
    <Router>
      <div id="App">
        {/* Navigation Bar */}
        <NavBar />

        {/* Screens */}
        <div id="CurrentScreen" class="CurrentScreen turquoise">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/covid" exact component={Covid} />
            <Route path="/studyplan" exact component={Studyplan} />
            <Route path="/entry" exact component={Entry} />
            <Route path="/sessions" exact component={Sessions} />
            <Route path="*" component={Error} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
