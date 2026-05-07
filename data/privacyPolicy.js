import Link from "next/link";

export const privacyPolicy = {
  title: "Privacy Policy",
  lastUpdated: "April 2026",
  sections: [
    {
      heading: "Introduction",
      content: [
        {
          type: "paragraph",
          text: "USIZO Services is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your data in accordance with the Protection of Personal Information Act 4 of 2013 (POPIA). By using our website or services, you agree to the terms of this policy."
        }
      ]
    },
    {
        heading: "Who We Are",
        content: [
            {
                type: "paragraph",
                text: (
                        <>
                            USIZO Services is a career support platform based in Nkomazi, South Africa, offering CV consultations, interview coaching, and professional development services to youth and young professionals. We are the Responsible Party under POPIA. Contact us at{" "}
                            <Link href={"mailto:zindzi1997@gmail.com"} className="font-semibold">
                                zindzi1997@gmail.com
                            </Link> or {" "}
                            <Link href={"tel:+27660421344"} className="font-semibold">
                                +27 66 042 1344
                            </Link>.
                        </>
                )
            }
        ]

    },
    {
      heading: "What Personal Information We Collect",
      content: [
        {
          type: "paragraph",
          text: "We collect the following personal information when you use our platform:"
        },
        {
          type: "list",
          items: [
            "Full name and contact details (email address, phone number)",
            "Career background, goals, and employment history provided via our intake form",
            "Booking and appointment details",
            "Payment information (processed securely via our payment gateway — we do not store card details)",
            "Website usage data collected via cookies and Google Analytics (see Cookie Policy)",
            "Communications sent to us via WhatsApp, email, or our website contact form"
          ]
        }
      ]
    },
    {
      heading: "Why We Collect Your Information",
      content: [
        {
          type: "paragraph",
          text: "We use your personal information to:"
        },
        {
          type: "list",
          items: [
            "Provide and manage CV consultations, interview coaching, and related services",
            "Process bookings and payments",
            "Send appointment reminders and follow-up communications via WhatsApp or email",
            "Improve our platform and services based on usage patterns",
            "Comply with legal and regulatory obligations",
            "Respond to enquiries and support requests"
          ]
        },
        {
          type: "paragraph",
          text: "We will not use your information for any purpose other than those listed above without your prior consent."
        }
      ]
    }, 
    {
        heading: "Legal Basis for Processing",
        content: [
            {
                type: "paragraph",
                text: "We process your personal information on the following grounds under POPIA:"
            }, 
            {
                type: "list",
                items: [
                    "To fulfil a service contract with you (e.g. completing a booked consultation)",
                    "To comply with a legal obligation",
                    "Based on your consent, where required (e.g. marketing communications)",
                    "In our legitimate business interests, where these do not override your rights"
                ]
            }
        ]
    },
    {
        heading: "Sharing Your Information",
        content: [
            {
                type: "paragraph",
                text: "We do not sell or rent your personal information. We may share your information only in the following circumstances:"
            },
            {
                type: "list",
                items: [
                    "With payment gateway providers to process transactions securely",
                    "With WhatsApp (Meta Platforms) as part of our communication process — subject to Meta's own privacy terms",
                    "With Google Analytics to analyse website usage (anonymised data)",
                    "Where required by law, court order, or regulatory authority"
                ]
            },
            {
                type: "paragraph",
                text: "All third parties we work with are required to handle your data responsibly and in compliance with applicable law."
            }
        ]
    },
    {
        heading: "Data Storage and Security",
        content: [
            {
                type: "paragraph",
                text: "We take the security of your personal information seriously. Your data is stored securely and we implement reasonable technical and organisational measures to protect it from unauthorised access, loss, or misuse."
            },
            {
                type: "paragraph",
                text: "We retain your personal information only for as long as is necessary to fulfil the purposes for which it was collected, or as required by law."
            }
        ]
    },
    {
        heading: "Your Rights Under POPIA",
        content: [
            {
                type: "paragraph",
                text: "As a data subject, you have the right to:"
            },
            {
                type: "list",
                items: [
                    "Request access to the personal information we hold about you",
                    "Request correction of inaccurate or incomplete information",
                    "Request deletion of your personal information, subject to certain exceptions",
                    "Object to the processing of your information",
                    "Lodge a complaint with the Information Regulator of South Africa"
                ]
            },
            {
                type: "paragraph",
                text: (
                    <>
                        To exercise any of these rights, please contact us at:{" "} 
                        <Link href={"mailto:zindzi1997@gmail.com"} className="font-semibold">zindzi1997@gmail.com</Link>
                    </>
                )
            },
            {
                type: "paragraph",
                text: (
                    <>
                        Information Regulator (South Africa):{" "}
                        <Link href={"https://inforegulator.org.za/"} target="blank" className="font-semibold">www.inforegulator.org.za</Link>
                    </>
                )
            }
        ]
    },
    {
        heading: "Children's Privacy",
        content: [
            {
                type: "paragraph",
                text: "Our services are intended for users aged 18 and older. We do not knowingly collect personal information from anyone under the age of 18 without parental or guardian consent."
            }
        ]
    },
    {
        heading: "Changes to This Policy",
        content: [
            {
                type: "paragraph",
                text: "We may update this Privacy Policy from time to time. Any changes will be posted on our website with a revised effective date. We encourage you to review this policy periodically."
            }
        ]
    },
  ]
};