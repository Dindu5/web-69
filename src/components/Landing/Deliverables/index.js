import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  deliverables,
  deliverables_desc,
  deliverables_box,
} from "./index.module.scss";

const Deliverables = () => {
  return (
    <div className={deliverables}>
      <div className="chip chip-secondary">
        <StaticImage
          src="../../../assets/images/icon-zap.svg"
          placeholder="blurred"
          alt="Rocket"
        />
        <p>MVP IN A MONTH</p>
      </div>
      <h2>
        Let us bring your <span className="col-error">ideas</span> to{" "}
        <span className="col-light-purple">life</span>.
      </h2>
      <h6 className={deliverables_desc}>
        Instead of jumping into long and expensive development processes, we
        build out the initial prototype in a way that allows to either change it
        quick
      </h6>
      <div className={deliverables_box}>
        <div>
          <StaticImage
            src="../../../assets/images/icon-ruler.svg"
            placeholder="blurred"
            alt="Rocket"
          />
          <h3>
            We start <br /> within 3 days.
          </h3>
          <p>
            Instead of jumping into long and expensive development processes, we
            build out the initial prototype in a way that allows to either
            change it quick
          </p>
        </div>
        <div>
          <StaticImage
            src="../../../assets/images/icon-copy.svg"
            placeholder="blurred"
            alt="Rocket"
          />
          <h3>
            Deliverables <br /> after 2 weeks.
          </h3>
          <p>
            Instead of jumping into long and expensive development processes, we
            build out the initial prototype in a way that allows to either
            change it quick
          </p>
        </div>
        <div>
          <StaticImage
            src="../../../assets/images/icon-bolt.svg"
            placeholder="blurred"
            alt="Rocket"
          />
          <h3>
            MVP ready <br /> in 30-45 days.
          </h3>
          <p>
            Instead of jumping into long and expensive development processes, we
            build out the initial prototype in a way that allows to either
            change it quick
          </p>
        </div>
      </div>
    </div>
  );
};

export default Deliverables;
