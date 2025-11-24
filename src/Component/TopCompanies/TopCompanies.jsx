import React, { useState } from "react";
import "./TopCompanies.css";

// Place your illustration as public/images/topcompanies-illustration.png
const illustration = "/images/Code typing.png";

const features = [
  "Client-Centric Approach",
  "Global Quality Standards",
  "Cutting-Edge Infrastructure",
  "Best-in-Class Project Management",
  "Time-Zone Compatibility",
  "Agile Adaptability",
];

const featureDetails = [
  "We prioritize your business goals and user needs.",
  "Projects adhere to global benchmarks for excellence.",
  "Work with advanced systems and secure environments.",
  "Industry-leading PM strategies for on-time results.",
  "Developers align work hours with global clients.",
  "Easily scale, update, and adapt your team as needs change.",
];

const TopCompanies = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="topcompanies-bg-gradient">
    <section className="topcompanies-section">
      <div className="topcompanies-content">
        <div className="topcompanies-illustration">
          <img src={illustration} alt="Laptop code illustration" />
        </div>
        <div className="topcompanies-main">
          <h2 className="topcompanies-title">
            Top Companies Trust ValueCoders<br />For Hiring Software Developers
          </h2>
          <p className="topcompanies-body">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="topcompanies-features">
            {features.map((txt, i) => (
              <div
                key={txt}
                className={`feature-item${selected === i ? " active" : ""}`}
                tabIndex={0}
                onClick={() => setSelected(selected === i ? null : i)}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') setSelected(selected === i ? null : i);
                }}
              >
                <span className="feature-check">
                  <svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#37c590"/><polyline points="7 13 11 16.5 17 9.5" stroke="#fff" strokeWidth="2" fill="none"/></svg>
                </span>
                <span className="feature-title">{txt}</span>
              </div>
            ))}
          </div>
          {selected !== null && (
            <div className="topcompanies-detail">
              <h4>{features[selected]}</h4>
              <p>{featureDetails[selected]}</p>
            </div>
          )}
        </div>
      </div>
    </section>
     </div>
  );
};

export default TopCompanies;
