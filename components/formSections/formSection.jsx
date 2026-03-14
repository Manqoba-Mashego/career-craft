import React from 'react'

const FormSection = ({children, width = "max-w-4xl", padding = "p-8"}) => {
  return (
    <div className={`border border-gray-300 bg-white rounded-2xl ${width} ${padding} mx-auto shadow-lg mb-10`}>
        {children}
    </div>
  )
}

export default FormSection