import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ContentWithPaddingXl, Container } from "../components/Layouts.js";
import { SectionHeading as Heading, Subheading as SubheadingBase } from "../components/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../images/svg-decorator-blob-8.svg";

const Subheading = tw(SubheadingBase)`text-center`;
const Testimonials = tw.div`flex flex-col lg:flex-row items-center lg:items-stretch`;
const TestimonialContainer = tw.div`mt-16 lg:w-1/3`;
const Testimonial = tw.div`px-4 text-center max-w-xs mx-auto flex flex-col items-center`;
const Image = tw.img`w-20 h-20 rounded-full`;
const Quote = tw.blockquote`mt-5 text-gray-600 font-medium leading-loose`;
const CustomerName = tw.p`mt-5 text-gray-900 font-semibold uppercase text-sm tracking-wide`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute left-0 top-0 h-56 w-56 opacity-15 transform -translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute right-0 bottom-0 h-64 w-64 opacity-15 transform translate-x-2/3 text-yellow-500`}
`;

export default ({
  subheading = "Depoimentos",
  heading = "Visão dos Clientes",
  testimonials = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1531397786089-f3a7972aa6ae?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTl8fHdvbWFuJTIwYXNpYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      quote:
        "Eles me ajudaram bastante no começo, a configurar o Google Analytics, otimizar a mídia de performance. Hoje, tenho certeza que temos uma empresa bem data-driven.",
      customerName: "Rossana Amaro Paiva"
    },
    {
      imageSrc:
        "https://images.unsplash.com/flagged/photo-1574874897534-036671407eda?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=698&q=80",
      quote:
        "A consultoria trouxe uma nova visão para minha marca de roupa, ajudando a aumentar a receita em 245% em 9 meses. Tudo com base em análises de dados que eles nos ajudaram a montar.",
      customerName: "Luan Bentes Paixão"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1355&q=80",
      quote:
        "Profissionais, íntegros e focados em resultados. É como eu interpreto a Mendes Consultoria desde o início da nossa relação.",
      customerName: "Enoque Frias Ferraço"
    }
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        <Testimonials>
          {testimonials.map((testimonial, index) => (
            <TestimonialContainer key={index}>
              <Testimonial>
                <Image src={testimonial.imageSrc} />
                <Quote>"{testimonial.quote}"</Quote>
                <CustomerName>- {testimonial.customerName}</CustomerName>
              </Testimonial>
            </TestimonialContainer>
          ))}
        </Testimonials>
      </ContentWithPaddingXl>

      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
