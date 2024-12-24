import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Nav, NavLogoSection, NavLinkSection, NBTitle, LogoBox, LinkBox, Logo } from './NavBarComponent';
import logoImg from "/assets/nb-logo.png";

import headshotImg from "/assets/headshot.png";

export default function AboutPage() {
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
          <AboutSection>
            <BoldTitle>About</BoldTitle>
          </AboutSection>
          <DescriptionSection>
            <Section>
              <RoundedImage src={headshotImg} alt="Headshot" />
              <AboutHeaderText> Hi! I’m a student at Duke University interested in machine learning, software development, and biomedical engineering.
              </AboutHeaderText>
            </Section>
            <DescriptionText>
              Thank you so much for taking the time to visit my website! I'm from Massachusetts, and it
              was in our garage and basement that I got my start with engineering. I was fascinated that with
              only a 3D printer and some tools I had the capacity to solve real problems. My longest-running
              project, moldable and procedural prosthetic and orthotic devices, got its start then when I set out to make a
              better shoe insert for my brother, a limb-length discrepancy patient.
              <br /><br />
              Over the years I steadily gravitated toward computer science exclusively, particularly machine learning.
              Working with computers grants me the same problem-solving power as in the real world, but is innately
              less restrained. With more freedom comes more ability, and unlike the physical world, I have never once
              sat in front of a computer and felt there was something I physically could not do. It is this passion,
              combined with an extremely high standard for my work, that I believe sets me apart.
              <br /><br />
              The 'Projects' section features a tour of my favorite work over the years. For more information, including
              instructions, files, code, and everything else, please visit the Github repository link for each.
              <br /><br />

            </DescriptionText>
          </DescriptionSection>
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
`;

const MainGrid = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 10% 90%;
`;

const AboutSection = styled.div`
  display: flex;
  align-items: flex-start; /* Align items to the top */
  justify-content: center;
  border-left: 0.5px solid var(--dividing-line);
  border-bottom: 0.5px solid var(--dividing-line);
`;

const DescriptionSection = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  /* justify-content: center; */
  border-left: 0.5px solid var(--dividing-line);
  border-bottom: 0.5px solid var(--dividing-line);
  
  @media (max-width: 576px) {
    padding-bottom: 100px;
  }
`;

const DescriptionText = styled.p`
  margin-top: 50px;
  font-size: 16px;
  font-weight: 200;
  padding: 30px;
  line-height: 1.5;
  
  @media (max-width: 576px) {
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

const RoundedImage = styled.img`
  /* max-height: 300px; */
  height: 100%;
  max-height: 500px;
  max-width: 30%;
  display: block;
  object-fit: cover;

  @media (max-width: 800px) {
    max-width: 40%;
  }
  
  @media (max-width: 500px) {
    max-width: 100%;
    width: 100%;
  }
`

const Section = styled.div`
  width: 100%;
  border-bottom: 0.5px solid var(--dividing-line);
  display: flex;
  flex-direction: row;
  align-items: center;
  
  @media (max-width: 500px) {
    flex-direction: column;
  }
`

const AboutHeaderText = styled(DescriptionText)`
  font-size: 25px;
  margin-bottom: 50px;
  font-weight: 300; 
  padding: 0px 80px;

  @media (max-width: 800px) {
    font-size: 20px;
    padding-bottom: 20px;
    padding: 0px 40px;
  }

  @media (max-width: 500px) {
    font-size: 18px;
    padding: 0px 20px;
  }
`