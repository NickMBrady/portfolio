import { useEffect, useRef } from 'react';
import styled from 'styled-components';

/*
 * TIDAL DUST
 * ----------
 * A shell of white motes held around an invisible sphere by surface tension.
 *
 * MORPH  The sphere is never a sphere. Its radius is a travelling sum of four
 *        obliquely-crossing plane waves over the unit direction, riding on an
 *        asymmetric breath (fast inhale, long ringing exhale) built from a
 *        phase-skewed cosine. Motes are not pinned to that surface: they are
 *        free 3D bodies pulled toward it by a soft radial spring, so the skin
 *        wobbles, lags and rings rather than snapping. Underneath, five slow
 *        localized eddies -- little pockets of rigid rotation about random
 *        axes, drifting and periodically reversing sign -- comb the motes into
 *        filaments and currents, so density is never uniform. The whole body
 *        turns on a tilted axis, implemented as a velocity field (omega x p)
 *        rather than a matrix, so anything you stir into it is genuinely
 *        carried around the sphere like a storm on a gas giant.
 *
 * VORTEX  The cursor is a drain. It projects a Rankine vortex down the view
 *        axis: rigid-body spin inside a core radius, 1/r shear outside, with
 *        inward suction, a downdraft that dimples the shell at the throat and
 *        a lifted collar at the rim -- the cross-section of a real whirlpool.
 *        Motes carry a persistent disturbance velocity with ANISOTROPIC
 *        viscosity: the radial component damps fast (surface tension snaps the
 *        dimple back and lets it ripple) while the tangential component decays
 *        over seconds, so angular momentum outlives the cursor. Mass matters:
 *        ~9% of the motes are heavy anchor grains that barely stir while the
 *        fine dust is whipped into the funnel -- the whirlpool sorts the dust
 *        by weight. Leave, and the eddy spins down, the shell rings, and the
 *        combed scar drifts away with the rotation until the mote lifecycle
 *        quietly reseeds it. Press, and you drop a stone in it.
 *
 * CHASE  The whole body is a heavy droplet on an underdamped spring, so it
 *        lags the pointer, overshoots and settles rather than snapping to it.
 *        Where the free silhouette would overhang the panel it flattens on
 *        that axis and bulges on the other by a fractional power of the same
 *        number, holding its apparent area to a floor -- in a corner both axes
 *        press at once, which no affine map can do at constant area, so the
 *        displaced volume reads as depth instead of spread. The resolved
 *        centre is then allowed to BURY a third of itself in the wall, and a
 *        C1 exponential squeeze folds the buried dust back inside the rounded
 *        panel. That squeeze is what does the real shaping: it crowds motes
 *        into a bright flat contact face, and in a corner it packs them into
 *        the pocket, so the body wedges in with two flat faces instead of
 *        floating as an ellipse that only touches. Nothing is ever clipped,
 *        because the fold maps the whole plane inside the fillets. All of it
 *        is a presentation transform over the untouched simulation, and the
 *        pointer is mapped back through it, so the drain still lands under
 *        the cursor while the body is offset and squashed.
 *
 * RENDER  Canvas 2D, additive. Every mote is a hard-edged disc sprite
 *        scaled by perspective depth; the far hemisphere shows through the
 *        near one, and the limb self-crowds into a bright rim. The frame is
 *        never cleared -- it is eroded with a destination-out wash, which
 *        keeps the canvas transparent over the glass panel while giving every
 *        mote a decaying wake. Slow motes get a hairline smear; motes caught
 *        in the funnel move far enough per frame to be resampled into
 *        continuous comet streaks and burn hot white. Speed becomes light.
 *        Streaks measure motion RELATIVE to the body, so a fast chase does not
 *        comet-tail every mote. The wake is a wake, never a ghost: a body that
 *        TRANSLATES would smear the erase-wash into copies of itself, so the
 *        erase strength climbs with bulk speed until it is a full clear, with
 *        the draw gain compensated so the body does not change brightness as
 *        it goes. Wakes belong to the dust, not to the droplet.
 */

const TAU = Math.PI * 2;

// Sphere geometry, in sphere-radius units.
const CAM = 5.0;            // camera distance -> perspective strength
const MAX_MOTES = 3400;
const AREA_PER_MOTE = 300;  // CSS px^2 of cell per mote
const MIN_MOTES = 420;
const REF_R = 170;          // sphere radius the mote sizes were tuned against

