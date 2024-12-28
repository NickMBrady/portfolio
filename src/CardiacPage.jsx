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
import { SliderContainer, Main, ContentContainer, BoldSubHeading, BoldTitle, SubHeading, HCenter, ImageSliderDiv, SliderImage, Paragraph, Image } from './ProjectComponents';
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

import cardiacImg from "/assets/cardiac/main.jpeg";
import flowConstrictorImg from "/assets/cardiac/flowConstrictor.png";
import accelerator from "/assets/cardiac/accelerator.gif";

export default function OrthoticProstheticPage() {

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
          <BoldTitle>Cardiac Simulator Capable of Controlled Pulsatile Flow</BoldTitle>
          <Paragraph>Engineered the hardware solution for an anatomically accurate fluid pump system, satisfying pressure and flow rate criteria, with simulated "heart beats": periodic modulations in flow pressure and velocity (pulsatile flow). </Paragraph>
          <Paragraph>
            This project was completed with a group as part of Duke University's Engineering 101 class. The work presented below, unless otherwise credited, was my contribution. 
          </Paragraph>
          <BubbleDiv>
            <KeywordBubble>3D Printing</KeywordBubble>
            <KeywordBubble>C++</KeywordBubble>
            <KeywordBubble>Arduino</KeywordBubble>
            <KeywordBubble>Fluid Dynamics</KeywordBubble>
          </BubbleDiv>
          <Image src={cardiacImg} alt="Orthotic Device" />
          <SubHeading>
            Background
          </SubHeading>
          <Paragraph>
            Students practice ultrasound techniques using a silicone vein replica, called a <strong>phantom</strong> (white block, pictured above). A fluid pump (<strong>cardiac simulator</strong>) is used 
            to simulate blood flow through the phantom. No simulator currently exists that is capable of modeling <strong>pulsatile flow</strong>, the heart's periodic 
            pressure modulation (beating). 
          <br></br> <br></br>
            <strong>
            Our team was tasked with developing a cardiac simulator capable of simulating both constant and pulsatile flow for ultrasonic observation 
            within a phantom.   
            </strong>
            &nbsp; I was tasked with designing and fabricating the hardware aspects of the project, including electronics, and collaborated on the control logic.   
          <br></br> <br></br>
            Additionally, several design requirements were specified: an adjustable flow velocity between 500 and 1000 mL/min, a minimum tube pressure 
            capable of supporting a weight of 12N with fewer than 3 mm of deflection, and adjustable pulsation frequency between 0 and 120 BPM. 
          </Paragraph>
          <SubHeading>
            Design Solution
          </SubHeading>
          <Paragraph>
            My final solution had 5 components: pump, flow constrictor, flow accelerator, phantom, and reservoir. 
          <br></br> <br></br>
            I chose a peristaltic pump because it allows for satisfactory flow velocity while generating the pressure required 
            to simulate the cardiovascular system. Pressure is generated with a constricted orifice at the outlet into the reservoir, 
            allowing the reservoir to be unpressurized for easier handling. The phantom is interfaced with directly via the tubes.  
          <br></br> <br></br>
            The flow constrictor is a 3D printed component that is placed inline, immediately after the pump. The device smoothly expands the diameter of the tube 
            to approximately four times its original size, then reduces back to the original. The gradual expansion and contraction allows the fluid to take multiple
            paths of different lengths, averaging out sharp changes in velocity and pressure. Thus, it smooths the uneven 
            flow generated by the individual rollers of the peristaltic pump. 
          </Paragraph>
          <Image src={flowConstrictorImg} alt="Orthotic Device" />
          <Paragraph>
            The flow accelerator adds controlled, rapid pulsations to the pump's flow. At first I attempted to modulate the pump's velocity 
            and create pulsatile flow directly. This approach didn't yield satisfactory control so I considered a solenoid valve that could periodically "cut" 
            the flow. This approach would have created momentary backflow in the tube and pump system, creating unpredictable results. I considered returning to 
            the drawing board and developing a flow system that relied on bladders instead, a solution that could have "natively" yielded pulsatile flow. 
          <br></br> <br></br>
            Ultimately, I settled on the flow accelerator solution, which uses a secondary roller to "push" the fluid at high speed, locally accelerating
            the flow. It works additively, without creating backflow in the system, and as a rotating device, can easily achieve high BPMs. To ensure that 
            pulsations are of equal magnitude regardless of frequency, the roller must have a constant velocity when contacting the tube. This is achieved
            through closed loop control with a limit switch, which controls the delay between each maximum velocity pulsation. 
          </Paragraph>
          <Image src={accelerator} alt="Orthotic Device" />
          <SubHeading>
            Electronics and Software
          </SubHeading>
          <Paragraph>
            Both motors are controlled by a single motor driver and an Arduino. The Arduino communicates via serial to a computer GUI, where the user can input values 
            for flow rate and pulsation frequency. The GUI is hosted in a Flask app, which manages serial communication. 
          </Paragraph>
          <SubHeading>
            Results
          </SubHeading>
          <Paragraph>
            The device met or exceeded all design criteria, including 0 to 132 BPM, a flow rate range of 340 to 1017 mL/min, and 2.2 mm of tube deflection under 15 N. 
            <br></br> <br></br>
            Time permitting, I would have liked to implement several improvements. First, replacing both motors and controllers with proper brushless systems and 
            optical encoders would permit much more accurate control. The higher torque and more precise control would be especially useful for the 
            flow accelerator. After engineering a system for accurate flow rate monitoring over time, a PID system can be implemented to fine tune the motor's
            pulsation profile. Using this system advanced flows can be created, able to simulate uncommon heart conditions and regular conditions more accurately. 
          </Paragraph>
        <SubHeading>
          Acknowledgements
        </SubHeading>
          <Paragraph>
          Thank you to my group members, Arnav, Aashish, and Neel, and to Dr. Andrew Jones, Mr. Peter Rigby, Mr. Dagan Trnka, and Alex Citardi. 
            
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