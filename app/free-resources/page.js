import { ArrowLeft, Construction } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
      <div className='bg-[#f3f3f34c] w-full h-screen relative '>
        <Link href={"/"} className='flex gap-2 items-center text-gray-600 hover:text-[#faa329] text-[16px] w-fit transition duration-150 absolute top-[100px] left-[50px] md:top-[120px] md:left-1/4'>
          <ArrowLeft size={18} />
            <span>Back to home</span>
        </Link>

        <div className='flex flex-col gap-3 justify-center items-center h-full px-4'>
          <div className='bg-[#e69c1d27] p-4 rounded-full'>
            <Construction className='text-[#e69c1d]' size={42}/>
          </div>
          <h1 className='font-serif font-bold text-5xl'>Coming Soon</h1>
          <p className='max-w-md text-center text-[19px] text-gray-600 '>We’re working on free resources to support you on your professional journey!</p>
        </div>

    </div>
  )
}

export default page