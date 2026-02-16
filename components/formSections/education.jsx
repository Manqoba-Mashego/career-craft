import React from 'react'
import FormSection from './formSection'

const Education = () => {
  return (
    <FormSection>
        <h1 className='form-title'>Education</h1>
        <p className='text-[#faa329] font-semibold text-sm mb-4'>UNIVERSITY / COLLEGE</p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            <div>
                <label htmlFor="college" className='input-label'>Name of University/College </label>
                <input type="text" placeholder='University of Pretoria' className='input-field'/>
            </div>
            <div>
                <label htmlFor="college" className='input-label'>Qualification </label>
                <input type="text" placeholder='BSC in Computer Science' className='input-field' />
            </div>
            <div>
                <label htmlFor="college" className='input-label'>Year Started / Graduated </label>
                <input type="text" placeholder='2024-2026' className='input-field' />
            </div>         
        </div>
        <p className='text-[#faa329] font-semibold text-sm mb-3 my-7'>HIGH SCHOOL</p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            <div>
                <label htmlFor="college" className='input-label'>Name of High School </label>
                <input type="text" placeholder='Njeyeza Secondary School' className='input-field'/>
            </div>
            <div>
                <label htmlFor="college" className='input-label'>Location </label>
                <input type="text" placeholder='Schoemansdal, Mpumalanga' className='input-field' />
            </div>
            <div>
                <label htmlFor="college" className='input-label'>Year Matriculated</label>
                <input type="text" placeholder='2023' className='input-field' />
            </div>         
        </div>
    </FormSection>
  )
}

export default Education