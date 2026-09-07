import { Link, NavLink } from "react-router-dom";
import { assests } from "../assets/assests";
import {
    HiOutlineMenuAlt3,
    HiOutlineX,
} from "react-icons/hi";
import MobileNavigation from "./MobileNavigation";
import { useState, useEffect } from "react";

export default function MainNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false)
            }
        })
    }, [])

    return (
        <>
            <header className={`
                 fixed
                 left-0
                 w-full
                 z-50
                 transition-all
                 duration-500
                 ${isScrolled ? "top-2" : "top-4"}
            `}>
                {/* logo section */}
                <div className={`
                          max-w-[1600px]
                          mx-auto
                          px-8
                          flex
                          items-center
                          justify-between
                          rounded-[50px]
                          transition-all
                          duration-500
                          ease-in-out
                          cursor-default
                          ${isScrolled
                        ? "backdrop-blur-xl border border-gray-200 shadow-2xl"
                        : "bg-transparent border-transparent shadow-none backdrop-blur-none"
                    }
                    `}>
                    <div className={`
                       flex
                       items-center
                       gap-4
                       transition-all
                       duration-500
                       ${isScrolled ? "scale-95" : "scale-100"}
                      `}
                    >
                        <div className="text-emerald-600 cursor-pointer text-3xl">🌱</div>
                        <div>
                            <Link to="/">
                                <h1 className="text-3xl font-bold tracking-wider text-emerald-800 leading-none cursor-pointer">IQRA</h1>
                                <p className="text-m font-semibold text-gray-500 tracking-widest mt-1 cursor-pointer">PHARMACY</p>
                                <p className="text-[10px] text-emerald-600 italic cursor-pointer">Your Health, Our Priority</p>
                            </Link>
                        </div>
                    </div>
                    <nav className="hidden lg:block">
                        <ul className="flex gap-8 font-bold cursor-pointer">
                            <li className="no-underline">
                                <NavLink to="/"
                                    className={({ isActive }) => `pb-1 transition-all ${isActive ? "text-emerald-700 font-semibold border-b-2 duration-300 border-emerald-700" : "hover:text-emerald-600"}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/about"
                                    className={({ isActive }) => `pb-1 transition-all ${isActive ? "text-emerald-700 font-semibold border-b-2 duration-300 border-emerald-700" : "hover:text-emerald-600"}`
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/service"
                                    className={({ isActive }) => `pb-1 transition-all ${isActive ? "text-emerald-700 font-semibold border-b-2 duration-300 border-emerald-700" : "hover:text-emerald-600"}`
                                    }>
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/health"
                                    className={({ isActive }) => `pb-1 transition-all ${isActive ? "text-emerald-700 font-semibold border-b-2 duration-300 border-emerald-700" : "hover:text-emerald-600"}`
                                    }>
                                    Health tips
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact"
                                    className={({ isActive }) => `pb-1 transition-all ${isActive ? "text-emerald-700 font-semibold border-b-2 duration-300 border-emerald-700" : "hover:text-emerald-600"}`
                                    }>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    {/* Right Section */}
                    {/* <div className="flex items-center gap-4">
                        <div className={`
                              hidden lg:block
                              bg-emerald-900
                              rounded-2xl
                              px-4
                              py-3
                              transition-all
                              duration-500
                              hover:bg-emerald-800
                              hover:scale-105
                              ${isScrolled ? "scale-95" : "scale-100"}
                            `}>
                            <Link
                                to="tel:+9779809195607"
                                className="text-white flex items-center gap-2"
                            >
                                <img
                                    src={assests.smartphone_icon}
                                    alt="Phone Icon"
                                    className="w-6 h-6"
                                />

                                <div className="text-left">
                                    <p className="text-xs font-bold whitespace-nowrap">
                                        +977 98 0919 5607
                                    </p>

                                    <p className="text-sm text-emerald-200">
                                        Call Us - What's App
                                    </p>
                                </div>

                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-emerald-800 text-4xl right-0.5"
                    >
                        {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
                    </button>

                    {/* </div> */}

                    <div className="flex items-center gap-4">
                        {/* Desktop Call/WhatsApp Dropdown Container */}
                        <div className={`
                                hidden lg:block
                                relative group
                                bg-emerald-900
                                rounded-2xl
                                px-4
                                py-3
                                transition-all
                                duration-500
                                cursor-pointer
                                hover:bg-emerald-800
                                hover:scale-105
                                ${isScrolled ? "scale-95" : "scale-100"}
                            `}>
                            {/* Main Trigger Display */}
                            <div className="text-white flex items-center gap-2">
                                <img
                                    src={assests.smartphone_icon}
                                    alt="Phone Icon"
                                    className="w-6 h-6"
                                />
                                <div className="text-left">
                                    <p className="text-xs font-bold whitespace-nowrap">
                                        +977 9822255550
                                    </p>
                                    <p className="text-sm text-emerald-200 flex items-center gap-1">
                                        Contact Us
                                        <span className="text-[10px] opacity-70">▼</span>
                                    </p>
                                </div>
                            </div>

                            {/* Hover Menu Options */}
                            <div className="absolute top-[102%] left-0 w-full bg-emerald-900 rounded-xl shadow-xl border border-emerald-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-50">
                                {/* Native Call Option */}
                                <a
                                    href="tel:+9779809195607"
                                    className="flex items-center gap-3 px-4 py-3 text-white text-sm hover:bg-emerald-800 transition-colors"
                                >
                                    📞 <span className="font-medium">Direct Call</span>
                                </a>

                                {/* WhatsApp Option */}
                                <a
                                    href="https://wa.me/9779822255550"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-4 py-3 text-white text-sm border-t border-emerald-800/50 hover:bg-emerald-800 transition-colors"
                                >
                                    💬 <span className="font-medium">WhatsApp</span>
                                </a>
                            </div>
                        </div>


                    </div>


                </div>
            </header>
            <MobileNavigation
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />
        </>

    )
}

