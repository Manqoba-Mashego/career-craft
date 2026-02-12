"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { Download, FileCheck, MessageSquare, Upload } from 'lucide-react';
import Reveal from './reveal';

const HowItWorks = () => {
    const steps = [
        {
            title: "Upload Your CV",
            description: "Share your current CV or start fresh.",
            Icon: Upload
        },
        {
            title: "Get Expert Feedback",
            description: "Our consultants refine your documents.",
            Icon: MessageSquare

        },
        {
            title: "Approve & Pay",
            description: "Review the polished result and checkout.",
            Icon: FileCheck
        },
        {
            title: "Download & Apply",
            description: "Download and apply with confidence.",
            Icon: Download
        },
    ]
  return (
        <div className='relative min-h-screen py-24 bg-[#162B4E] overflow-hidden scroll-mt-15' id='how-it-works'>
          <div className='w-[90%] max-w-7xl mx-auto'>
              <Reveal>
                <p className='text-[#faa329] font-semibold text-center'>SIMPLE PROCESS</p>
                <p className='font-playfair text-[48px] text-center font-black text-white mb-3'>How It Works</p>
                <p className='text-gray-300 text-center mb-15 text-lg'>Four simple steps to your career-ready documents.</p>
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

export default HowItWorks