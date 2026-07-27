import { motion } from "framer-motion";
import { FiMapPin, FiHeart } from "react-icons/fi";

export default function VisitUs() {
    return (
        <footer className="w-full">
            {/* Main Content Area */}
            <div className="flex flex-col lg:flex-row w-full">

                {/* Left Side: Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 bg-[#115e33] text-white p-8 lg:p-12 relative overflow-hidden flex flex-col justify-center"
                >
                    <div className="z-10 max-w-md relative">
                        {/* Heading */}
                        <div className="flex items-center gap-2 mb-6 text-2xl font-semibold">
                            <FiMapPin className="text-white" />
                            <h2>Visit Us</h2>
                        </div>

                        {/* Address */}
                        <div className="mb-6">
                            <h3 className="font-bold text-lg mb-1">Iqra Pharmacy</h3>
                            <p className="text-green-100 text-sm leading-relaxed max-w-[250px]">
                                Narayani Hospital, Narayani Hospital Back Gate right side,<br />
                                Birgunj, Nepal
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-dashed border-green-400/40 w-full my-6"></div>

                        {/* Phone & Hours */}
                        <div className="text-green-100 text-sm flex flex-col gap-2">
                            <p className="tracking-widest mb-2">+977 98 091 95607</p>
                            <div className="flex gap-4">
                                <span className="w-20">Sun - thu :</span>
                                <span>8:00 AM - 11:00 PM</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="w-20">Fri :</span>
                                <span>4:00 PM - 11:00 PM</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Interactive Map */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 min-h-[350px] relative bg-gray-200"
                >
                    {/* Embedded Google Map */}
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.829261890324!2d84.86899112548507!3d27.003950276592885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39935584a359ae3f%3A0x28d223a184ed3825!2sNarayani%20Hospital!5e0!3m2!1sen!2snp!4v1784959457692!5m2!1sen!2snp" 
                        className="absolute inset-0 w-full h-full"
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                    {/* Floating Map Pin Card (Optional: Added pointer-events-none so it doesn't block map interactions) */}
                    <div className="absolute top-8 right-8 bg-white rounded-xl shadow-lg p-3 md:p-4 flex items-center gap-3 w-max max-w-[280px] pointer-events-none">
                        <div className="bg-green-700 text-white p-2 rounded-full text-xl flex-shrink-0">
                            <FiMapPin />
                        </div>
                        <div>
                            <h4 className="text-green-800 font-bold text-sm md:text-base leading-tight">
                                Iqra Pharmacy
                            </h4>
                            <p className="text-gray-500 text-xs mt-0.5">
                                Your Health, Our Priority
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Bottom Copyright Bar */}
            <div className="bg-[#0b3d20] text-[#9fcba7] text-xs py-4 px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p>© 2026 Iqra Pharmacy. All Rights Reserved.</p>

                <div className="flex items-center gap-2">
                    <FiHeart className="text-current" />
                    <p>Thank you for trusting us with your health.</p>
                </div>

                <div className="md:block text-current text-sm">
                    <a
                        href="https://www.linkedin.com/in/sabirhussainteli/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors duration-300"
                    >
                        Developed By <span className="text-amber-500 font-semibold">Sabir Hussain</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}