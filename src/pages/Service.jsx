import { motion } from "framer-motion";
import { 
    FaPills, 
    FaSuitcaseMedical, 
    FaPrescriptionBottle, 
    FaBaby, 
    FaUserDoctor 
} from "react-icons/fa6";

const servicesData = [
    {
        id: 1,
        title: "Prescription Medicines",
        description: "All kinds of prescription medicines available.",
        icon: <FaPills />
    },
    {
        id: 2,
        title: "OTC Medicines",
        description: "Wide range of over-the-counter medicines.",
        icon: <FaSuitcaseMedical />
    },
    {
        id: 3,
        title: "Health & Wellness Products",
        description: "Vitamins, supplements & health care essentials.",
        icon: <FaPrescriptionBottle />
    },
    {
        id: 4,
        title: "Baby Care Products",
        description: "Trusted baby care and mother care products.",
        icon: <FaBaby />
    },
    {
        id: 5,
        title: "Health Consultation",
        description: "Get advice from our experienced staff.",
        icon: <FaUserDoctor />
    }
];

// Framer motion variants for staggered animations
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
    },
};

export default function Services() {
    return (
        <section className="py-16 px-8 lg:px-20 bg-[#f8fbf9]">
            {/* Section Header */}
            <div className="flex flex-col items-center justify-center mb-12">
                <h2 className="text-green-800 font-bold uppercase tracking-wider text-lg md:text-xl relative inline-block pb-2">
                    Our Services
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-green-800"></span>
                </h2>
            </div>

            {/* Services Grid */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 cursor-pointer"
            >
                {servicesData.map((service) => (
                    <motion.div 
                        key={service.id}
                        variants={cardVariants}
                        className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                    >
                        {/* Icon Container */}
                        <div className="bg-green-800 text-white p-4 rounded-full text-2xl mb-5 shadow-md">
                            {service.icon}
                        </div>
                        
                        {/* Text Content */}
                        <h3 className="font-bold text-gray-900 text-base md:text-lg mb-3 leading-tight">
                            {service.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}