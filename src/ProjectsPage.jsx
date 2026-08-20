import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Nav, NavLogoSection, NavLinkSection, NBTitle, LogoBox, LinkBox, Logo } from './NavBarComponent';
import { BubbleDiv, KeywordBubble } from './Bubbles';
import GlassGlobalStyle from './GlassGlobalStyle';
import {
  glassSurface,
  rimLight,
  hoverLit,
  PANEL_RADIUS,
  PANEL_RADIUS_SM,
  HOVER_WASH,
  HOVER_INK,
  HOVER_FADE,
} from './glass';

import logoImg from "/assets/nb-logo.png";
import CEDImg from "/assets/CED/CED.jpg";
import diffImg from "/assets/diffEdge/diffusionEdge.jpg";
import orthoticImg from "/assets/orthotic/orthotic.jpg";
import img3d from "/assets/3DEm/hero.webp";
import kidney from "/assets/kidney/hero2.webp";
import cardiacImg from "/assets/cardiac/main.jpeg";
import chinrestImg from "/assets/chinrest/chinrest.jpg";
import flexureImg from "/assets/flexure/flexure.jpg";

export default function ProjectsPage() {
  const navigate = useNavigate();
  return (
    <>
      <GlassGlobalStyle />  {/* Apply global styles */}
      <Nav>
        <NavLogoSection>
          <LogoBox>
            <a href="/portfolio/"><Logo src={logoImg} alt="Logo" /> </a>
            <NBTitle>Nick Brady</NBTitle>
          </LogoBox>
        </NavLogoSection>
        <NavLinkSection>
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
        </NavLinkSection>
      </Nav>
      <Main>
        <MainGrid>
          <ProjectsSection>
            <BoldTitle>Projects</BoldTitle>
          </ProjectsSection>
          <ContentSection>
            <Row onClick={() => navigate('/projects/flexure')}>
              <PlusSign>+</PlusSign>
              <LeftCol>
                <ProjectTitle>Ultra-High Precision Compliant Linear Stage</ProjectTitle>
                <Paragraph>Designed a PEEK compliant mechanism to drive an ultra high-precision linear stage on a manufacturing line. Used
topological optimization to produce a constant, perpendicular output speed given a constant input speed.
Simulated fatigue, stress, and stiffness before ordering part machining and supervising assembly.</Paragraph>
                <BubbleDiv>
                  <KeywordBubble>Altair Hyperworks</KeywordBubble>
                  <KeywordBubble>Topology Optimization</KeywordBubble>
                  <KeywordBubble>Finite Element Analysis</KeywordBubble>
                  <KeywordBubble>Material Dynamics</KeywordBubble>
                </BubbleDiv>
              </LeftCol>
              <RightCol>
                <ImageWrapper>
                  <ProjectImage src={flexureImg}/>
                </ImageWrapper>
              </RightCol>
            </Row>
            <Row onClick={() => navigate('/projects/electromagnetic3dprinting')}>
              <PlusSign>+</PlusSign>
              <LeftCol>
                <ProjectTitle>Enhancing FDM 3D Printing with Electromagnetic Control</ProjectTitle>
                <Paragraph>Developed a software and hardware system to actively predict and cancel system vibrations, eliminating print artifacts using rapid electromagnetic actuation to produce inverse vibrations in the extruder. Created workflow employing high-frequency electromagnetic pulses to create fine surface patterns on printed objects, achieving an aesthetic texture that hides print layer lines without sacrificing dimensional accuracy, material overuse, or print time.</Paragraph>
                <BubbleDiv>
                  <KeywordBubble>3D Printing</KeywordBubble>
                  <KeywordBubble>Electronics and Microcontrollers</KeywordBubble>
                  <KeywordBubble>Procedural Modeling</KeywordBubble>
                  <KeywordBubble>C++</KeywordBubble>
                </BubbleDiv>
              </LeftCol>
              <RightCol>
                <ImageWrapper>
                  <ProjectImage src={img3d}/>
                </ImageWrapper>
              </RightCol>
            </Row>
            <Row onClick={() => navigate('/projects/cardiacsimulator')}>
              <PlusSign>+</PlusSign>
              <LeftCol>
                <ProjectTitle>Cardiac Simulator Capable of Controlled Pulsatile Flow</ProjectTitle>
                <Paragraph>Engineered the hardware solution for an anatomically accurate fluid pump system, satisfying pressure and flow rate criteria with simulated &quot;heart beats&quot;: periodic modulations in flow pressure and velocity (pulsatile flow). </Paragraph>
                <BubbleDiv>
                  <KeywordBubble>3D Printing</KeywordBubble>
                  <KeywordBubble>C++</KeywordBubble>
                  <KeywordBubble>Arduino</KeywordBubble>
                  <KeywordBubble>Fluid Dynamics</KeywordBubble>
                </BubbleDiv>
              </LeftCol>
              <RightCol>
                <ImageWrapper>
                  <ProjectImage src={cardiacImg}/>
                </ImageWrapper>
              </RightCol>
            </Row>
            <Row onClick={() => navigate('/projects/orthoticprosthetic')}>
              <PlusSign>+</PlusSign>
              <LeftCol>
                <ProjectTitle>Moldable, Algorithmically Generated Prosthetic and Orthotic Devices</ProjectTitle>
                <Paragraph>Developed a novel moldable workflow for open-source orthotic and prosthetic solutions with superior functionality and comfort. Wrote software to generate medical device size and shape from only multi-axial pictures of patient appendages. Collaborated with nonprofit 2ft Prosthetics on prototyping and deployment.</Paragraph>
                <BubbleDiv>
                  <KeywordBubble>Material Dynamics</KeywordBubble>
                  <KeywordBubble>3D Printing</KeywordBubble>
                  <KeywordBubble>Procedural Modeling</KeywordBubble>
                  <KeywordBubble>Python</KeywordBubble>
                </BubbleDiv>
              </LeftCol>
              <RightCol>
                <ImageWrapper>
                  <ProjectImage src={orthoticImg}/>
                </ImageWrapper>
              </RightCol>
            </Row>
            <Row onClick={() => navigate('/projects/compositeelementdetection')}>
              <PlusSign>+</PlusSign>
              <LeftCol>
                <ProjectTitle>Composite Element Detection</ProjectTitle>
                <Paragraph>Fully featured GUI for the automatic segmentation and statistical characterization of boron, tungsten, carbon, and polymer from cross-sectional images of a composite material.</Paragraph>
                <BubbleDiv>
                  <KeywordBubble>Software Development</KeywordBubble>
                  <KeywordBubble>Graphical User Interface</KeywordBubble>
                  <KeywordBubble>Computer Vision</KeywordBubble>
                </BubbleDiv>
              </LeftCol>
              <RightCol>
                <ImageWrapper>
                  <ProjectImage src={CEDImg}/>
                </ImageWrapper>
              </RightCol>
            </Row>
            <Row onClick={() => navigate('/projects/kidneystonenavigation')}>
              <PlusSign>+</PlusSign>
              <LeftCol>
                <ProjectTitle>Kidney Stone Removal via Autonomous Aiming of a Robotic Ureteroscope during Laser Lithotripsy</ProjectTitle>
                <Paragraph>Created an open-source 3D Slicer extension for the detection of and two-stage navigation toward kidney stones using a robotic ureteroscope. During gross guidance, preliminary targets are identified with hue, stabilized through temporal averaging, and validated with K-means grouping. Then, during fine guidance, a hue-and-lightness based region growing algorithm accurately segments stones in preparation for laser lithotripsy (ablation).
                </Paragraph>
                <BubbleDiv>
                  <KeywordBubble>Computer Vision</KeywordBubble>
                  <KeywordBubble>Software Development</KeywordBubble>
                  <KeywordBubble>3D Slicer</KeywordBubble>
                  <KeywordBubble>Robotics</KeywordBubble>
                </BubbleDiv>
              </LeftCol>
              <RightCol>
                <ImageWrapper>
                  <ProjectImage src={kidney}/>
                </ImageWrapper>
              </RightCol>
            </Row>
            <Row onClick={() => navigate('/projects/diffusionedge')}>
              <PlusSign>+</PlusSign>
              <LeftCol>
                <ProjectTitle>Diffusion Probabilistic Model Based Boron Grain Detection</ProjectTitle>
                <Paragraph>Implemented a state-of-the-art diffusion-based edge detection model to create automated boron grain segmentation and statistical characterization software.</Paragraph>
                <BubbleDiv>
                  <KeywordBubble>Convolutional Neural Networks</KeywordBubble>
                  <KeywordBubble>Software Development</KeywordBubble>
                  <KeywordBubble>Computer Vision</KeywordBubble>
                </BubbleDiv>
              </LeftCol>
              <RightCol>
                <ImageWrapper>
                  <ProjectImage src={diffImg}/>
                </ImageWrapper>
              </RightCol>
            </Row>
            
            
            
            
            <Row onClick={() => navigate('/projects/chinrest')}>
              <PlusSign>+</PlusSign>
              <LeftCol>
                <ProjectTitle>Novel Moldable, Ventilated Violin Chinrest</ProjectTitle>
                <Paragraph>Invented a novel moldable, ventilated violin chinrest. Dramatically improves comfort from &quot;one-size-fits-all&quot; wood or plastic solutions. Ventilated by design, prevents sweat buildup under jaw. Infinitely remoldable.  </Paragraph>
                <BubbleDiv>
                  <KeywordBubble>Material Dynamics</KeywordBubble>
                  <KeywordBubble>3D Printing</KeywordBubble>
                  <KeywordBubble>Procedural Modeling</KeywordBubble>
                  <KeywordBubble>Python</KeywordBubble>
                </BubbleDiv>
              </LeftCol>
              <RightCol>
                <ImageWrapper>
                  <ProjectImage src={chinrestImg}/>
                </ImageWrapper>
              </RightCol>
            </Row>
          </ContentSection>
        </MainGrid>
      </Main>
    </>
  );
}

