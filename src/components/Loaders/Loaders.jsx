import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Capsules from "./Capsules";
import Particles from "./Particles";

export default function Loaders({ onFinish }) {
    const [split, setSplit] = useState(false);
    const [showParticles, setShowParticles] = useState(false);
    const [showLogo, setShowLogo] = useState(false);
    const [fadeLoader, setFadeLoader] = useState(false);

    useEffect(() => {

        const splitTimer = setTimeout(() => {
            setSplit(true);
        }, 2200);

        const particleTimer = setTimeout(() => {
            setShowParticles(true);
        }, 2300);

        const logoTimer = setTimeout(() => {
            setShowLogo(true);
        }, 3300);

        const fadeTimer = setTimeout(() => {
            setFadeLoader(true);
        }, 4500);

        const finishTimer = setTimeout(() => {
            onFinish();
        }, 5000);

        return () => {
            clearTimeout(splitTimer);
            clearTimeout(particleTimer);
            clearTimeout(logoTimer);
            clearTimeout(fadeTimer);
            clearTimeout(finishTimer);
        };

    }, [onFinish]);

    return (
        <AnimatePresence>

            {!fadeLoader && (

                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#A5D6A7]"
                    exit={{ opacity: 0 }}
                >

                    <Capsules split={split} />

                    <Particles show={showParticles} />

                    {showLogo && (
                        <motion.h1
                            initial={{
                                opacity: 0,
                                scale: .6
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1
                            }}
                            className="absolute text-6xl font-black text-green-700 tracking-[12px]"
                        >
                            {/* IQRA */}
                        </motion.h1>
                    )}

                </motion.div>

            )}

        </AnimatePresence>
    );
}