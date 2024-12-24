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
          <BoldTitle>Moldable Orthopedic Prosthetic Algorithmic Generation
          </BoldTitle>
          <Paragraph>
            Leveraging a novel thermal workflow, this repo outlines my work on algorithmically generated moldable orthotic and prosthetic solutions that deliver superior functionality and comfort.
          </Paragraph>
          <Paragraph>
            Employing the gyroid minimal surface as the principle structural element, the resulting devices are highly moldable, agnostic of axis. Due to the accessible thermal characteristics of popular thermoplastics, healthcare providers and patients are able to form a custom shape that hardens in minutes and can be remolded following subsequent heating. Coupled with elastic plastics such as TPU, cushioned areas complement the rigid molded structure for comfort and control.
          </Paragraph>
          <BubbleDiv>
            <GithubBubble onClick={() => window.open('https://github.com/NickMBrady/orthopedicProstheticGeneration', '_blank')}>
              Github
              <a href="https://github.com/NickMBrady/orthopedicProstheticGeneration" target="_blank" rel="noopener noreferrer" style={{ paddingLeft: '10px' }}>
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </a>
            </GithubBubble>
            <KeywordBubble>Material Dynamics</KeywordBubble>
            <KeywordBubble>3D Printing</KeywordBubble>
            <KeywordBubble>Procedural Modeling</KeywordBubble>
            <KeywordBubble>Python</KeywordBubble>
          </BubbleDiv>
          <Image src={orthoticImg} alt="Orthotic Device" />
          <SliderContainer>
            <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <h3>
                    <Card
                      title="New Thermal Molding Workflow"
                      date="January 24, 2024"
                      description="Through testing of full-sized models, I have developed a new thermal workflow for molding of From prosthetic devices. First, the inner diameter of the device is widened using a tool capable of high-strength radial expansion. The device is then cooled in the expanded form and placed on the patient. Finally, a secondary heat source is used to reheat the device in-place. The second heat softly returns the socket to its original position, forming exactly to the residual limb."
                    />
                  </h3>
                </div>
                <div>
                  <h3>
                    <Card
                      title="Form Prosthetic Socket V2 Developed"
                      date="October 9, 2024"
                      description="With my learnings from the original prototype, the new thermal molding workflow, and the invaluable experience of 2ft Prosthetics, I am pleased to announce Form Prosthetic Socket V2. This iteration has improved high-temperature resistance, a modified geometry for superior rigidity, and is natively compatible with hardware and silicone sleeves from ST&G Corporation. This model is currently undergoing a comprehensive evaluation by 2ft Prosthetics."
                    />
                  </h3>
                </div>
                <div>
                  <h3>
                    <Card
                      title="Partnership with 2ft Prosthetics"
                      date="October 9, 2024"
                      description="I am overjoyed to announce the beginning of a partnership with 2ft Prosthetics, a nonprofit organization that serves amputees in underprivileged regions. One of the organization's engineers and I will continue the development of my moldable prosthetic socket and orthotic solutions and evaluate them for practical use."
                    />
                  </h3>
                </div>
                <div>
                  <h3>
                    <Card
                      title="Completion of Orthotic and Prosthetic Generative Algorithms"
                      date="November 8, 2023"
                      description="Today marks the completion of the generative algorithms for my orthotic and prosthetic solutions. Users may now use the software workflow --- fully outlined on the documentation page --- to generate the digital model of their medical aid from only images of their anatomy."
                    />
                  </h3>
                </div>
              </Slider>
            </div>
          </SliderContainer>
          <BoldSubHeading>
            Projects
          </BoldSubHeading>
          <SubHeading>
            Orthotic Insert
          </SubHeading>
          <SliderContainer style={{ paddingTop: 30 }}>
            <div className="slider-container">
              <Slider {...settingsImage}>
                <ImageSliderDiv>
                  <SliderImage src={orthoticOrthoticImg} alt="Orthotic Device" />
                </ImageSliderDiv>
                <ImageSliderDiv>
                  <SliderImage src={img1} alt="Orthotic Device" />
                </ImageSliderDiv>
                <ImageSliderDiv>
                  <SliderImage src={img2} alt="Orthotic Device" />
                </ImageSliderDiv>
                <ImageSliderDiv>
                  <SliderImage src={img3} alt="Orthotic Device" />
                </ImageSliderDiv>
              </Slider>
            </div>
          </SliderContainer>
          <Paragraph>
            Designed for limb-length discrepancy and asymmetry patients, the moldable insert conforms to support and cushion. A hyper-moldable structure of rigid PLA plastic comprises the majority of the height. A thin layer of flexible TPU is printed on top for elastic cushioning.
          </Paragraph>
          <Paragraph>
            Project files and detailed forming instructions are available on Github.
          </Paragraph>
          <SubHeading>
            Prosthetic Socket
          </SubHeading>
          <div>
            <SliderContainer style={{ paddingTop: 30, maxWidth: '600px', margin: '0 auto' }}>
              <div className="slider-container">
                <Slider {...settingsImage}>
                  <ImageSliderDiv >
                    <SliderImage src={v2Img} alt="Orthotic Device" />
                  </ImageSliderDiv>
                  <ImageSliderDiv>
                    <SliderImage src={smallSocket} alt="Orthotic Device" />
                  </ImageSliderDiv>
                  <ImageSliderDiv>
                    <SliderImage src={smallSocket2} alt="Orthotic Device" />
                  </ImageSliderDiv>
                </Slider>
              </div>
            </SliderContainer>
          </div>
          <Paragraph>
           Targeted as a temporary or low-cost alternative, the prosthetic socket can be formed to precisely accomodate the residual limb.
          </Paragraph>
          <Paragraph>
          Traditional polypropelene workflows require involved molding and casting, a costly and time-consuming process. This workflow allows for a socket of approximate fit to be precisely contoured to the patient's limb in minutes and at a fraction of the cost.
          </Paragraph>
          <Paragraph>
            Project files and detailed forming instructions are available on Github.
          </Paragraph>
          <BoldSubHeading>
            Orthotic Insert and Prosthetic Generative Algorithm
          </BoldSubHeading>
          <Paragraph>
            The orthotic and prosthetic generative workflows operate in theree stages: image aquisition, algorithmic processing, and 3D generation.
          </Paragraph>
