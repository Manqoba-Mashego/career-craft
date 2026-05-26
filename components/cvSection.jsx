"use client";
import React from "react";
import Reveal from "./reveal";
import { CircleCheckBig, FileText, Sparkles, RefreshCcw } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CVSection = () => {
  const router = useRouter();

  const services = [
    {
      title: "New CV From Scratch",
      icon: <Sparkles size={22} />,
      description:
        "Perfect for students, graduates, and professionals who need a completely new CV.",
      points: [
        "Professionally written CV",
        "ATS-optimized structure",
        "Modern professional design",
        "Personal branding",
      ],
      button: "Create My CV",
      service: "new-cv",
      link: "/consultation/cv-creation/email",
    },
    {
      title: "CV Revamp",
      icon: <RefreshCcw size={22} />,
      description:
        "Upgrade your existing CV with stronger wording, better formatting, and ATS optimization.",
      points: [
        "Professional redesign",
        "ATS keyword optimization",
        "Improved wording & impact",
        "Detailed feedback",
      ],
      button: "Revamp My CV",
      service: "revamp",
      link: "/consultation/cv-revamp/email",
    },
  ];

  const handleServiceClick = (service) => {
    router.push(`/payment?service=${service}`);
  };

  return (
    <div
      className="min-h-screen py-24 scroll-mt-15 bg-[#162B4E]"
      id="cv-consultation"
    >
      <div className="w-[90%] max-w-7xl mx-auto flex flex-col gap-10">
        <Reveal>
          <p className="text-[#faa329] font-semibold text-center">
            CV CONSULTATION
          </p>

          <p className="font-playfair text-[48px] font-black text-white mb-3 text-center">
            Professional CV Service
          </p>

          <p className="text-gray-300 text-lg text-center max-w-2xl mx-auto">
            Choose the service that best fits your needs and get a professional
            CV that stands out.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#faf8f50d] border border-[#8f7147] rounded-2xl p-10 flex flex-col justify-between hover:border-[#faa329] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-[#faa329] bg-[#ee9a0920] p-3 rounded-xl">
                      {service.icon}
                    </div>

                    <h3 className="text-3xl font-bold text-white font-playfair">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 mb-8">{service.description}</p>

                  <ul className="flex flex-col gap-4 mb-10">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex gap-3 items-center">
                        <CircleCheckBig className="text-[#faa329]" size={20} />

                        <p className="text-gray-300">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={service.link}
                  onClick={() => handleServiceClick(service.service)}
                  className="shadow-[0_4px_10px_rgba(230,156,29,0.18),0_0_4px_rgba(230,156,29,0.15)] flex items-center justify-center bg-[#e69c1d] transition-all ease-out duration-300 text-[#0F2A4A] cursor-pointer hover:bg-[#e6b71d] px-10 py-4 rounded-xl gap-2 font-semibold w-full"
                >
                  {service.button}
                </Link>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default CVSection;
