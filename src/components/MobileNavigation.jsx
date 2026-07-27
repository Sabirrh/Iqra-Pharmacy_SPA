import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
    HiOutlineX,
    HiHome,
    HiPhone,
    HiInformationCircle,
    HiHeart,
} from "react-icons/hi";
import { HiOutlineBeaker } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNavigation({
     isMenuOpen,
    setIsMenuOpen,
}) {

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        }
    }, [isMenuOpen])

    return (
        <>
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                duration: 0.45,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="fixed top-4 right-0 h-screen w-[85%] max-w-sm bg-white rounded-l-3xl shadow-2xl z-50 lg:hidden flex flex-col"
                        >
                            {/* Close */}
                            <div className="flex justify-end p-6">
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-4xl text-emerald-800"
                                >
                                    <HiOutlineX />
                                </button>
                            </div>

                            {/* Logo */}
                            <div className="px-8">
                                <h1 className="text-3xl font-bold text-emerald-800">
                                    IQRA
                                </h1>

                                <p className="tracking-[6px] text-gray-500">
                                    PHARMACY
                                </p>

                                <p className="text-sm italic text-emerald-600 mt-2">
                                    Your Health, Our Priority
                                </p>
                            </div>

                            {/* Navigation */}
                            <nav className="flex-1 mt-12 px-8">
                                <ul className="space-y-6">

                                    <li>
                                        <NavLink
                                            to="/"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center gap-4 text-lg font-semibold hover:text-emerald-600 transition"
                                        >
                                            <HiHome />
                                            Home
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink
                                            to="/about"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center gap-4 text-lg font-semibold hover:text-emerald-600 transition"
                                        >
                                            <HiInformationCircle />
                                            About Us
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink
                                            to="/service"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center gap-4 text-lg font-semibold hover:text-emerald-600 transition"
                                        >
                                            <HiOutlineBeaker />
                                            Services
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink
                                            to="/health"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center gap-4 text-lg font-semibold hover:text-emerald-600 transition"
                                        >
                                            <HiHeart />
                                            Health Tips
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink
                                            to="/contact"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center gap-4 text-lg font-semibold hover:text-emerald-600 transition"
                                        >
                                            <HiPhone />
                                            Contact
                                        </NavLink>
                                    </li>

                                </ul>
                            </nav>

                            {/* Call Button */}
                            <div className="p-8">
                                <Link
                                    to="tel:+9779809195607"
                                    className="flex items-center justify-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl py-4 font-semibold transition"
                                >
                                    <HiPhone className="text-xl" />
                                    Call Us
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}