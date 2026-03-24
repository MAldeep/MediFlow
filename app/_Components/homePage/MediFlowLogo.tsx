"use client";

export default function MediFlowLogo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <svg
        width="200"
        height="45"
        viewBox="0 0 160 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        {/* Defining the Wave Gradient */}
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="100%" y2="0">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>

        {/* The MediWave Icon (M + Wave) */}
        <path
          d="M8 30V15L16 25L24 15V30M24 30C24 30 28 20 34 20C40 20 44 30 50 30C56 30 60 20 65 20"
          stroke="url(#waveGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* The Text - Medi (Light) */}
        <text
          x="75"
          y="29"
          fill="#0F172A"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "20px",
            fontWeight: 300,
            letterSpacing: "-0.02em",
          }}
        >
          Medi
        </text>

        {/* The Text - Flow (Bold) */}
        <text
          x="120"
          y="29"
          fill="#0EA5E9"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "-0.01em",
          }}
        >
          Flow
        </text>
      </svg>
    </div>
  );
}
