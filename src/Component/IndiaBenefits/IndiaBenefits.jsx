import React, { useState } from "react";
import "./IndiaBenefits.css";

const bgImg = "public/images/IndiaBenefits-bg.png";  // Place this image in public/images/

const benefits = [
  {
    title: "English Speaking Programmers",
    content: (
      <div>
        <h3>English Speaking Programmers</h3>
        <p>
          Developers in India are highly proficient in English, ensuring smooth communication and efficient collaboration with international teams. You benefit from clear project requirements, feedback cycles, and reduced miscommunication risk.
        </p>
      </div>
    ),
  },
  {
    title: "Flexible Work Hours",
    content: (
      <div>
        <h3>Flexible Work Hours</h3>
        <p>
          Indian talent is adaptable to various time zones and offers flexible scheduling, allowing you to manage projects globally with ease.
        </p>
      </div>
    ),
  },
  {
    title: "Rapid Onboarding Process",
    content: (
      <div>
        <h3>Rapid Onboarding Process</h3>
        <p>
          Benefit from a streamlined onboarding system with established procedures, helping new hires quickly integrate and become productive.
        </p>
      </div>
    ),
  },
  {
    title: "Expertise In Top Technologies",
    content: (
      <div>
        <h3>Expertise In Top Technologies</h3>
        <p>
          Indian developers bring skills in latest technologies, frameworks, and methodologies, covering both legacy and cutting-edge stacks.
        </p>
      </div>
    ),
  },
  {
    title: "Reliable Partner Credentials",
    content: (
      <div>
        <h3>Reliable Partner Credentials</h3>
        <p>
          India’s tech service companies have long-standing reputations for reliability, security, and successful delivery of international projects.
        </p>
      </div>
    ),
  },
];

const IndiaBenefits = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="indiabenefits-bg">
      <div className="indiabenefits-content">
        <div className="indiabenefits-left">
          <img src = {bgImg} alt="India benefit illustration" className="indiabenefits-img" />
          <h2 className="indiabenefits-title">
            Why Hire Software Developers<br/>In India?
          </h2>
        </div>
        <div className="indiabenefits-right">
          <ul className="indiabenefits-list">
            {benefits.map((b, idx) => (
              <li
                key={b.title}
                className={`indiabenefits-list-item${selected === idx ? " active" : ""}`}
                tabIndex={0}
                onClick={() => setSelected(selected === idx ? null : idx)}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') setSelected(selected === idx ? null : idx);
                }}
              >
                <span className="indiabenefits-benefit-text">{b.title}</span>
                <span className="indiabenefits-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M8 18L16 10M16 10H9M16 10V17" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </li>
            ))}
          </ul>
          {selected !== null && (
            <div className="indiabenefits-detail-box">
              {benefits[selected].content}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IndiaBenefits;
