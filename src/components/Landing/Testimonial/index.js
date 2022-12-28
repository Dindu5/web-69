import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  testimonial,
  testimonial_box,
  testimonial_carousel_indicators,
  testimonial_carousel_name,
  testimonial_carousel,
  testimonial_carousel_deco,
} from "./index.module.scss";

const Testimonial = () => {
  return (
    <section id="testimonial" className={testimonial}>
      <div className="chip chip-error">
        <StaticImage
          src="../../../assets/images/icon-heart.svg"
          placeholder="blurred"
          alt="Rocket"
        />
        <p>Testimonials</p>
      </div>
      <h2>
        What our <span className="col-error">clients</span> say about our{" "}
        <span>services</span>
      </h2>
      <div className={testimonial_box}>
        <p>
          I can’t say enough good things about web69. They were great partners,
          really drove the creative direction and successfully delivered the
          stickers which garnered love from millions of users. We enjoyed the
          sprint progress with them. Highly recommend if you’re looking for a
          design partner.
        </p>
        <div className={testimonial_carousel}>
          <div className={testimonial_carousel_name}>
            <div></div>
            <div>
              <h5>Gaurav Joshi</h5>
              <p>Head of Design, Disney+ Hotstar</p>
            </div>
          </div>
          <div className={testimonial_carousel_indicators}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <StaticImage
          className={testimonial_carousel_deco}
          src="../../../assets/images/testimonial-deco.svg"
          placeholder="blurred"
          alt="Rocket"
        />
      </div>
    </section>
  );
};

export default Testimonial;
