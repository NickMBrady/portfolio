import { createGlobalStyle } from 'styled-components';
import { Nav, NavAboutSection } from './NavBarComponent';
import {
  rootVars,
  pageBackground,
  typography,
  glassSurface,
  rimLight,
  grainHighlight,
  hoverWashLayer,
  PANEL_RADIUS_SM,
  HOVER_INK,
  HOVER_FADE,
} from './glass';

/* Page-level styling for the glass look: palette, background field, type, and
   the glass treatment of the shared nav bar.

   Mount this on any page that should adopt the look. It is a scoped global
   style, so it unmounts with the page -- pages that do not render it keep
   whatever styling they define themselves. The doubled selectors below win
   specificity over NavBarComponent's own width/border/hover rules without
   editing that shared file. */
const GlassGlobalStyle = createGlobalStyle`
  :root {
    ${rootVars}
  }

  body {
    ${pageBackground}
  }

  ${typography}

  ${Nav}${Nav} {
    position: relative;
    width: auto;
    margin: 9px 11px 0;
    box-sizing: border-box;
    ${glassSurface}
  }

  ${Nav}${Nav}::before {
    ${rimLight}
  }

  ${Nav}${Nav}::after {
    ${grainHighlight}
  }

  /* The About button gets the same fading wash as the bento cells; the base
     component's grey hover fill is suppressed while this style is mounted. */
  ${NavAboutSection}${NavAboutSection} {
    position: relative;
    overflow: hidden;
  }

  ${NavAboutSection}${NavAboutSection}::before {
    ${hoverWashLayer}
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
    transition: color ${HOVER_FADE} ease;
  }

  ${NavAboutSection}${NavAboutSection}:hover a {
    color: ${HOVER_INK};
  }

  @media (max-width: 576px) {
    ${Nav}${Nav} {
      margin: 6px 6px 0;
      border-radius: ${PANEL_RADIUS_SM}px;
    }

    ${Nav}${Nav}::after {
      border-radius: ${PANEL_RADIUS_SM - 2}px;
    }
  }
`;

export default GlassGlobalStyle;
