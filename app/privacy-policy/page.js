import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#f3f3f34c] w-full min-h-screen pt-36'>
        <div className='mx-auto w-[85%] md:max-w-4xl flex flex-col gap-10 text-lg'>
            <Link href={"/"} className='flex gap-2 items-center text-gray-600 hover:text-[#faa329] text-[16px] transition duration-150'>
                <ArrowLeft size={18} /> 
                <span>Back to home</span>
            </Link>
            <div>
                <h1 className='policy'>Privacy Policy</h1>
                <p className='last-update text-[16px]'>Last updated: April 2026</p>
            </div>
            <div>
                <h2 className='policy-point'>1. Introduction</h2>
                <p>
                    USIZO Services is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your data in accordance with the Protection of Personal Information Act 4 of 2013 (POPIA). By using our website or services, you agree to the terms of this policy.
                </p>
            </div>
            <div>
                <h2 className='policy-point'>2. Who We Are</h2>
                <p>
                    USIZO Services is a career support platform based in Nkomazi, South Africa, offering CV consultations, interview coaching, and professional development services to youth and young professionals. We are the Responsible Party under POPIA.
                    Contact us at: <span className='font-semibold'>zindzi1997@gmail.com</span>  or <span className='font-semibold'>+27 66 042 1344</span> 
                </p>
            </div>
            <div>
                <h2 className='policy-point'>3. What Personal Information We Collect</h2>
                <p>We collect the following personal information when you use our platform:</p>
                <ul className='policy-list'>
                    <li>
                        Full name and contact details (email address, phone number)
                    </li>
                    <li>
                        Career background, goals, and employment history provided via our intake form
                    </li>
                    <li>
                        Booking and appointment details
                    </li>
                    <li>
                        Payment information (processed securely via our payment gateway — we do not store card details)
                    </li>
                    <li>
                        Website usage data collected via cookies and Google Analytics (see Cookie Policy)
                    </li>
                    <li>
                        Communications sent to us via WhatsApp, email, or our website contact form
                    </li>

                </ul>
            </div>
            <div>
                <h2 className='policy-point'>4. Why We Collect Your Information</h2>
                <p>We use your personal information to:</p>
                <ul className='policy-list'>
                    <li>
                        Provide and manage CV consultations, interview coaching, and related services
                    </li>
                    <li>
                        Process bookings and payments
                    </li>
                    <li>
                        Send appointment reminders and follow-up communications via WhatsApp or email
                    </li>
                    <li>
                        Improve our platform and services based on usage patterns
                    </li>
                    <li>
                        Comply with legal and regulatory obligations
                    </li>
                    <li>
                        Respond to enquiries and support requests
                    </li>
                </ul>
                <p>We will not use your information for any purpose other than those listed above without your prior consent.</p>
            </div>
            <div>
                <h2 className='policy-point'>5. Legal Basis for Processing</h2>
                <p>We process your personal information on the following grounds under POPIA:</p>
                <ul className='policy-list'>
                    <li>
                        To fulfil a service contract with you (e.g. completing a booked consultation)
                    </li>
                    <li>
                        To comply with a legal obligation
                    </li>
                    <li>
                        Based on your consent, where required (e.g. marketing communications)
                    </li>
                    <li>
                        In our legitimate business interests, where these do not override your rights
                    </li>
                </ul>
            </div>
            <div>
                <h2 className='policy-point'>6. Sharing Your Information</h2>
                <p>We do not sell or rent your personal information. We may share your information only in the following circumstances:</p>
                <ul className='policy-list'>
                    <li>    
                        With payment gateway providers to process transactions securely
                    </li>
                    <li>
                        With WhatsApp (Meta Platforms) as part of our communication process — subject to Meta's own privacy terms
                    </li>
                    <li>
                        With Google Analytics to analyse website usage (anonymised data)
                    </li>
                    <li>
                        Where required by law, court order, or regulatory authority
                    </li>
                </ul>
                <p>All third parties we work with are required to handle your data responsibly and in compliance with applicable law.</p>
            </div>
            <div>
                <h2 className='policy-point'>7. Data Storage and Security</h2>
                <p>We take the security of your personal information seriously. Your data is stored securely and we implement reasonable technical and organisational measures to protect it from unauthorised access, loss, or misuse.</p>
                <p>We retain your personal information only for as long as is necessary to fulfil the purposes for which it was collected, or as required by law.</p>
            </div>
            <div>
                <h2 className='policy-point'>8. Your Rights Under POPIA</h2>
                <p>As a data subject, you have the right to:</p>
                <ul className='policy-list'>
                    <li>
                        Request access to the personal information we hold about you
                    </li>
                    <li>
                        Request correction of inaccurate or incomplete information
                    </li>
                    <li>
                        Request deletion of your personal information, subject to certain exceptions
                    </li>
                    <li>
                        Object to the processing of your information
                    </li>
                    <li>
                        Lodge a complaint with the Information Regulator of South Africa
                    </li>
                </ul>
                <p>To exercise any of these rights, please contact us at: <span className='font-semibold'>zindzi1997@gmail.com</span></p>
                <p>Information Regulator (South Africa): <span className='font-semibold'>www.inforegulator.org.za</span></p>
            </div>
            <div>
                <h2 className='policy-point'>9. Children's Privacy</h2>
                <p>Our services are intended for users aged 18 and older. We do not knowingly collect personal information from anyone under the age of 18 without parental or guardian consent.</p>
            </div>
            <div>
                <h2 className='policy-point'>10. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. Any changes will be posted on our website with a revised effective date. We encourage you to review this policy periodically.</p>
            </div>
        </div>
    </div>
  )
}

export default page