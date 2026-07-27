    import { assests } from "../assets/assests";
    import { motion } from "framer-motion";
    import { FiBriefcase, FiTag, FiUser, FiUserCheck } from "react-icons/fi";

    export default function About() {
        return (
            <section className="flex flex-col lg:flex-row items-center gap-12 px-8 lg:px-20 py-10 bg-white">
                {/* Left Side: Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 w-full"
                >
                    <div className="h-[400px] lg:h-[450px] w-full rounded-2xl overflow-hidden shadow-sm">
                        <img 
                            src={assests.hero_image} 
                            alt="About Image" 
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </motion.div>

                {/* Right Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 flex flex-col gap-6"
                >
                    <div>
                        <h3 className="text-green-700 font-bold uppercase tracking-wide pb-2 text-m">
                            About Us
                        </h3>
                        
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-5 leading-tight">
                            Trusted <span className="text-green-800">Care.</span> Close to Home.
                        </h2>
                        
                        <p className="text-gray-600 mb-10 text-sm md:text-base leading-relaxed">
                            Iqra Pharmacy is a community pharmacy dedicated to improving the health and well-being of our customers. We believe in providing quality medicines, reliable advice, and friendly service.
                        </p>

                        {/* Bottom Features Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 cursor-pointer">
                            
                            <div className="flex items-center gap-3">
                                <div className="bg-green-50 border border-green-100 p-3 rounded-xl text-green-800 text-xl">
                                    <FiBriefcase />
                                </div>
                                <p className="text-xs font-semibold text-gray-800 leading-tight">Quality<br />Products</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="bg-green-50 border border-green-100 p-3 rounded-xl text-green-800 text-xl">
                                    <FiTag />
                                </div>
                                <p className="text-xs font-semibold text-gray-800 leading-tight">Affordable<br />Prices</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="bg-green-50 border border-green-100 p-3 rounded-xl text-green-800 text-xl">
                                    <FiUser />
                                </div>
                                <p className="text-xs font-semibold text-gray-800 leading-tight">Experienced<br />Staff</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="bg-green-50 border border-green-100 p-3 rounded-xl text-green-800 text-xl">
                                    <FiUserCheck />
                                </div>
                                <p className="text-xs font-semibold text-gray-800 leading-tight">Customer<br />Satisfaction</p>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </section>
        )
    }