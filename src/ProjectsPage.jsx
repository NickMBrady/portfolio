import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Nav, NavLogoSection, NavLinkSection, NBTitle, LogoBox, LinkBox, Logo } from './NavBarComponent';
import { BubbleDiv, KeywordBubble } from './Bubbles';
import GlassGlobalStyle from './GlassGlobalStyle';
import GlassPanel from './GlassPanel';
import {
  glassSurface,
  flushPanel,
  REVEAL_FILL,
  HOVER_INK,
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
      <GlassGlobalStyle $flushNav />  {/* Apply global styles */}
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
  height: calc(100vh - 200px);
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  scrollbar-color: var(--dividing-line) transparent; /* Firefox */
  overflow-x: hidden;
  @media (max-width: 800px) {
    height: calc(100vh - 120px);
  }

  @media (max-width: 576px) {
    height: calc(100vh - 75px);
  }

`;

const MainGrid = styled.div`
  display: grid;
  /* min-height, not height: the Projects bar is a panel that clips its
     overflow, so the row has to grow to the full scrolled length. */
  min-height: 100%;
  box-sizing: border-box;
  grid-template-columns: 10% 90%;

  @media (max-width: 576px) {
  }
`;

/* The hairline rules that used to frame these two columns are gone: the rows
   now carry their own glass edges, so a second set of borders would only read
   as leftover chrome. The vertical title is left floating in the gutter. */
const ProjectsSection = styled(GlassPanel)`
  display: flex;
  align-items: flex-start; /* Align items to the top */
  justify-content: center;
  ${flushPanel}
  border-left: 0.5px solid var(--dividing-line);
  border-bottom: 0.5px solid var(--dividing-line);
  /* The rows to the right draw no left edge of their own, so this bar carries
     the divider between the two columns itself. */
  border-right: 0.5px solid var(--dividing-line);
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start; /* Push items to the top */
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
  overflow: hidden;

  @media (max-width: 800px) {
    padding: 30px;
    flex-basis: auto;
    height: 200px;
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

/* A row is a stationary shell holding a sliding tile.
 *
 * The reveal panel has to live on the shell, not on the tile. A pseudo-element
 * is carried along by its parent's transform, and it can never paint behind
 * its parent's own background -- so as a pseudo of the tile it could only sit
 * BESIDE the tile, butting a square edge against a rounded one and leaving
 * notches at the corners. On the shell it stays put, the tile slides off it,
 * and it runs on underneath the tile's fillets so the corners stay clean.
 *
 * The panel never fades -- it is simply uncovered. Because the tile is glass
 * it cannot occlude anything, so instead of hiding the panel behind it, the
 * panel's own edge tracks the tile's: it is clipped to whatever the slide has
 * exposed. Square tiles have no corner cut-outs to fill, so it is just the
 * strip; anything painted past it would sit under the tile and show through.
 *
 * The tile is `glassSurface` with the blur switched off rather than the full
 * `glassPanel`. A backdrop-filter is re-sampled every frame its backdrop moves,
 * and unlike the home page's four static cells these eight scroll over a
 * `background-attachment: fixed` field. There is nothing behind a row but that
 * smooth gradient, and blurring a smooth gradient returns the gradient. */
const REVEAL = 30;

const RowShell = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;

  &::before {
    content: "+";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: ${REVEAL}px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-left: 7px;
    font-size: 30px;
    line-height: 1;
    color: ${HOVER_INK};
    pointer-events: none;
    /* Clipped away at rest rather than sized to nothing: with border-box a
       zero width still cannot go below the element's own padding, which left
       a sliver of the strip showing as a blue line. A clip has no such floor.
       The panel is always "there"; the slide just uncovers it. */
    clip-path: inset(0 100% 0 0);
    transition: clip-path 0.3s ease;
    background: ${REVEAL_FILL};
  }

  &:hover::before {
    clip-path: inset(0 0 0 0);
  }

  @media (max-width: 768px) {
    &::before {
      display: none; /* no slide on mobile, so nothing to reveal */
    }
  }
`;

const RowTile = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  z-index: 1; /* rides above the reveal panel */
  ${glassSurface}
  ${flushPanel}
  border-bottom: 0.5px solid var(--dividing-line);
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  letter-spacing: 0.5px;
  /* The slide is the whole hover indication -- no glow, no lit rim. */
  transition: transform 0.3s ease;

  ${RowShell}:hover & {
    transform: translateX(${REVEAL}px);
  }

  @media (max-width: 768px) {
    flex-direction: column;

    ${RowShell}:hover & {
      transform: none;
    }
  }

`;

// eslint-disable-next-line react/prop-types
function Row({ children, ...rest }) {
  return (
    <RowShell {...rest}>
      <RowTile>{children}</RowTile>
    </RowShell>
  );
}
