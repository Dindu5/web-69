import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  services,
  services_box,
  services_title,
  services_desc,
  services_button,
  services_box_writing,
  services_box_images,
  services_box_ui,
  services_box_frontend,
  services_box_cms,
  services_box_web3,
  services_box_backend,
} from "./index.module.scss";

const Services = () => {
  return (
    <div className={services}>
      <div className="chip chip-primary">
        <StaticImage
          src="../../../assets/images/icon-rocket.svg"
          placeholder="blurred"
          alt="Rocket"
        />
        <p>Services</p>
      </div>
      <h2>
        Get ready for the <span className="col-primary">virtual</span> wallet
        for <span className="col-secondary"> seamless</span> electronic
        payments.
      </h2>
      <div className={services_box}>
        <div className={services_box_writing}>
          <div>
            <h6 className={services_title}>Technical Writing</h6>
            <p className={services_desc}>
              Create with images only Unsplash+ subscribers have access to. New
              images added every month.
            </p>
            <button className={services_button}>View Works</button>
          </div>
          <StaticImage
            className={services_box_images}
            src="../../../assets/images/technical-writing.png"
            placeholder="blurred"
            alt="Technical Writing"
          />
        </div>
        <div className={services_box_ui}>
          <div>
            <h6 className={services_title}>UI UX/Product Design</h6>
            <p className={services_desc}>
              No download limits. Use as many images as many times as you want.
            </p>
            <button className={services_button}>View Works</button>
          </div>
          <StaticImage
            className={services_box_images}
            src="../../../assets/images/design.png"
            placeholder="blurred"
            alt="Product Design"
          />
        </div>
        <div className={services_box_frontend}>
          <div>
            <h6 className={services_title}>Frontend Development</h6>
            <p className={services_desc}>
              No download limits. Use as many images as many times as you want.
            </p>
            <button className={services_button}>View Works</button>
          </div>
          <StaticImage
            className={services_box_images}
            src="../../../assets/images/javascript-snippet.png"
            placeholder="blurred"
            alt="Front-End Development"
          />
        </div>
        <div className={services_box_backend}>
          <div>
            <h6 className={services_title}>Backend Development</h6>
            <p className={services_desc}>
              Create with images only Unsplash+ subscribers have access to. New
              images added every month.
            </p>
            <button className={services_button}>View Works</button>
          </div>
          <StaticImage
            className={services_box_images}
            src="../../../assets/images/node-snippet.png"
            placeholder="blurred"
            alt="Back-End Development"
          />
        </div>
        <div className={services_box_web3}>
          <div>
            <h6 className={services_title}>Web3 Development</h6>
            <p className={services_desc}>
              No download limits. Use as many images as many times as you want.
            </p>
            <button className={services_button}>View Works</button>
          </div>
          <StaticImage
            className={services_box_images}
            src="../../../assets/images/solidity-snippet.png"
            placeholder="blurred"
            alt="Front-End Development"
          />
        </div>
        <div className={services_box_cms}>
          <div>
            <h6 className={services_title}>CMS Development</h6>
            <p className={services_desc}>
              All Unsplash+ images are model and property released for use in
              any commercial project and are backed by Unsplash+ Protection.
            </p>
            <button className={services_button}>View Works</button>
          </div>
          <StaticImage
            className={services_box_images}
            src="../../../assets/images/javascript-snippet.png"
            placeholder="blurred"
            alt="Product Design"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
