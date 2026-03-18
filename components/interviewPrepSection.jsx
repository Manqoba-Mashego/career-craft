import React from 'react'
import Reveal from './reveal'
import { CheckCircle, Clipboard, ExternalLink, MessageSquare, UserCheck } from 'lucide-react'
import Link from 'next/link'

const InterviewPrepSection = () => {
  const items = [
    {
      icon: MessageSquare,
      title: "Practice Your Interview Skills",
      details: "Get hands-on experience answering real interview questions and scenarios to build confidence before your actual interview."
    },
    {
      icon: CheckCircle,
      title: "Get Personalized Feedback",
      details: "Receive tailored advice on your answers, body language, and tone from our expert career coach."
    },
    {
      icon: Clipboard,
      title: "Learn Top Questions & Answers",
      details: "Practice with the most common questions in your industry along with sample answers and tips for structuring your responses."
    },
    {
      icon: UserCheck,
      title: "Boost Confidence & Strategy",
      details: "Learn how to prepare for tricky questions, ask good follow-up questions, and other strategies to leave a good first impression."
    },
  ]
  return (
    <div id='interview-prep' className='scroll-mt-15 min-h-screen py-24 w-[90%] mx-auto'>
        <Reveal>
            <p className='text-[#faa329] font-semibold text-center'>INTERVIEW PREPARATIONS</p>
            <p className='font-playfair text-[48px] text-center font-black  text-[#0d0729] mb-3'>Ace Your Next Interview</p>
            <p className='text-gray-600 text-center mb-15 text-lg max-w-2xl mx-auto'>Build confidence and master your interview technique with our expert one-on-one coaching sessions</p>
        </Reveal>
        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
			{items.map((item, index) => (
				<div key={index} className='border border-gray-300 transition-all duration-200 ease hover:shadow-lg rounded-2xl bg-white p-8 flex flex-col gap-5'>
					<div className='text-[#faa329] bg-[#ee9a0920] p-3 rounded-xl w-fit'>
						<item.icon />
					</div>
					<p className='font-serif font-bold text-xl'>{item.title}</p>
					<p className=' text-gray-500'>{item.details}</p>
				</div>
			))}
			
        </Reveal>
		<Reveal>
			<div className='mt-10'>
				<Link href="https://docs.google.com/forms/d/e/1FAIpQLSf9KOtBdluKxl_lBuIooc8NjubwdPRpdNiUQXXh4xPegSQdVw/viewform" target='blank' className="shadow-[0_4px_10px_rgba(230,156,29,0.18),0_0_4px_rgba(230,156,29,0.15)]  flex mx-auto items-center bg-[#e69c1d] transition-all ease-out duration-300 text-[#0F2A4A] cursor-pointer hover:bg-[#e6b71d] px-10 py-4  rounded-xl gap-2 font-semibold w-fit"><span>Book a Session</span> <ExternalLink size={15}/></Link>
				<p className='text-center text-xs text-gray-500 mt-2'>You'll be redirected to our Google Form to book your session</p>
			</div>
		</Reveal>
    </div>
  )
}

export default InterviewPrepSection