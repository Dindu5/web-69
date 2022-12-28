import * as React from "react";
import Mission from "../views/about/Mission";
import AboutLayout from "../layout/About";
import AboutHero from "../views/about/Hero";
import TrustedBrands from "../views/about/Brands";

const AboutPage = () => {
  return (
    <AboutLayout>
      <AboutHero />
      <Mission />
      <TrustedBrands />
    </AboutLayout>
  );
};

export default AboutPage;

export const Head = () => <title>About Web 69</title>;
