"use client";
import { useEffect } from 'react';

import CVSection from '@/components/cvSection'
import GeneralHowItWorks from '@/components/generalHowItWorks'
import Hero from '@/components/hero'
import CoverLetterSection from '@/components/coverLetterSection'
import Services from '@/components/services'
import React from 'react'

const Page = () => {
  useEffect(() => {
  const hash = window.location.hash.replace("#", "");
  if (hash) {
    const el = document.getElementById(hash);
    el?.scrollIntoView({ behavior: "smooth" });
  }
}, []);
  return (
    <div>
      <Hero />
      <Services />
      {/* <GeneralHowItWorks /> */}
      <CoverLetterSection />
      <CVSection />
      
    </div>
  )
}

export default Page