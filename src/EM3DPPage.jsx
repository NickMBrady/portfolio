import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Nav, NavLogoSection, LogoBox, Logo, NBTitle, NavLinkSection, LinkBox } from './NavBarComponent';
import GlassGlobalStyle from './GlassGlobalStyle';
import { BubbleDiv, KeywordBubble } from './Bubbles';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Main, ContentContainer, BoldTitle, Paragraph, PdfContainer } from './ProjectComponents';

import logoImg from "/assets/nb-logo.png";
import PdfViewer from './PdfViewer';
import pdfUrl from '/assets/3DEm/em3dp.pdf';

export default function EM3DPPage() {

  return (
    <>
      <GlassGlobalStyle $compactNav $flushNav />
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
          <BoldTitle>Enhancing FDM 3D Printing with Electro&shy;magnetic Control</BoldTitle>
          <BubbleDiv>
                  <KeywordBubble>3D Printing</KeywordBubble>
                  <KeywordBubble>Electronics and Microcontrollers</KeywordBubble>
                  <KeywordBubble>Procedural Modeling</KeywordBubble>
                  <KeywordBubble>C++</KeywordBubble>
          </BubbleDiv>
          <Paragraph>
          I developed a software and hardware system to actively predict and cancel system vibrations, eliminating print artifacts using rapid electromagnetic actuation to produce inverse vibrations in the extruder. Additionally, I created a workflow employing high-frequency electromagnetic pulses to create fine surface patterns on printed objects, achieving an aesthetic texture that hides print layer lines without sacrificing dimensional accuracy, material overuse, or print time.
          </Paragraph>
          <PdfContainer>
            <PdfViewer fileUrl={pdfUrl}/>
          </PdfContainer>
        </ContentContainer>
      </Main>
    </>
  );
}

/* Layout-only widening of the shared nav link section; the glass treatment of
   the nav itself comes from GlassGlobalStyle. */
const WideNavLinkSection = styled(NavLinkSection)`
  flex-basis: 100%;
`


