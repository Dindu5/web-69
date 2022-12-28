import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { faq } from "./index.module.scss";
import FaqItem from "../../FaqItem";

const Faq = () => {
  const faqlist = [
    {
      title: "What is Web69?",
      text: "Web69 is is placeholder text commonly used in the graphic, print, and publishing industries for previewing  and  text commonly used in the graphic, visual mockups. ",
    },
    {
      title: "How does it work?",
      text: "Web69 is is placeholder text commonly used in the graphic, print, and publishing industries for previewing  and  text commonly used in the graphic, visual mockups. ",
    },
    {
      title: "How do I get the work done",
      text: "Web69 is is placeholder text commonly used in the graphic, print, and publishing industries for previewing  and  text commonly used in the graphic, visual mockups. ",
    },
    {
      title: "Can I contact the team",
      text: "Web69 is is placeholder text commonly used in the graphic, print, and publishing industries for previewing  and  text commonly used in the graphic, visual mockups. ",
    },
    {
      title: "How soon do you finish projects",
      text: "Web69 is is placeholder text commonly used in the graphic, print, and publishing industries for previewing  and  text commonly used in the graphic, visual mockups. ",
    },
    {
      title: "What do you charge for projects",
      text: "Web69 is is placeholder text commonly used in the graphic, print, and publishing industries for previewing  and  text commonly used in the graphic, visual mockups. ",
    },
  ];
  return (
    <div className={faq}>
      <div className="chip chip-success">
        <StaticImage
          src="../../../assets/images/icon-new.svg"
          placeholder="blurred"
          alt="Rocket"
        />
        <p>FAQs</p>
      </div>
      <h2>
        <span className="col-secondary">Answers</span> to some of your
        frequently asked <span>questions</span>
      </h2>
      {faqlist.map(({ title, text }) => {
        return <FaqItem key={title} title={title} text={text} />;
      })}
    </div>
  );
};

export default Faq;
