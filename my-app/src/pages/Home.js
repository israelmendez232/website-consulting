import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "../components/AnimationRevealPage.js";

import Hero from "../components/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "../components/ThreeColWithSideImage.js";
import MainFeature from "../components/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureStats from "../components/ThreeColCenteredStatsPrimaryBackground.js";
import Testimonial from "../components/ThreeColumnWithProfileImage.js";
import GetStarted from "../components/GetStartedLight.js";
import Footer from "../components/MiniCenteredFooter.js";

const HighlightedText = tw.span`text-primary-500`

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <FeatureStats/>
      <Features 
        heading={<>Amazing <HighlightedText>Features</HighlightedText></>}
      />
      <MainFeature
        heading={<>Cloud built by and for <HighlightedText>Professionals</HighlightedText></>}
      />
      <Testimonial />
      <GetStarted/>
      <Footer />
    </AnimationRevealPage>
  );
}
