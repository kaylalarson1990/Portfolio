import React from "react";
import HPHomepage from "./images/HPHomepage.png";
import MovieTracker from "./images/MovieTracker.png";
import LightSide from "./images/LightSide.png";
import Jeopardy from "./images/Jeopardy.png";

const Work = () => {
  return (
    <section className="grid-container">
      <article className="location-listing">
        <a
          className="location-title"
          href="https://github.com/kaylalarson1990/Magic_Harry"
          target="blank"
        >
          <article>
            <h2>Magic Harry</h2>
            <ul>
              <li>React/Redux</li>
              <li>Jest/Enzyme</li>
            </ul>
            <a
              href="https://github.com/kaylalarson1990/Magic_Harry"
              target="blank"
            >
              <button className="github">Click to view github repo.</button>
            </a>
          </article>
        </a>
        <img
          src={HPHomepage}
          alt="harry potter project"
          className="project-img"
        />
      </article>
      <article className="location-listing">
        <a
          className="location-title"
          href="https://github.com/kaylalarson1990/movie-tracker"
          target="blank"
        >
          <article>
            <h2>Movie Tracker</h2>
            <ul>
              <li>React/Redux</li>
              <li>Jest/Enzyme</li>
            </ul>
            <a
              href="https://github.com/kaylalarson1990/movie-tracker"
              target="blank"
            >
              <button className="github">Click to view github repo.</button>
            </a>
          </article>
        </a>
        <img
          src={MovieTracker}
          alt="movie tracker project"
          className="project-img"
        />
      </article>
      <article className="location-listing">
        <a
          className="location-title"
          href="https://github.com/kaylalarson1990/LightSide"
          target="blank"
        >
          <article>
            <h2>Light Side</h2>
            <ul>
              <li>React</li>
              <li>Jest/Enzyme</li>
            </ul>
            <a
              href="https://github.com/kaylalarson1990/LightSide"
              target="blank"
            >
              <button className="github">Click to view github repo.</button>
            </a>
          </article>
        </a>
        <img src={LightSide} alt="ligh side project" className="project-img" />
      </article>
      <article className="location-listing">
        <a
          className="location-title"
          href="https://github.com/kaylalarson1990/Jeopardy"
          target="blank"
        >
          <article>
            <h2>Jeopardy</h2>
            <ul>
              <li>Javascript/Jquery</li>
              <li>Mocha/Chai</li>
            </ul>
            <a
              href="https://github.com/kaylalarson1990/Jeopardy"
              target="blank"
            >
              <button className="github">Click to view github repo.</button>
            </a>
          </article>
        </a>
        <img src={Jeopardy} alt="jeopardy project" className="project-img" />
      </article>
    </section>
  );
};

export default Work;
