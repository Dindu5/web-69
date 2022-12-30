import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  nav,
  nav_logo,
  nav_links,
  nav_links_open,
  nav_links_active,
  nav_links_btn_link,
  nav_links_btn,
  nav_links_btn_menu,
  nav_links_btn_menu_open,
} from "./index.module.scss";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={nav}>
      <StaticImage
        className={nav_logo}
        src="../../assets/images/web-69-logo.svg"
        placeholder="blurred"
        alt="Logo"
      />
      <div className={`${nav_links} ${menuOpen ? nav_links_open : ""}`}>
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
        <button className={`btn btn-primary btn-lg ${nav_links_btn_link}`}>
          work with us
        </button>
      </div>
      <button className={`btn btn-primary btn-lg ${nav_links_btn}`}>
        work with us
      </button>
      <button
        className={`${nav_links_btn_menu} ${
          menuOpen ? nav_links_btn_menu_open : ""
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div></div>
      </button>
    </nav>
  );
};

export default Navigation;
