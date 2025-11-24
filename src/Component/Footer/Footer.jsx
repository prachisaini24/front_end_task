import React from "react";
import "./Footer.css";

// Example scroll to section handler
const handleSoftwareTeamClick = () => {
  const teamSection = document.getElementById("team-section");
  if (teamSection) {
    teamSection.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-main-row">
        <div className="footer-col-logo">
          <div className="footer-logo-row">
            {/* Replace with your SVG */}
            <span className="footer-logo-circle">
              <i className="fa-solid fa-bolt"></i>
            </span>
            <span className="footer-logo-text">Logoipsum</span>
          </div>
          <div className="footer-logo-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          </div>
          <div className="footer-social-row">
            <a href="#" className="footer-social"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="footer-social"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className="footer-social"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#" className="footer-social"><i className="fa-brands fa-dribbble"></i></a>
          </div>
        </div>
        <div className="footer-col-list">
          <div className="footer-title">Quick Links</div>
          <a href="#!" className="footer-link" onClick={handleSoftwareTeamClick}>Software Team</a>
          <a href="#!" className="footer-link">Technologies</a>
          <a href="#!" className="footer-link">Resources</a>
          <a href="#!" className="footer-link">Company</a>
          <a href="#!" className="footer-link">Contact us</a>
          <a href="#!" className="footer-link">FAQ</a>
        </div>
        <div className="footer-col-list">
          <div className="footer-title">Services</div>
          <a href="#!" className="footer-link">Dedicated Development</a>
          <a href="#!" className="footer-link">Staff Augmentation Services</a>
          <a href="#!" className="footer-link">Software Development</a>
          <a href="#!" className="footer-link">Development Center</a>
        </div>
        <div className="footer-col-contact">
          <div className="footer-title">Contact Us</div>
          <div className="footer-contact-row">
            <i className="fa-solid fa-location-dot footer-icon-green"></i>
            <span>Envato, Level 13, 2 Elizabeth Victoria 3000 India</span>
          </div>
          <div className="footer-contact-row">
            <i className="fa-solid fa-phone footer-icon-green"></i>
            <span>+91 891 944 1176</span>
          </div>
          <div className="footer-contact-row">
            <i className="fa-solid fa-envelope footer-icon-green"></i>
            <span>exyogee@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom-row">
        logoname. 2023. All rights reserved
      </div>
    </footer>
  );
}
