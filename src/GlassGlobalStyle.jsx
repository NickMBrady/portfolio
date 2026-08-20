import { createGlobalStyle, css } from 'styled-components';
import { Nav, NavAboutSection, NavSections } from './NavBarComponent';
import {
  rootVars,
  pageBackground,
  typography,
  glassSurface,
  rimLight,
  cornerLight,
  hoverWashLayer,
  PANEL_RADIUS_SM,
  NAV_OFFSET,
  NAV_OFFSET_SM,
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
    margin: ${NAV_OFFSET}px 11px 0;
    box-sizing: border-box;
    ${glassSurface}
  }

  ${Nav}${Nav}::before {
    ${rimLight}
  }

  ${Nav}${Nav}::after {
    ${cornerLight}
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

  /* $compactNav halves the bar's height. The height is all vertical padding
     on NavSections, so halving that halves the bar; pages that opt in must
     also reclaim the freed space in their scroll container. */
  ${(p) => p.$compactNav && css`
    ${NavSections}${NavSections} {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }

    @media (max-width: 800px) {
      ${NavSections}${NavSections} {
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
    }

    @media (max-width: 576px) {
      ${NavSections}${NavSections} {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
      }
    }
  `}

  @media (max-width: 576px) {
    ${Nav}${Nav} {
      margin: ${NAV_OFFSET_SM}px 6px 0;
      border-radius: ${PANEL_RADIUS_SM}px;
    }

    ${Nav}${Nav}::after {
      border-radius: ${PANEL_RADIUS_SM - 2}px;
    }
  }

  /* $flushNav returns the bar to the original geometry: full width, square,
     sharing a single divider with the page instead of floating as a panel.
     It keeps the glass fill; only the panel chrome comes off. Declared last
     so it overrides the floating rules above, media query included. */
  ${(p) => p.$flushNav && css`
    ${Nav}${Nav} {
      width: 100%;
      margin: 0;
      border: 0;
      border-bottom: 1px solid var(--dividing-line);
      border-radius: 0;
    }

    ${Nav}${Nav}::before,
    ${Nav}${Nav}::after {
      display: none;
    }

    @media (max-width: 576px) {
      ${Nav}${Nav} {
        margin: 0;
        border-radius: 0;
      }
    }
  `}
`;

export default GlassGlobalStyle;
