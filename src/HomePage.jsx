import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Nav, NavLogoSection, NavLinkSection, NavAboutSection, NBTitle, LogoBox, LinkBox, Logo } from './NavBarComponent';
import { useNavigate } from 'react-router-dom';

import logoImg from "/assets/nb-logo.png";

export default function HomePage(){
  const navigate = useNavigate();

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
            <SplineWrapper>
              <Spline scene="https://prod.spline.design/uaj1TktepL98W7fs/scene.splinecode" />
            </SplineWrapper>
          </ImageSection>
          <DescriptionSection>
            <DescriptionText> Hi, I&apos;m a student at <strong>Duke University</strong> interested in <strong>machine learning, software development, and biomedical engineering.</strong> </DescriptionText>
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

const GlobalStyle = createGlobalStyle`
  :root {
    --light-gray: #b7b7b7;
    --dividing-line: #303f4d;
    --background: #f5f5f5;
  }


  h1, h2, h3, a, p, span{
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

`
const Main = styled.div`
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
  display: grid;
  height: 100%;
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

const GridSection = styled.div`
  height: 100%;
  border-bottom: 0.5px solid var(--dividing-line);
  border-left: 0.5px solid var(--dividing-line);
`;
const ImageSection = styled(GridSection)`
  border-left: 0px;
  position: relative;
  overflow: hidden;
`;

const SplineWrapper = styled.div`
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
  border-left: 0px;
`;

const BoldTitle = styled.a`
  font-size: 40px;
  font-weight: bolder;
  padding-right: 15%;
  transition: color 1s ease;

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
  height: 115px;
  width: 115px;

  transition: transform 0.5s ease;
  color: #a2aebe;

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
  height: 115px;
  width: 115px;
  transition: transform 0.5s ease;
  color: #a2aebe;

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

  transition: background-color 0.3s ease;
  padding: 0 20px;

  &:hover {
    background-color: #a2aebe;  /* Color on hover */
    
    ${BoldTitle} {
      color: #1a2937;  /* Text color on hover */
    }

    ${PlusIcon} {
      transform: rotate(90deg);  /* Rotate the image 90 degrees on hover */
      color: #1a2937; 
    }

    ${ArrowIcon} {
      transform: scaleX(-1);
      color: #1a2937; 
    }
  }
`
const ProjectContainer = styled.div`
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
 