<SliderContainer style={{ paddingTop: 30 }}>
            <div className="slider-container">
              <Slider {...settingsImage}>
                <ImageSliderDiv>
                  <SliderImage src={generationImg} alt="Orthotic Device" />
                </ImageSliderDiv>
                <ImageSliderDiv>
                  <SliderImage src={modelImg} alt="Orthotic Device" />
                </ImageSliderDiv>
                <ImageSliderDiv>
                  <SliderImage src={handshotImg} alt="Orthotic Device" />
                </ImageSliderDiv>
                <ImageSliderDiv>
                  <SliderImage src={outlineImg} alt="Orthotic Device" />
                </ImageSliderDiv>
              </Slider>
            </div>
          </SliderContainer>
          <SubHeading>
            Orthotic Generation
          </SubHeading>
          <Paragraph>
            A patient first traces their existing shoe insole on standard, letter paper and takes a picture. The script corrects for distortion and applies morphological operations to vertically align and segment the outline. The outline is measured using scale inferred from the paper and dimensions are passed to Blender, where an insole of specified height is constructed.
          </Paragraph>
          <SubHeading>
            Prosthetic Generation
          </SubHeading>
          <Paragraph>
            A patient first longitudinally places green markers of known distance on the appendage: two dorsally, two radially. A dorsal and radial picture is taken, and the two images undergo initial processing separately. The algorithm identifies the markers, then distortion corrects, scales, and vertically aligns the image. Multiple morphological operations are applied to segment and outline the apendage, per axis. The outline is measured using scale inferred from the markers, and dorsal and radial dimensions are passed to Blender at several cross sections. With an additional length criteria specified, a socket of specified curvature and size is constructed.
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