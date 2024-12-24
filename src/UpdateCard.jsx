import 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled component for the Card container
const CardContainer = styled.div`
  background-color: #5d708330;
  border-radius: 10px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px;

  @media (max-width: 1024px) {
    padding: 30px;
  }

  @media (max-width: 768px) {
    padding: 25px;
  }
`;

// Styled component for the Card title
const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #b7b7b7;
`;

// Styled component for the Card date
const CardDate = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #b7b7b7;
  margin: 5px 0;
`;

// Styled component for the Card description
const CardDescription = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #b7b7b7;
  margin: 10px 0 0;
  line-height: 1.4;

  @media (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const Card = ({ title, date, description }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardDate>{date}</CardDate>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
