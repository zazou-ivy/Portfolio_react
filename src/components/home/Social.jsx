import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/leazaoui/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
         href="tel:+33681694539"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-phone"></i>
      </a>

      <a
         href="mailto:lea.myriam.zaoui@gmail.com"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-envelope"></i>
      </a>

      <a
        href="https://github.com/zazou-ivy"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
