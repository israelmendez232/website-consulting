import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import { SectionHeading, Subheading as SubheadingBase } from "../components/Headings.js";
import { SectionDescription } from "../components/Typography.js";
import defaultCardImage from "../images/shield-icon.svg";
import { ReactComponent as SvgDecoratorBlob3 } from "../images/svg-decorator-blob-3.svg";
import ShieldIconImage from "../images/shield-icon.svg";
import FastIconImage from "../images/fast-icon.svg";
import Lock from "../images/padlock.svg";
import Chart from "../images/line-chart.svg";
import Science from "../images/magnifying-glass.svg";
import Engineering from "../images/server-storage.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ cards = null, heading = "Serviços", subheading = "Serviços", description = "Saiba como podemos ajudar a resolver os seus problemas de negócios com dados." }) => {
  const defaultCards = [
    {
        imageSrc: Chart,
        title: "Análise de Dados",
        description: "Fazemos análise e damos suporte para que as informações guiem sua estratégia."
      },
    {
        imageSrc: Engineering,
        title: "Engenharia",
        description: "Auxiliamos a estrutura e infra de informações, incentivamos boas práticas para seu código ser escalável."
      },
    {
        imageSrc: Science,
        title: "Ciência de Dados",
        description: "Realizamos análises estatísticas e matemáticas mais complexas para automatizar tomada de decisões de maneira mais inteligente."
      },
    {
        imageSrc: ShieldIconImage,
        title: "Segurança",
        description: "Todas as informações compartilhadas são confidenciais e guardadas para você compatilhar o necessário."
    },
    {
        imageSrc: Lock,
        title: "LGPD/GDPR",
        description: "Orientamos você para adequar sua empresa a Lei Geral de Proteção de Dados e/ou Regulamento Geral sobre a Proteção de Dados Europeu (General Data Protection Regulation)."
      },
    {
        imageSrc: FastIconImage,
        title: "Velocidade",
        description: "Nossas entregas são priorizadas para serem rápidas e com qualidade."
      }
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
