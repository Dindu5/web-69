import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  contact,
  contact_box,
  contact_box_buttons,
  contact_box_deco,
} from "./index.module.scss";

const Contact = () => {
  return (
    <div className={contact}>
      <div className={contact_box}>
        <h2>
          From <span className="col-primary">Idea</span> to interactive{" "}
          <span className="col-error">Prototype</span> in 2 weeks
        </h2>
        <div className={contact_box_buttons}>
          <button className="btn btn-primary btn_xl">work with us</button>
          <button className="btn btn-white btn_xl">Contact Team</button>
        </div>
        <StaticImage
          className={contact_box_deco}
          src="../../../assets/images/contact-deco.svg"
          placeholder="blurred"
          alt="Rocket"
        />
      </div>
    </div>
  );
};

export default Contact;
