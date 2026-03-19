import { Check } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const PricingCard = ({service, details, price, points, cta, ctaLink, blank}) => {
  return (
    <div className='bg-white p-5 border-gray-300 border hover:border-amber-100 rounded-2xl hover:shadow-lg  transition-all ease duration-300 w-full'>
        <div className='h-full flex flex-col'>
            <p className="font-bold font-serif md:text-lg">{service}</p>
            <p className="text-xs text-gray-500">{details}</p>
            <p className="text-4xl font-serif mb-5 mt-2 font-black">R{price}</p>
            <ul className='mb-6 flex flex-col gap-2   '>
                {points.map((point, index) => (
                    <li key={index} className='flex gap-2 items-center text-sm'>
                        <Check className='text-[#faa329]' size={14}/> 
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
            <Link href={ctaLink} target={`${blank=== true ? "blank" : ""}`} className='mt-auto bg-[#162B4E] hover:bg-[#304876] transition-all duration-300 ease font-semibold text-white  px-4 py-3 rounded-2xl text-center '>{cta}</Link>
        </div>
    </div>
  )
}

export default PricingCard