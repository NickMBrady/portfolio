import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Nav, NavLogoSection, LogoBox, Logo, NBTitle, NavLinkSection, LinkBox } from './NavBarComponent';
import { BubbleDiv, GithubBubble, KeywordBubble } from './Bubbles';
import { Main, ContentContainer, BoldTitle, SubHeading, Paragraph, Image, YouTubeContainer } from './ProjectComponents';
import logoImg from "/assets/nb-logo.png";
import linearStageImg from "/assets/linearStage/linearStage.png";
import linearStageGif from "/assets/linearStage/linearGif.gif";

export default function LinearStagePage() {
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
          <BoldTitle>High Precision Linear Stage</BoldTitle>
          <Paragraph>
         Exercise in rapid prototyping and manual machining: medium-high precision linear stage. 
          </Paragraph>
          <BubbleDiv>
            <KeywordBubble>Rapid Prototyping</KeywordBubble>
            <KeywordBubble>Metal Fabrication</KeywordBubble>
            <KeywordBubble>Manual Machining</KeywordBubble>
          </BubbleDiv>
          <Image src={linearStageImg} alt="Linear stage mechanism" />
          <SubHeading>
          Design Requirements
          </SubHeading>
          <Paragraph>
          I was tasked with creating a linear stage capable of high-precision (&lt;0.001") movement. The stage was required to 
          be easily manually controlled and be completed in only one week. Additionally, the stage was required to be able to be easily 
          installed at any point on the production line.  
          </Paragraph>
          <SubHeading>
          Design
          </SubHeading>
          <Paragraph>
          Given the stringent time requirements, my design options were limited to materials on hand. In this case, the simplest option was 
          the best one: sliding steel flat bar and a large threaded rod. To save time for fabrication I opted to skip CAD and go build straight 
          from a sketch.
          <br />  <br />
          While sketching, several ideas occured to me to improve the design. I designed a dovetail channel to stabilize the motion. I also pre-calculated 
          speeds and feeds to mimic a hand-scraping (or frosted) surface on the slides. This slight deviation extends the life of the assembly by permitting 
          particulate to settle in the grooves that also hold oil to maintain lubrication. 
          <br />  <br />
          To assist with easy, flexible installation of the slide, I opted for a nmagnetic mounting solution. After calculating the required force and 
          attachment footprint, I proceeded with the design of an appropriate base. 
          </Paragraph>
          <SubHeading>
          Fabrication
          </SubHeading>
          <Paragraph>
          Given the time constraints, but also comparitive simplicity of this project, I alone undertook machining. The most difficult parts were the slides, 
          by far, which required significant care to ensure a correct tolerance. The frosted surfaces were also difficult to machine effectively. 
          <br />  <br />
          </Paragraph>
          <SubHeading>
          Demo Video
          </SubHeading>
          <YouTubeContainer>
            <iframe
              src="https://www.youtube.com/embed/_lOnIngQAzs?mute=1"
              title="High Precision Linear Stage Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </YouTubeContainer>
          <SubHeading>Performance</SubHeading>
          <Paragraph>
            After building the device it was successfully installed and used on the active line. 
          </Paragraph>
          <Image src={linearStageGif} alt="Linear stage mechanism" />
          <Paragraph>
            To quantify performance I affixed a dial indicator to the output. An operator was able to easily achieve
            sub-thousandth precision by hand (each large tick on the indicator is 10 thousandths).
          </Paragraph>
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
