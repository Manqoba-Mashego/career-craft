"use client";
import { ArrowRight } from 'lucide-react'
import React from 'react'
import Reveal from './reveal'

const Hero = () => {
    return (
        <div id='hero' className="relative h-screen bg-cover bg-center flex items-center justify-start bg-[url('/landing-page.jpg')]" >
            <div className="absolute inset-0 bg-[#0F2A4A]/80"></div>

            <div className="absolute bottom-0 left-0 w-full h-30  bg-linear-to-b from-transparent to-white"></div>
                <div className="relative text-left text-white px-4 w-[90%] mx-auto">
                    <Reveal duration={1.2}>
                        <h1 className={`text-5xl font-black font-playfair lg:text-[72px] w-[55%] tracking-wide`}>Elevate Your <span className='text-[#e6b01d]'>Career</span> With Expert Guidance</h1>
                    </Reveal>
                    <Reveal duration={1.7}>
                        <p className="text-lg max-w-xl text-gray-300 my-8">Professional CV consultation, cover letter writing, and interview preparation — everything you need to land your dream role.</p>
                    </Reveal>
                    <Reveal duration={2}>
                        <div className='flex gap-2' >
                            <button className='bg-[#e69c1d] transition-all ease-in-out duration-300 text-[#0F2A4A] cursor-pointer hover:bg-[#e6c11d] px-10 py-4 flex rounded-xl gap-2 font-semibold'>Explore Services <ArrowRight /></button>
                            <button className='text-[#e69c1d] transition-all ease-in-out duration-300 border-2 border-[#e69c1d] hover:bg-[#e69c1d] hover:text-[#0F2A4A] cursor-pointer font-semibold rounded-xl px-10 py-4'>Book Consultation</button>
                        </div>
                    </Reveal>
                </div>
        </div>
    )
}

export default Hero