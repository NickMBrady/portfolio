import 'react';
import styled, { css } from 'styled-components';
import { glassSurface, rimLightEven } from './glass';

/* The tags are glass as well, only capsule-shaped: the panel radius is
   replaced by a full round after the surface is laid down, and the rim follows
   it because the rim inherits the radius. It uses the even variant: the
   panel rim's full swing packed into a capsule this small reads as blotchy. The corner light is deliberately
   left off -- it is cut to the panel radius, so it would square off the ends
   of a pill this small. */
const glassPill = css`
  position: relative;
  box-sizing: border-box;
  ${glassSurface}
  border-radius: 50px;

  &::before {
    ${rimLightEven}
  }
`;

export const BubbleDiv = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap; /* Allow elements to wrap like text */
  row-gap: 0px; /* Adjust the spacing between rows */
  padding: 20px 0; /* Adjust padding to remove vertical space */

  @media (max-width: 1000px) {
    padding-bottom: 15px;
  }
  @media (max-width: 800px) {
    padding: 5px 0;
    gap: 5px;
  }
`;

export const KeywordBubble = styled.span`
  ${glassPill}
  color: var(--light-gray);
  padding: 10px 30px; /* Adjust padding to remove vertical space */
  font-size: 12px;
  white-space: nowrap; /* Prevent text from wrapping */
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 2;
  align-self: flex-start; /* Prevent flex item from stretching */
  margin-top: 10px; /* Add margin to separate bubbles */

  @media (max-width: 1000px) {
    line-height: 1;
  }
  @media (max-width: 800px) {
    line-height: 1;
  }
`;

export const GithubBubble = styled.span`
  ${glassPill}
  color: var(--light-gray);
  padding: 10px 30px; /* Adjust padding to remove vertical space */
  font-size: 12px;
  white-space: nowrap; /* Prevent text from wrapping */
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 2;
  align-self: flex-start; /* Prevent flex item from stretching */
  margin-top: 10px; /* Add margin to separate bubbles */
  outline: 2px solid white; /* Add white outline */
  cursor: pointer;
  @media (max-width: 1000px) {
    line-height: 1;
  }
  @media (max-width: 800px) {
    line-height: 1;
  }
`;
