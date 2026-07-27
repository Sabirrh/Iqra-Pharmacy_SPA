import { motion } from "framer-motion";

const particles = Array.from({ length: 30 }, (_, index) => ({
  id: index,
  size: Math.random() * 6 + 4, // 4px - 10px
  x: (Math.random() - 0.5) * 260,
  y: -(Math.random() * 220 + 80),
  duration: Math.random() * 1.2 + 1.5,
  delay: Math.random() * 0.25,
  opacity: Math.random() * 0.5 + 0.5,
  color: ["#22C55E", "#4ADE80", "#A7F3D0"][
    Math.floor(Math.random() * 3)
  ],
}));

export default function Particles({show}) {
    if(!show) return null;
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: 0,
            y: 0,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            x: particle.x,
            y: particle.y,
            scale: [0, 1, 0.2],
            opacity: [0, particle.opacity, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: "easeOut",
          }}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            background: particle.color,
            boxShadow: `0 0 12px ${particle.color}`,
          }}
        >
          {/* Bright Core */}
          <div
            className="absolute inset-[25%] rounded-full bg-white opacity-70"
          />
        </motion.div>
      ))}
    </div>
  );
}