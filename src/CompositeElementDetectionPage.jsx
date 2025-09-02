import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Nav, NavLogoSection, LogoBox, Logo, NBTitle, NavLinkSection, LinkBox } from './NavBarComponent';
import { BubbleDiv, GithubBubble, KeywordBubble } from './Bubbles';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Main, ContentContainer, BoldTitle, SubHeading, Paragraph, Image } from './ProjectComponents';

import logoImg from "/assets/nb-logo.png";
import GUIssImg from "/assets/CED/GUIss.png";
export default function OrthoticProstheticPage() {

  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
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
        <ContentContainer >
          <BoldTitle>Composite Element Detection</BoldTitle>
          <Paragraph>
            Fully featured GUI for the automatic segmentation and statistical characterization of boron, tungsten, carbon, and polymer from cross-sectional images of a composite material.
          </Paragraph>
          <BubbleDiv>
            <GithubBubble onClick={() => window.open('https://github.com/SpecialtyMaterials/Composite-Element-Detection', '_blank')}>
              Github
              <a href="https://github.com/SpecialtyMaterials/Composite-Element-Detection" target="_blank" rel="noopener noreferrer" style={{ paddingLeft: '10px' }}>
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </a>
            </GithubBubble>
            <KeywordBubble>Software Development</KeywordBubble>
            <KeywordBubble>Graphical User Interface</KeywordBubble>
            <KeywordBubble>Computer Vision</KeywordBubble>
          </BubbleDiv>
          <Image src={GUIssImg} alt="Orthotic Device" />
          <SubHeading>
            Overview
          </SubHeading>
          <Paragraph>
            I developed this software for my position at Specialty Materials, inc. A critical element for the characterization of composite materials is the percentage of the material that each distinct element occupies. This can be efficiently accomplished by viewing cross sections of the material under a microscope, at which point the elements can be manually identified. 
          </Paragraph>
          <Paragraph>
            I was tasked to build software with a fully-featured GUI that, given a composite cross sectional image, automatically identifies different elements for characterization. The computer vision logic is described below. I used OpenCV for image processing and Python to package the software into an executable. 
          </Paragraph>
          <SubHeading>
          Logic
          </SubHeading>
          <Paragraph>
          Composite Element Detection operates in two modes: BCP, for boron carbon polymer composites, and BTP, for boron tungsten polymer composites.
          </Paragraph>
          <SubHeading>
            BCP Logic
          </SubHeading>
          <Paragraph>
            BCP operation has three primary stages: circle fitting, to identify whole boron fibers; circle validation, to remove invalid boron detection; and thresholding, to identify boron fragments, carbon, and polymer regions. Circle fitting is used in addition to thresholding to include boron voids, which would otherwise be incorrectly identified as polymer.
          </Paragraph>
          <Paragraph>
            Circle fitting is excessive to ensure all boron is identified; as a result, many extraneous circles are also identified. Circle sensitivity is controlled with Parameter 3. Circle candidates are validated by analyzing the average brightness of the original image in the area contained by each circle; a low average brightness is likely polymer, and high, boron. Brightness detection threshold is controlled with Parameter 4. The remaining circles are assumed to be correctly identified boron fibers and the associated regions are removed from the subsequent thresholding steps.
          </Paragraph>
          <Paragraph>
            The image is then thresholded for three brightnesses: high, which identifies boron fragments that circle detection did not identify, middle, which identifies carbon fiber, and low, which identifies polymer.
          </Paragraph>
          <SubHeading>
            BTP Logic
          </SubHeading>
          <Paragraph>
            BTP operation is similar to BCP. Boron and tungsten are grouped identified and validated with the same circle and thresholding logic. To separate boron from tungsten, a subtle hue difference is used. The remaining polymer is thresholded, and the image is returned to the user for optional correction. Using a mouse, tungsten fibers or fragments that have been mischaracterized as boron are identified. The algorithm runs a second time with these data, and the final detection is produced.
          </Paragraph>
          <SubHeading>
            Usage
          </SubHeading>
          <Paragraph>
          For instructions on downloading and usage, please refer to the Github linked above. 
          </Paragraph>
        </ContentContainer>
      </Main>
    </div>
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


