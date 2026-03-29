"use client";

import { useEffect, useRef, useCallback } from "react";

// ─── types ────────────────────────────────────────────────────────────────────
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  r: number; // rgb components
  g: number;
  b: number;
  alpha: number;
}

// ─── constants ────────────────────────────────────────────────────────────────
const PALETTE: [number, number, number][] = [
  [93, 248, 245],   // teal   #5df8f5
  [162, 30, 255],   // purple #a21eff
  [31, 234, 100],   // green  #1fea64
  [102, 126, 234],  // indigo #667eea
];

const COUNT        = 110;
const LINK_DIST    = 130;
const MOUSE_RADIUS = 160;
const REPEL        = 0.55;
const MAX_SPEED    = 1.2;

// ─── component ────────────────────────────────────────────────────────────────
const HomeBackground = () => {
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const particles    = useRef<Particle[]>([]);
  const mouse        = useRef({ x: -9999, y: -9999 });
  const raf          = useRef(0);

  const make = useCallback((w: number, h: number): Particle[] =>
    Array.from({ length: COUNT }, () => {
      const [r, g, b] = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 1.4 + 0.6,
        r, g, b,
        alpha: Math.random() * 0.45 + 0.35,
      };
    }),
  []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.current = make(canvas.width, canvas.height);
    };
    resize();

    const onMove  = (e: MouseEvent) => { mouse.current = { x: e.clientX, y: e.clientY }; };
    const onLeave = ()              => { mouse.current = { x: -9999, y: -9999 }; };

    window.addEventListener("resize",      resize);
    window.addEventListener("mousemove",   onMove);
    window.addEventListener("mouseleave",  onLeave);

    // ── draw loop ─────────────────────────────────────────────────────────────
    const loop = () => {
      const W  = canvas.width;
      const H  = canvas.height;
      const mx = mouse.current.x;
      const my = mouse.current.y;
      const ps = particles.current;

      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];

        // repel from mouse
        const mdx  = p.x - mx;
        const mdy  = p.y - my;
        const mDst = Math.hypot(mdx, mdy);
        if (mDst < MOUSE_RADIUS && mDst > 0) {
          const f = ((MOUSE_RADIUS - mDst) / MOUSE_RADIUS) * REPEL;
          p.vx += (mdx / mDst) * f;
          p.vy += (mdy / mDst) * f;
        }

        // dampen + clamp
        p.vx *= 0.97;
        p.vy *= 0.97;
        const spd = Math.hypot(p.vx, p.vy);
        if (spd > MAX_SPEED) { p.vx = (p.vx / spd) * MAX_SPEED; p.vy = (p.vy / spd) * MAX_SPEED; }

        p.x += p.vx;
        p.y += p.vy;

        // wrap
        if (p.x < 0) p.x = W; else if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; else if (p.y > H) p.y = 0;

        // draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${p.alpha})`;
        ctx.fill();

        // draw links
        for (let j = i + 1; j < ps.length; j++) {
          const q   = ps[j];
          const dx  = p.x - q.x;
          const dy  = p.y - q.y;
          const dst = Math.hypot(dx, dy);

          if (dst < LINK_DIST) {
            const t = 1 - dst / LINK_DIST;

            // gradient line from p color → q color
            const grad = ctx.createLinearGradient(p.x, p.y, q.x, q.y);
            grad.addColorStop(0, `rgba(${p.r},${p.g},${p.b},${t * 0.22})`);
            grad.addColorStop(1, `rgba(${q.r},${q.g},${q.b},${t * 0.22})`);

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth   = t * 0.8;
            ctx.stroke();
          }
        }
      }

      raf.current = requestAnimationFrame(loop);
    };

    raf.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize",     resize);
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [make]);

  return (
    <div className="home-background">
      <div className="home-background__gradient-mesh" />
      <canvas ref={canvasRef} className="home-background__canvas" />
      <div className="home-background__grid" />
    </div>
  );
};

export default HomeBackground;
