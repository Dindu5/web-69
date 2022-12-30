import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  footer,
  footer_icon,
  footer_links,
  footer_icon_container,
} from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={footer}>
      <h4>2022 @ web69</h4>
      <div className={footer_links}>
        <Link to="/about">About</Link>
        <Link to="/legal">Legal</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div className={footer_icon_container}>
        <StaticImage
          className={footer_icon}
          src="../../assets/images/icon-linkedin.svg"
          placeholder="blurred"
          alt="LinkedIn"
        />
        <StaticImage
          className={footer_icon}
          src="../../assets/images/icon-instagram.svg"
          placeholder="blurred"
          alt="Instagram"
        />
        <StaticImage
          className={footer_icon}
          src="../../assets/images/icon-facebook.svg"
          placeholder="blurred"
          alt="Facebook"
        />
        <StaticImage
          className={footer_icon}
          src="../../assets/images/icon-twitter.svg"
          placeholder="blurred"
          alt="Twitter"
        />
      </div>
    </footer>
  );
};

export default Footer;
