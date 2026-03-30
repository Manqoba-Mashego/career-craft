"use client";
import {ArrowRight, Mail, MoveLeft, Shield } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Page = () => {
    const [email, setEmail] = useState("");
    const initializePayment = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/initialize", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            email,
            amount: 5000,
            callback_url: "http://localhost:3000/cover-letter/download"
            }),
        });

        const data = await res.json();

        console.log(data);

        if (data.data?.authorization_url) {
            window.location.href = data.data.authorization_url;
        }
        };
  return (
    <div className='flex items-center justify-center w-full h-screen text-center '>
        <div>
            <h1 className='font-serif text-[32px] font-black text-[#0d0729] mb-3'>Get Your Professional Template</h1>
            <p className='text-gray-600'>Enter your email to proceed to payment (R50)</p>
            <form onSubmit={initializePayment} className='border-gray-200 border rounded-2xl text-left mt-10 px-10 py-7 bg-white shadow-lg'>
                <label className='font-semibold text-sm'>Email Address</label>
                <div className='flex gap-3 items-center border border-gray-200 px-3 py-2 rounded-lg bg-[#e3e3e32f] my-2 focus-within:border-[#faa329] focus-within:border-2'>
                    <Mail size={17 } className='text-gray-400'/> 
                    <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='example@gmail.com' className='border-none outline-none text-sm w-full' required />
                </div>
                <p className='text-gray-500 text-xs'>Your receipt will be sent to this email</p>
                <button type='submit' className='shadow-[0_4px_10px_rgba(230,156,29,0.18),0_0_4px_rgba(230,156,29,0.15)]  flex mx-auto items-center justify-center bg-[#e69c1d] transition-all ease-out duration-300 text-[#0F2A4A] cursor-pointer hover:bg-[#e6b71d] py-3 text-sm  rounded-xl gap-2 font-semibold w-full text-center mt-6'>
                    <span>Continue to Payment</span>
                    <ArrowRight size={18} />
                </button>
                <p className='flex gap-2 text-gray-500 w-full items-center justify-center mt-4 text-xs'>
                    <Shield size={15}/>
                    <span>Your information is secure</span>
                </p>
            </form>
            <Link href={"/"} className='flex justify-center '>
                <p className='flex items-center gap-2 hover:border-b hover:text-black  text-gray-500 mt-6 text-sm w-fit justify-center'>
                    <MoveLeft  size={15}/> 
                    <span>Back to services</span>
                </p>
            </Link>
        </div>
    </div>
  )
}

export default Page