// Chase + squash. The body is a heavy droplet on an underdamped spring; where
// it would overhang the cell it is compressed along the contact normal and
// bulges across it, then every mote is soft-confined to the rounded panel.
const BODY_EXTENT = 1.22;   // apparent silhouette radius, in units of R
const CHASE_K = 2.12;      // spring rate  -> w = 1.46 rad/s (quarter of the original peak speed)
const CHASE_C = 1.6;      // damping      -> zeta = 0.55, ~14% overshoot
const SQUASH_FROM_PEN = 2.35; // compression per unit of centre penetration (in Rb)
const WALL_K = 2.4;         // wall repulsion stiffness (1/s^2), stiffens with depth
const WALL_DAMP = 4;        // contact damping while overlapping a wall (1/s)
const BULGE_LOCAL = 0.62;   // crosswise stretch AT the contact face (0 far from it)
const BULGE_SPAN = 0.9;     // how far that stretch reaches back from the face, in Rb
const PRESS = 0.34;         // share of the body allowed to bury in a wall
const OVERREACH = 0.35;     // how far past a wall the goal may sit, in units of Rb
const COMP_K = 64;          // compression spring -> w = 8 rad/s, far faster than the chase
const COMP_C = 6;           // damping            -> zeta = 0.38, so a slam visibly rebounds
const IMPACT_GAIN = 4.5;    // impact speed -> compression rate, in units of Rb
const COMP_MAX = 1.9;       // hard cap so repeated slams cannot collapse the body
const SOFT_EDGE = 28;       // px band in which motes pile up against a wall
const EDGE_PAD = 8;         // clears the panel's 22px corner radius (0.3*r)
// The canvas is eroded rather than cleared, which gives motes their wake --
// but a TRANSLATING body would smear that wake into visible copies of itself.
// So the erase strength rises with bulk speed until it is a full clear, and
// the draw gain is compensated so brightness does not change with it.
const GHOST_KILL = 0.19;

// Shell morph: four oblique plane waves over the unit direction.
const WAVES = [
  { a: 0.062, f: 1.63, w: 0.29, k: [0.44, 0.79, 0.43] },
  { a: 0.044, f: 2.91, w: -0.23, k: [-0.71, 0.36, 0.60] },
  { a: 0.029, f: 4.37, w: 0.40, k: [0.28, -0.55, 0.79] },
  { a: 0.019, f: 6.71, w: -0.52, k: [-0.62, -0.66, 0.42] },
];

const BREATH_PERIOD = 6.4;
const BREATH_SKEW = 0.85;
const BREATH_DEPTH = 0.10;

// Dynamics.
const SPRING = 30.0;        // radial stiffness toward the morphing shell
const DAMP_RADIAL = 4.4;    // fast: surface tension. underdamped -> ripple
const DAMP_TANGENT = 0.5;   // slow: angular momentum lingers ~2s
const SPIN_AXIS = [0.19, 0.965, 0.18];
const SPIN_RATE = 0.21;     // rad/s
// Rolling contact. Friction against a wall spins the body about the view
// axis at the no-slip rate v/R, so sliding along an edge makes it roll.
const ROLL_GRIP = 0.85;     // share of ideal no-slip rolling the wall imparts
const ROLL_EASE = 9;        // how fast the roll spins up while gripping (1/s)
const ROLL_DECAY = 1.2;     // how slowly it spins down once free (1/s)

// Vortex. Speeds are sphere-radii/second; motes are ENTRAINED toward this
// velocity field rather than pushed by it, so the whirlpool saturates instead
// of flinging dust into orbit, and coupling rate scales with 1/mass.
const CORE = 0.40;          // Rankine core radius, sphere-radii
const SWIRL = 2.4;          // peak tangential speed, at the core edge
const INFLOW = 0.55;        // suction toward the throat
const DRILL = 1.35;         // downdraft that dimples the shell
const RIM_LIFT = 0.34;      // raised collar around the drain
const COUPLE = 7.0;         // entrainment rate
const REACH = CORE * 2.8;   // influence radius
const MAX_AMP = 3.0;

const EDDY_COUNT = 5;

// Additive draw gain. The canvas is eroded, not cleared, so a resting mote
// accumulates to alpha/FADE over successive frames.
const FADE = 0.45;
const GAIN = 0.48;

