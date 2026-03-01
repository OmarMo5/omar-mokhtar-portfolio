import { memo } from "react";

const AnimatedBackground = memo(() => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
    {/* Slow gradient orbs */}
    <div
      className="absolute w-[600px] h-[600px] rounded-full opacity-[0.04] blur-[120px]"
      style={{
        background: "hsl(var(--primary))",
        top: "10%",
        left: "-5%",
        animation: "bg-drift-1 25s ease-in-out infinite",
      }}
    />
    <div
      className="absolute w-[500px] h-[500px] rounded-full opacity-[0.03] blur-[100px]"
      style={{
        background: "hsl(var(--primary))",
        bottom: "15%",
        right: "-8%",
        animation: "bg-drift-2 30s ease-in-out infinite",
      }}
    />
    <div
      className="absolute w-[400px] h-[400px] rounded-full opacity-[0.025] blur-[80px]"
      style={{
        background: "hsl(var(--accent))",
        top: "50%",
        left: "40%",
        animation: "bg-drift-3 20s ease-in-out infinite",
      }}
    />

    {/* Subtle grid overlay */}
    <div
      className="absolute inset-0 opacity-[0.015]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />

    {/* Noise grain for depth */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
      }}
    />
  </div>
));

AnimatedBackground.displayName = "AnimatedBackground";

export default AnimatedBackground;
