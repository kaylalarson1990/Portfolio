import React from "react";
import aboutme from "./images/aboutme.jpg";
import linkedin from "./images/001-linkedin.png";
import github from "./images/003-github.png";
import twitter from "./images/002-twitter.png";

const About = () => {
  return (
    <>
      <h2>about</h2>
      <section className="about-me-img-grid">
        <article className="img">
          <img
            src={aboutme}
            alt="hiking in colorado"
            className="about-me-img"
          />
        </article>
      </section>
      <section className="about-me-text-grid">
        <article className="aboutme-text" id="text-article">
          <h3>
            Mission driven front end web developer based in Denver, Colorado.
          </h3>
          <p>
            As a developer, I enjoy using my thorough communication skills, my
            strong passion for continous learning, and my unrelenting drive to
            help others. I have a vast proficiency in problem solving and a
            curious mind to help guide and motivate me.
            <p>
              When I'm not coding, you'll find me biking, climbing in the trees
              or having a beer in one of Denvers finest breweries.
            </p>
          </p>
          <p className="cv">CV available upon request.</p>
        </article>
      </section>
      <section className="about-me-sm-grid">
        <article className="social-media" id="footer">
          <a href="https://www.linkedin.com/in/kaylalarson4/" target="blank">
            <img src={linkedin} alt="linkedin" className="linkedin icon" />
          </a>
          <a href="https://github.com/kaylalarson1990" target="blank">
            <img src={github} alt="github" className="github icon" />
          </a>
          <a href="https://twitter.com/Kay60372608" target="blank">
            <img src={twitter} alt="twitter" className="twitter icon" />
          </a>
        </article>
      </section>
    </>
  );
};

export default About;
