"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Download, FileCheck, FileText, MessageSquare, Upload } from 'lucide-react';
import Reveal from './reveal';

const HowItWorks = () => {
    const steps = [
        {
            title: "Book a Consultation",
            description: "Fill out our consultation form with your details and attach your CV.",
            Icon: MessageSquare
        },
        {
            title: "Expert Drafting",
            description: "Our consultants will craft a tailored cover letter matching your target role and industry.",
            Icon: FileText

        },
        {
            title: "Review & Pay",
            description: "Review the polished cover letter, request adjustments, and complete your payment.",
            Icon: CreditCard
        },
        {
            title: "Download & Apply",
            description: "Download your professional cover letter and apply with confidence.",
            Icon: Download
        },
    ]
  return (
        <div className='relative min-h-screen py-16 md:py-24 bg-[#162B4E] overflow-hidden scroll-mt-15' id='cover-letter'>
          <div className='w-[90%] max-w-7xl mx-auto'>
              <Reveal>
                <p className='text-[#faa329] font-semibold text-center'>COVER LETTER PROCESS</p>
                <p className='font-playfair text-3xl md:text-5xl text-center font-black text-white mb-3'>How It Works</p>
                <p className='text-gray-300 text-center mb-15 text-lg'>Four simple steps to your professional cover letter.</p>
              </Reveal>
              {/* absolute right-6 top-0 md:top-12  md:translate-x-0  md:w-full h-full w-0.5 md:h-0.5 bg-[#faa329] - the line */}
              {/* flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-16 px-6 relative z-10 - steps container */}
            <div className="relative">
                <div className='absolute right-6 top-0 h-full w-0.5 bg-[#faa329] md:top-12 md:translate-x-0 md:h-0.5 md:w-full'></div>
                    <div className="flex flex-col md:flex-row md:items-start gap-16">
                        {steps.map((step, index) => (
                                <motion.div key={index} initial={{opacity: 0, y:40}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6, delay: index* 0.2}} viewport={{once: true}} className={`relative flex flex-col items-start text-left pl-5 md:w-1/2 pr-10 md:items-center md:text-center `}>
                                    <div className="absolute right-6  translate-x-1/2 md:relative md:right-auto md:translate-x-0 z-20 w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-[#faa329] bg-[#162B4E] flex items-center justify-center">
                                        <step.Icon className="w-6 h-6 md:w-10 md:h-10 text-[#faa329]" />
                                    </div>
                                    
                                    <div className="mt-4 md:mt-6 max-w-xs">
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
            </div>
        </div>
  )
}

export default HowItWorks