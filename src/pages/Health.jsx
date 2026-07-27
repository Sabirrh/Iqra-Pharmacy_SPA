import { motion } from "framer-motion";
import { FiClock, FiArrowRight } from "react-icons/fi";
import { healthTipsData } from "../assets/assests";
// Sample Data for the Health Tips

// Framer Motion Animations
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function HealthTips() {
    return (
        <section className="min-h-screen bg-[#f8fbf9] py-16 px-6 lg:px-20">

            {/* Header Section */}
            <div className="max-w-7xl mx-auto mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-emerald-700 font-bold uppercase tracking-widest text-sm mb-3">
                        Wellness Hub
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                        Health Tips & Insights
                    </h1>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Empowering you with expert advice, healthy habits, and the latest medical insights to help you live your best life every day.
                    </p>
                </motion.div>
            </div>
            
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {healthTipsData.map((tip) => (
                    <motion.article
                        key={tip.id}
                        variants={cardVariants}
                        className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col cursor-pointer border border-gray-100"
                    >
                        {/* Image Container with Hover Zoom */}
                        <div className="relative h-60 overflow-hidden">
                            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-800 shadow-sm">
                                {tip.category}
                            </div>
                            <img
                                src={tip.image}
                                alt={tip.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                            />
                        </div>

                        {/* Content Area */}
                        <div className="p-6 md:p-8 flex flex-col flex-grow">
                            <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold mb-3">
                                <FiClock />
                                <span>{tip.readTime}</span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-emerald-700 transition-colors">
                                {tip.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                {tip.excerpt}
                            </p>

                            {/* Read More Link */}
                            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm group-hover:gap-3 transition-all">
                                Read Article <FiArrowRight />
                            </div>
                        </div>
                    </motion.article>
                ))}
            </motion.div>

        </section>
    );
}