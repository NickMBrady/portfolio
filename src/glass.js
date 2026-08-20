import { css } from 'styled-components';

/* Shared vocabulary for the dark liquid-glass look: tokens plus the CSS
   blocks that make a surface read as glass. Import these rather than copying
   the declarations, so every panel on the site stays in step.

   Nothing here imports a component, so it is safe to import from anywhere. */

export const FONT_STACK = '"Lexend Exa", sans-serif';

// The floating nav's top margin. Every scrolling page subtracts this from its
// calc(100vh - …) or its content clips off the bottom, silently, because body
// has overflow: hidden. Keep it here so it cannot drift out of step.
export const NAV_OFFSET = 9;
export const NAV_OFFSET_SM = 6;

// Gutter between panels, matching the home page's bento grid.
export const PANEL_GAP = 8;
export const PANEL_GAP_SM = 6;

export const PANEL_RADIUS = 22;
export const PANEL_RADIUS_SM = 16;

// The blue wash used by every hover target. A gradient cannot be transitioned,
// so it is always painted on an overlay whose opacity animates instead.
export const HOVER_WASH =
  'linear-gradient(135deg, rgba(74, 159, 224, 0.92) 0%, rgba(70, 110, 215, 0.9) 55%, rgba(95, 124, 232, 0.92) 100%)';
export const HOVER_INK = '#0a0f16';
// Solid fill for the Projects reveal. Flat rather than the wash gradient so
// the strip and the corner pieces that continue under the tile's fillets
// cannot disagree at their seam.
export const REVEAL_FILL = 'rgba(74, 159, 224, 0.92)';
export const HOVER_FADE = '0.45s';
// The other halves of the same hover. The title tracks the wash exactly so the
// tile and its label resolve together; the icon still turns a little slower
// than it recolours, which reads as weight rather than lag.
export const HOVER_TITLE_FADE = HOVER_FADE;
export const HOVER_ICON_SPIN = '0.5s';
export const HOVER_ICON_FADE = HOVER_FADE;

export const rootVars = css`
  /* Tells the UA to render scrollbars and form controls dark. Without it
     WebKit paints a light scrollbar over the near-black field. */
  color-scheme: dark;

  --light-gray: #cdd6e0;
  /* Secondary text: dates, captions, metadata. */
  --muted-ink: rgba(205, 214, 224, 0.55);
  --dividing-line: rgba(150, 178, 208, 0.14);
  /* only consumed as a scrollbar track colour by the scrolling pages */
  --background: #0a0f16;
  --glass-fill: linear-gradient(155deg, rgba(255, 255, 255, 0.025) 0%, rgba(255, 255, 255, 0.006) 45%, rgba(120, 150, 190, 0.012) 100%);
`;

export const pageBackground = css`
  background-color: #04070c;
  background-image:
    radial-gradient(1200px 820px at 10% 6%, rgba(56, 132, 214, 0.08), transparent 60%),
    radial-gradient(1050px 900px at 90% 94%, rgba(80, 115, 220, 0.09), transparent 60%),
    radial-gradient(900px 700px at 78% 12%, rgba(56, 132, 214, 0.06), transparent 55%),
    linear-gradient(158deg, #06090f 0%, #081019 45%, #04070d 100%);
  background-attachment: fixed;
`;

export const typography = css`
  h1, h2, h3, a, p, span, th, td {
    font-family: ${FONT_STACK};
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
    color: #eef3f8;
  }
`;

/* The frosted surface itself. Requires a positioned box. */
export const glassSurface = css`
  border: 1px solid var(--dividing-line);
  border-radius: ${PANEL_RADIUS}px;
  overflow: hidden;
  background: var(--glass-fill);
  backdrop-filter: blur(7px) saturate(120%);
  -webkit-backdrop-filter: blur(7px) saturate(120%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.06),
    inset 1px 0 0 rgba(255, 255, 255, 0.025),
    inset 0 -14px 26px -20px rgba(3, 8, 16, 0.65),
    -2px -2px 12px -6px rgba(110, 165, 245, 0.24),
    2px 3px 14px -6px rgba(100, 135, 240, 0.28),
    0 18px 40px -22px rgba(0, 0, 0, 0.55);
`;

/* Clips a pseudo-element down to just its border ring. */
const ringMask = css`
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
`;

/* Contour light: a spectral rim reflection hugging the fillets. The conic
   gradient peaks white at the top-left light source with dispersion fringes on
   either side (chromatic aberration), and a cooler secondary glint at the
   bottom-right. Masked to a 1.5px ring. Use as the body of a ::before. */
export const rimLight = css`
  content: "";
  position: absolute;
  inset: 0;
  z-index: 2;
  border-radius: inherit;
  padding: 1.5px;
  pointer-events: none;
  background: conic-gradient(from 0deg at 50% 50%,
    rgba(255, 255, 255, 0.10) 0deg,
    rgba(255, 255, 255, 0.04) 40deg,
    rgba(120, 180, 255, 0.09) 95deg,
    rgba(255, 255, 255, 0.28) 132deg,
    rgba(130, 160, 255, 0.12) 168deg,
    rgba(255, 255, 255, 0.03) 215deg,
    rgba(125, 180, 255, 0.12) 285deg,
    rgba(255, 255, 255, 0.50) 315deg,
    rgba(140, 165, 255, 0.16) 338deg,
    rgba(255, 255, 255, 0.10) 360deg);
  ${ringMask}
`;

