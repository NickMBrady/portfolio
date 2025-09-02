import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Nav, NavLogoSection, LogoBox, Logo, NBTitle, NavLinkSection, LinkBox } from './NavBarComponent';
import { BubbleDiv, GithubBubble, KeywordBubble } from './Bubbles';

import { Main, ContentContainer, BoldTitle, SubHeading, Paragraph, Image } from './ProjectComponents';

import logoImg from "/assets/nb-logo.png";
import diffEdgeImg from "/assets/diffEdge/diffusionEdge.png";
export default function DiffusionEdgePage() {

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
        <ContentContainer>
          <BoldTitle>Diffusion Grain</BoldTitle>
          <Paragraph>
          Implemented a state-of-the-art diffusion-based edge detection model to create automated boron grain segmentation and statistical characterization software.
          </Paragraph>
          <BubbleDiv>
            <GithubBubble onClick={() => window.open('https://github.com/SpecialtyMaterials/diffusionGrain', '_blank')}>
              Github
              <a href="https://github.com/SpecialtyMaterials/diffusionGrain" target="_blank" rel="noopener noreferrer" style={{ paddingLeft: '10px' }}>
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </a>
            </GithubBubble>
                  <KeywordBubble>Convolutional Neural Networks</KeywordBubble>
                  <KeywordBubble>Software Development</KeywordBubble>
                  <KeywordBubble>Computer Vision</KeywordBubble>
          </BubbleDiv>
          <Image src={diffEdgeImg} alt="Orthotic Device" />
          <SubHeading>
          Overview
          </SubHeading>
          <Paragraph>
            I developed this software for my position at Specialty Materials, inc. A critical element for the characterization of metallic fibers is the size and shape of the cells that compose it. This can be efficiently observed by viewing the fiber under high magnification, at which point the cells can be manually identified. 
          </Paragraph>
          <Paragraph>
            I was tasked to build software that, given an input image of a metallic fiber, could automatically characterize the size and shape of each cell. I accomplished this by training an edge detection algorithm on a custom dataset, then packaging the model into an algorithm that cleans the results, allows for fast manual correction of misidentifed cells, and generates data based on the detection results. 
          </Paragraph>
          <SubHeading>
           Grain Detection and Augmentation 
          </SubHeading>
          <Paragraph>
          For instructions on checkpoints, my weights, and training, see the Github (linked above). 
          </Paragraph>
          <Paragraph>
          A minimum of 400 images post-augmentation should be used for training, ideally more than 800. Data augmentation can be done with the provided augmentation script 'augmentation.py,' an easily adaptable framework with a wide array of procesing methods. Early training can be dramatically hastened by using a batch size of one until the gradients become unstable, at which point training can be resumed with a batch size of two.
          </Paragraph>
          <SubHeading>
          Grain Processor
          </SubHeading>
          <Paragraph>
          Grain Processor is a Python algorithm that operates after the edge detection model produces a segmentation. Using OpenCV it cleans and skeletonizes the result, then presents the user a colored view of the identified grains. The user may click on extraneous segmentations to remove them from processing. Once complete ('d' on the keyboard twice), data for the width, heigh, area, and aspect ratio of each identified grain will be exported to a file. Default units are microns, defined by a scaling factor of nanometers per pixel. 
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