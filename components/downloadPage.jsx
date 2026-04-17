import { CircleCheckBig, Clock, Download, Mail, MoveLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const DownloadSection = ({token, email = ""}) => {
    const maskEmail = (email) => {
        if (email === "") return;
        const [name, domain] = email.split("@");
        return `${name[0]}****@${domain}`;
    }
  return (
    <div className='flex flex-col h-screen items-center text-center justify-center gap-2 bg-[#faf8f8]'>
            <div className='text-green-500 bg-green-50 p-5 rounded-full w-fit mx-auto'>
                <CircleCheckBig size={40}/>
            </div>
            <h1 className='text-3xl font-serif font-black'>Your download has started</h1>
            <p className='text-gray-500'>If it didn't start automatically, click below:</p>

            <div className='border-gray-200 border rounded-2xl text-left mt-8 px-8 md:px-10 py-7 bg-white shadow-lg w-[90%] mx-auto sm:max-w-lg flex flex-col gap-3 items-start'>
                <a href={`/api/download?token=${token}`} className='shadow-[0_4px_10px_rgba(230,156,29,0.18),0_0_4px_rgba(230,156,29,0.15)]  flex  items-center justify-center bg-[#e69c1d] transition-all ease-out duration-300 text-black cursor-pointer hover:bg-[#e6b71d] py-3 text-sm rounded-xl gap-2 font-semibold w-full text-center'>
                    <Download size={17} />
                    <span>Download again</span>
                </a>
                <p className='flex gap-2 text-sm text-gray-500 items-start mx-auto '>
                    <Mail size={15} className="mt-0.5 shrink-0" />
                    <span className="flex flex-row flex-wrap gap-1 text-left leading-snug">
                        <span>A copy has also been sent to</span>
                        <span className="font-semibold text-black break-all">
                            {email === "" ? "your email" : maskEmail(email)}
                        </span>
                    </span>
                </p>
                <p className='flex gap-2 text-xs items-start text-gray-500 leading-snug mx-auto'>
                    <Clock size={14} className='mt-0.5 shrink-0'/>
                    <span className='text-left'>This link will expire shortly for security reasons.</span>
                </p>
            </div>

            <Link href={"/"} className='flex justify-center '>
                <p className='flex items-center gap-2 hover:border-b hover:text-black font-semibold  text-gray-500 mt-6 text-sm w-fit justify-center'>
                    <MoveLeft  size={15}/> 
                    <span>Back to services</span>
                </p>
            </Link>

    </div>
  )
}

export default DownloadSection