import React from 'react'
import ServiceCard from './serviceCard'
import { FileText, PenTool, Users } from 'lucide-react'

const Services = () => {
    const services = [
        {
            title: "CV Consultation",
            description: "Expert review and optimization of your CV to highlight your strengths and stand out to recruiters.",
            points: ["ATS-optimized formatting", "Keyword analysis", "Personal branding"],
            icon: FileText,
        },
        {
            title: "Cover Letter Writting",
            description: "Tailored, compelling cover letters crafted to match each role and company you apply to.",
            points: ["Role-specific tailoring", "Tone & style matching", "Download ready"],
            icon: PenTool,
        },
        {
            title: "Interview Preparation",
            description: "One-on-one coaching sessions to build confidence and master your interview technique.",
            points: ["Mock interviews", "Behavioral prep", "Feedback sessions"],
            icon: Users,
        },
    ]
  return (
    <div id='services' className='w-[90%] mx-auto'>
        <div className='text-center max-w-150 mx-auto mt-20'>
            <p className='text-[#faa329] font-semibold'>WHAT WE OFFER</p>
            <p className='font-playfair text-[48px] font-black text-[#0d0729] mb-3'>Our Services</p>
            <p className='text-gray-600 text-lg'>From crafting the perfect CV to acing your interviews, we provide end-to-end career support.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-17'>
            {services.map((service) => (
                <ServiceCard title={service.title} description={service.description} points={service.points} icon={service.icon} key={service.title}/>
            ))}
        </div>
    </div>
  )
}

export default Services