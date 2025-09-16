import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Nav, NavLogoSection, LogoBox, Logo, NBTitle, NavLinkSection, LinkBox } from './NavBarComponent';
import { BubbleDiv, GithubBubble, KeywordBubble } from './Bubbles';
import { Main, ContentContainer, BoldTitle, SubHeading, Paragraph, Image, TableContainer, MinimalTable, TableHeader, TableCell } from './ProjectComponents';
import logoImg from "/assets/nb-logo.png";
import flexureImg from "/assets/flexure/flexure.png";
import graphImg from "/assets/flexure/graph.png";

export default function FlexurePage() {
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
          <BoldTitle>Ultra-High Precision Compliant Linear Stage</BoldTitle>
          <Paragraph>Designed a PEEK compliant mechanism to drive an ultra high-precision linear stage on a manufacturing line. Used
topological optimization to produce a constant, perpendicular output speed given a constant input speed.
Simulated fatigue, stress, and stiffness before ordering part machining and supervising assembly.</Paragraph>
          <BubbleDiv>
            <KeywordBubble>Altair Hyperworks</KeywordBubble>
            <KeywordBubble>Topology Optimization</KeywordBubble>
            <KeywordBubble>Finite Element Analysis</KeywordBubble>
            <KeywordBubble>Material Dynamics</KeywordBubble>
          </BubbleDiv>
          <Image src={flexureImg} alt="Flexure mechanism design" />
          <SubHeading>
          Design Requirements
          </SubHeading>
          <Paragraph>
          I was tasked with creating an assembly that would support ultra-high precision movement for use on a manufacturing line. 
          To accommodate the material being manufactured, it was essential that the device support slight elastic motion at the output. 
          Additionally, the device should function for decades and, to preserve material cleanliness, operate with minimal moving parts.  
           
          </Paragraph>
          <SubHeading>
          Initial Ideas
          </SubHeading>
          <Paragraph>
            It was clear to me that a compliant mechanism would be the best solution. A well designed flexure would satisfy high-precision movement with zero backlash 
            and limit moving or wearing parts. Most importantly, it would intrinsically provide tuneable elastic motion at the output.  
            <br />  <br />
            My primary concern was to remedy the inherent non-linear output of a typical compliant chevron. Starting fully open, each input 
            movement step would produce a logarithmically smaller output step, as the arms reach a more and more compressed angle. 
            This behavior would have been unacceptable for this high-precision application.

            <br />  <br />
           <b>My primary task, then, was to design a geometry that would be able to, within my ROM, produce constant output speed given constant input speed..</b>
          </Paragraph>
          <SubHeading>
          Topology Optimization
          </SubHeading>
          <Paragraph>
            To solve the problem of constant velocity I learned Altair Hyperworks, the industry standard for advanced topology optimization. 
            After weeks of trial and error, I finally arrived at a geometry that satisfied linearity within the ROM. 
            <br />  <br />
            Critical elements, such as material selection, thickness, and a final fatigue and stress analysis, still remained unaccounted for ---  
            too particular to be solved for during a single topology optimization. 
          </Paragraph>
          <SubHeading>
          Geometry Refinement
          </SubHeading>
          <Paragraph>
            Using the optimized geometry from Hyperworks as a guide, I used Solidworks to design the flexure. Leveraging CAD at
            this stage was essential to produce a dimensionable, manufacturable part that would also 
            interface properly with the existing assembly. I configured flexure thickness as a parameter, then 
            imported the design into Ansys Mechanical for tuning and analysis. 
          </Paragraph>
          <SubHeading>
            Fatigue, Stress, and Linearity Analysis
          </SubHeading>
          <Paragraph>
            Within Ansys Mechanical I iterated with different thicknesses and materials until I found a suitable combination. Initially I was drawn toward
            extremely thin arms and a stiff, high tensile-strength metal such as tool steel or titanium. Ultimately, due to constraints on manufacturing time and cost, I settled 
            on PEEK plastic and thicker arms, still able to provide the necessary durability and stress-hardening resistance.  
            Lastly, I simulated distinct load cases to ensure part stiffness and usability requirements, and fatigue to ensure the part would
            last for decades of normal operation.
            <br />  <br />
            Finally, it was time to validate the linearity of the part.
          </Paragraph>

          <div style={{display: 'flex', justifyContent: 'center', margin: '40px 0'}}>
            <Image src={graphImg} alt="Linearity analysis graph" style={{width: '70%'}} />
          </div>

          <TableContainer>
            <MinimalTable>
              <thead>
                <tr>
                  <TableHeader>Load Step</TableHeader>
                  <TableHeader>Input Disp.</TableHeader>
                  <TableHeader>Output Disp.</TableHeader>
                  <TableHeader>Input:Output</TableHeader>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <TableCell>Load Step 1</TableCell>
                  <TableCell>0.0500000</TableCell>
                  <TableCell>0.0371276</TableCell>
                  <TableCell>0.7425511</TableCell>
                </tr>
                <tr>
                  <TableCell>Load Step 2</TableCell>
                  <TableCell>0.1000000</TableCell>
                  <TableCell>0.0742551</TableCell>
                  <TableCell>0.7425509</TableCell>
                </tr>
                <tr>
                  <TableCell>Load Step 3</TableCell>
                  <TableCell>0.1500000</TableCell>
                  <TableCell>0.1113826</TableCell>
                  <TableCell>0.7425511</TableCell>
                </tr>
                <tr>
                  <TableCell>Load Step 4</TableCell>
                  <TableCell>0.2000000</TableCell>
                  <TableCell>0.1485102</TableCell>
                  <TableCell>0.7425510</TableCell>
                </tr>
                <tr>
                  <TableCell>Load Step 5</TableCell>
                  <TableCell>0.2500000</TableCell>
                  <TableCell>0.1856377</TableCell>
                  <TableCell>0.7425509</TableCell>
                </tr>
              </tbody>
            </MinimalTable>
          </TableContainer>
    <Paragraph>
      <b>As can be achieved from a system optimized and tested with FEA, the flexure produced perfect linearity.</b>  
    </Paragraph>
    <SubHeading>Next Steps</SubHeading>
    <Paragraph>
      Final assembly and physical testing of the fabricated article is currently in progress.
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

  h1, h2, h3, a, p, span, th, td {
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
`;
