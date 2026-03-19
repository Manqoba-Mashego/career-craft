"use client";
import React, { useState } from 'react'
import Reveal from './reveal';
import { CircleCheckBig, ExternalLink, FileText } from 'lucide-react';
import Link from 'next/link';

const CVSection = () => {
	const points = ["Expert of your existing CV", "ATS-optimized formatting & keywords", "Professional layout & personal branding", "Detailed feedback on content & structure", "Industry-specific tailoring", "One round of revisions included"]

  return (
    <div className='min-h-screen py-24 scroll-mt-15 bg-[#162B4E]' id='cv-consultation'>
      <div className='w-[90%] max-w-7xl mx-auto flex flex-col gap-10'>
        <Reveal>
			<p className='text-[#faa329] font-semibold text-center'>CV CONSULTATION</p>
			<p className='font-playfair text-[48px] font-black text-white mb-3 text-center'>Professional CV Service</p>
            <p className='text-gray-300 text-lg text-center max-w-2xl mx-auto'>Whether you have an existing CV or need one from scratch, we'll help you craft a document that gets interviews.</p>
        </Reveal>
		<Reveal className="md:w-4xl mx-auto" >
				<div className='bg-[#faf8f50d] border-[0.5px] border-[#8f7147] w- rounded-2xl p-14 flex flex-col gap-8'>
					<div className='flex items-center font-serif gap-4'>
						<div className='text-[#faa329] bg-[#ee9a0920] p-3 rounded-xl'>
							<FileText/> 
						</div>
						<p className='text-2xl text-white font-bold'>What's included</p>
					</div>
					<ul className='grid grid-cols-1  md:grid-cols-2 gap-4'>
						{points.map((point, index) => (
						<li key={index} className='flex gap-3 items-center'>
							<CircleCheckBig className='text-[#faa329]' size={20}/>
							<p className='text-gray-300'>{point}</p>
						</li>
					))}
					</ul>
					<div>
						<Link href="https://docs.google.com/forms/d/e/1FAIpQLSc5Kq3siizIADxEGE34pOF1vWZUqNEjfjzWrZO1ESDCtW97Zg/viewform" target='blank' className="shadow-[0_4px_10px_rgba(230,156,29,0.18),0_0_4px_rgba(230,156,29,0.15)]  flex mx-auto items-center bg-[#e69c1d] transition-all ease-out duration-300 text-[#0F2A4A] cursor-pointer hover:bg-[#e6b71d] px-3 md:px-7 lg:px-10 py-4  rounded-xl gap-2 font-semibold w-fit"><span>Book CV Consultation</span> <ExternalLink size={15}/></Link>
						<p className='text-center text-xs text-gray-400 mt-2'>You'll be redirected to our Google Form to submit your details</p>
					</div>
			</div>
		</Reveal>	
      </div>
    </div>
  )

};

export default CVSection;

