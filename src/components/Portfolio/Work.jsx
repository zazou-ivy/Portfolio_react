import React from "react";
import "./work.css";
import Works from "./Works";

const Work = () => {
  return (
    <section class="work section" id="portfolio">
      <h2 class="section__title retro__style">My projects</h2>
      <span class="section__subtitle">Discover the projects I've worked on : </span>

      <Works />
    </section>
  );
};

export default Work;
