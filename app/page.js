"use client";
import { useEffect } from 'react';

import CVSection from '@/components/cvSection'
import Hero from '@/components/hero'
import CoverLetterSection from '@/components/coverLetterSection'
import Services from '@/components/services'
import React from 'react'
import InterviewPrepSection from '@/components/interviewPrepSection';

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
      <CoverLetterSection />
      <CVSection />
      <InterviewPrepSection />
    </div>
  )
}

export default Page