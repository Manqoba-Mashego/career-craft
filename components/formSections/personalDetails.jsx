import React from 'react'
import FormSection from './formSection'

const PersonalDetails = () => {
  return (
    <FormSection>
        <h1 className='form-title'>Personal Details</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
                <label htmlFor="full-names" className='input-label'>Full Names <span className='text-red-500'>*</span></label>
                <input type="text" id='full-names' placeholder='John Doe' className='input-field'  required/>
            </div>
            <div>
                <label htmlFor="email" className='input-label' >Email <span className='text-red-500'>*</span></label>
                <input type="email" id='email' placeholder='john@example.com' className='input-field' required/>
            </div>
            <div>
                <label htmlFor="address" className='input-label'>Address <span className='text-red-500'>*</span></label>
                <input type="text" id='address' placeholder='123 Main Street, City' className='input-field' required/>
            </div>
            <div>
                <label htmlFor="phone-number" className='input-label'>Phone Number <span className='text-red-500'>*</span></label>
                <input type="text" id='phone-number' placeholder='+27123456789' className='input-field' required/>
            </div>
        </div>
    </FormSection>
  )
}

export default PersonalDetails