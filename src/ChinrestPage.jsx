import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Slider from 'react-slick';
import Card from './UpdateCard';
import { Nav, NavLogoSection, LogoBox, Logo, NBTitle, NavLinkSection, LinkBox } from './NavBarComponent';
import { BubbleDiv, GithubBubble, KeywordBubble } from './Bubbles';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SampleNextArrow, SamplePrevArrow } from './SliderFunctions';
import { SliderContainer, Main, ContentContainer, BoldSubHeading, BoldTitle, SubHeading, ImageSliderDiv, SliderImage, Paragraph, Image } from './ProjectComponents';
import logoImg from "/assets/nb-logo.png";
import orthoticImg from "/assets/orthotic/moldingGif.gif";
import orthoticOrthoticImg from "/assets/orthotic/orthotic.jpg";
import img1 from "/assets/orthotic/1.jpg";
import img2 from "/assets/orthotic/2.jpg";
import img3 from "/assets/orthotic/3.jpg";
import v2Img from "/assets/prosthetic/V2Socket.jpg";
import smallSocket from "/assets/prosthetic/smallSocket.jpeg";
import smallSocket2 from "/assets/prosthetic/smallSocket2.jpeg";

import generationImg from "/assets/orthoticGen/generationGif.gif";
import modelImg from "/assets/orthoticGen/3D models.png";
import handshotImg from "/assets/orthoticGen/handShots.png";
import outlineImg from "/assets/orthoticGen/foot outline.png";

import moldingGif from "/assets/chinrest/molding.gif";
import curveGuidesImg from "/assets/chinrest/curve guides.jpg";
import edgeContoursImg from "/assets/chinrest/edgeContour.jpg";
import sideProfileImg from "/assets/chinrest/side profile.jpg";
import tableImg from "/assets/chinrest/table.jpg";
import unfilletedSideImg from "/assets/chinrest/unfilletedSide.jpg";
import mainImg from "/assets/chinrest/main.jpg";

export default function OrthoticProstheticPage() {

  const settings = {
    dots: true,
    adaptiveHeight: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const settingsImage = {
    dots: true,
    adaptiveHeight: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

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
          <BoldTitle>Novel Moldable, Ventilated Violin Chinrest</BoldTitle>
          <Paragraph>
I invented a novel moldable, ventilated violin chinrest that dramatically improves comfort from "one-size-fits-all" wood or plastic solutions. The rest is ventilated by design and prevents sweat buildup under jaw, all while being infinitely remoldable if the player's preferences change.  
          </Paragraph>
          <BubbleDiv>
            <GithubBubble onClick={() => window.open('https://github.com/NickMBrady/formRest', '_blank')}>
              Github
              <a href="https://github.com/NickMBrady/formRest" target="_blank" rel="noopener noreferrer" style={{ paddingLeft: '10px' }}>
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </a>
            </GithubBubble>
            <KeywordBubble>Material Dynamics</KeywordBubble>
            <KeywordBubble>3D Printing</KeywordBubble>
            <KeywordBubble>Procedural Modeling</KeywordBubble>
            <KeywordBubble>Python</KeywordBubble>
          </BubbleDiv>
          <Image src={moldingGif} alt="molding gif" />
          <SubHeading>
            Overview
          </SubHeading>
          <Paragraph>
          At 140 degrees fahrenheit the Form chinrest becomes highly moldable. Due to its porous construction, the rest can easily support compound curvature, 
          agnostic of axis, and will capture the formed shape when hardened. 
          <br />  <br /> 
          Because of the device's ability to capture minute aspects of curvature, it fits the player's jaw perfectly. The comfort provided is unparalleled, especially when compared to 
          the standard wooden or plastic rests available. The chinrest can be infinitely remoldable, allowing violinists to perfect the form and for players to change the geometry 
          years down the line. 
          <br />  <br /> 
          During a performance it is common for sweat to build up under the jaw, reducing friction and forcing the player to clamp harder to 
          keep the instrument in place. This solution is ventilated by design, allowing airflow under the jaw and eliminating sweat buildup. 
          <br />  <br />
          The rest is available in three heights 
          and can be 3D printed at home provided compatable, standard mounting hardware.
          </Paragraph>
          <SliderContainer style={{ paddingTop: 30 }}>
            <div className="slider-container">
              <Slider {...settingsImage}>
                <ImageSliderDiv>
                  <SliderImage src={mainImg} alt="Orthotic Device" />
                </ImageSliderDiv>
                <ImageSliderDiv>
                  <SliderImage src={curveGuidesImg} alt="Orthotic Device" />
                </ImageSliderDiv>
                <ImageSliderDiv>
                  <SliderImage src={edgeContoursImg} alt="Orthotic Device" />
                </ImageSliderDiv>
                <ImageSliderDiv>
                  <SliderImage src={sideProfileImg} alt="Orthotic Device" />
                </ImageSliderDiv>
                <ImageSliderDiv>
                  <SliderImage src={tableImg} alt="Orthotic Device" />
                </ImageSliderDiv>
                <ImageSliderDiv>
                  <SliderImage src={unfilletedSideImg} alt="Orthotic Device" />
                </ImageSliderDiv>
              </Slider>
            </div>
          </SliderContainer>
          <Paragraph>
            More details, including files and forming instructions, are available on Github.
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