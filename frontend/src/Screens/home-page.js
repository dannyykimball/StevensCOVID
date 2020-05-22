import React from "react";
import "./home-page.css";
import computerSocial from "../Assets/computerSocial.png";
import tasks from "../Assets/tasks.png";
import team from "../Assets/team.png";
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
  const GL = (
    <div>
      We are a group of students at Stevens Institute of Technology working to
      diminish the educational deficit that has resulted from the coronavirus
      pandemic. We have designed an interactive platform for students to
      supplement and enrich their education. We also provide a social platform
      for students to interact with their friends and tutors to improve the lack
      of social interaction resulting from the pandemic. We also provide
      encouragement and resources for students to pursue extracurricular
      activities to allow them to express themselves in a fun and creative
      manner.
    </div>
  );
  return (
    <div id="HomePage" className="home">
      <div className="section">
        <div className="leftCol">
          <div className="learnerstitle">
            Flatten <br />
            the <br />
            Curve
          </div>
          <div className="learners">
            (But not the learning curve!) <br />
          </div>
        </div>
        <div className="rightCol">
          <img src={computerSocial} alt="computerSocial" className="imgaa" />
        </div>
      </div>
      <div className="banner yellow">Mission Statement</div>

      <div className="section2">
        <div className="leftCol2">
          <img src={tasks} alt="tasks" className="img" />
        </div>
        <div className="rightCol learners">
          {MS}
          <br />
          {JL}
          <br />
        </div>
      </div>
      <div className="banner2 yellow">
        <img src={team} alt="team" className="team" />
      </div>

      <div className="us learners">
        <br />
        <br />
        {GL}
      </div>
    </div>
  );
}
