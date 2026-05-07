import Link from "next/link";

export const termsOfUse = {
    title: "Terms of Use",
    lastUpdated: "April 2026",
    sections: [
        {
            heading: "Introduction",
            content: [
                {
                    type: "paragraph",
                    text: "These Terms of Use govern your access to and use of the USIZO Services website and services. By accessing our website or booking a service, you agree to be bound by these terms. Please read them carefully."
                }
            ]
        },
        {
            heading: "About USIZO Services",
            content: [
                {
                    type: "paragraph",
                    text: "USIZO Services is a career support platform offering CV consultations, interview coaching, professional development guidance, and downloadable career resources to youth and young professionals in South Africa. Our platform is a Concierge + Functional Website model — services are delivered via the website but many are fulfilled personally by our team."
                }
            ]
        },
        {
            heading: "Eligibility",
            content: [
                {
                    type: "paragraph",
                    text: "To use our services, you must be 18 years of age or older. By using our platform, you confirm that you meet this requirement. If you are under 18, you may only use our services with the consent and involvement of a parent or guardian."
                }
            ]
        },
        {
            heading: "Services Offered",
            content: [
                {
                    type: "paragraph",
                    text: "USIZO Services currently offers the following:"
                }, 
                {
                    type: "list",
                    items: [
                        "One-on-one CV consultation and review",
                        "Interview coaching and preparation sessions",
                        "Downloadable CV and cover letter templates",
                        "Guided cover letter support"
                    ]
                }, 
                {
                    type: "paragraph",
                    text: "Service availability, pricing, and scope may change from time to time. We will communicate any significant changes on our website."
                }
            ]
        },
        {
            heading: "Bookings",
            content: [
                {
                    type: "paragraph",
                    text: "Bookings are made through our online booking system. By completing a booking, you confirm your agreement to these Terms of Use and to providing accurate information via our intake form. We reserve the right to decline or cancel a booking if information provided is inaccurate or misleading."
                }
            ]
        }, 
        {
            heading: "Payments",
            content: [
                {
                    type: "paragraph",
                    text: "Payment is required to confirm your booking. We accept Electronic Funds Transfer (EFT) and payments via our supported payment gateway. Your booking is only confirmed once payment has been received and verified."
                },
                {
                    type: "paragraph",
                    text: "Prices are listed in South African Rand (ZAR) and are inclusive of any applicable taxes unless otherwise stated."
                }
            ]
        },
        {
            heading: "Cancellations and Refunds",
            content: [
                {
                    type: "heading",
                    text: "Client-initiated cancellations:"
                },
                {
                    type: "list",
                    items: [
                        "Cancellations made at least 24 hours before a scheduled session: full refund or free rescheduling",
                        "Cancellations made less than 24 hours before a session: a 50% cancellation fee may apply",
                        "No-shows without prior notice: no refund will be issued"
                    ]
                },
                {
                    type: "heading",
                    text: "Service dissatisfaction:"
                },
                {
                    type: "paragraph",
                    text: "If you are unhappy with a service received, please contact us within 48 hours of your session. We will review your concern and, where the service was not delivered as agreed, consider a full or partial refund at our discretion. All disputes are handled personally and we aim to resolve them within 3 to 5 business days."
                },
                {
                    type: "heading",
                    text: "USIZO-initiated cancellations:"
                },
                {
                    type: "paragraph",
                    text: "In the rare event that we need to cancel a confirmed booking, you will receive a full refund or the option to reschedule at no cost."
                }
            ]
        }, 
        {
            heading: "Downloadable Templates",
            content: [
                {
                    type: "paragraph",
                    text: "Templates and resources available for download on our platform are provided for your personal, non-commercial use only. You may not resell, redistribute, or claim ownership of our templates. All intellectual property rights remain with USIZO Services."
                }
            ]
        },
        {
            heading: "User Responsibilities",
            content: [
                {
                    type: "paragraph",
                    text: "When using our platform, you agree to:"
                },
                {
                    type: "list",
                    items: [
                        "Provide accurate and honest information in all forms and communications",
                        "Use our services only for lawful, personal career development purposes",
                        "Not misuse, reverse engineer, or interfere with our website or systems",
                        "Treat our team and other users with respect in all interactions"
                    ]
                }
            ]
        },
        {
            heading: "Disclaimer of Warranties",
            content: [
                {
                    type: "paragraph",
                    text: "USIZO Services provides career guidance and support in good faith. However, we do not guarantee specific outcomes such as job placement, interview success, or salary increases. Results depend on individual effort, circumstances, and factors beyond our control."
                },
                {
                    type: "paragraph",
                    text: "Our website and services are provided on an 'as is' basis. We make no warranties, express or implied, regarding the accuracy, reliability, or completeness of any content on our platform."
                }
            ]
        },
        {
            heading: "Limitation of Liability",
            content: [
                {
                    type: "paragraph",
                    text: "To the fullest extent permitted by South African law, USIZO Services shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services or website. Our total liability to you for any claim shall not exceed the amount you paid for the specific service in dispute."
                }
            ]
        },
        {
            heading: "Intellectual Property",
            content: [
                {
                    type: "paragraph",
                    text: "All content on the USIZO Services website — including text, graphics, templates, logos, and design — is the property of USIZO Services and is protected by applicable intellectual property laws. You may not copy, reproduce, or distribute any content without our prior written consent."
                }
            ]
        },
        {
            heading: "Governing Law",
            content: [
                {
                    type: "paragraph",
                    text: "These Terms of Use are governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising from these terms shall be subject to the jurisdiction of the South African courts."
                }
            ]
        },
        {
            heading: "Changes to These Terms",
            content: [
                {
                    type: "paragraph",
                    text: "We reserve the right to update these Terms of Use at any time. Updates will be posted on our website with a revised effective date. Continued use of our services after changes are posted constitutes your acceptance of the updated terms."
                }
            ]
        },
        {
            heading: "Contact Us",
            content: [
                {
                    type: "paragraph",
                    text: (
                        <>
                            For any questions about these Terms of Use, contact us at:{" "}
                            <Link href={"mailto:zindzi1997@gmail.com"} className="font-semibold">zindzi1997@gmail.com</Link>
                        </>
                    )
                }
            ]
        }
    ]
}