/* This page's own scroll area. Every height below subtracts the floating nav's
   top margin as well as its height -- the nav is no longer flush with the top
   of the viewport, so without that the last row is cut off. */
const Main = styled.div`
  position: relative;
  flex-grow: 1;
  height: calc(100vh - 200px - 9px); /* accounts for the floating nav's top margin */
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  scrollbar-color: var(--dividing-line) transparent; /* Firefox */
  overflow-x: hidden;
  @media (max-width: 800px) {
    height: calc(100vh - 120px - 9px); /* accounts for the floating nav's top margin */
  }

  @media (max-width: 576px) {
    height: calc(100vh - 75px - 6px); /* accounts for the floating nav's top margin */
  }

`;

const MainGrid = styled.div`
  display: grid;
  height: 100%;
  box-sizing: border-box;
  /* Lines the column up with the floating nav's side margins. The tracks stay
     at 10%/90% and there is no gap, so they still resolve to exactly the
     content box and nothing spills into the horizontal clip. */
  padding: 9px 11px 12px;
  grid-template-columns: 10% 90%;

  @media (max-width: 576px) {
    padding: 6px;
  }
`;

/* The hairline rules that used to frame these two columns are gone: the rows
   now carry their own glass edges, so a second set of borders would only read
   as leftover chrome. The vertical title is left floating in the gutter. */
