import styled from 'styled-components';
import { glassPanel } from './glass';

/* A frosted glass panel: translucent fill, spectral rim reflection, corner
   light and filleted corners. Sets no dimensions -- give it a height or
   let its content size it. */
const GlassPanel = styled.div`
  ${glassPanel}
`;

export default GlassPanel;
