"use client";
import { FileText, Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import useScrollToSection from '@/hooks/useScrollToSection';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const [scrolled, setScrolled] = useState(false);
    const scrollToSection = useScrollToSection();

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    })
    return (
        <motion.div initial={{y: -80, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.6, ease: "easeOut"}} className={`fixed top-0 inset-x-0 z-50 transition-all ease-in-out duration-300 ${scrolled ? "bg-[#eeeded] shadow-lg" : ""}`}>
            <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex transition-all ease-in-out duration-300 justify-between ${scrolled ? "h-16" : "h-20"}`}>
                    {/* Logo */}
                    <Link href={"#hero"} className='flex gap-2 items-center'>
                        <div className='text-[#e6b01d]'>
                            <FileText />
                        </div>
                        <p className={` transition-all ease-in-out duration-300  font-bold text-[20px] ${scrolled ? "text-black" : "text-white"}`}>USIZO</p>
                    </Link>
                    {/* Desktop links */}
                    <div className={`hidden md:flex items-center font-semibold transition-all ease-in-out duration-300 text-sm ${scrolled ? "text-gray-500" : "text-gray-300"}`}>
                        <button onClick={() => scrollToSection("services")} className=' hover:text-[#e6b01d] px-4 py-2 transition rounded-lg cursor-pointer'>Services</button>
                        <button onClick={() => scrollToSection("cover-letter")} className=' hover:text-[#e6b01d] px-4 py-2 transition rounded-lg cursor-pointer'>Cover Letter</button>
                        <button onClick={() => scrollToSection("cv-consultation")} className=' hover:text-[#e6b01d] px-4 py-2 transition rounded-lg cursor-pointer'>CV Consultation</button>
                        <button onClick={() => scrollToSection("interview-prep")} className=' hover:text-[#e6b01d] px-4 py-2 transition rounded-lg cursor-pointer'>Interview Prep</button>
                        <Link href="/consultation" className=' bg-[#e69c1d] hover:bg-[#e6b01d] text-black px-4 py-2 transition rounded-lg cursor-pointer'>Book Now</Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden flex  items-center">
                        <button onClick={toggleMenu} className='text-gray-700 cursor-pointer hover:text-[#e6b01d] transition'>
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
                    <div className="flex flex-col px-6 py-4 space-y-4 ml-4">
                        <Link href={"/"} onClick={toggleMenu} className='text-gray-700 hover:text-[#e6b01d] transition'>Services</Link>
                        <Link href={"/"} onClick={toggleMenu} className='text-gray-700 hover:text-[#e6b01d] transition'>How It Works</Link>
                        <Link href={"/"} onClick={toggleMenu} className='text-gray-700 hover:text-[#e6b01d] transition'>Pricing</Link>
                        <Link href={"/"} onClick={toggleMenu} className='text-gray-700 hover:text-[#e6b01d] transition'>Book Now</Link>
                    </div>
                </div>
            )}

        </motion.div>
    )
}

export default Navbar