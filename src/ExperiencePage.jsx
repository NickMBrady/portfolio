import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Nav, NavLogoSection, LogoBox, Logo, NBTitle, NavLinkSection, LinkBox } from './NavBarComponent';
import GlassGlobalStyle from './GlassGlobalStyle';
import GlassPanel from './GlassPanel';

import logoImg from "/assets/nb-logo.png";
export default function ExperiencePage() {
  return (
    <>
      <GlassGlobalStyle />
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

const WideNavLinkSection = styled(NavLinkSection)`
  flex-basis: 100%;
`

const Main = styled.div`
  flex-grow: 1;
  /* The nav is a floating panel now, so its 9px top margin comes off the
     scroll area as well as its own height. */
  height: calc(100vh - 100px - 9px);
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  scrollbar-color: var(--dividing-line) var(--background); /* Firefox */

  @media (max-width: 576px) {
    height: calc(100vh - 100px - 6px); /* the nav's margin narrows here */
  }
`;

const MainGrid = styled.div`
  display: grid;
  /* min-height, not height: the glass panels below clip their overflow, so
     the row has to grow to the full scrolled length instead of stopping at
     one viewport. Short content still stretches to fill, as before. */
  min-height: 100%;
  box-sizing: border-box;
  /* Lines the columns up with the floating nav's margins. */
  padding: 9px 11px 12px;
  grid-template-columns: 10% 90%;

  @media (max-width: 576px) {
    padding: 6px 6px 12px;
  }
`;

/* The two columns were drawn with hairline rules; as glass they become the
   panels themselves. The 4px margins meet in the middle for a gutter the
   width of the home page's bento gap. */
const ExperienceSection = styled(GlassPanel)`
  display: flex;
  align-items: flex-start; /* Align items to the top */
  justify-content: center;
  margin-right: 4px;
`;

const ContentSection = styled(GlassPanel)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start; /* Push items to the top */
  margin-left: 4px;

  @media (max-width: 576px) {
    padding-bottom: 100px;
  }
`;

/* Kept as a hairline: inside a panel it reads as an internal divider rather
   than a frame, and it picks up the new --dividing-line automatically. */
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
  color: var(--muted-ink);
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