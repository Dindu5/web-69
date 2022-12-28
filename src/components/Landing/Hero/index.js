import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  hero,
  hero_btns,
  hero_deco_rocket,
  hero_deco_bulb,
  hero_deco_purple,
  hero_deco_success,
} from "./index.module.scss";

const Hero = () => {
  return (
    <div className={hero}>
      <div className="chip chip-primary">
        <StaticImage
          src="../../../assets/images/icon-rocket.svg"
          placeholder="blurred"
          alt="Rocket"
        />
        <p>Growing over one thousand businesses.</p>
      </div>
      <h1>
        Turn your <span className="col-primary">Platform</span> into something
        that <span className="col-secondary">Sticks</span>
      </h1>
      <h3>
        Digital agency that makes impactful digital products that leaves a
        lasting impression Digital agency that makes impactful digital products
        that leaves a lasting impression
      </h3>
      <div className={hero_btns}>
        <button className="btn btn-primary btn_xl">Get Started</button>
        <button className="btn btn-primary-text btn_xl">Contact Team</button>
      </div>
      <StaticImage
        className={hero_deco_rocket}
        src="../../../assets/images/rocket-deco.svg"
        placeholder="blurred"
        alt="Spining Rocket"
      />
      <StaticImage
        className={hero_deco_bulb}
        src="../../../assets/images/bulb-deco.svg"
        placeholder="blurred"
        alt="Light Bulb"
      />
      <StaticImage
        className={hero_deco_purple}
        src="../../../assets/images/ellipse-purple.svg"
        placeholder="blurred"
        alt="ellipse-purple"
      />
      <StaticImage
        className={hero_deco_success}
        src="../../../assets/images/ellipse-success.svg"
        placeholder="blurred"
        alt="ellipse-success"
      />
    </div>
  );
};

export default Hero;
