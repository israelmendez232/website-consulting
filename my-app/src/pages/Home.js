import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "../components/AnimationRevealPage.js";

import Hero from "../components/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "../components/ThreeColWithSideImage.js";
import MainFeature from "../components/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureStats from "../components/ThreeColCenteredStatsPrimaryBackground.js";
import Pricing from "../components/TwoPlansWithDurationSwitcher.js";
import Blog from "../components/GridWithFeaturedPost.js";
import Testimonial from "../components/TwoColumnWithImageAndRating.js";
import FAQ from "../components/SingleCol.js";
import GetStarted from "../components/GetStartedLight.js";
import Footer from "../components/FiveColumnWithInputForm.js";

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
      <Testimonial 
        heading={<>Our Clients <HighlightedText>Love Us</HighlightedText></>}
      />
      <Pricing 
        heading={<>Flexible <HighlightedText>Plans</HighlightedText></>}
      />
      <FAQ
        heading={<>Any <HighlightedText>Questions ?</HighlightedText></>}
      />
      <Blog
        subheading="Blog"
        heading={<>We love <HighlightedText>Writing</HighlightedText></>}
      />
      <GetStarted/>
      <Footer />
    </AnimationRevealPage>
  );
}
