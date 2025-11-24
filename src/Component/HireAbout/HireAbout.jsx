import React from "react";
import "./HireAbout.css";

const HireAbout = () => (
  <div className="hire-bg">
  <section className="hire-about">
    <div className="hireabout-header">
      <h2>Why Hire Developers From Our Name</h2>
      <div className="hireabout-subtext">
        Lorem ipsum is simply dummy text of the Printing And Typesetting Industry. Lorem Ipsum has been the industry's standard dummy text ever since.
      </div>
      <div className="hireabout-subsub">The industry's standard dummy text ever since</div>
    </div>

    <div className="hireabout-main">
      <div className="hireabout-col-left">
        <img src="src\assets\obj_1.png" alt="Developer" className="hireabout-img1" />
        <div className="hireabout-list-block">
          <div className="hireabout-title">Rigorous Vetting</div>
          <ul className="hireabout-list">
            <li>
              <img src="src\assets\Green TIck.png" alt="Green Tick" className="hire-tick"/>
              <div>
                <span className="hire-label">5+ hours of tests and interviews</span>
                <div className="hire-desc">Hire the Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.</div>
              </div>
            </li>
            <li>
              <img src="src\assets\Red TIck.png" alt="Pink Tick" className="hire-tick-pink"/>
              <div>
                <span className="hire-label">Seniority tests</span>
                <div className="hire-desc">Hire the Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="hireabout-col-right">
        <div className="hireabout-title vetting">High Quality/Cost Ratio</div>
        <ul className="hireabout-list">
          <li>
            <img src="src\assets\Green TIck.png" alt="Green Tick" className="hire-tick"/>
            <div>
              <span className="hire-label">Hire Silicon Valley Caliber At Half The Cost</span>
              <div className="hire-desc">Hire the Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.</div>
            </div>
          </li>
          <li>
            <img src="src\assets\Red TIck.png" alt="Pink Tick" className="hire-tick-pink"/>
            <div>
              <span className="hire-label">100+ Skills Available</span>
              <div className="hire-desc">Hire the Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.</div>
            </div>
          </li>
        </ul>
        <img src="src\assets\obj_2.png" alt="Coding Desk" className="hireabout-img2" />
      </div>
    </div>
  </section>
  </div>
);

export default HireAbout;
