"use client";
import React from 'react'
import Reveal from './reveal'
import PersonalDetails from './formSections/personalDetails';
import FormSection from './formSections/formSection';
import Education from './formSections/education';

const CVSection = () => {
  return (
    <div className='py-30'>
        <div>
          <Reveal>
            <p className='text-[#faa329] font-semibold text-center'>CREATE YOUR CV</p>
            <p className='font-playfair text-[48px] text-center font-black  mb-3'>Build Your Professional CV</p>
            <p className='text-gray-500 text-center mb-15 max-w-2xl mx-auto text-lg'>Please fill in the following information to help us start putting together your desired CV.</p>
          </Reveal>
        </div>

		<form>
			<PersonalDetails />
      <Education/>
		</form>
          <p className='text-red-500 text-xl text-center'>NOTE!!! The rest of this form is still under construction!</p>

    </div>
  )
}

export default CVSection