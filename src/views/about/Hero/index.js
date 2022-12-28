import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  about_hero,
  about_hero_paper,
  about_hero_puzzle,
  about_hero_globe,
  about_hero_monitor,
} from "./index.module.scss";

const AboutHero = () => {
  return (
    <div className={about_hero}>
      <div>
        <h1>
          Beyond the <span className="col-secondary">artboards</span>
        </h1>
        <p>
          We believe in seamless collaboration, being recognized for all your
          work, and the magic that happens when everyone is actually on the same
          page.
        </p>
      </div>

      <StaticImage
        className={about_hero_paper}
        src="../../../assets/images/paper-deco.svg"
        placeholder="blurred"
        alt="Paper"
      />
      <StaticImage
        className={about_hero_puzzle}
        src="../../../assets/images/puzzle-deco.svg"
        placeholder="blurred"
        alt="Puzzle"
      />
      <StaticImage
        className={about_hero_globe}
        src="../../../assets/images/globe-deco.svg"
        placeholder="blurred"
        alt="globe-deco"
      />
      <StaticImage
        className={about_hero_monitor}
        src="../../../assets/images/monitor-deco.svg"
        placeholder="blurred"
        alt="monitor-deco"
      />
    </div>
  );
};

export default AboutHero;
