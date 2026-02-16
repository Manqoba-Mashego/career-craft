import CVSection from '@/components/cvSection'
import Hero from '@/components/hero'
import HowItWorks from '@/components/howItWorks'
import Services from '@/components/services'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <HowItWorks />
      <CVSection />
      
    </div>
  )
}

export default Page