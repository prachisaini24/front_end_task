import React from 'react';
import './Banner.css';

const Banner = () => (
  <section className="banner">
    <div className="left">
      {/* <span className="banner-size">1440 x 84</span> */}
      <h2 className='Hire'>HIRE DEDICATED</h2> 
      <h2 className='Developers'><span>DEVELOPERS</span></h2>
      <p className='Paragraph'>Top 1% Pre-Vetted, In-House &amp; Dedicated Software Programmers.</p>
      <div className="Content">
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
      </div>


      <div className="buttons">
        <button className="view-more">View More</button>
        <button className="get-in-touch">Get in Touch
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </button>
      </div>
    </div>

    {/* right form  */}

     <div className="banner-form-container">
    <form className="banner-form">
      <h2>Create Your Team</h2>
      <div className="sub-text">
        Lorem Ipsum is simply dummy text of the printing
      </div>
      <div className="form-flex-row">
        <div className="form-field">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter You Name" />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email Address</label>
          <input type="text" id="email" placeholder="Enter You Email" />
        </div>
      </div>
      <div className="form-flex-row">
        <div className="form-field">
          <label htmlFor="phone">Phone No</label>
          <input type="text" id="phone" placeholder="Enter You Number" />
        </div>
        <div className="form-field">
          <label htmlFor="country">Country</label>
          <input type="text" id="country" placeholder="Enter You Country" />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="project">Project Brief</label>
        <textarea id="project" placeholder="Enter You Project Brief"></textarea>
      </div>
      <button type="submit" className="submit-btn">
        Hire Software Developer <span className="arrow">↗</span>
      </button>
    </form>
  </div>
  </section>
);

export default Banner;
