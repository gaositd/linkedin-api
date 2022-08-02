import React from "react";

import logo from "../../../logo.svg";//./logo.svg
import "../../../App.css";
import ReactTooltip from "react-tooltip";

export const LandingPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          title="https://www.svgrepo.com/svg/138936/linkedin to download logo"
          id="logo"
        />
        <p>
          Click on the <code> link below</code> and search for your new JOB.
        </p>
        <a
          data-tip
          data-for="logo"
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          JOB Search
        </a>
          <ReactTooltip
            id="logo"
            type="info"
            effect='solid'
          >
            <span>Search your new job</span>
          </ReactTooltip>
      </header>
    </div>
  );
}