import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

/* Dev-only tuner for the glass grain. Writes --noise-image / --noise-size on
   :root; HomePage's CSS reads those, so edits apply live. Mounted behind
   import.meta.env.DEV, so it never ships in a production build. */

const DEFAULTS = { scale: 610, black: 0.6, white: 0.8, bright: 1.0 };

// A Blender-style two-stop ramp: everything below `black` clamps to 0, above
// `white` clamps to `bright` (the white stop's own brightness, 0..1). feFunc's
// linear transfer expresses that as slope/intercept.
const rampToTransfer = (black, white, bright) => {
  const slope = bright / Math.max(white - black, 0.001);
  return { slope, intercept: -black * slope };
};

const buildNoise = (black, white, bright) => {
  const { slope, intercept } = rampToTransfer(black, white, bright);
  const s = slope.toFixed(4);
  const i = intercept.toFixed(4);
  const fn = (c) => `%3CfeFunc${c} type='linear' slope='${s}' intercept='${i}'/%3E`;
  return (
    `url("data:image/svg+xml,%3Csvg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E` +
    `%3Cfilter id='n' color-interpolation-filters='sRGB'%3E` +
    `%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E` +
    `%3CfeColorMatrix type='saturate' values='0'/%3E` +
    `%3CfeComponentTransfer%3E${fn('R')}${fn('G')}${fn('B')}` +
    `%3CfeFuncA type='linear' slope='0' intercept='1'/%3E%3C/feComponentTransfer%3E` +
    `%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
  );
};

export default function NoiseControls() {
  const [scale, setScale] = useState(DEFAULTS.scale);
  const [black, setBlack] = useState(DEFAULTS.black);
  const [white, setWhite] = useState(DEFAULTS.white);
  const [bright, setBright] = useState(DEFAULTS.bright);
  const [open, setOpen] = useState(true);
  const [pos, setPos] = useState({ x: null, y: 22 });

  const barRef = useRef(null);
  const dragStop = useRef(null);
  const dragPanel = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--noise-size', `${scale}px`);
    root.style.setProperty('--noise-image', buildNoise(black, white, bright));
  }, [scale, black, white, bright]);

  useEffect(() => {
    const move = (e) => {
      if (dragStop.current && barRef.current) {
        const r = barRef.current.getBoundingClientRect();
        const t = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
        if (dragStop.current === 'black') setBlack(Math.min(t, white - 0.01));
        else setWhite(Math.max(t, black + 0.01));
      }
      if (dragPanel.current) {
        setPos({ x: e.clientX - dragPanel.current.dx, y: e.clientY - dragPanel.current.dy });
      }
    };
    const up = () => { dragStop.current = null; dragPanel.current = null; };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
  }, [black, white]);

  const startPanelDrag = useCallback((e) => {
    const r = e.currentTarget.parentElement.getBoundingClientRect();
    dragPanel.current = { dx: e.clientX - r.left, dy: e.clientY - r.top };
    setPos({ x: r.left, y: r.top });
  }, []);

  const { slope, intercept } = rampToTransfer(black, white, bright);
  const tone = `rgb(${Math.round(bright * 255)}, ${Math.round(bright * 255)}, ${Math.round(bright * 255)})`;
  const css = `background-size: ${scale}px ${scale}px;  /* slope='${slope.toFixed(2)}' intercept='${intercept.toFixed(2)}' */`;

  const reset = () => {
    setScale(DEFAULTS.scale);
    setBlack(DEFAULTS.black);
    setWhite(DEFAULTS.white);
    setBright(DEFAULTS.bright);
  };

  return (
    <Panel style={pos.x === null ? { right: 22, top: pos.y } : { left: pos.x, top: pos.y }}>
      <Header onPointerDown={startPanelDrag}>
        <span>noise</span>
        <HeaderButtons>
          <SmallButton onPointerDown={(e) => e.stopPropagation()} onClick={reset}>reset</SmallButton>
          <SmallButton onPointerDown={(e) => e.stopPropagation()} onClick={() => setOpen((v) => !v)}>
            {open ? '–' : '+'}
          </SmallButton>
        </HeaderButtons>
      </Header>

      {open && (
        <Body>
          <Row>
            <Label>scale</Label>
            <Value>{scale}px</Value>
          </Row>
          <Slider
            type="range"
            min="60"
            max="2400"
            step="10"
            value={scale}
            onChange={(e) => setScale(Number(e.target.value))}
          />

          <Row style={{ marginTop: 14 }}>
            <Label>contrast ramp</Label>
            <Value>{black.toFixed(2)} &rarr; {white.toFixed(2)}</Value>
          </Row>
          <Ramp ref={barRef}>
            <RampFill
              style={{
                background: `linear-gradient(to right, #000 0%, #000 ${black * 100}%, ${tone} ${white * 100}%, ${tone} 100%)`,
              }}
            />
            <Stop $dark style={{ left: `${black * 100}%` }} onPointerDown={() => { dragStop.current = 'black'; }} />
            <Stop style={{ left: `${white * 100}%`, background: tone }} onPointerDown={() => { dragStop.current = 'white'; }} />
          </Ramp>
          <Hint>drag the stops &mdash; left clamps to black, right to the white level</Hint>

          <Row style={{ marginTop: 14 }}>
            <Label>white level</Label>
            <Value>{bright.toFixed(2)}</Value>
          </Row>
          <Slider
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={bright}
            onChange={(e) => setBright(Number(e.target.value))}
          />

          <Readout onClick={() => navigator.clipboard?.writeText(css)} title="click to copy">
            {css}
          </Readout>
        </Body>
      )}
    </Panel>
  );
}

