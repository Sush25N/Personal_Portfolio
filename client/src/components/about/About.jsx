import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import {FaAward} from "react-icons/fa";
import {AiFillFolderOpen} from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5+ Years Working</small>
            </article>

            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>
          <p>
            👋 Hi there! I'm a passionate and determined beginner MERN stack
            developer, eager to create amazing web applications and contribute
            to the world of software development. As a beginner, I believe in
            the power of continuous learning. I'm always seeking out new
            opportunities to expand my knowledge and improve my skills.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
