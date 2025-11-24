import React, { useState } from "react";
import "./TechnologyComp.css";

// Update icon filenames as per your exports—these should be in public/images/
const techData = [
  {
    title: "Backend Development",
    icon: "/images/web-settings 1.png",
    bg: "blue",
    skills: [".NET", "C/C++", "DJANGO", "Firebase", "GOLANG"],
    secondRow: ["SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON"],
    thirdRow: ["RUBY ON RAILS", "JAVA"],
  },
  {
    title: "Frontend Development",
    icon: "/images/web-settings 2.png",
    bg: "yellow",
    skills: [".NET", "C/C++", "DJANGO", "Firebase", "GOLANG"],
    secondRow: ["SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON"],
    thirdRow: ["RUBY ON RAILS", "JAVA"],
  },
  {
    title: "Mobile Development",
    icon: "/images/web-settings 3.png",
    bg: "pink",
    skills: [".NET", "C/C++", "DJANGO", "Firebase", "GOLANG"],
    secondRow: ["SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON"],
    thirdRow: ["RUBY ON RAILS", "JAVA"],
  },
  {
    title: "Blockchain, AI/ML",
    icon: "/images/web-settings 4.png",
    bg: "lightblue",
    skills: [".NET", "C/C++", "DJANGO", "Firebase", "GOLANG"],
    secondRow: ["SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON"],
    thirdRow: ["RUBY ON RAILS", "JAVA"],
  },
  {
    title: "DevOps & Low-Code",
    icon: "/images/web-settings 5.png",
    bg: "lightyellow",
    skills: [".NET", "C/C++", "DJANGO", "Firebase", "GOLANG"],
    secondRow: ["SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON"],
    thirdRow: ["RUBY ON RAILS", "JAVA"],
  },
  {
    title: "E-commerce & CMS",
    icon: "/images/web-settings 6.png",
    bg: "lightpink",
    skills: [".NET", "C/C++", "DJANGO", "Firebase", "GOLANG"],
    secondRow: ["SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON"],
    thirdRow: ["RUBY ON RAILS", "JAVA"],
  },
];

const TechnologyComp = () => {
  const [hovered, setHovered] = useState(null);

  return (
      <div className="techgrid-bg-gradient">
    <section className="techgrid-section">
      <h2 className="techgrid-title">Our Diverse Technology Competency</h2>
      <div className="techgrid-sub">
        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since
      </div>
      <div className="techgrid-subsub">
        The Industry's Standard Dummy Text Ever Since
      </div>
      
      <div className="techgrid-cards">
        {techData.map((card, i) => (
          <div
            key={i}
            className={`techgrid-card techgrid-${card.bg} ${hovered === i ? "hovered" : ""}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="techgrid-icon">
              <img src={card.icon} alt={card.title} />
            </div>
            <div className="techgrid-head">{card.title}</div>
            <div className="techgrid-row">{card.skills.join("  |  ")}</div>
            <div className="techgrid-row">{card.secondRow.join("  |  ")}</div>
            <div className="techgrid-row">{card.thirdRow.join("  |  ")}</div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default TechnologyComp;
