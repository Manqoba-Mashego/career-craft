import { FileText, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-[#162B4E]'>
      <hr className='text-gray-600 mb-10' />
      <div className='flex justify-between w-[90%] mx-auto'>
        {/* The us div */}
        <div>
          <div className='flex flex-col gap-3'>
            <div className='flex gap-2'>
              <FileText className='text-[#e6b01d]'/>
              <p className='text-white text-[20px] font-bold'>USIZO</p>
            </div>
            <p className='text-gray-400'>Affordable career services to help you land your next job.</p>
          </div>
        </div>

        <div>
          <p className='text-[#faa329] font-bold font-serif mb-2'>SERVICES</p>
          <div className='flex flex-col text-gray-400 gap-2'>
            <Link href={"#"} className='hover:text-[#faa329] transition-all ease-in duration-300' >CV Consultation</Link>
            <Link href={"#"} className='hover:text-[#faa329] transition-all ease-in duration-300' >Cover Letter </Link>
            <Link href={"#"} className='hover:text-[#faa329] transition-all ease-in duration-300' >Interview Prep</Link>
            <Link href={"#"} className='hover:text-[#faa329] transition-all ease-in duration-300'>Free Resources</Link>
          </div>
        </div>

        <div>
          <p className='text-[#faa329] font-bold font-serif mb-2'>LEGAL</p>
          <div className='flex flex-col text-gray-400 gap-2'>
            <Link href={"#"} className='hover:text-[#faa329] transition-all ease-in duration-300'>Privacy Policy</Link>
            <Link href={"#"} className='hover:text-[#faa329] transition-all ease-in duration-300'>Refund & Cancellation</Link>
            <Link href={"#"} className='hover:text-[#faa329] transition-all ease-in duration-300'>Terms of Use</Link>
          </div>
        </div>

        <div>
          <p className='text-[#faa329] font-bold font-serif mb-2'>CONTACT</p>
          <div className='text-gray-400 flex flex-col gap-2'>
            <Link href={"mailto:zindzi1997@gmail.com"} className='flex gap-2 items-center'>
              <Mail className='text-[#faa329]' size={17}/>
              <span className='hover:text-[#faa329] transition-all ease-in duration-300'>zindzi1997@gmail.com</span>
            </Link>
            <Link href={"tel:+27660421344"} className='flex gap-2 items-center'>
              <Image src={"whatsapp.svg"} width={18} height={18} alt='WhatsApp Logo'/>
              <span className='hover:text-[#faa329] transition-all ease-in duration-300'>+27 66 042 1344</span>
            </Link>

          </div>
        </div>

      </div>
      <div className=' pb-10 px-10 md:px-25 mt-15'>
  
          <div className='flex items-center justify-center mt-5'>
              <p className='text-gray-400 text-sm'>&copy; 2026 USIZO. All rights reserved.</p>
          </div>
      </div>
    </div>
  )
}

export default Footer