function makeSprite(px, hot) {
  const c = document.createElement('canvas');
  c.width = px;
  c.height = px;
  const g = c.getContext('2d');
  const r = px / 2;
  const grd = g.createRadialGradient(r, r, 0, r, r, r);
  if (hot) {
    grd.addColorStop(0, 'rgba(255,255,255,1)');
    grd.addColorStop(0.46, 'rgba(255,255,255,1)');
    grd.addColorStop(0.60, 'rgba(255,255,255,0)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
  } else {
    grd.addColorStop(0, 'rgba(255,255,255,1)');
    grd.addColorStop(0.42, 'rgba(255,255,255,1)');
    grd.addColorStop(0.56, 'rgba(236,244,255,0)');
    grd.addColorStop(1, 'rgba(236,244,255,0)');
  }
  g.fillStyle = grd;
  g.fillRect(0, 0, px, px);
  return c;
}

export default function DotSphere() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return undefined;

    const calm = typeof window.matchMedia === 'function'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const spinRate = calm ? SPIN_RATE * 0.35 : SPIN_RATE;
    const breathDepth = calm ? BREATH_DEPTH * 0.45 : BREATH_DEPTH;

    const dot = makeSprite(64, false);
    const ember = makeSprite(64, true);

    // --- mote state -------------------------------------------------------
    const px = new Float32Array(MAX_MOTES);
    const py = new Float32Array(MAX_MOTES);
    const pz = new Float32Array(MAX_MOTES);
    const ux = new Float32Array(MAX_MOTES);
    const uy = new Float32Array(MAX_MOTES);
    const uz = new Float32Array(MAX_MOTES);
    const invMass = new Float32Array(MAX_MOTES);
    const grain = new Float32Array(MAX_MOTES);
    const twF = new Float32Array(MAX_MOTES);
    const twP = new Float32Array(MAX_MOTES);
    const age = new Float32Array(MAX_MOTES);
    const life = new Float32Array(MAX_MOTES);
    const sxPrev = new Float32Array(MAX_MOTES);
    const syPrev = new Float32Array(MAX_MOTES);
    const seen = new Uint8Array(MAX_MOTES);

    // --- ambient eddies ---------------------------------------------------
    const eCx = new Float32Array(EDDY_COUNT);
    const eCy = new Float32Array(EDDY_COUNT);
    const eCz = new Float32Array(EDDY_COUNT);
    const eAx = new Float32Array(EDDY_COUNT);
    const eAy = new Float32Array(EDDY_COUNT);
    const eAz = new Float32Array(EDDY_COUNT);
    const eInvR2 = new Float32Array(EDDY_COUNT);
    const eAmp = new Float32Array(EDDY_COUNT);
    const eFreq = new Float32Array(EDDY_COUNT);
    const ePhase = new Float32Array(EDDY_COUNT);
    const eDrift = new Float32Array(EDDY_COUNT);
    const eGain = new Float32Array(EDDY_COUNT);

    const randDir = (out) => {
      const z = Math.random() * 2 - 1;
      const th = Math.random() * TAU;
      const s = Math.sqrt(Math.max(0, 1 - z * z));
      out[0] = s * Math.cos(th);
      out[1] = s * Math.sin(th);
      out[2] = z;
      return out;
    };

    const tmp = [0, 0, 0];
    for (let k = 0; k < EDDY_COUNT; k++) {
      randDir(tmp);
      eCx[k] = tmp[0]; eCy[k] = tmp[1]; eCz[k] = tmp[2];
      randDir(tmp);
      eAx[k] = tmp[0]; eAy[k] = tmp[1]; eAz[k] = tmp[2];
      const rad = 0.55 + Math.random() * 0.75;
      eInvR2[k] = 1 / (rad * rad);
      eAmp[k] = (0.11 + Math.random() * 0.15) * (calm ? 0.4 : 1);
      eFreq[k] = 0.045 + Math.random() * 0.075;
      ePhase[k] = Math.random() * TAU;
      eDrift[k] = (Math.random() < 0.5 ? -1 : 1) * (0.03 + Math.random() * 0.05);
      eGain[k] = 0;
    }

    // --- morph ------------------------------------------------------------
    const breath = (t) => {
      const th = (t / BREATH_PERIOD) * TAU;
      const sk = th + BREATH_SKEW * Math.sin(th);
      const base = 0.5 - 0.5 * Math.cos(sk);
      const beat = 0.11 * Math.sin(2 * sk + 1.15);
      return (base + beat - 0.5) * breathDepth;
    };

    let shellBase = 1;
    const shellR = (nx, ny, nz, t) => {
      let r = shellBase;
      for (let i = 0; i < WAVES.length; i++) {
        const wv = WAVES[i];
        const k = wv.k;
        r += wv.a * Math.sin(wv.f * (k[0] * nx + k[1] * ny + k[2] * nz) + wv.w * t);
      }
      return r;
    };

    // --- layout -----------------------------------------------------------
    let w = 0;
    let h = 0;
    let dpr = 1;
    let cx = 0;
    let cy = 0;
    let R = 1;
    let motePx = 1;
    let count = 0;
    let clock = 0;

    // soft-body chase state: free centre, velocity, and the resolved
    // (wall-constrained) centre plus the current deformation frame
    let bx = 0;
    let by = 0;
    let bvx = 0;
    let bvy = 0;
    let bcx = 0;
    let bcy = 0;
    let bcxPrev = 0;
    let bcyPrev = 0;
    let sqX = 1;
    let sqY = 1;
    // compression is its own state so contact drives it, not the chase lag
    let compX = 0;
    let compY = 0;
    let compVX = 0;
    let compVY = 0;
    let contactX = false;
    let contactY = false;
    let sideX = 0;
    let sideY = 0;
    let rollW = 0;

    let placed = false;

    // Squeeze an unbounded coordinate into [lo, hi] with a C1 exponential
    // rolloff, so motes crowd against a wall instead of stacking on a line.
    const confine = (v, lo, hi) => {
      if (hi <= lo) return (lo + hi) * 0.5;
      const s = Math.min(SOFT_EDGE, (hi - lo) * 0.5);
      if (v < lo + s) return lo + s * Math.exp((v - lo - s) / s);
      if (v > hi - s) return hi - s * Math.exp((hi - s - v) / s);
      return v;
    };

    const seed = (i, spread) => {
      randDir(tmp);
      const r = shellR(tmp[0], tmp[1], tmp[2], clock);
      px[i] = tmp[0] * r;
      py[i] = tmp[1] * r;
      pz[i] = tmp[2] * r;
      ux[i] = 0; uy[i] = 0; uz[i] = 0;
      const heavy = Math.random() < 0.09;
      invMass[i] = heavy ? 1 / (1.7 + Math.random() * 1.6) : 1 / (0.26 + Math.random() * 0.5);
      grain[i] = heavy ? 1.75 + Math.random() * 1.15 : 0.52 + Math.random() * 0.9;
      twF[i] = 0.35 + Math.random() * 1.7;
      twP[i] = Math.random() * TAU;
      life[i] = 14 + Math.random() * 17;
      age[i] = spread ? Math.random() * life[i] : 0;
      seen[i] = 0;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const nw = Math.max(1, Math.round(rect.width));
      const nh = Math.max(1, Math.round(rect.height));
      const nd = Math.min(2, window.devicePixelRatio || 1);
      if (nw === w && nh === h && nd === dpr) return;
      w = nw; h = nh; dpr = nd;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = w * 0.5;
      cy = h * 0.5;
      // a little smaller than a static orb would be: the body needs room to
      // travel before it starts pressing on the walls
      R = Math.min(w, h) * 0.3;
      // keep motes reading as dust rather than pebbles in a small cell
      motePx = 3.4 * Math.max(0.5, Math.min(1.2, R / REF_R));

      if (!placed) {
        bx = cx; by = cy; bvx = 0; bvy = 0;
        placed = true;
      }
      bx = Math.min(Math.max(bx, 0), w);
      by = Math.min(Math.max(by, 0), h);
      bcx = bx; bcy = by; bcxPrev = bx; bcyPrev = by;

      const want = Math.max(MIN_MOTES, Math.min(MAX_MOTES, Math.round((w * h) / AREA_PER_MOTE)));
      if (want > count) {
        for (let i = count; i < want; i++) seed(i, count === 0);
      }
      count = want;
      for (let i = 0; i < count; i++) seen[i] = 0;
    };

    // --- pointer ----------------------------------------------------------
    const ptr = { x: 0, y: 0, has: false, lx: 0, ly: 0 };
    let strength = 0;
    let target = 0;
    let punch = 0;

    const track = (e) => {
      const rect = canvas.getBoundingClientRect();
      ptr.x = e.clientX - rect.left;
      ptr.y = e.clientY - rect.top;
      if (!ptr.has) { ptr.lx = ptr.x; ptr.ly = ptr.y; }
      ptr.has = true;
      target = 1;
    };
    const onMove = (e) => track(e);
    const onDown = (e) => { track(e); punch = 1; };
    const onLeave = () => { ptr.has = false; target = 0; };
    const onUp = (e) => { if (e.pointerType !== 'mouse') onLeave(); };
    // Anywhere in the window is fair game: the body keeps following a cursor
    // that has left its cell, pressing into the nearest wall. Tracking only
    // stops when the pointer leaves the window (relatedTarget is null then).
    const onWindowOut = (e) => { if (!e.relatedTarget) onLeave(); };

    window.addEventListener('pointermove', onMove, { passive: true });
    canvas.addEventListener('pointerdown', onDown, { passive: true });
    canvas.addEventListener('pointerup', onUp, { passive: true });
    document.addEventListener('pointerout', onWindowOut, { passive: true });
    canvas.addEventListener('pointercancel', onLeave, { passive: true });

    // --- frame ------------------------------------------------------------
    let raf = 0;
    let last = 0;

    const frame = (now) => {
      raf = requestAnimationFrame(frame);

      if (!last) last = now;
      let dt = (now - last) / 1000;
      last = now;
      if (dt > 0.05) dt = 0.05;
      if (dt <= 0) return;
      clock += dt;
      const t = clock;

      shellBase = 1 + breath(t);

      // pointer ramp + stirring energy
      const easeTau = target > strength ? 0.14 : 0.34;
      strength += (target - strength) * (1 - Math.exp(-dt / easeTau));
      punch *= Math.exp(-dt / 0.42);
      const stir = Math.min(1.4, Math.hypot(ptr.x - ptr.lx, ptr.y - ptr.ly) / Math.max(1, R * dt * 2.2));
      ptr.lx += (ptr.x - ptr.lx) * Math.min(1, dt * 14);
      ptr.ly += (ptr.y - ptr.ly) * Math.min(1, dt * 14);

      // ---- the droplet chases the pointer, and rests at centre without one.
      // The pointer is tracked across the whole window, so the goal is capped
      // at a bounded overreach past each wall: the body still slides along the
      // wall to follow a cursor outside the cell, but the overhang cannot grow
      // without limit and flatten the silhouette to a sliver.
      const reach = R * BODY_EXTENT * OVERREACH;
      const gx = ptr.has ? Math.min(Math.max(ptr.x, -reach), w + reach) : cx;
      const gy = ptr.has ? Math.min(Math.max(ptr.y, -reach), h + reach) : cy;
      bvx += ((gx - bx) * CHASE_K - bvx * CHASE_C) * dt;
      bvy += ((gy - by) * CHASE_K - bvy * CHASE_C) * dt;

      // ---- soft wall contact
      // The wall repels rather than clamping the centre. A hard clamp leaves a
      // dead band: while the cursor is inside it the body cannot follow at
      // all, so easing away from a wall reads as the body sticking and then
      // lurching off once the cursor finally clears the band. With a soft wall
      // the penetration -- and therefore the squash -- varies continuously
      // with the cursor, and the wall pushing the body back out IS the
      // release, so no separate push-off force is needed. Penetration is
      // bounded because the repulsion stiffens with depth.
      const Rb = R * BODY_EXTENT;
      const wallLim = Rb * (1 - PRESS);

      let penX = 0;
      if (w <= wallLim * 2) {
        bx = cx; bvx = 0; sideX = 0;
      } else {
        if (bx < wallLim) { penX = wallLim - bx; sideX = -1; }
        else if (bx > w - wallLim) { penX = bx - (w - wallLim); sideX = 1; }
        if (penX > 0) {
          // arriving fast squashes hard: the inward speed at first contact is
          // injected into the compression spring
          if (!contactX) {
            const vin = -sideX * bvx;
            if (vin > 0) compVX += IMPACT_GAIN * vin / Rb;
          }
          const push = WALL_K * penX * (1 + penX / (Rb * 0.5));
          bvx += (-sideX * push - bvx * WALL_DAMP) * dt;
        } else if (compX < 1e-3) {
          sideX = 0;
        }
      }
      contactX = penX > 0;

      let penY = 0;
      if (h <= wallLim * 2) {
        by = cy; bvy = 0; sideY = 0;
      } else {
        if (by < wallLim) { penY = wallLim - by; sideY = -1; }
        else if (by > h - wallLim) { penY = by - (h - wallLim); sideY = 1; }
        if (penY > 0) {
          if (!contactY) {
            const vin = -sideY * bvy;
            if (vin > 0) compVY += IMPACT_GAIN * vin / Rb;
          }
          const push = WALL_K * penY * (1 + penY / (Rb * 0.5));
          bvy += (-sideY * push - bvy * WALL_DAMP) * dt;
        } else if (compY < 1e-3) {
          sideY = 0;
        }
      }
      contactY = penY > 0;

      bx += bvx * dt;
      by += bvy * dt;

      // Shape follows penetration continuously, through a spring so an impact
      // can overshoot and rebound rather than snapping to the static value.
      const tX = Math.min(COMP_MAX, SQUASH_FROM_PEN * penX / Rb);
      const tY = Math.min(COMP_MAX, SQUASH_FROM_PEN * penY / Rb);
      compVX += ((tX - compX) * COMP_K - compVX * COMP_C) * dt;
      compVY += ((tY - compY) * COMP_K - compVY * COMP_C) * dt;
      compX += compVX * dt;
      compY += compVY * dt;
      if (compX < 0) { compX = 0; if (compVX < 0) compVX = 0; }
      if (compY < 0) { compY = 0; if (compVY < 0) compVY = 0; }
      if (compX > COMP_MAX) { compX = COMP_MAX; if (compVX > 0) compVX = 0; }
      if (compY > COMP_MAX) { compY = COMP_MAX; if (compVY > 0) compVY = 0; }

      // The body is never scaled as a whole -- an affine squash of a sphere is
      // just an ellipse. The centre simply sits where the wall let it, so more
      // dust falls past the edge and is folded into a flat contact face, while
      // the free side stays round. The crosswise bulge is applied per mote,
      // local to that face, down in the draw loop.
      sqX = 1;
      sqY = 1;
      const bulgeSpan = BULGE_SPAN * Rb;

      bcxPrev = bcx;
      bcyPrev = bcy;
      bcx = bx;
      bcy = by;

      // `boost` scales the target flow; `strength` gates the COUPLING, not the
      // target. On leave the coupling releases instead of dragging the dust to
      // a stop, so the eddy coasts down on tangential viscosity alone.
      const boost = Math.min(MAX_AMP, 1 + 0.7 * stir + 1.6 * punch);
      // Put the cursor into the body's own undeformed frame so the drain still
      // lands under the pointer while the body is offset and squashed.
      const mx = (ptr.x - bcx) / sqX / R;
      const my = -(ptr.y - bcy) / sqY / R;
      const active = strength > 0.004;
      const reach2 = REACH * REACH;
      const invCore = 1 / CORE;
      const throat2 = 1 / (0.62 * CORE * 0.62 * CORE);

      // eddies breathe and migrate
      for (let k = 0; k < EDDY_COUNT; k++) {
        eGain[k] = eAmp[k] * Math.sin(t * eFreq[k] * TAU + ePhase[k]);
        const ang = eDrift[k] * dt;
        const ca = Math.cos(ang);
        const sa = Math.sin(ang);
        const x = eCx[k];
        const z = eCz[k];
        eCx[k] = x * ca - z * sa;
        eCz[k] = x * sa + z * ca;
      }

      // Rolling contact: pick the angular rate that would hold the contact
      // point still (v/R), signed by which wall is touched. Grip scales with
      // how hard the body presses, and the roll keeps its momentum briefly
      // after the body leaves the wall.
      let rollTarget = 0;
      if (contactX && sideX !== 0) rollTarget += (sideX * bvy) / R;
      if (contactY && sideY !== 0) rollTarget -= (sideY * bvx) / R;
      if (rollTarget !== 0) {
        let grip = (compX + compY) * 2;
        if (grip > 1) grip = 1;
        rollTarget *= ROLL_GRIP * grip;
      }
      const rollK = (contactX || contactY) ? ROLL_EASE : ROLL_DECAY;
      rollW += (rollTarget - rollW) * (1 - Math.exp(-rollK * dt));

      const wx = SPIN_AXIS[0] * spinRate;
      const wy = SPIN_AXIS[1] * spinRate;
      const wz = SPIN_AXIS[2] * spinRate + rollW;
      const dampR = Math.exp(-DAMP_RADIAL * dt);
      const dampT = Math.exp(-DAMP_TANGENT * dt);

      // ---- simulate
      for (let i = 0; i < count; i++) {
        age[i] += dt;
        if (age[i] > life[i]) seed(i, false);

        const x = px[i];
        const y = py[i];
        const z = pz[i];
        const len = Math.sqrt(x * x + y * y + z * z) || 1e-5;
        const inv = 1 / len;
        const nx = x * inv;
        const ny = y * inv;
        const nz = z * inv;

        // radial spring toward the morphing shell
        const err = (shellR(nx, ny, nz, t) - len) * SPRING;
        let ax = nx * err;
        let ay = ny * err;
        let az = nz * err;

        // whirlpool: a Rankine vortex standing on the view axis
        if (active) {
          const dx = x - mx;
          const dy = y - my;
          const d2 = dx * dx + dy * dy;
          if (d2 < reach2) {
            // the hemisphere facing the cursor is the one that feels it
            let face = (nz + 0.45) * 0.9;
            if (face > 1) face = 1;
            if (face > 0.02) {
              const d = Math.sqrt(d2) || 1e-4;
              const idd = 1 / d;
              // rigid core, 1/r shear outside, faded out at the reach
              const rank = d < CORE ? d * invCore : CORE * idd;
              let taper = 1 - d2 / reach2;
              taper *= taper;
              const amp = rank * taper * boost;
              const throat = Math.max(0, 1 - d2 * throat2);
              const sink = throat * throat * taper * boost;
              // target flow: spin + suction + downdraft at the throat,
              // lifted collar at the rim
              const tvx = (-dy * SWIRL - dx * INFLOW) * idd * amp;
              const tvy = (dx * SWIRL - dy * INFLOW) * idd * amp;
              const tvz = RIM_LIFT * amp - DRILL * sink;
              const kc = COUPLE * face * strength;
              ax += (tvx - ux[i]) * kc;
              ay += (tvy - uy[i]) * kc;
              az += (tvz - uz[i]) * kc;
            }
          }
        }

        const im = invMass[i];
        let vx = ux[i] + ax * im * dt;
        let vy = uy[i] + ay * im * dt;
        let vz = uz[i] + az * im * dt;

        // anisotropic viscosity: the dimple snaps back, the spin lingers
        const rad = vx * nx + vy * ny + vz * nz;
        const rvx = rad * nx;
        const rvy = rad * ny;
        const rvz = rad * nz;
        vx = rvx * dampR + (vx - rvx) * dampT;
        vy = rvy * dampR + (vy - rvy) * dampT;
        vz = rvz * dampR + (vz - rvz) * dampT;
        ux[i] = vx; uy[i] = vy; uz[i] = vz;

        // ambient field: body rotation + drifting eddies
        let fx = wy * z - wz * y;
        let fy = wz * x - wx * z;
        let fz = wx * y - wy * x;
        for (let k = 0; k < EDDY_COUNT; k++) {
          const ex = nx - eCx[k];
          const ey = ny - eCy[k];
          const ez = nz - eCz[k];
          const q = 1 - (ex * ex + ey * ey + ez * ez) * eInvR2[k];
          if (q > 0) {
            const g = q * q * eGain[k];
            fx += g * (eAy[k] * nz - eAz[k] * ny);
            fy += g * (eAz[k] * nx - eAx[k] * nz);
            fz += g * (eAx[k] * ny - eAy[k] * nx);
          }
        }

        px[i] = x + (fx + vx) * dt;
        py[i] = y + (fy + vy) * dt;
        pz[i] = z + (fz + vz) * dt;
      }

      // ---- draw
      // Erase hard enough that the body outruns its own afterimages: a ghost
      // is only invisible once it has decayed before it separates from the
      // body, which needs a near-total clear at speed.
      const bulkDX = bcx - bcxPrev;
      const bulkDY = bcy - bcyPrev;
      // Rigid rotation is bulk motion too. Rolling along a wall sweeps every
      // mote sideways, which would comet-tail the whole body; subtracting the
      // roll's own screen displacement leaves only differential motion (the
      // drain) earning a streak.
      const rollTheta = rollW * dt;
      const bulk = Math.sqrt(bulkDX * bulkDX + bulkDY * bulkDY);
      let wash = FADE;
      if (bulk > 0.5) {
        const kill = 1 - Math.exp(-GHOST_KILL * bulk);
        if (kill > wash) wash = kill;
      }
      if (wash > 1) wash = 1;
      // motes settle at alpha/wash, so hold that product steady
      const washGain = wash / FADE;

      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = '#000';
      ctx.globalAlpha = wash;
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0; i < count; i++) {
        const z = pz[i];
        const sc = (R * CAM) / (CAM - z);
        let sx = bcx + px[i] * sc;
        let sy = bcy - py[i] * sc;
        // Local contact shaping: dust near the pressed face is stretched
        // across the wall, falling off to nothing on the free side, so the
        // body bulges where it touches instead of scaling into an ellipse.
        if (sideX !== 0 && compX > 1e-3) {
          let tb = (sideX * (sx - bcx)) / bulgeSpan;
          if (tb > 0) {
            if (tb > 1) tb = 1;
            sy = bcy + (sy - bcy) * (1 + BULGE_LOCAL * compX * tb);
          }
        }
        if (sideY !== 0 && compY > 1e-3) {
          let tb = (sideY * (sy - bcy)) / bulgeSpan;
          if (tb > 0) {
            if (tb > 1) tb = 1;
            sx = bcx + (sx - bcx) * (1 + BULGE_LOCAL * compY * tb);
          }
        }

        const wasSeen = seen[i];
        const ox = sxPrev[i];
        const oy = syPrev[i];
        seen[i] = 1;

        const a = age[i];
        const l = life[i];
        let fade = a < 1.4 ? a / 1.4 : 1;
        const left = l - a;
        if (left < 2.2) fade *= left / 2.2;

        let depth = (z + 1.25) * 0.4;
        if (depth < 0) depth = 0; else if (depth > 1) depth = 1;

        const vx = ux[i];
        const vy = uy[i];
        const vz = uz[i];
        let heat = Math.sqrt(vx * vx + vy * vy + vz * vz) * 0.42;
        if (heat > 1.6) heat = 1.6;

        const twinkle = 0.62 + 0.38 * Math.sin(t * twF[i] + twP[i]);
        let alpha = (0.09 + 0.91 * depth * depth) * twinkle * fade
          * (1 + 0.675 * heat) * GAIN * washGain;
        if (alpha > 1) alpha = 1;
        const size = grain[i] * (sc / R) * (1 + 0.0425 * heat) * motePx;
        const half = size * 0.5;

        // Final guarantee that nothing crosses the panel: a soft squeeze, so
        // motes crowd and brighten at a contact face instead of being cut.
        const lo = half + EDGE_PAD;
        sx = confine(sx, lo, w - lo);
        sy = confine(sy, lo, h - lo);
        sxPrev[i] = sx;
        syPrev[i] = sy;
        if (fade <= 0.01) continue;

        // Streaks measure motion RELATIVE to the body, so a fast chase does
        // not comet-tail every mote; only the drain earns its light.
        let steps = 1;
        if (wasSeen) {
          const ddx = sx - ox - bulkDX - (sy - bcy) * rollTheta;
          const ddy = sy - oy - bulkDY + (sx - bcx) * rollTheta;
          const dd = Math.sqrt(ddx * ddx + ddy * ddy);
          if (dd > 3.2) steps = Math.min(4, 1 + (dd / 3.2) | 0);
        }

        if (steps === 1) {
          ctx.globalAlpha = alpha;
          ctx.drawImage(dot, sx - half, sy - half, size, size);
        } else {
          const inv = 1 / steps;
          const spread = alpha * 1.7 * inv;
          for (let s = 1; s <= steps; s++) {
            const f = s * inv;
            const aa = spread * (0.22 + 0.78 * f);
            ctx.globalAlpha = aa > 1 ? 1 : aa;
            const tx = ox + (sx - ox) * f;
            const ty = oy + (sy - oy) * f;
            ctx.drawImage(dot, tx - half, ty - half, size, size);
          }
        }

        if (heat > 0.3) {
          // bloom pass: a wider sprite stamped over fast dust. This, not the
          // size term, is what reads as motes swelling under the cursor.
          const glow = size * (1.25 + heat * 0.5);
          const ha = alpha * heat * 0.425;
          ctx.globalAlpha = ha > 1 ? 1 : ha;
          ctx.drawImage(ember, sx - glow * 0.5, sy - glow * 0.5, glow, glow);
        }
      }

      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
    };

    const start = () => {
      if (!raf) {
        last = 0;
        raf = requestAnimationFrame(frame);
      }
    };
    const stop = () => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };
    const onVisibility = () => {
      if (document.hidden) stop(); else start();
    };

    const ro = typeof ResizeObserver === 'function' ? new ResizeObserver(() => resize()) : null;
    if (ro) ro.observe(canvas);
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);

    resize();
    start();

    return () => {
      stop();
      if (ro) ro.disconnect();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerdown', onDown);
      canvas.removeEventListener('pointerup', onUp);
      document.removeEventListener('pointerout', onWindowOut);
      canvas.removeEventListener('pointercancel', onLeave);
    };
  }, []);

  return <Canvas ref={canvasRef} aria-hidden="true" />;
}

const Canvas = styled.canvas`
  display: block;
  width: 100%;
  height: 100%;
  /* let the browser keep vertical scrolling on mobile; sideways drags still
     reach us and stir the dust */
  touch-action: pan-y;
`;
