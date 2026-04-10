"use client";
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarCheck, CreditCard, Download, ExternalLink, FileCheck, FileText, Mail, MessageSquare, Send, Upload, Users } from 'lucide-react';
import Reveal from './reveal';
import Link from 'next/link';

const HowItWorks = () => {
    const [activeTab, setActiveTab] = useState("template");
    const templateSteps = [
        {
            title: "Enter Your Email",
            description: "Insert the email where you will receive your receipt",
            Icon: Mail
        },
        {
            title: "Get Access",
            description: "Complete a secure payment to unlock your professional cover letter.",
            Icon: CreditCard
        },
        {
            title: "Download Your Template",
            description: "Instantly download the file in an easy-to-edit format.",
            Icon: Download

        },
        {
            title: "Edit Your Details",
            description: "Customize the content to match your experience and the job, and apply with confidence.",
            Icon: FileText
        },
    ]
    const consultationSteps = [
        {
            title: "Book Your Session",
            description: "Complete the Google Form to book your session.",
            Icon: CalendarCheck
        },
        {
            title: "Share Job Details",
            description: "Enter the job details and your background so we can tailor your letter.",
            Icon: FileText
        },
        {
            title: "1-on-1 Consultation",
            description: "We collaborate with you live to craft your cover letter.",
            Icon: Users
        },
        {
            title: "Receive Final Letter",
            description: "Get your polished, ready-to-send cover letter tailored for the job.",
            Icon: Send
        },
    ];

  return (
        <div className='relative min-h-screen py-16 md:py-24 bg-[#162B4E] overflow-hidden scroll-mt-15' id='cover-letter'>
            <div className='w-[90%] max-w-7xl mx-auto'>
                <Reveal>
                    <p className='text-[#faa329] font-semibold text-center'>COVER LETTER PROCESS</p>
                    <p className='font-playfair text-3xl md:text-5xl text-center font-black text-white mb-3'>How It Works</p>
                    <p className='text-gray-300 text-center mb-10 text-lg'>Four simple steps to your professional cover letter.</p>
                </Reveal>
                <Reveal>
                    <div className="flex justify-center mb-10">
                        <div className="flex bg-[#0F2A4A] rounded-xl p-1 border border-[#faa329]">
                            <button onClick={() => setActiveTab("template")} className={`px-6 py-2 rounded-lg font-semibold transition cursor-pointer ${activeTab === "template" ? "bg-[#faa329] text-[#0F2A4A]": "text-[#faa329]"}`}>
                                Template
                            </button>
                            <button onClick={() => setActiveTab("consultation")} className={`px-6 py-2 rounded-lg font-semibold transition cursor-pointer ${activeTab === "consultation" ? "bg-[#faa329] text-[#0F2A4A]": "text-[#faa329]"}`}>
                                Consultation
                            </button>
                        </div>
                    </div>
                </Reveal>
                <div className="relative">
                    <div className='absolute right-6 top-0 h-full w-0.5 bg-[#faa329] md:top-12 md:translate-x-0 md:h-0.5 md:w-full'></div>
                        <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-16">
                            {(activeTab === "template" ? templateSteps : consultationSteps).map((step, index) => (
                                    <motion.div key={index} initial={{opacity: 0, y:40}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6, delay: index* 0.2}} viewport={{once: true}} className={`relative flex flex-col items-start text-left pl-5 md:w-1/2 pr-10 md:items-center md:text-center `}>
                                        <div className="absolute right-6  translate-x-1/2 md:relative md:right-auto md:translate-x-0 z-20 w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-[#faa329] bg-[#162B4E] flex items-center justify-center">
                                            <step.Icon className="w-6 h-6 md:w-10 md:h-10 text-[#faa329]" />
                                        </div>
                                        <div className="md:mt-6 max-w-xs">
                                            <p className="text-[#faa329] font-semibold">
                                                Step {String(index+ 1).padStart(2, "0")}
                                            </p>
                                            <h3 className='text-white text-lg md:text-xl mt-2'> {step.title}</h3>
                                            <p className='text-gray-300 mt-3'>{step.description}</p>
                                        </div>
                                    </motion.div>
                                )
                            )}
                        </div>
                </div>
                <div className="flex justify-center mt-12 gap-4">
                {activeTab === "template" ? (
                    <Link href="/cover-letter/email" className="flex items-center bg-[#e69c1d] hover:bg-[#e6b71d] text-[#0F2A4A] px-8 lg:px-10 py-4 rounded-xl gap-2 font-semibold">
                        <Download />
                        <span>Get Template</span>
                    </Link>
                ) : (
                    <Link href="https://docs.google.com/forms" target="_blank" className="flex items-center border bg-[#e69c1d] text-[#0F2A4A] px-3 md:px-7 lg:px-8 py-4 rounded-xl gap-2 font-semibold hover:bg-[#e6b71d] transition">
                        <span>Book Consultation</span>
                        <ExternalLink size={15} />
                    </Link>
    )}
                </div>
            </div>
        </div>
    )
}

export default HowItWorks