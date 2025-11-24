import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <nav className="navbar">
      <div className="logo">
        <img src="src\assets\logo.png" alt="logo" className="logoImage" />
         <p className="logoText">Logoipsum</p>
        </div>
      <ul className="nav-menu">
        
        <li>Software Team</li>
        <li>Services</li>
        <li>Technologies</li>
        <li>Resources</li>
        <li>Company</li>
      </ul>
      <button className="get-in-touch">Get in Touch
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </button>
    </nav>
  </header>
);

export default Header;