const Panel = styled.div`
  position: fixed;
  z-index: 9999;
  width: 260px;
  box-sizing: border-box;
  border: 1px solid rgba(150, 178, 208, 0.22);
  border-radius: 14px;
  background: rgba(10, 16, 25, 0.86);
  backdrop-filter: blur(10px) saturate(120%);
  -webkit-backdrop-filter: blur(10px) saturate(120%);
  box-shadow: 0 18px 44px -16px rgba(0, 0, 0, 0.75);
  font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  color: #cdd6e0;
  user-select: none;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  cursor: grab;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #8fa6bd;
  border-bottom: 1px solid rgba(150, 178, 208, 0.14);

  &:active { cursor: grabbing; }
`;

const HeaderButtons = styled.div`
  display: flex;
  gap: 6px;
`;

const SmallButton = styled.button`
  border: 1px solid rgba(150, 178, 208, 0.22);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.04);
  color: #9fc0e4;
  font-family: inherit;
  font-size: 10px;
  line-height: 1;
  padding: 4px 6px;
  cursor: pointer;

  &:hover { background: rgba(255, 255, 255, 0.1); }
`;

const Body = styled.div`
  padding: 12px 12px 14px;
`;

const Row = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 6px;
`;

const Label = styled.span`
  font-size: 11px;
  color: #8fa6bd;
`;

const Value = styled.span`
  font-size: 11px;
  color: #dbe6f0;
`;

const Slider = styled.input`
  width: 100%;
  accent-color: #4a9fe0;
  cursor: pointer;
`;

const Ramp = styled.div`
  position: relative;
  height: 26px;
  margin-top: 2px;
`;

const RampFill = styled.div`
  position: absolute;
  inset: 0 0 8px 0;
  border-radius: 4px;
  border: 1px solid rgba(150, 178, 208, 0.22);
`;

const Stop = styled.div`
  position: absolute;
  bottom: 0;
  width: 10px;
  height: 10px;
  margin-left: -5px;
  border-radius: 2px;
  transform: rotate(45deg);
  cursor: ew-resize;
  border: 1px solid rgba(255, 255, 255, 0.75);
  background: ${(p) => (p.$dark ? '#0a0f16' : '#ffffff')};
`;

const Hint = styled.div`
  margin-top: 8px;
  font-size: 9px;
  line-height: 1.5;
  color: #6d8299;
`;

const Readout = styled.div`
  margin-top: 10px;
  padding: 7px 8px;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(150, 178, 208, 0.14);
  font-size: 9px;
  line-height: 1.5;
  color: #9fc0e4;
  word-break: break-all;
  cursor: copy;

  &:hover { background: rgba(255, 255, 255, 0.08); }
`;
