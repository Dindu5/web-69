import * as React from "react";
import Services from "../components/Landing/Services";
import Hero from "../components/Landing/Hero";
import MainLayout from "../layout/Main";
import Deliverables from "../components/Landing/Deliverables";
import Contact from "../components/Landing/Contact";
import Faq from "../components/Landing/Faqs";
import Testimonial from "../components/Landing/Testimonial";

const IndexPage = () => {
  return (
    <MainLayout>
      <Hero />
      <Services />
      <Deliverables />
      <Contact />
      <Faq />
      <Testimonial />
    </MainLayout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
