import React from "react";
import "./home-page.css";
import computerSocial from "../Assets/computerSocial.png";
import tasks from "../Assets/tasks.png";
export default function HomeEngine() {
  const JL = (
    <div>
      We provide students with an instant learning option through our instant
      tutoring option. This way, students can get the help they need right away.{" "}
      <br /> Moreover, we allow students to do work with their friends to
      encourage social participation.{" "}
    </div>
  );
  const MS = (
    <div>
      Our goal is to provide K-12 students with an enriching extracurricular
      education to help supplement the educational and social deficit that has
      resulted from the COVID-19 pandemic.
    </div>
  );
  return (
    <div id="HomePage" className="home">
      <div className="section">
        <div className="leftCol">
          <div className="learners">{JL}</div>
        </div>
        <div className="rightCol">
          <img src={computerSocial} alt="computerSocial" className="img" />
        </div>
      </div>
      <div className="banner yellow">Mission Statement</div>

      <div className="section">
        <div className="leftCol">
          <img src={tasks} alt="tasks" className="img" />
        </div>
        <div className="rightCol learners">{MS}</div>
      </div>
    </div>
  );
}
