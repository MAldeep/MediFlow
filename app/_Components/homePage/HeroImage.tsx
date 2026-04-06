export default function HeroImage() {
  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
      <svg
        viewBox="0 0 500 400"
        className="w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Glow */}
        <circle cx="250" cy="200" r="170" fill="#EFF6FF">
          <animate
            attributeName="r"
            values="165;175;165"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Main Dashboard Card */}
        <rect
          x="100"
          y="80"
          width="300"
          height="220"
          rx="20"
          fill="white"
          stroke="#DBEAFE"
          strokeWidth="2"
        />

        {/* Header Bar */}
        <rect x="100" y="80" width="300" height="50" rx="20" fill="#1E3A8A" />

        {/* Patient Avatar */}
        <circle cx="140" cy="155" r="20" fill="#93C5FD" />

        {/* Patient Info Lines */}
        <rect x="170" y="140" width="120" height="10" rx="5" fill="#BFDBFE" />
        <rect x="170" y="160" width="90" height="10" rx="5" fill="#DBEAFE" />

        {/* Medical Cross Icon */}
        <g>
          <rect x="330" y="140" width="12" height="50" rx="4" fill="#2563EB">
            <animate
              attributeName="y"
              values="140;135;140"
              dur="3s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="310" y="160" width="50" height="12" rx="4" fill="#2563EB" />
        </g>

        {/* Chart Bars (Analytics) */}
        <rect x="140" y="210" width="20" height="40" rx="4" fill="#93C5FD">
          <animate
            attributeName="height"
            values="40;55;40"
            dur="4s"
            repeatCount="indefinite"
          />
        </rect>

        <rect x="170" y="200" width="20" height="50" rx="4" fill="#60A5FA">
          <animate
            attributeName="height"
            values="50;65;50"
            dur="4s"
            repeatCount="indefinite"
          />
        </rect>

        <rect x="200" y="220" width="20" height="30" rx="4" fill="#3B82F6">
          <animate
            attributeName="height"
            values="30;45;30"
            dur="4s"
            repeatCount="indefinite"
          />
        </rect>

        {/* Floating File Card */}
        <g>
          <rect
            x="60"
            y="260"
            width="100"
            height="60"
            rx="12"
            fill="#FFFFFF"
            stroke="#BFDBFE"
          >
            <animate
              attributeName="y"
              values="260;240;260"
              dur="5s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="75" y="275" width="60" height="8" rx="4" fill="#93C5FD" />
          <rect x="75" y="290" width="40" height="8" rx="4" fill="#DBEAFE" />
        </g>

        {/* Shield (Security) */}
        <g>
          <path
            d="M380 260 L400 250 L420 260 L420 290 C420 310 400 320 400 320 C400 320 380 310 380 290 Z"
            fill="#1E3A8A"
          >
            <animate
              attributeName="transform"
              type="translate"
              values="0 0; 0 -8; 0 0"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>
    </div>
  );
}
