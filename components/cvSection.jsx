"use client";
import React, { useState } from 'react'
import PreCVForm from './preCVForm';
import ConsultationForm from './consultationForm';
import Reveal from './reveal';
import FormSection from './formSections/formSection';
import { FileText } from 'lucide-react';
import UploadFile from './ui/uploadFile';

const CVSection = () => {
  const [hasCV, setHasCV] = useState("");

  return (
    <div className='min-h-screen py-24 scroll-mt-15' id='cv-consultation'>
      <div className='w-[90%] max-w-7xl mx-auto flex flex-col gap-10'>
        <Reveal>
			<p className='text-[#faa329] font-semibold text-center'>CV CONSULTATION</p>
			<p className='font-playfair text-[48px] font-black text-[#0d0729] mb-3 text-center'>Professional CV Service</p>
            <p className='text-gray-600 text-lg text-center max-w-2xl mx-auto'>Whether you have an existing CV or need one from scratch, we'll help you craft a document that gets interviews.</p>
        </Reveal>
		<Reveal>
			<FormSection width='max-w-2xl' padding='p-12'>
				<div className='flex items-center gap-5'>
					<span className='text-[#faa329] p-3 bg-[#e0a51a24] rounded-xl'><FileText></FileText></span>
					<h1 className='font-bold text-2xl font-serif'>Do you have a CV?</h1>
				</div>
				<div>
					<div className='flex flex-col gap-5 mt-7'>
						<label className='flex gap-4 cursor-pointer border border-gray-300 font-semibold hover:border-[#f1b663] px-4 py-3 rounded-xl'>
							<input type="radio" name="hasCV" value="yes" checked={hasCV === "yes"} onChange={(e) => setHasCV(e.target.value)}/>
							<p>Yes, I have a CV</p>
						</label>
						<label className='flex gap-4 cursor-pointer border border-gray-300 font-semibold hover:border-[#f1b663] px-4 py-3 rounded-xl'>
							<input type="radio" name="hasCV" value="no" checked={hasCV === "no"} onChange={(e) => setHasCV(e.target.value)}/>
							<p>No, I need to create one</p>
						</label>
					</div>
				</div>
				<div className='mt-7'>
					{hasCV === "yes" && <UploadFile />}
					{hasCV === "no" && <p>Under construction...</p>}
				</div>
			</FormSection>
		</Reveal>
      </div>
    </div>
  )

};

export default CVSection;

