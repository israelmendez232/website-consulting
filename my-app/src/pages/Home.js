import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "../components/AnimationRevealPage.js";

import Hero from "../components/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "../components/ThreeColWithSideImage.js";
import FeatureStats from "../components/ThreeColCenteredStatsPrimaryBackground.js";
import Testimonial from "../components/ThreeColumnWithProfileImage.js";
import Contact from "../components/SimpleContactUs.js";
import Footer from "../components/MiniCenteredFooter.js";

export default () => {
  return (
    <AnimationRevealPage>
      <Hero id="Home"/>
      <FeatureStats id="Stats"/>
      <Features  id="Services"
        heading={<>Como Atuamos</>}
      />
      <Testimonial  id="Testimonials"/>
      <Contact  id="Contact"/>
      <Footer  id="Footer"/>
    </AnimationRevealPage>
  );
}
