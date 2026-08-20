import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Nav, NavLogoSection, NavLinkSection, NBTitle, LogoBox, LinkBox, Logo } from './NavBarComponent';
import { NavAboutSection } from './NavBarComponent';
import GlassGlobalStyle from './GlassGlobalStyle';
import GlassPanel from './GlassPanel';
import { flushPanel, hoverWashLayer, hoverLit, hoverPanelTransition, hoverTitle, hoverIcon, HOVER_INK } from './glass';
import { useNavigate } from 'react-router-dom';
import DotSphere from './DotSphere';

import logoImg from "/assets/nb-logo.png";

export default function HomePage(){
  const navigate = useNavigate();

  return (
    <>
      <GlassGlobalStyle $flushNav />
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
        <NavAboutSection onClick={() => navigate('/about')}>
          <a>About</a>
        </NavAboutSection>
      </Nav>
      <Main>
        <MainGrid>
          <ImageSection>
            <SceneLayer>
              <DotSphere />
            </SceneLayer>
          </ImageSection>
          <DescriptionSection>
            <DescriptionText> Hi, I&apos;m a student at <strong>Duke University</strong> passionate about <strong>material dynamics, additive manufacturing, and optimization.</strong> </DescriptionText>
          </DescriptionSection>
          <LowerLeftSection onClick={() => navigate('/projects')}>
            <ProjectSection>
              <ProjectContainer>
                <BoldTitle>Projects</BoldTitle>
                <PlusIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50">
                  <rect fill="currentColor" x="24.5" width="1" height="50"/>
                  <rect fill="currentColor" x="24.5" width="1" height="50" transform="translate(50) rotate(90)"/>
                </PlusIcon>
              </ProjectContainer>
            </ProjectSection>
          </LowerLeftSection> 
          <ExperienceSection onClick={() => navigate('/experience')}>
            <ExperienceContainer>
              <BoldTitle>Experience</BoldTitle>
              <ArrowIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.49 45.68" fill="none" stroke="currentColor" strokeMiterlimit="10">
                <polyline points=".29 .41 32.61 22.84 .29 45.27" />
              </ArrowIcon>
            </ExperienceContainer>
          </ExperienceSection>
        </MainGrid>
      </Main>
    </>
  );
}

const Main = styled.div`
  position: relative;
  flex-grow: 1;
  height: calc(100vh - 175px);
  width: 100%;


  @media (max-width: 576px) {
    height: calc(100vh - 80px);
    overflow-y: auto;
    /* background-color: red; */
  }
`;
const MainGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  height: 100%;
  box-sizing: border-box;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 2fr 1fr;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    margin-bottom: 100px;
    /* grid-template-rows: auto repeat(4, 1fr);  */
    /* height: calc(100vh - 100px); */
    /* overflow-y: auto; */
    /* height: 100vh; */
  }
`;

/* The home bento is flush and square, the way it was originally: cells butt
   against each other and share a single hairline, so they take the glass fill
   but none of the panel chrome. A rim would ring all four sides of every cell
   and double up into a 3px seam wherever two of them meet, and a radius would
   leave gaps at the joins. */
const GridSection = styled(GlassPanel)`
  height: 100%;
  ${flushPanel}
  border-left: 0.5px solid var(--dividing-line);
  border-bottom: 0.5px solid var(--dividing-line);
`;
const ImageSection = styled(GridSection)`
  position: relative;
  overflow: hidden;
  background: transparent;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
`;

const SceneLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
  
const DescriptionText = styled.p`
  font-size: 16px;
  font-weight: 200;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 40px;
  line-height: 3;

  @media (max-width: 1200px) {
    font-size: 16px;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 35px;
  }

  @media (max-width: 992px) {
    font-size: 14px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 30px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 25px;
  }

  @media (max-width: 576px) {
    font-size: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 0px;
    padding-bottom: 0px;
  }
`
const DescriptionSection = styled(GridSection)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 576px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`
const LowerLeftSection = styled(GridSection)`
  display: flex;
  /* Transparent shell: the inner ProjectSection carries the glass panel,
     so strip this wrapper's chrome to avoid doubled borders and blur. */
  border: 0;
  overflow: visible;
  background: transparent;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  box-shadow: none;

  &::before,
  &::after {
    display: none;
  }
`;

const BoldTitle = styled.a`
  ${hoverTitle}
  font-size: 40px;
  font-weight: bolder;
  padding-right: 15%;

  @media (max-width: 1200px) {
    font-size: 35px;
  padding-right: 15%;
  }

  @media (max-width: 992px) {
    font-size: 30px;
  padding-right: 10%;
  }

  @media (max-width: 768px) {
    font-size: 25px;
  padding-right: 8%;
  }

  @media (max-width: 576px) {
    font-size: 20px;
  padding-right: 5%;
  }
`;

const PlusIcon = styled.svg`
  ${hoverIcon}
  height: 115px;
  width: 115px;

  @media (max-width: 1200px) {
    height: 100px;
    width: 100px;
  }

  @media (max-width: 992px) {
    height: 85px;
    width: 85px;
  }

  @media (max-width: 768px) {
    height: 70px;
    width: 70px;
  }

  @media (max-width: 576px) {
    height: 55px;
    width: 55px;
  }
`

const ArrowIcon = styled.svg`
  ${hoverIcon}
  height: 115px;
  width: 115px;

  @media (max-width: 1200px) {
    height: 100px;
    width: 100px;
  }

  @media (max-width: 992px) {
    height: 85px;
    width: 85px;
  }

  @media (max-width: 768px) {
    height: 70px;
    width: 70px;
  }

  @media (max-width: 576px) {
    height: 55px;
    width: 55px;
  }
`

const ProjectSection = styled(GridSection)`
  cursor: pointer;
  
  display: flex;
  align-items: center;  
  justify-content: center;

  flex-basis: 100%;

  ${hoverPanelTransition}
  padding: 0 20px;

  &:hover {
    ${hoverLit}

    ${BoldTitle} {
      color: ${HOVER_INK};
    }

    ${PlusIcon} {
      transform: rotate(90deg);  /* Rotate the image 90 degrees on hover */
      color: ${HOVER_INK};
    }

    ${ArrowIcon} {
      transform: scaleX(-1);
      color: ${HOVER_INK};
    }
  }
`
const ProjectContainer = styled.div`
  /* The blue hover wash lives on this overlay rather than on the section's
     own background: CSS cannot transition a gradient, so swapping the
     background made the highlight snap in while the title and icon animated.
     Fading an overlay's opacity gives it the same timing as the rest. */
  &::before {
    ${hoverWashLayer}
  }

  ${ProjectSection}:hover &::before {
    opacity: 1;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* margin-bottom: 40px; */

  @media (max-width: 576px) {
    margin-bottom: 0;
  }
`

const ExperienceSection = styled(ProjectSection)`
  cursor: pointer;
`

const ExperienceContainer = styled(ProjectContainer)`
  
`
 