const ProjectsSection = styled.div`
  display: flex;
  align-items: flex-start; /* Align items to the top */
  justify-content: center;
  overflow-y: auto;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start; /* Push items to the top */
  gap: 8px; /* the rows are separate slabs now, not divisions of one block */
  position: relative; /* establish clipping context */
  overflow-x: hidden; /* keep left reveal under Projects bar until slide */
  overflow-y: visible; /* allow vertical overflow for scrolling */

  @media (max-width: 576px) {
    padding-bottom: 100px;
  }
`;

const LeftCol = styled.div`
  flex-basis: 30%;
  padding: 70px;

  @media (max-width: 1000px) {
    padding: 25px;
  }
  @media (max-width: 800px) {
    padding: 30px;
    flex: none;
  }
`;

const RightCol = styled.div`
  flex-basis: 70%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  padding-top: 70px;
  position: relative;
  border-left: 0.5px solid var(--dividing-line);
  /* The image wrapper inside is deliberately wider than this column and used
     to be cut off by ContentSection's horizontal clip, at exactly this column's
     right edge. Clipping here instead lands the cut in the same place while
     letting the fillets follow the card, so the photo no longer squares off
     the slab's corner. Inset by the card's 1px border. */
  overflow: hidden;
  border-radius: 0 ${PANEL_RADIUS - 1}px ${PANEL_RADIUS - 1}px 0;

  @media (max-width: 800px) {
    padding: 30px;
    flex-basis: auto;
    height: 200px;
  }

  /* Matches the row's own breakpoint: below it the row stacks, so this column
     is the bottom of the card and the fillets move with it. */
  @media (max-width: 768px) {
    border-radius: 0 0 ${PANEL_RADIUS - 1}px ${PANEL_RADIUS - 1}px;
  }

  @media (max-width: 576px) {
    border-radius: 0 0 ${PANEL_RADIUS_SM - 1}px ${PANEL_RADIUS_SM - 1}px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 90%;
  position: absolute;
  top: 0;
  overflow: hidden;
  display: flex;

  @media (max-width: 800px) {
    height: 100%;
    padding-left: 1rem;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 50%;

  @media (max-width: 800px) {
    height: auto;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  padding-bottom: 35px;
`;

