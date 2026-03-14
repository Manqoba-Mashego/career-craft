"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Download, FileCheck, FileText, MessageSquare, Upload } from 'lucide-react';
import Reveal from './reveal';

const CoverLetterSection = () => {
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
        <div className='relative min-h-screen py-24 bg-[#162B4E] overflow-hidden scroll-mt-15' id='cover-letter'>
          <div className='w-[90%] max-w-7xl mx-auto'>
              <Reveal>
                <p className='text-[#faa329] font-semibold text-center'>COVER LETTER PROCESS</p>
                <p className='font-playfair text-[48px] text-center font-black text-white mb-3'>How It Works</p>
                <p className='text-gray-300 text-center mb-15 text-lg'>Four simple steps to your professional cover letter.</p>
              </Reveal>
            <div className="relative">
                <div className='origin-left absolute left-0 top-12 w-full h-0.5  bg-[#faa329] md:origin-top'></div>
                    <div className="flex  justify-between gap-16 px-6 relative z-10">
                        {steps.map((step, index) => (
                                <motion.div key={index} initial={{opacity: 0, y:40}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6, delay: index* 0.2}} viewport={{once: true}} className='flex flex-col items-center text-center '>
                                    <div className="w-24 h-24 rounded-full border-2 border-[#faa329] bg-[#162B4E] flex items-center justify-center">
                                        <span className="text-[#faa329] font-bold text-lg">{<step.Icon size={40}/>}</span>
                                    </div>

                                    <p className="mt-6 text-[#faa329] font-semibold">
                                        Step {String(index+ 1).padStart(2, "0")}
                                    </p>

                                    <h3 className='text-white text-xl mt-2'> {step.title}</h3>
                                    <p className='text-gray-300 mt-3 max-w-xs'>{step.description}</p>

                                </motion.div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CoverLetterSection