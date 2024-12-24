import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Nav, NavLogoSection, LogoBox, Logo, NBTitle, NavLinkSection, LinkBox } from './NavBarComponent';
import { BubbleDiv, KeywordBubble } from './Bubbles';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {Main, ContentContainer, BoldTitle, SubHeading, Paragraph, Image, PdfContainer } from './ProjectComponents';

import PdfViewer from './PdfViewer';
import logoImg from "/assets/nb-logo.png";
import pdfUrl from '/assets/kidney/kidneyPaper.pdf';

export default function KidneyPage() {


  return (
    <>
      <GlobalStyle />
      <Nav>
        <NavLogoSection>
          <LogoBox>
            <a href="/portfolio/"><Logo src={logoImg} alt="Logo" /> </a>
            <NBTitle>Nick Brady</NBTitle>
          </LogoBox>
        </NavLogoSection>
        <WideNavLinkSection>
          <LinkBox>
            <a href="https://www.linkedin.com/in/nickmbrady" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </a>
            <a href="mailto:nickbrady8444@example.com">
              <FontAwesomeIcon icon={faEnvelope} size="1x" />
            </a>
            <a href="https://github.com/nickmbrady" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>
          </LinkBox>
        </WideNavLinkSection>
      </Nav>
      <Main>
        <ContentContainer>
          <BoldTitle>Autonomous Kidney Stone Detection and Guidance</BoldTitle>
          <BubbleDiv>
                  <KeywordBubble>Computer Vision</KeywordBubble>
                  <KeywordBubble>Software Development</KeywordBubble>
                  <KeywordBubble>3D Slicer</KeywordBubble>
                  <KeywordBubble>Robotics</KeywordBubble>
          </BubbleDiv>
          <Paragraph>
I created an open-source 3D Slicer extension for the detection of and two-stage navigation toward kidney stones using a robotic ureteroscope. During gross guidance, preliminary targets are identified with hue, stabilized through temporal averaging, and validated with K-means grouping. Then, during fine guidance, a hue-and-lightness based region growing algorithm accurately segments stones in preparation for laser lithotripsy (ablation). Software devlopment was done using the 3D Slicer Python API, and OpenCV was used for computer vision. 
          </Paragraph>
          <Paragraph>
          I completed this work during a 10-week internship at the Harvard SNR Lab under the guidance of Professor Nobuhiko Hata. 
          </Paragraph>
          <PdfContainer>
            <PdfViewer fileUrl={pdfUrl}/>
          </PdfContainer>
        </ContentContainer>
      </Main>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  :root {
    --light-gray: #b7b7b7;
    --dividing-line: #303f4d;
    --background: #f5f5f5;
  }

  h1, h2, h3, a, p, span {
    font-family: "Lexend Exa", sans-serif;
    font-weight: 400;
    color: var(--light-gray);
  }

  a {
    font-size: 10pt;
    text-decoration: none;
    text-transform: uppercase;
  }

  strong {
    font-weight: 400;
  }

`;

const WideNavLinkSection = styled(NavLinkSection)`
  flex-basis: 100%;
`


