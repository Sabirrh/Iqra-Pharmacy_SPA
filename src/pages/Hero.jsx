import { assests } from "../assets/assests";
import { motion } from "framer-motion";
import { FiUser, FiHeart, FiArrowRight } from "react-icons/fi";
import { GoShieldCheck } from "react-icons/go";


export default function HeroSection() {
    return (
        <>
            <section
                // className="flex flex-col lg:flex-row items-center justify-around min-h-screen overflow-hidden"
                className="flex flex-col lg:flex-row items-center justify-between min-h-screen pt-10 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #F8FFF9, #ECFDF5, #DCFCE7)' }}
            >
                {/* Left Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:flex-1 px-6 sm:px-8 lg:px-20 flex flex-col gap-6"
                >
                    {/* Top Pulse Subtitle */}
                    <div className="flex items-center gap-2 text-green-700 font-semibold text-sm">
                        <img src={assests.heart_pulse_icon} alt="pulse" className="w-5 h-5 fill-green-900" />
                        <span>Caring for You. Every Day.</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                        Your Health, <br />
                        <span className="text-green-800">Our Priority</span>
                    </h1>

                    {/* Paragraph description */}
                    <p className="text-gray-600 text-base sm:text-lg  max-w-xl leading-relaxed">
                        Iqra Pharmacy is your trusted local pharmacy providing genuine medicines and personal care products with a smile.
                    </p>

                    {/* Features Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-6 mt-6 mb-4">
                        {/* Feature 1 */}
                        <div className="flex items-center gap-3 cursor-pointer">
                            <div className="p-2.5 bg-white border border-gray-100 rounded-full shadow-sm text-green-700">
                                <GoShieldCheck className="text-xl" />
                            </div>
                            <p className="text-sm font-semibold text-gray-800 leading-tight w-25">100% Genuine Medicines</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-center gap-3 cursor-pointer">
                            <div className="p-2.5 bg-white border border-gray-100 rounded-full shadow-sm text-green-700">
                                <FiUser className="text-xl" />
                            </div>
                            <p className="text-sm font-semibold text-gray-800 leading-tight w-20">Expert Guidance</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-center gap-3 cursor-pointer">
                            <div className="p-2.5 bg-white border border-gray-100 rounded-full shadow-sm text-green-700">
                                <FiHeart className="text-xl" />
                            </div>
                            <p className="text-sm font-semibold text-gray-800 leading-tight w-25">Care You Can Trust</p>
                        </div>
                    </div>

                    {/* Call to Action Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-4 bg-green-800 text-white px-6 py-3 rounded-full w-full sm:w-fit justify-center hover:bg-green-900 transition-colors shadow-lg"
                    >
                        <span className="font-medium cursor-pointer">Visit Us Today</span>
                        <div className="bg-white text-green-800 p-1.5 rounded-full">
                            <FiArrowRight className="text-sm" />
                        </div>
                    </motion.button>
                </motion.div>

                {/* Right Side: Hero Image with Curved Edge */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="hidden lg:flex lg:flex-1 h-screen relative"
                >
                    <div className="absolute inset-0 lg:inset-y-0 lg:right-0 w-full h-full lg:w-[110%] rounded-t-[60px] lg:rounded-l-[250px] overflow-hidden shadow-2xl">
                        <img
                            src={assests.hero_image}
                            alt="Iqra Pharmacy"
                            className="w-full h-full object-cover object-left"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/50 to-emerald-800/40"></div>
                    </div>
                </motion.div>
            </section>
        </>
    );
}