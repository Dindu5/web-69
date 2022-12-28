import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  nav,
  nav_logo,
  nav_links,
  nav_links_active,
} from "./index.module.scss";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";

const Navigation = () => {
  return (
    <nav className={nav}>
      <StaticImage
        className={nav_logo}
        src="../../assets/images/web-69-logo.svg"
        placeholder="blurred"
        alt="Logo"
      />
      <div className={nav_links}>
        <Link to="/" activeClassName={nav_links_active}>
          Home
        </Link>
        <Link to="/about" activeClassName={nav_links_active}>
          About
        </Link>
        <Link to="/blog" activeClassName={nav_links_active}>
          Blog
        </Link>
        <AnchorLink to="/#testimonial" activeClassName={nav_links_active}>
          Testimonials
        </AnchorLink>
      </div>
      <button className="btn btn-primary btn-lg">work with us</button>
    </nav>
  );
};

export default Navigation;
