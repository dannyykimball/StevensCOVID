import React from "react";
import tydoc from "../Assets/tydoc.png";
import JHU from "../Assets/JHU.png";
import CDC from "../Assets/CDCLogo.png";
import WHO from "../Assets/WHOLogo.png";
import WMD from "../Assets/Webgo.png";
import CLD from "../Assets/Childlogo.png";
import "./covid-page.css";

export default function CovidEngine() {
  return (
    <div id="EntryPage" className="yeah">
      <div className="rightC">
        <div>
          <h1>COVID-19 Resources</h1>
        </div>
        <h3>John Hopkins Coronavirus Map</h3>
        <a href="https://coronavirus.jhu.edu/us-map ">
          <img src={JHU} alt="JHU" className="mydog" />
        </a>
        <div>
          Here’s a quick <a href="https://coronavirus.jhu.edu/us-map ">map</a>{" "}
          to track the COVID-19 cases across the country and the world!
        </div>
        <br />
        <h3>WHO</h3>
        <div>Keep all your facts in check with WHO’s Mythbusters!</div>
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters">
          <img src={WHO} alt="JHU" className="mydog" />
        </a>

        <h3>WebMD Symptom Tracker</h3>
        <div>
          Not sure what your symptoms mean? Check out the Symptom Tracker by
          WebMD!
        </div>
        <a href="https://symptoms.webmd.com/default.htm ">
          <img src={WMD} alt="JHU" className="mydog" />
        </a>
      </div>
      <div className="rightL">
        <h3>CDC</h3>
        <div>Stay updated with the latest news from CDC!</div>
        <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html ">
          <img src={CDC} alt="JHU" className="mydog" />
        </a>
        <h3>Childlife </h3>
        <div>
          Staying home all-day can be boring! Check out these activities you can
          do at home with your families!
        </div>
        <a href="https://www.childlife.org/docs/default-source/covid-19/msav_general-hospital_or-schedulers-may-breakfast_flyer_8-5x11.pdf?sfvrsn=4f008a4d_2">
          <img src={CLD} alt="JHU" className="mydog" />
        </a>
      </div>
    </div>
  );
}
