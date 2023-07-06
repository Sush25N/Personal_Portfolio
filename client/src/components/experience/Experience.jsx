import React from "react";
import "./experience.css";
import {BiSolidMessageSquareCheck} from "react-icons/bi";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {/* Frontend Starts */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BiSolidMessageSquareCheck />
              <h4>HTML5</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BiSolidMessageSquareCheck />
              <h4>CSS3</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="experience__details">
              <BiSolidMessageSquareCheck />
              <h4>BootStrap</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="experience__details">
              <BiSolidMessageSquareCheck />
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BiSolidMessageSquareCheck />
              <h4>React JS</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>

        {/* Backend Starts */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BiSolidMessageSquareCheck />
              <h4>Node JS</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="experience__details">
              <BiSolidMessageSquareCheck />
              <h4>Mongo DB</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
