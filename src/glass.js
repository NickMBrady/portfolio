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

// The grain is generated, not an asset: fractal noise, desaturated to pure
// greyscale, then contrast-stretched so only the top of its value range
// survives. Exposed as a CSS variable so it can be retuned live in dev.
export const NOISE_SIZE = '610px';
export const NOISE_IMAGE =
  `url("data:image/svg+xml,%3Csvg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E` +
  `%3Cfilter id='n' color-interpolation-filters='sRGB'%3E` +
  `%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E` +
  `%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E` +
  `%3CfeFuncR type='linear' slope='8.3333' intercept='-5.0000'/%3E` +
  `%3CfeFuncG type='linear' slope='8.3333' intercept='-5.0000'/%3E` +
  `%3CfeFuncB type='linear' slope='8.3333' intercept='-5.0000'/%3E` +
  `%3CfeFuncA type='linear' slope='0' intercept='1'/%3E%3C/feComponentTransfer%3E` +
  `%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

// The blue wash used by every hover target. A gradient cannot be transitioned,
// so it is always painted on an overlay whose opacity animates instead.
export const HOVER_WASH =
  'linear-gradient(135deg, rgba(74, 159, 224, 0.92) 0%, rgba(70, 110, 215, 0.9) 55%, rgba(95, 124, 232, 0.92) 100%)';
export const HOVER_INK = '#0a0f16';
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
  --glass-fill: linear-gradient(155deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.012) 45%, rgba(120, 150, 190, 0.025) 100%);
  --noise-size: ${NOISE_SIZE};
  --noise-image: ${NOISE_IMAGE};
  --accent-teal: #4a9fe0;
  --accent-violet: #5f7ce8;
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
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
`;

/* Textured highlight: the grain IS the light. The soft radials survive only in
   the mask, shaping where the noise shows. Inset so it never touches the rim.
   Use as the body of an ::after. */
export const grainHighlight = css`
  content: "";
  position: absolute;
  inset: 2px;
  border-radius: ${PANEL_RADIUS - 2}px;
  pointer-events: none;
  background-image: var(--noise-image);
  background-size: var(--noise-size) var(--noise-size);
  mix-blend-mode: screen;
  opacity: 0.45;
  -webkit-mask-image:
    radial-gradient(460px 340px at 0% 0%, rgba(255, 255, 255, 0.58) 0%, rgba(255, 255, 255, 0.40) 30%, rgba(255, 255, 255, 0.20) 58%, rgba(255, 255, 255, 0.07) 80%, transparent 100%),
    radial-gradient(300px 240px at 100% 0%, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.19) 40%, rgba(255, 255, 255, 0.07) 72%, transparent 100%),
    radial-gradient(400px 300px at 100% 100%, rgba(255, 255, 255, 0.34) 0%, rgba(255, 255, 255, 0.21) 40%, rgba(255, 255, 255, 0.08) 72%, transparent 100%);
  mask-image:
    radial-gradient(460px 340px at 0% 0%, rgba(255, 255, 255, 0.58) 0%, rgba(255, 255, 255, 0.40) 30%, rgba(255, 255, 255, 0.20) 58%, rgba(255, 255, 255, 0.07) 80%, transparent 100%),
    radial-gradient(300px 240px at 100% 0%, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.19) 40%, rgba(255, 255, 255, 0.07) 72%, transparent 100%),
    radial-gradient(400px 300px at 100% 100%, rgba(255, 255, 255, 0.34) 0%, rgba(255, 255, 255, 0.21) 40%, rgba(255, 255, 255, 0.08) 72%, transparent 100%);
`;

/* A complete glass panel: surface, rim and grain, with the mobile radii. Sets
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
    ${grainHighlight}
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
