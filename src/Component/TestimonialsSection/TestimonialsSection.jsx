import React, { useState } from "react";
import "./TestimonialsSection.css";

const testimonials = [
  {
    img:"public/images/client 1.png",
    name: "Krish Bruynson",
    role: "Director, Starlofi",
    video: "https://example.com/video1.mp4",
    stars: 5
  },
  {
    img: "/images/client 2.png",
    name: "Krish Bruynson",
    role: "Director, Starlofi",
    video: "https://example.com/video2.mp4",
    stars: 5
  },
  {
    img: "/images/client 3.png",
    name: "Krish Bruynson",
    role: "Director, Starlofi",
    video: "https://example.com/video3.mp4",
    stars: 5
  },
  {
     img: "/images/client 4.png",
    name: "Krish Bruynson",
    role: "Director, Starlofi",
    video: "https://example.com/video4.mp4",
    stars: 5
  }
];

const TestimonialsSection = () => {
  const [playing, setPlaying] = useState(null);

  const handlePlay = idx => {
    setPlaying(idx);
    // Here you would open a modal/video player in real app; for now, just highlight
  };

  return (
    <div className="testimonials-gradient-bg">
      <section className="testimonials-section">
        <h2 className="testimonials-title">
          What Our Clients Have To Say About Us
        </h2>
        <div className="testimonials-caption">
          Take A Look At Our Simple And Straightforward Process To Hire Software
        </div>
        <div className="testimonials-cards">
          {testimonials.map((t, idx) => (
            <div key={idx} className={`testimonial-card${playing === idx ? " playing" : ""}`}>
                
              <div className="testimonial-img-box">
                <img src={t.img} alt={t.name} className="testimonial-img" />
                <button
                  className="testimonial-play"
                  onClick={() => handlePlay(idx)}
                  aria-label="Play video"
                >
                  <i className="fa-solid fa-play"></i>
                </button>
              </div>
              <div className="testimonial-desc">
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-role">{t.role}</div>
                <div className="testimonial-stars">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <i key={i} className="fa-solid fa-star star-green"></i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TestimonialsSection;
