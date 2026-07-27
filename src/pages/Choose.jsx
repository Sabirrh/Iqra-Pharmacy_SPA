import { motion } from "framer-motion";
import { FiAward, FiTag, FiClock, FiUsers, FiHeart } from "react-icons/fi";

const featuresData = [
    {
        id: 1,
        title: "Genuine",
        subtitle: "Products",
        icon: <FiAward />
    },
    {
        id: 2,
        title: "Best Prices",
        subtitle: "in Town",
        icon: <FiTag />
    },
    {
        id: 3,
        title: "Always",
        subtitle: "On Time",
        icon: <FiClock />
    },
    {
        id: 4,
        title: "Friendly & Helpful",
        subtitle: "Staff",
        icon: <FiUsers />
    },
    {
        id: 5,
        title: "Your Health is",
        subtitle: "Our Commitment",
        icon: <FiHeart />
    }
];

// Framer motion variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
        opacity: 1, 
        scale: 1, 
        transition: { duration: 0.5, ease: "easeOut" } 
    },
};

export default function WhyChooseUs() {
    return (
        <section className="py-16 px-8 lg:px-12 bg-white">
            {/* Section Header */}
            <div className="flex flex-col items-center justify-center mb-12">
                <h2 className="text-green-800 font-bold uppercase tracking-wider text-lg md:text-xl text-center relative inline-block pb-3">
                    Why Choose Iqra Pharmacy?
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-green-800"></span>
                </h2>
            </div>

            {/* Features Container */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="flex flex-col lg:flex-row cursor-pointer items-center justify-between gap-8 lg:gap-0 max-w-7xl mx-auto"
            >
                {featuresData.map((feature, index) => (
                    <motion.div 
                        key={feature.id}
                        variants={itemVariants}
                        className={`flex items-center gap-4 w-full lg:w-1/5 lg:justify-center px-4 ${
                            index !== featuresData.length - 1 
                                ? "lg:border-r border-dashed border-gray-300" 
                                : ""
                        }`}
                    >
                        {/* Icon */}
                        <div className="text-green-800 text-4xl shrink-0">
                            {feature.icon}
                        </div>
                        
                        {/* Text */}
                        <div className="flex flex-col">
                            <span className="text-gray-800 font-semibold text-sm leading-tight">
                                {feature.title}
                            </span>
                            <span className="text-gray-800 font-semibold text-sm leading-tight">
                                {feature.subtitle}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}