import React, { useState } from "react";
import "./HiringProcess.css";

const stepsData = [
  {
    title: "INQUIRY",
    icon: "/images/img-1.png",
    desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    detail: "Start by contacting us with your requirements. Our team will quickly reach out to discuss your needs and plan the next steps."
  },
  {
    title: "SELECT DEVELOPERS",
    icon: "public/images/img- 2.png",
    desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    detail: "Browse our talent pool or have specialists recommend developers matched to your project and skills needs."
  },
  {
    title: "TEAM INTEGRATION",
    icon: "/images/img- 3.png",
    desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    detail: "Integrate chosen developers into your team with streamlined onboarding and communication tools."
  },
  {
    title: "TEAM SCALING",
    icon: "/images/img- 4.png",
    desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    detail: "Scale your team as your needs evolve, maintaining flexibility and productivity."
  },
];

const ArrowSVG = () => (
  <span className="step-arrow">
    <svg width="36" height="36" viewBox="0 0 28 28" fill="none">
      <path d="M7 14H21M21 14L15.6667 8.66667M21 14L15.6667 19.3333" stroke="#233A41" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
);

const HiringProcess = () => {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div className="hiringprocess-bg">
      <section className="hiringprocess-section">
        <h2 className="hiringprocess-title">Our Hiring Process</h2>
        <p className="hiringprocess-sub">
          Take a look at our simple and straightforward process to hire software developers from ValueCoders.
        </p>
        <div className="hiringprocess-steps">
          {stepsData.map((step, idx) => (
            <React.Fragment key={step.title}>
              <div
                className={`step-card${activeStep === idx ? " active" : ""}`}
                tabIndex={0}
                onClick={() => setActiveStep(activeStep === idx ? null : idx)}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') setActiveStep(activeStep === idx ? null : idx);
                }}
              >
                <div className={`step-card-circle circle-color-${idx + 1}`}>
                  <img src={step.icon} alt={step.title + " icon"} className="step-card-img" />
                  <span className="step-card-num">{idx + 1}</span>
                </div>
                <div className="step-card-info">
                  <div className="step-card-title">{step.title}</div>
                  <div className="step-card-desc">{step.desc}</div>
                </div>
              </div>
              {idx < stepsData.length - 1 && <ArrowSVG />}
            </React.Fragment>
          ))}
        </div>
        {activeStep !== null && (
          <div className="step-card-detail">
            <h3>{stepsData[activeStep].title}</h3>
            <p>{stepsData[activeStep].detail}</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default HiringProcess;
