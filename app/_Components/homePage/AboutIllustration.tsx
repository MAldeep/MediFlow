export default function AboutIllustration() {
  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
      <svg
        viewBox="0 0 500 400"
        className="w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 🌊 Animated Gradient Background */}
        <defs>
          <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#DBEAFE" />
            <stop offset="100%" stopColor="#EFF6FF" />
          </radialGradient>
        </defs>

        {/* Background Blob */}
        <ellipse cx="250" cy="200" rx="180" ry="140" fill="url(#bgGradient)">
          <animate
            attributeName="rx"
            values="175;185;175"
            dur="10s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="ry"
            values="135;145;135"
            dur="10s"
            repeatCount="indefinite"
          />
        </ellipse>

        {/* 🧠 Central System Hub */}
        <g>
          <circle cx="250" cy="200" r="48" fill="#1E3A8A" opacity="0.95" />
          <circle
            cx="250"
            cy="200"
            r="65"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="1.5"
            opacity="0.3"
          >
            <animate
              attributeName="r"
              values="65;85;65"
              dur="6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.3;0;0.3"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* 👨‍⚕️ Doctor Node */}
        <g>
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -6; 0 0"
              dur="6s"
              repeatCount="indefinite"
            />
            <circle cx="120" cy="130" r="32" fill="#93C5FD" />
            <rect x="100" y="165" width="40" height="8" rx="4" fill="#BFDBFE" />
          </g>
        </g>

        {/* 📄 Patient Record */}
        <g>
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 6; 0 0"
              dur="7s"
              repeatCount="indefinite"
            />
            <rect
              x="330"
              y="110"
              width="85"
              height="60"
              rx="14"
              fill="#FFFFFF"
              stroke="#BFDBFE"
            />
            <rect x="345" y="125" width="55" height="8" rx="4" fill="#93C5FD" />
            <rect x="345" y="140" width="40" height="8" rx="4" fill="#DBEAFE" />
          </g>
        </g>

        {/* 📊 Analytics Card */}
        <g>
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -5; 0 0"
              dur="8s"
              repeatCount="indefinite"
            />
            <rect
              x="95"
              y="260"
              width="75"
              height="55"
              rx="14"
              fill="#FFFFFF"
              stroke="#BFDBFE"
            />
            <rect x="110" y="285" width="8" height="20" rx="2" fill="#60A5FA" />
            <rect x="125" y="275" width="8" height="30" rx="2" fill="#3B82F6" />
          </g>
        </g>

        {/* 🛡️ Security Node */}
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 0 -6; 0 0"
            dur="7s"
            repeatCount="indefinite"
          />
          <path
            d="M370 260 L390 250 L410 260 L410 290 C410 310 390 320 390 320 C390 320 370 310 370 290 Z"
            fill="#1E3A8A"
            opacity="0.95"
          />
        </g>

        {/* 🔗 Smooth Flowing Connections */}
        <g stroke="#3B82F6" strokeWidth="1.5" fill="none" opacity="0.4">
          <path d="M250 200 Q180 150 120 130">
            <animate
              attributeName="stroke-dasharray"
              values="0,200;200,0"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>

          <path d="M250 200 Q330 160 370 130">
            <animate
              attributeName="stroke-dasharray"
              values="0,200;200,0"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>

          <path d="M250 200 Q180 250 130 280">
            <animate
              attributeName="stroke-dasharray"
              values="0,200;200,0"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>

          <path d="M250 200 Q330 250 390 280">
            <animate
              attributeName="stroke-dasharray"
              values="0,200;200,0"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>
    </div>
  );
}
