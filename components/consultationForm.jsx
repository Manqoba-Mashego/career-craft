"use client";
import React, { useState } from 'react'

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    notes: "",
    cvFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "cvFile") {
      setFormData({ ...formData, cvFile: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    // TODO: Send to API route
    console.log("Submitting consultation request");

    alert("Consultation booked successfully!");
  };

  return (
    <div className="bg-white p-10 rounded-2xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6">
        Book a CV Consultation
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        <input
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
          required
          className="input-field"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="input-field"
        />

        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          required
          className="input-field"
        />

        <textarea
          name="notes"
          placeholder="Anything you'd like us to improve?"
          onChange={handleChange}
          className="input-field"
        />

        <div>
          <label className="block mb-2 font-medium">
            Attach Your CV *
          </label>
          <input
            type="file"
            name="cvFile"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#faa329] text-white py-3 rounded-lg font-semibold hover:bg-[#e6951f] transition"
        >
          Book Consultation
        </button>

      </form>
    </div>
  );
};

export default ConsultationForm;