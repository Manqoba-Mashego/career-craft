"use client";
import React, { useState } from 'react'
import FormSection from './formSections/formSection';

const PreCVForm = () => {
  const [references, setReferences] = useState([
    { name: "", relation: "", email: "", phone: "" },
  ]);

  const addReference = () => {
    if (references.length < 3) {
      setReferences([
        ...references,
        { name: "", relation: "", email: "", phone: "" },
      ]);
    }
  };

  const handleReferenceChange = (index, field, value) => {
    const updated = [...references];
    updated[index][field] = value;
    setReferences(updated);
  };

  return (
    <div className="space-y-12 mt-10">

      <p className="text-center text-gray-600 text-lg">
        Please fill in the following information to help me start putting
        together your desired CV:
      </p>

      {/* PERSONAL DETAILS */}
      <FormSection title="Personal Details">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input placeholder="Full Names" className="input-field" />
          <input placeholder="Address" className="input-field" />
          <input placeholder="Phone Number" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
        </div>
      </FormSection>

      {/* EDUCATION */}
      <FormSection title="Education">

        <p className="text-[#faa329] font-semibold mb-4">
          University / College
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <input placeholder="Name of University / College" className="input-field" />
          <input placeholder="Location" className="input-field" />
          <input placeholder="Year Started / Graduated" className="input-field" />
        </div>

        <p className="text-[#faa329] font-semibold mb-4">
          High School
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input placeholder="Name of High School" className="input-field" />
          <input placeholder="Location" className="input-field" />
          <input placeholder="Year Matriculated" className="input-field" />
          <input placeholder="Subjects (comma separated)" className="input-field" />
        </div>
      </FormSection>

      {/* WORK EXPERIENCE */}
      <FormSection title="Work Experience">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input placeholder="Company Name" className="input-field" />
          <input placeholder="Location" className="input-field" />
          <input placeholder="Duration Worked There" className="input-field" />
          <input placeholder="Role / Position" className="input-field" />
        </div>

        <textarea
          placeholder="List 1-3 duties and responsibilities"
          className="input-field mt-6"
          rows={4}
        />
      </FormSection>

      {/* SKILLS */}
      <FormSection title="Skills">
        <textarea
          placeholder="List up to 10 skills (comma separated)"
          className="input-field"
          rows={4}
        />
      </FormSection>

      {/* LANGUAGE PROFICIENCY */}
      <FormSection title="Language Proficiency">
        <textarea
          placeholder="List all languages you can speak"
          className="input-field"
          rows={3}
        />
      </FormSection>

      {/* REFERENCES */}
      <FormSection title="References">
        <p className="text-sm text-gray-500 mb-6">
          You can add up to 3 references.
        </p>

        {references.map((ref, index) => (
          <div key={index} className="border border-gray-200 rounded-xl p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                placeholder="Reference Name"
                className="input-field"
                value={ref.name}
                onChange={(e) =>
                  handleReferenceChange(index, "name", e.target.value)
                }
              />
              <input
                placeholder="Relation to You"
                className="input-field"
                value={ref.relation}
                onChange={(e) =>
                  handleReferenceChange(index, "relation", e.target.value)
                }
              />
              <input
                type="email"
                placeholder="Email"
                className="input-field"
                value={ref.email}
                onChange={(e) =>
                  handleReferenceChange(index, "email", e.target.value)
                }
              />
              <input
                placeholder="Phone Number"
                className="input-field"
                value={ref.phone}
                onChange={(e) =>
                  handleReferenceChange(index, "phone", e.target.value)
                }
              />
            </div>
          </div>
        ))}

        {references.length < 3 && (
          <button
            type="button"
            onClick={addReference}
            className="text-[#faa329] font-semibold hover:underline"
          >
            + Add Another Reference
          </button>
        )}
      </FormSection>

      <button
        type="submit"
        className="w-full bg-[#faa329] hover:bg-[#e6951f] text-white font-semibold py-4 rounded-xl transition"
      >
        Submit Information
      </button>

    </div>
  );
};

export default PreCVForm;

