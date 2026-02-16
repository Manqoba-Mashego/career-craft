import React from 'react'

const FormSection = ({children}) => {
  return (
    <div className='border border-gray-300 bg-white rounded-2xl max-w-4xl mx-auto p-8 shadow-lg mb-10'>
        {children}
    </div>
  )
}

export default FormSection