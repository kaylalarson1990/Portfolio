import React from "react";
import green from "./images/green-power.png";

const HomePage = () => {
  return (
    <section className="home">
      <h1>Hi! I'm Kay</h1>
      <img src={green} alt="green power icon" className="green-power-icon" />
      <p className="homepage-text">
        An adventurous front end dev who focuses on writing clean & efficient
        code.
      </p>
    </section>
  );
};

export default HomePage;
