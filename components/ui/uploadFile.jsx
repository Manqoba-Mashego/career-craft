"use client";   
import { ArrowRight, Upload } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import React, { useRef, useState } from 'react'

const UploadFile = () => {
    const fileInputRef = useRef(null);
    const router = useRouter();
    const [file, setFile] = useState(null);
    const [dragging, setDragging] = useState(false);

    const handleClick = () => fileInputRef.current.click();

    const handleFile = (file) => {
        if (!file) return;
        setFile(file);
        setDragging(false);
    }

    const handleChange = (e) => handleFile(e.target.files[0]);

    const handleDrop = (e) => {
        e.preventDefault();
        handleFile(e.dataTransfer.files[0]);
    }

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragging(true);
    }

    const handleDragLeave = (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)){
            setDragging(false);
        }
    }

    const handleButtonClick = () => {
        if (!file) return;
        router.push("/booking");
    }

    return (
        <div>
            <p className='font-semibold mb-2'>Upload your CV</p>
            <div>
                <input type="file" accept='.pdf, .doc, .docx' ref={fileInputRef} onChange={handleChange} className='hidden'/>
                <div onClick={handleClick} onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave} className={`border-2 border-dashed p-10 text-center cursor-pointer rounded-xl transition-all duration-200 ${dragging ? "border-orange-400 bg-orange-50 scale-[1.02]" : file ? "border-green-400 bg-green-50" : "border-gray-300 hover:border-gray-400"}`}>
                    {/* <p className='text-gray-600'>
                        Drag & Drop your file here or <span className='text-blue-500'>click to upload</span>
                    </p> */}
                    {!file && (
                        <>
                            <Upload size={40} className={`mx-auto mb-4 transition-all ${dragging ? "text-orange-500" : "text-gray-400"}`}/>
                            <p className='text-gray-700 font-medium'>Drag & drop your file here</p>
                            <p className='text-sm text-gray-500 mt-2'>or <span className='text-orange-500 font-semibold'>click to upload</span></p>
                            <p className='text-xs text-gray-400 mt-2'>PDF, DOC, DOCX</p>
                        </>
                    )}

                    {file && (
                        <div className="flex flex-col items-center gap-2">
                            <p className="text-green-600 font-semibold">✓ File uploaded successfully</p>
                            <p className='text-sm text-gray-700'>{file.name}</p>
                        </div>
                    )}
                </div>
            </div>
            <button disabled={!file} onClick={handleButtonClick} className={`flex w-full justify-center items-center mt-7 gap-2 transition-all font-semibold rounded-xl py-4  ${file ? "bg-[#faa329] hover:bg-[#e6b01d] cursor-pointer" : "cursor-default bg-[#edb362c2] text-[#7b7b7b]"}`} ><span>Continue to consultation</span> <ArrowRight /></button>
        </div>
    )
}

export default UploadFile