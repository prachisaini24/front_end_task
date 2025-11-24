import React, { useState } from "react";
import "./GuideSection.css";

const navItems = [
  "Benefits Of Hiring Developers",
  "Key Factors To Consider While Hiring",
  "Defining Your Project Requirements",
  "Choosing The Right Development Model",
  "Typical Challenges For Hiring Developers",
  "Hiring Freelancers Vs. Dedicated Developers",
  "Communication With Remote Developers",
];

const benefitItems = [
  "Client-Centric Approach",
  "Global Quality Standards",
  "Cutting-Edge Infrastructure",
  "Best-In-Class Project Management",
  "Time-Zone Compatibility",
  "Agile Adaptability",
];

const GuideSection = () => {
  const [selected, setSelected] = useState(1);

  return (
    <section className="guide-section-box">
      <h2 className="guide-section-title">
        User Guide To Hire Dedicated Software Developers
      </h2>
      <div className="guide-section-content">
        <nav className="guide-section-nav">
          <ul>
            {navItems.map((text, idx) => (
              <li
                key={text}
                className={selected === idx ? "active" : ""}
                onClick={() => setSelected(idx)}
                tabIndex={0}
                onKeyDown={e => { if (e.key === "Enter" || e.key === " ") setSelected(idx); }}
              >
                {text}
              </li>
            ))}
          </ul>
        </nav>
        <main className="guide-section-main">
          <div className="guide-main-title">Benefits Of Hiring Developers</div>
          <div className="guide-main-desc">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </div>
          <div className="guide-main-benefits">
            <div className="benefit-row-fontawesome">
              {benefitItems.map((text, i) => (
                <div className="benefit-col-fontawesome" key={i}>
                  <i className="fa-solid fa-circle-check benefit-fa-green" aria-hidden="true"></i>
                  <span className="benefit-text">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="guide-main-imgbox">
            <img src="/images/DevHelp.png" alt="developers" className="guide-main-img" />
          </div>
        </main>
      </div>
    </section>
  );
};

export default GuideSection;
