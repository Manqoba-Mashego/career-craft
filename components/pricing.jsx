import React from 'react'
import PricingCard from './pricingCard'
import Reveal from './reveal'

const Pricing = () => {
    const prices = [
        {
            service: "Cover Letter Template",
            details: "Professional, ready-to-use cover letter template",
            price: 50,
            points: ["ATS-friendly layout", "Editable Word file", "Quick download"],
            cta: "Get Template",
            ctaLink: "#cover-letter",
            blank: false
        },
        {
            service: "CV Revamp",
            details: "Refresh and optimise your existing CV",
            price: 80,
            points: ["Layout & design refresh", "ATS keyword optimisation", "Content restructuring", "One revision round"],
            cta: "Book Now",
            ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLSc5Kq3siizIADxEGE34pOF1vWZUqNEjfjzWrZO1ESDCtW97Zg/viewform",
            blank: true
        },
        {
            service: "CV Creation",
            details: "A brand-new CV built professionally from scratch",
            price: 100,
            points: ["Custom layout & design", "ATS keyword optimisation", "Personal branding", "One revision round"],
            cta: "Book Now",
            ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLSc5Kq3siizIADxEGE34pOF1vWZUqNEjfjzWrZO1ESDCtW97Zg/viewform",
            blank: true
        },
        {
            service: "Interview Prep",
            details: "One-on-one coaching to ace your next interview",
            price: 150,
            points: ["Mocking interview session", "Personalised feedback", "Behavioral question prep", "Follow-up tips"],
            cta: "Book Session",
            ctaLink: "#interview-prep",
            blank: false
        },
    ]
  return (
    <div id='pricing' className='bg-[#e7e9ef4c] scroll-mt-30 min-h-screen py-20'>
        <div className='w-[90%] mx-auto '>
            <div className='text-center mx-auto'>
                <Reveal>
                    <p className='text-[#faa329] font-semibold'>PRICING</p>
                    <p className='font-playfair text-[48px] font-black text-[#0d0729] mb-3'>Simple, Transparent Pricing</p>
                    <p className='text-gray-600 text-lg'>Affordable career services to help you land your next job.</p>
                </Reveal>
            </div>
            <div className='lg:flex lg:justify-center'>
                <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  mx-auto mt-15">
                    {prices.map((item, index) => (
                        <PricingCard key={index} service={item.service} details={item.details} price={item.price} points={item.points} cta={item.cta} ctaLink={item.ctaLink} blank={item.blank}/>
                    ))}
                </Reveal>
            </div>
        </div>
    </div>
  )
}

export default Pricing