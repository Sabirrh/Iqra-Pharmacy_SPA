import { useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { assests } from "../assets/assests";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: '',
    });

    const handleChange = (e) => {
        if (!e || !e.target) return;
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Format the message for WhatsApp
        const text = `Hello Iqra Pharmacy, my name is ${formData.name}.\n\nMessage: ${formData.message}\n\nMy Email: ${formData.email}\nMy Phone: ${formData.number}`;
        
        // Using the number from your navbar
        const whatsappNumber = "9779809135007"; 
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
        
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="min-h-screen bg-slate-50 pt-32 pb-12 px-4 flex justify-center items-center font-sans">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row"
            >
                {/* Left Side: Image & Info */}
                <div className="relative w-full lg:w-5/12 h-80 lg:h-auto">
                    {/* Background Image - Feel free to change assests.hero_image to a specific store image */}
                    <img 
                        src={assests.hero_image} 
                        alt="Pharmacy Store" 
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/80 to-emerald-800/40"></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end text-white">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                            We're here for your health.
                        </h2>
                        <p className="text-emerald-100 mb-10 text-sm lg:text-base leading-relaxed">
                            Have a question about a medication, need expert health advice, or looking for a specific product? Drop us a message, and our expert pharmacists will assist you.
                        </p>

                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-4 text-emerald-50">
                                <div className="w-10 h-10 rounded-full bg-emerald-800/50 flex items-center justify-center backdrop-blur-sm border border-emerald-500/30">
                                    <FiMapPin className="text-xl" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-semibold text-white">Visit Us</p>
                                    <p className="text-emerald-200">Narayani Hospital, Birgunj, Nepal</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4 text-emerald-50">
                                <div className="w-10 h-10 rounded-full bg-emerald-800/50 flex items-center justify-center backdrop-blur-sm border border-emerald-500/30">
                                    <FiPhone className="text-xl" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-semibold text-white">Call Us</p>
                                    <p className="text-emerald-200">+977 98 0913 5007</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-emerald-50">
                                <div className="w-10 h-10 rounded-full bg-emerald-800/50 flex items-center justify-center backdrop-blur-sm border border-emerald-500/30">
                                    <FiMail className="text-xl" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-semibold text-white">Email Us</p>
                                    <p className="text-emerald-200">support@iqrapharmacy.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="w-full lg:w-7/12 p-8 lg:p-14 xl:p-16">
                    <div className="mb-8">
                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 tracking-tight">Send us a Message</h3>
                        <p className="text-slate-500 mt-2 text-sm">We typically reply within a few minutes directly on WhatsApp.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        
                        {/* Two Column Row for Desktop */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Full Name */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-slate-700 tracking-wide uppercase">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm bg-slate-50 outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-50 transition-all duration-300"
                                    required
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-slate-700 tracking-wide uppercase">Phone Number</label>
                                <input
                                    type="tel"
                                    name="number"
                                    value={formData.number}
                                    onChange={handleChange}
                                    placeholder="+977 98XXXXXXXX"
                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm bg-slate-50 outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-50 transition-all duration-300"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email Address */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-slate-700 tracking-wide uppercase">Email Address (Optional)</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="name@example.com"
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm bg-slate-50 outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-50 transition-all duration-300"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-slate-700 tracking-wide uppercase">Your Message</label>
                            <textarea
                                name="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="How can our pharmacy help you today?"
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm bg-slate-50 outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-50 transition-all duration-300 resize-none"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full lg:w-auto self-start mt-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <FaWhatsapp className="text-lg" /> 
                            <span>Send via WhatsApp</span>
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </section>
    );
}