import { ArrowRight } from 'lucide-react'
import React from 'react'

const ServiceCard = ({icon: Icon, title, description, points, }) => {
  return (
    <div className='bg-white border border-gray-200 rounded-2xl px-10 py-8 flex flex-col gap-5 shadow-md'>
        <div className='bg-[#e69c1d27] p-4 rounded-xl w-fit'>
            <Icon className="text-[#e69c1d] "/>
        </div>
        <p className='text-2xl font-bold'>{title}</p>
        <p className='text-gray-600'>{description}</p>
        <ul className='list-disc list-inside marker:text-[#e69c1d]'>
            {points.map((point, id) => (
                <li key={id} className='text-gray-600'>{point}</li>
            ))}
        </ul>
        <p className='text-[#e69c1d] cursor-pointer flex items-center gap-2 group font-semibold text-sm my-5'>Learn More <ArrowRight size={16} className='transition-transform duration-300 group-hover:translate-x-1'/></p>
    </div>
  )
}

export default ServiceCard