const Paragraph = styled.p`
  padding-left: 20px;
  padding-bottom: 20px;
  font-size: 16px;
  font-weight: 200;
  line-height: 1.5;
  margin: 0px;

  @media (max-width: 1000px) {
    font-size: 14px;
    padding-bottom: 15px;
    padding-left: 10px;
  }

  @media (max-width: 800px) {
    padding-left: 10px;
    font-size: 14px;
  }
`;

const BoldTitle = styled.a`
  font-size: 40px;
  font-weight: bolder;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  transition: color 1s ease;
  padding-bottom: 40px;

  @media (max-width: 800px) {
    font-size: 20px;
    padding-bottom: 20px;
  }
  
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

const PlusSign = styled.div`
  display: none;
`;

/* Each row is a glass slab.
 *
 * Deliberately `glassSurface` with the blur switched off rather than the full
 * `glassPanel`, for two reasons. First, cost: a backdrop-filter is re-sampled
 * every frame its backdrop moves, and unlike the home page's four static cells
 * these eight scroll, over a `background-attachment: fixed` field -- the one
 * combination that reliably drops frames. Second, there is nothing behind a row
 * but that smooth gradient, and blurring a smooth gradient returns the gradient,
 * so the blur was buying no picture for the price. The fill, the rim, the inset
 * shading and the shadows all stay, so the slabs still read as glass.
 *
 * `::before` is spoken for by the reveal tab, so the contour light goes on
 * `::after` and the grain highlight is the one part of the panel recipe this
 * page does without. */
const Row = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  ${glassSurface}
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  /* The reveal tab sits outside the box, so the surface's clip has to go. The
     fill and border still follow the fillets on their own. */
  overflow: visible;
  transition: transform 0.3s ease, box-shadow ${HOVER_FADE} ease, border-color ${HOVER_FADE} ease;
  letter-spacing: 0.5px;
  position: relative;
  cursor: pointer;

  &::after {
    ${rimLight}
  }

  /* Blue reveal column with centered plus, revealed when row shifts right */
  &::before {
    content: "+";
    position: absolute;
    left: -30px; /* hidden until row translates right */
    top: 0;
    width: 30px;
    height: 100%;
    background: ${HOVER_WASH}; /* the same wash every hover target uses */
    border-radius: ${PANEL_RADIUS}px 0 0 ${PANEL_RADIUS}px;
    color: ${HOVER_INK}; /* plus uses the hover ink */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    pointer-events: none;
  }

  &:hover {
    transform: translateX(30px);
    ${hoverLit}
  }

  @media (max-width: 768px) {
    flex-direction: column;
    &:hover {
      transform: none;
    }
    &::before {
      display: none; /* hide reveal column on mobile */
    }
  }

  @media (max-width: 576px) {
    border-radius: ${PANEL_RADIUS_SM}px;
  }
`;