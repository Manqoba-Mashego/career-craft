"use client";
import { FileText, Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const [scrolled, setScrolled] = useState(false);

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
        <nav className={`fixed top-0 inset-x-0 z-50 transition-all ease-in-out duration-300 ${scrolled ? "bg-[#eae8e8]" : ""}`}>
            <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex transition-all ease-in-out duration-300 justify-between ${scrolled ? "h-16" : "h-20"}`}>
                    {/* Logo */}
                    <Link href={"/"} className='flex gap-2 items-center'>
                        <div className='text-[#e6b01d]'>
                            <FileText />
                        </div>
                        <p className={` transition-all ease-in-out duration-300  font-bold text-[20px] ${scrolled ? "text-black" : "text-white"}`}>CareerCraft</p>
                    </Link>
                    {/* Desktop links */}
                    <div className={`hidden md:flex items-center font-semibold transition-all ease-in-out duration-300 text-sm ${scrolled ? "text-gray-500" : "text-gray-300"}`}>
                        <Link href={"/home"} className=' hover:text-[#e6b01d] px-4 py-2 transition rounded-lg'>Services</Link>
                        <Link href={"/home"} className=' hover:text-[#e6b01d] px-4 py-2 transition rounded-lg'>How It Works</Link>
                        <Link href={"/home"} className=' hover:text-[#e6b01d] px-4 py-2 transition rounded-lg'>Pricing</Link>
                        <Link href={"/home"} className=' hover:text-[#e6b01d] px-4 py-2 transition rounded-lg'>Book Now</Link>
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

        </nav>
    )
}

export default Navbar