import React from "react";
import { faqitem } from "./index.module.scss";

const FaqItem = ({ title, text }) => {
  return (
    <details className={faqitem}>
      <summary>
        <h5>{title}</h5>
        <div></div>
      </summary>
      <div className="content">
        <p>{text}</p>
      </div>
    </details>
  );
};

export default FaqItem;
