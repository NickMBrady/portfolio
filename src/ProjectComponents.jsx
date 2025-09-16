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

export const YouTubeContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 20px 0;
  margin-top: 40px;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: 8px;

  @media (max-width: 800px) {
    margin-top: 30px;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 8px;
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

export const TableContainer = styled.div`
  padding-top: 40px;
  margin: 30px 0px;
  overflow-x: auto;
`;

export const MinimalTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
  max-width: 1000px;
`;

export const TableHeader = styled.th`
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid var(--dividing-line);
  font-weight: 500;
  color: var(--light-gray);
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: 576px) {
    font-size: 16px;
    padding: 10px 12px;
  }
`;

export const TableCell = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid rgba(48, 63, 77, 0.2);
  color: var(--light-gray);
  font-size: 16px;
  font-weight: 200;
  line-height: 2.0;

  &:first-child {
    font-weight: 500;
  }

  @media (max-width: 576px) {
    font-size: 14px;
    padding: 10px 12px;
  }
`;