/* The same contour light, but with its dynamic range compressed: a gentler
   peak and a raised floor. rimLight's 0.03-to-0.50 swing is built for a large
   panel, where it has room to travel; squeezed around something small like a
   capsule the whole range lands in a short arc and reads as blotchy. Same
   light direction, just more even. */
export const rimLightEven = css`
  content: "";
  position: absolute;
  inset: 0;
  z-index: 2;
  border-radius: inherit;
  padding: 1.5px;
  pointer-events: none;
  background: conic-gradient(from 0deg at 50% 50%,
    rgba(255, 255, 255, 0.13) 0deg,
    rgba(255, 255, 255, 0.10) 40deg,
    rgba(150, 195, 255, 0.12) 95deg,
    rgba(255, 255, 255, 0.19) 132deg,
    rgba(150, 180, 255, 0.13) 168deg,
    rgba(255, 255, 255, 0.10) 215deg,
    rgba(150, 195, 255, 0.14) 285deg,
    rgba(255, 255, 255, 0.26) 315deg,
    rgba(160, 185, 255, 0.15) 338deg,
    rgba(255, 255, 255, 0.13) 360deg);
  ${ringMask}
`;

/* Corner light: a soft highlight pooling in the fillets -- brightest where the
   light source sits at the top-left, with weaker catches at the two right
   corners. Inset so it never touches the rim. Use as the body of an ::after. */
export const cornerLight = css`
  content: "";
  position: absolute;
  inset: 2px;
  border-radius: ${PANEL_RADIUS - 2}px;
  pointer-events: none;
  mix-blend-mode: screen;
  opacity: 0.11;
  background:
    radial-gradient(460px 340px at 0% 0%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.14) 30%, rgba(255, 255, 255, 0.07) 58%, rgba(255, 255, 255, 0.025) 80%, transparent 100%),
    radial-gradient(300px 240px at 100% 0%, rgba(255, 255, 255, 0.105) 0%, rgba(255, 255, 255, 0.067) 40%, rgba(255, 255, 255, 0.025) 72%, transparent 100%),
    radial-gradient(400px 300px at 100% 100%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.074) 40%, rgba(255, 255, 255, 0.028) 72%, transparent 100%);
`;

/* A complete glass panel: surface, rim and corner light, with the mobile
   radii. Sets
   no size, so the caller decides whether it fills a grid cell or wraps
   content. */
export const glassPanel = css`
  position: relative;
  box-sizing: border-box;
  ${glassSurface}

  &::before {
    ${rimLight}
  }

  &::after {
    ${cornerLight}
  }

  @media (max-width: 576px) {
    border-radius: ${PANEL_RADIUS_SM}px;

    &::after {
      border-radius: ${PANEL_RADIUS_SM - 2}px;
    }
  }
`;

/* The fading hover wash, as the body of a pseudo-element that covers the
   target. Whatever sits above it needs its own stacking position. */
export const hoverWashLayer = css`
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  background: ${HOVER_WASH};
  transition: opacity ${HOVER_FADE} ease;
`;

/* The lit state of a panel under the wash: the rim brightens and the surface
   picks up an inner glow and an outer blue bloom. Use inside &:hover. */
export const hoverLit = css`
  border-color: rgba(255, 255, 255, 0.35);
  box-shadow:
    inset 0 0 80px rgba(255, 255, 255, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.35),
    0 0 45px rgba(80, 140, 240, 0.20);
`;

/* What a panel animates on its own account while the wash fades. */
export const hoverPanelTransition = css`
  transition: box-shadow ${HOVER_FADE} ease, border-color ${HOVER_FADE} ease;
`;

/* The wash overlay is painted over the panel, so anything that must stay
   legible through a hover has to opt into sitting above it. Forgetting this
   is the one way to wire a hover target wrong. */
export const aboveWash = css`
  position: relative;
  z-index: 1;
`;

/* A title that darkens to the hover ink. */
export const hoverTitle = css`
  ${aboveWash}
  transition: color ${HOVER_TITLE_FADE} ease;
`;

/* An icon that turns and darkens to the hover ink. */
export const hoverIcon = css`
  ${aboveWash}
  transition: transform ${HOVER_ICON_SPIN} ease, color ${HOVER_ICON_FADE} ease;
  color: #9fc0e4;
`;

/* Squares a glass panel off and strips the chrome that only makes sense on
   something floating, so panels can butt against one another and share a
   single hairline. A rim would ring all four sides of every cell and double
   into a seam wherever two meet; a radius would leave gaps at the joins.
   Pair with a border on whichever sides need the divider. */
export const flushPanel = css`
  border: 0;
  border-radius: 0;
  box-shadow: none;

  &::before,
  &::after {
    display: none;
  }

  @media (max-width: 576px) {
    border-radius: 0;
  }
`;
