import styled from 'styled-components';

export const SliderContainer = styled.div` 
  padding: 0px 20px;
  padding-bottom: 30px;
`

export const Main = styled.div`
  flex-grow: 1;
  height: calc(100vh - 100px);
  overflow-y: auto;
  scrollbar-width: none;
  scrollbar-color: var(--dividing-line) var(--background); /* Firefox */
`;

export const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;

  padding-top: 50px;
  padding-bottom: 200px;

  @media (max-width: 800px) {
    padding: 50px 15px;
  }
  
  @media (max-width: 576px) {
    padding-bottom: 100px;
  }
`;

export const BoldTitle = styled.a`
  font-size: 40px;
  font-weight: bolder;
  transition: color 1s ease;
  padding-bottom: 40px;
  padding-right: 40px;
  
  @media (max-width: 576px){
    font-size: 30px;
  }
`;

export const BoldSubHeading = styled.p`
    font-size: 30px;
    font-weight: 500;
    padding-top: 40px; /* Adjust this value as needed */
`

export const SubHeading = styled.p`
    font-size: 20px;
    font-weight: 500;
    padding-top: 30px; 
    
    @media (max-width: 576px){
      padding-top: 0px;
    }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 200;
  line-height: 2.0;
  padding: 0px 0;
  
  @media (max-width: 576px){
    font-size: 14px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 20px 0;
  margin-top: 40px;

  @media (max-width: 800px) {
    margin-top: 30px;
  }
`
  
export const PdfContainer = styled.div`
  padding-top: 50px;
`;

export const ImageSliderDiv = styled.div`
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 1200px) {
    height: 600px;
  }

  @media (max-width: 800px) {
    height: 500px;
  }

  @media (max-width: 600px) {
    height: 400px;
  }
`

export const SliderImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const HCenter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  `