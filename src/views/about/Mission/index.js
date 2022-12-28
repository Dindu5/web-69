import React from "react";
import { mission, mission_box } from "./index.module.scss";

const Mission = () => {
  return (
    <div className={mission}>
      <div className={mission_box}>
        <h4>
          The <span className="col-secondary">69</span> mission
        </h4>
        <p>
          <strong>web69</strong> is a software company that helps businesses put
          data at the heart of their culture and decision making.
        </p>
        <p>
          We believe it shouldn’t be difficult or expensive for businesses to
          access their data and visualize it in a way where everyone can
          understand what’s going on. But with most of the solutions available –
          it is. Our aim is to level the playing field.
        </p>
        <h6>What’s the problem?</h6>
        <p>
          Most businesses generate countless data points. But too often that
          data stays hidden, where the team can’t see or act on it – either
          buried in spreadsheets or scattered across different SaaS tools and
          databases. And unless a business has access to an expensive data
          warehouse solution, a data-specialist or a complex BI tool – that’s
          exactly where the data stays – hidden.
        </p>
        <p>
          Even when businesses do have access to these resources, their systems
          can be slow to update, meaning the data isn’t live.
        </p>
        <h6>Our solution</h6>
        <p>
          With Geckoboard, you can easily create live dashboards that surface
          your most important metrics, so everyone can see what’s going on with
          business performance. We help teams get the most out of their data by
          overcoming the three biggest barriers: access, understanding, and
          awareness.
        </p>
      </div>
    </div>
  );
};

export default Mission;
