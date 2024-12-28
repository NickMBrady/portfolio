import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Nav, NavLogoSection, LogoBox, Logo, NBTitle, NavLinkSection, LinkBox } from './NavBarComponent';

import logoImg from "/assets/nb-logo.png";
export default function ExperiencePage() {
  return (
    <>
      <GlobalStyle />  {/* Apply global styles */}
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
        <MainGrid>
          <ExperienceSection>
            <BoldTitle>Experience</BoldTitle>
          </ExperienceSection>
          <ContentSection>
            <Row>
              <Column70>
                <ExperienceTitle>Software Engineering Intern at Specialty Materials, Inc.</ExperienceTitle>
                <ExperienceDate>June - October 2024</ExperienceDate>
                <Paragraph>Implemented a multi-output random forest regressor to predict material properties of boron-carbon composites, trained on a dataset generated through scripting Ansys Mechanical. Gave efficacy insights into untested composite combinations.  </Paragraph>
                <Paragraph>Implemented a state-of-the-art diffusion-based edge detection model to create automated boron grain segmentation and statistical characterization software. Reduced a 2-hour segmentation task to 10 minutes with 1.7% increase in accuracy.s</Paragraph>
                <Paragraph>Built software with a fully featured GUI for the automatic segmentation and statistical characterization of boron, tungsten, carbon, and polymer from cross-sectional images of a composite material. Decreased sample characterization time by 2x.</Paragraph>
              </Column70>
              <Column30>
                
              </Column30>
            </Row>
            <Row>
              <Column70>
                <ExperienceTitle>Research Intern at Harvard Surgical Navigation and Robotics Lab</ExperienceTitle>
                <ExperienceDate>Summer 2023</ExperienceDate>
                <Paragraph>Created an open-source 3D Slicer extension for the detection of and two-stage navigation toward kidney stones using a 
robotic ureteroscope. During gross guidance, preliminary targets are identified with hue, stabilized through temporal 
averaging, and validated with K-means grouping. Then, during fine guidance, a hue-and-lightness based region growing 
algorithm accurately segments stones in preparation for laser lithotripsy (ablation).  </Paragraph>
              </Column70>
              <Column30>

                
              </Column30>
            </Row>
            
          </ContentSection>
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

const Main = styled.div`
  flex-grow: 1;
  height: calc(100vh - 100px);
    overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  scrollbar-color: var(--dividing-line) var(--background); /* Firefox */
`;

const MainGrid = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 10% 90%;
`;

const ExperienceSection = styled.div`
  display: flex;
  align-items: flex-start; /* Align items to the top */
  justify-content: center;
  border-left: 0.5px solid var(--dividing-line);
  border-bottom: 0.5px solid var(--dividing-line);
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start; /* Push items to the top */
  border-left: 0.5px solid var(--dividing-line);
  border-bottom: 0.5px solid var(--dividing-line);

  @media (max-width: 576px) {
    padding-bottom: 100px;
  }
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  /* margin-top: 20px; */
  /* margin-bottom: 80px; */
  border-bottom: 0.5px solid var(--dividing-line);
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Column70 = styled.div`
  flex-basis: 70%;
  padding: 70px;

  @media (max-width: 1000px) {
    padding: 25px;
  }
  @media (max-width: 800px) {
    padding: 30px;
    padding-bottom: 0px;
  }
`;

const Column30 = styled.div`
  padding: 20px;
  padding-top: 70px;

  @media (max-width: 800px) {
    padding-top: 0px; 
    padding-bottom: 30px;
  }
`;

const ExperienceDate = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin: 0;
  color: #868d94;
  padding-bottom: 20px;
`;

const ExperienceTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  padding-bottom: 5px;
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
    padding-bottom: 10px;
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
`;