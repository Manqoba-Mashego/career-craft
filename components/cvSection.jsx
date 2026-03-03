"use client";
import React, { useState } from 'react'
import PreCVForm from './preCVForm';
import ConsultationForm from './consultationForm';

const CVSection = () => {
  const [hasCV, setHasCV] = useState(null);

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        {hasCV === null && (
          <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-6">
              Do you already have a CV?
            </h2>

            <div className="flex justify-center gap-6">
              <button
                onClick={() => setHasCV(true)}
                className="bg-[#faa329] text-white cursor-pointer px-8 py-3 rounded-lg font-semibold hover:bg-[#e6951f] transition"
              >
                YES
              </button>

              <button
                onClick={() => setHasCV(false)}
                className="border border-gray-300 cursor-pointer px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                NO
              </button>
            </div>
          </div>
        )}

        {hasCV === true && <ConsultationForm />}
        {hasCV === false && <PreCVForm />}

      </div>
    </div>
  );
};

export default CVSection;

