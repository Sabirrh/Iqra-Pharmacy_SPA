import { motion } from "framer-motion";

export default function Capsules({ split }) {
    return (
        <motion.div
            initial={{
                y: -500,
                rotate: -180,
                scale: 0.6,
                opacity: 0,
            }}
            animate={{
                y: [ -700, 60, -25, 0 ],
                rotate: [ -180, 180, 360 ],
                scale: [0.6, 1.05, 0.98, 1],
                opacity: 1,
            }}
            transition={{
                duration: 2,
                ease: "easeOut",
                times: [0, 0.75, 0.9, 1],
            }}
            className="relative flex justify-center items-center"
        >
            {/* Shadow */}
            <motion.div
                initial={{ scale: 0.2, opacity: 0 }}
                animate={{
                    scale: [0.2, 1.2, 1],
                    opacity: [0, 0.25, 0.18],
                }}
                transition={{
                    duration: 2,
                    ease: "easeOut",
                }}
                className="absolute top-[90px] w-44 h-5 bg-black rounded-full blur-xl"
            />

            {/* Glow */}
            <motion.div
                animate={{
                    opacity: [0.15, 0.35, 0.15],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
                className="absolute w-52 h-52 rounded-full bg-emerald-400/20 blur-3xl"
            />

            {/* Capsule */}
            <svg
                width="250"
                height="120"
                viewBox="0 0 250 120"
                className="drop-shadow-2xl"
            >
                <defs>
                    <linearGradient
                        id="greenGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                    >
                        <stop offset="0%" stopColor="#4ADE80" />
                        <stop offset="50%" stopColor="#22C55E" />
                        <stop offset="100%" stopColor="#15803D" />
                    </linearGradient>

                    <linearGradient
                        id="whiteGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                    >
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="200%" stopColor="#E5E7EB" />
                    </linearGradient>

                    <filter id="shadow">
                        <feDropShadow
                            dx="0"
                            dy="8"
                            stdDeviation="8"
                            floodOpacity="0.25"
                        />
                    </filter>
                </defs>

                {/* Left Half */}
                <path
                    d="
                    M60 20
                    H125
                    V100
                    H60
                    A40 40 0 0 1 60 20
                    "
                    fill="url(#greenGradient)"
                    filter="url(#shadow)"
                />

                {/* Right Half */}
                <path
                    d="
                    M125 20
                    H190
                    A40 40 0 0 1 190 100
                    H125
                    Z
                    "
                    fill="url(#whiteGradient)"
                    filter="url(#shadow)"
                />

                {/* Middle Line */}
                <line
                    x1="125"
                    y1="20"
                    x2="125"
                    y2="100"
                    stroke="#D1D5DB"
                    strokeWidth="2"
                />

                {/* Shine */}
                <ellipse
                    cx="85"
                    cy="40"
                    rx="45"
                    ry="8"
                    fill="rgba(255,255,255,.45)"
                />

                <ellipse
                    cx="170"
                    cy="40"
                    rx="35"
                    ry="7"
                    fill="rgba(255,255,255,.55)"
                />
            </svg>
        </motion.div>
    );
}