import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Nav, NavLogoSection, NavLinkSection, NavAboutSection, NBTitle, LogoBox, LinkBox, Logo } from './NavBarComponent';
import { useNavigate } from 'react-router-dom';
import NoiseControls from './NoiseControls';
import DotSphere from './DotSphere';

import logoImg from "/assets/nb-logo.png";

export default function HomePage(){
  const navigate = useNavigate();

  return (
    <>
      <GlobalStyle />  
      {import.meta.env.DEV && <NoiseControls />}
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

const GlobalStyle = createGlobalStyle`
  :root {
    --light-gray: #cdd6e0;
    --dividing-line: rgba(150, 178, 208, 0.14);
    --background: #f5f5f5;
    --glass-fill: linear-gradient(155deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.012) 45%, rgba(120, 150, 190, 0.025) 100%);
    --noise-size: 610px;
    --noise-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncR type='linear' slope='5.0000' intercept='-3.0000'/%3E%3CfeFuncG type='linear' slope='5.0000' intercept='-3.0000'/%3E%3CfeFuncB type='linear' slope='5.0000' intercept='-3.0000'/%3E%3CfeFuncA type='linear' slope='0' intercept='1'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    --accent-teal: #4a9fe0;
    --accent-violet: #5f7ce8;
  }

  body {
    background-color: #04070c;
    background-image:
      radial-gradient(1200px 820px at 10% 6%, rgba(56, 132, 214, 0.08), transparent 60%),
      radial-gradient(1050px 900px at 90% 94%, rgba(80, 115, 220, 0.09), transparent 60%),
      radial-gradient(900px 700px at 78% 12%, rgba(56, 132, 214, 0.06), transparent 55%),
      linear-gradient(158deg, #06090f 0%, #081019 45%, #04070d 100%);
    background-attachment: fixed;
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
    color: #eef3f8;
  }

  /* Main-page-only glass treatment for the shared nav bar. These rules live in
     HomePage's scoped GlobalStyle, so they unmount with the page and never
     affect other pages that import Nav. Doubled selectors win specificity
     over the component's own width/border rules. */
  ${Nav}${Nav} {
    position: relative;
    width: auto;
    margin: 9px 11px 0;
    box-sizing: border-box;
    border: 1px solid var(--dividing-line);
    border-radius: 22px;
    overflow: hidden;
    background: var(--glass-fill);
    backdrop-filter: blur(7px) saturate(120%);
    -webkit-backdrop-filter: blur(7px) saturate(120%);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.06),
      inset 1px 0 0 rgba(255, 255, 255, 0.025),
      inset 0 -14px 26px -20px rgba(3, 8, 16, 0.65),
      -2px -2px 12px -6px rgba(110, 165, 245, 0.24),
      2px 3px 14px -6px rgba(100, 135, 240, 0.28),
      0 18px 40px -22px rgba(0, 0, 0, 0.55);
  }

  /* Same spectral rim reflection as the bento cells. */
  ${Nav}${Nav}::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    border-radius: inherit;
    padding: 1.5px;
    pointer-events: none;
    background: conic-gradient(from 0deg at 50% 50%,
      rgba(255, 255, 255, 0.10) 0deg,
      rgba(255, 255, 255, 0.04) 40deg,
      rgba(120, 180, 255, 0.09) 95deg,
      rgba(255, 255, 255, 0.28) 132deg,
      rgba(130, 160, 255, 0.12) 168deg,
      rgba(255, 255, 255, 0.03) 215deg,
      rgba(125, 180, 255, 0.12) 285deg,
      rgba(255, 255, 255, 0.50) 315deg,
      rgba(140, 165, 255, 0.16) 338deg,
      rgba(255, 255, 255, 0.10) 360deg);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
  }

  ${Nav}${Nav}::after {
    content: "";
    position: absolute;
    inset: 2px;
    border-radius: 20px;
    pointer-events: none;
    /* 100% textured highlights: the grain itself is the light. The old smooth
       radials now live only in the mask, shaping where the noise shows. */
    background-image: var(--noise-image);
    background-size: var(--noise-size) var(--noise-size);
    mix-blend-mode: screen;
    opacity: 0.45;
    -webkit-mask-image:
      radial-gradient(460px 340px at 0% 0%, rgba(255, 255, 255, 0.58) 0%, rgba(255, 255, 255, 0.40) 30%, rgba(255, 255, 255, 0.20) 58%, rgba(255, 255, 255, 0.07) 80%, transparent 100%),
      radial-gradient(300px 240px at 100% 0%, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.19) 40%, rgba(255, 255, 255, 0.07) 72%, transparent 100%),
      radial-gradient(400px 300px at 100% 100%, rgba(255, 255, 255, 0.34) 0%, rgba(255, 255, 255, 0.21) 40%, rgba(255, 255, 255, 0.08) 72%, transparent 100%);
    mask-image:
      radial-gradient(460px 340px at 0% 0%, rgba(255, 255, 255, 0.58) 0%, rgba(255, 255, 255, 0.40) 30%, rgba(255, 255, 255, 0.20) 58%, rgba(255, 255, 255, 0.07) 80%, transparent 100%),
      radial-gradient(300px 240px at 100% 0%, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.19) 40%, rgba(255, 255, 255, 0.07) 72%, transparent 100%),
      radial-gradient(400px 300px at 100% 100%, rgba(255, 255, 255, 0.34) 0%, rgba(255, 255, 255, 0.21) 40%, rgba(255, 255, 255, 0.08) 72%, transparent 100%);
  }

  /* Same fading overlay as the bento cells: a gradient cannot be
     transitioned, so the wash rides on an overlay's opacity instead. The
     base component's grey hover fill is suppressed on this page. */
  ${NavAboutSection}${NavAboutSection} {
    position: relative;
    overflow: hidden;
  }

  ${NavAboutSection}${NavAboutSection}::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0;
    background: linear-gradient(135deg, rgba(74, 159, 224, 0.92) 0%, rgba(70, 110, 215, 0.9) 55%, rgba(95, 124, 232, 0.92) 100%);
    transition: opacity 0.45s ease;
  }

  ${NavAboutSection}${NavAboutSection}:hover {
    background-color: transparent;
  }

  ${NavAboutSection}${NavAboutSection}:hover::before {
    opacity: 1;
  }

  ${NavAboutSection}${NavAboutSection} a {
    position: relative;
    z-index: 1;
    transition: color 0.45s ease;
  }

  ${NavAboutSection}${NavAboutSection}:hover a {
    color: #0a0f16;
  }

  @media (max-width: 576px) {
    ${Nav}${Nav} {
      margin: 6px 6px 0;
      border-radius: 16px;
    }

    ${Nav}${Nav}::after {
      border-radius: 14px;
    }
  }
`
const Main = styled.div`
  position: relative;
  flex-grow: 1;
  height: calc(100vh - 175px - 9px); /* accounts for the floating nav's top margin */
  width: 100%;


  @media (max-width: 576px) {
    height: calc(100vh - 80px - 6px); /* accounts for the floating nav's top margin */
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
  padding: 9px 11px 12px;
  gap: 8px;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 2fr 1fr;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    padding: 6px;
    gap: 6px;
    margin-bottom: 100px;
    /* grid-template-rows: auto repeat(4, 1fr);  */
    /* height: calc(100vh - 100px); */
    /* overflow-y: auto; */
    /* height: 100vh; */
  }
`;

const GridSection = styled.div`
  position: relative;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid var(--dividing-line);
  border-radius: 22px;
  overflow: hidden;
  background: var(--glass-fill);
  backdrop-filter: blur(7px) saturate(120%);
  -webkit-backdrop-filter: blur(7px) saturate(120%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.06),
    inset 1px 0 0 rgba(255, 255, 255, 0.025),
    inset 0 -14px 26px -20px rgba(3, 8, 16, 0.65),
    -2px -2px 12px -6px rgba(110, 165, 245, 0.24),
    2px 3px 14px -6px rgba(100, 135, 240, 0.28),
    0 18px 40px -22px rgba(0, 0, 0, 0.55);

  /* Contour light: a spectral rim reflection hugging the fillets. The conic
     gradient peaks white at the top-left light source with cyan/violet
     dispersion fringes on either side (chromatic aberration), and a cooler
     secondary glint at the bottom-right. Masked to a 1.5px ring. */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    border-radius: inherit;
    padding: 1.5px;
    pointer-events: none;
    background: conic-gradient(from 0deg at 50% 50%,
      rgba(255, 255, 255, 0.10) 0deg,
      rgba(255, 255, 255, 0.04) 40deg,
      rgba(120, 180, 255, 0.09) 95deg,
      rgba(255, 255, 255, 0.28) 132deg,
      rgba(130, 160, 255, 0.12) 168deg,
      rgba(255, 255, 255, 0.03) 215deg,
      rgba(125, 180, 255, 0.12) 285deg,
      rgba(255, 255, 255, 0.50) 315deg,
      rgba(140, 165, 255, 0.16) 338deg,
      rgba(255, 255, 255, 0.10) 360deg);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
  }

  /* Filleted-corner glints: soft light pooling in the top-left radius,
     with a faint violet fillet catching the lower-right. */
  &::after {
    content: "";
    position: absolute;
    inset: 2px;
    border-radius: 20px;
    pointer-events: none;
    /* 100% textured highlights: the grain itself is the light. The old smooth
       radials now live only in the mask, shaping where the noise shows. */
    background-image: var(--noise-image);
    background-size: var(--noise-size) var(--noise-size);
    mix-blend-mode: screen;
    opacity: 0.45;
    -webkit-mask-image:
      radial-gradient(460px 340px at 0% 0%, rgba(255, 255, 255, 0.58) 0%, rgba(255, 255, 255, 0.40) 30%, rgba(255, 255, 255, 0.20) 58%, rgba(255, 255, 255, 0.07) 80%, transparent 100%),
      radial-gradient(300px 240px at 100% 0%, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.19) 40%, rgba(255, 255, 255, 0.07) 72%, transparent 100%),
      radial-gradient(400px 300px at 100% 100%, rgba(255, 255, 255, 0.34) 0%, rgba(255, 255, 255, 0.21) 40%, rgba(255, 255, 255, 0.08) 72%, transparent 100%);
    mask-image:
      radial-gradient(460px 340px at 0% 0%, rgba(255, 255, 255, 0.58) 0%, rgba(255, 255, 255, 0.40) 30%, rgba(255, 255, 255, 0.20) 58%, rgba(255, 255, 255, 0.07) 80%, transparent 100%),
      radial-gradient(300px 240px at 100% 0%, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.19) 40%, rgba(255, 255, 255, 0.07) 72%, transparent 100%),
      radial-gradient(400px 300px at 100% 100%, rgba(255, 255, 255, 0.34) 0%, rgba(255, 255, 255, 0.21) 40%, rgba(255, 255, 255, 0.08) 72%, transparent 100%);
  }

  @media (max-width: 576px) {
    border-radius: 16px;

    &::after {
      border-radius: 14px;
    }
  }
`;
const ImageSection = styled(GridSection)`
  position: relative;
  overflow: hidden;
  background: transparent;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  box-shadow:
    -2px -2px 12px -6px rgba(110, 165, 245, 0.24),
    2px 3px 14px -6px rgba(100, 135, 240, 0.28),
    0 18px 40px -22px rgba(0, 0, 0, 0.55);
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
  position: relative;
  z-index: 1;
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
  position: relative;
  z-index: 1;
  height: 115px;
  width: 115px;

  transition: transform 0.5s ease, color 0.4s ease;
  color: #9fc0e4;

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
  position: relative;
  z-index: 1;
  height: 115px;
  width: 115px;
  transition: transform 0.5s ease, color 0.4s ease;
  color: #9fc0e4;

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

  transition: box-shadow 0.45s ease, border-color 0.45s ease;
  padding: 0 20px;

  &:hover {
    border-color: rgba(255, 255, 255, 0.35);
    box-shadow:
      inset 0 0 80px rgba(255, 255, 255, 0.18),
      inset 0 1px 0 rgba(255, 255, 255, 0.35),
      0 0 45px rgba(80, 140, 240, 0.20);

    ${BoldTitle} {
      color: #0a0f16;  /* Text color on hover */
    }

    ${PlusIcon} {
      transform: rotate(90deg);  /* Rotate the image 90 degrees on hover */
      color: #0a0f16;
    }

    ${ArrowIcon} {
      transform: scaleX(-1);
      color: #0a0f16;
    }
  }
`
const ProjectContainer = styled.div`
  /* The blue hover wash lives on this overlay rather than on the section's
     own background: CSS cannot transition a gradient, so swapping the
     background made the highlight snap in while the title and icon animated.
     Fading an overlay's opacity gives it the same timing as the rest. */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0;
    background: linear-gradient(135deg, rgba(74, 159, 224, 0.92) 0%, rgba(70, 110, 215, 0.9) 55%, rgba(95, 124, 232, 0.92) 100%);
    transition: opacity 0.45s ease;
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
 