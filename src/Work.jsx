import React from "react";
import HPHomepage from "./images/HPHomepage.png";
import MovieTracker from "./images/MovieTracker.png";
import LightSide from "./images/LightSide.png";
import Jeopardy from "./images/Jeopardy.png";

const Work = () => {
  return (
    <section>
      <h2>work</h2>
      <article>
      <div className="container">
        <img
          src={HPHomepage}
          alt="harry potter project"
          className="projects image"
        />
        <div className="overlay">
          <p className="text">MAGIC HARRY</p>
        </div>
      </div>
      <div className="container">
        <img
          src={MovieTracker}
          alt="movie tracker project"
          className="projects image"
        />
        <div className="overlay">
          <p className="text">MOVIE TRACKER</p>
        </div>
      </div>
      <div className="container">
        <img
          src={LightSide}
          alt="light side project"
          className="projects image"
        />
        <div className="overlay">
          <p className="text">LIGHT SIDE</p>
        </div>
      </div>
      <div className="container">
        <img
          src={Jeopardy}
          alt="jeopardy project"
          className="projects image"
        />
        <div className="overlay">
          <p className="text">JEOPARDY</p>
        </div>
      </div>
      </article>
    </section>
  );
};

export default Work;
