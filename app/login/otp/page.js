'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import otp_icon from "../../../public/images/4a9a21b2517b3e8dd9816f589e878a8b.jpg"
import Link from 'next/link';
export default function Otp() {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [resendTimer, setResendTimer] = useState(30);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setResendTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    const handleChange = (e, index) => {
      const value = e.target.value;
      if (/^\d*$/.test(value)) {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
  
        // Move to next input field if input is a number
        if (value && index < 3) {
          document.getElementById(`otp-input-${index + 1}`).focus();
        }
      }
    };
  
    const handleResend = () => {
      setResendTimer(30);
      // Logic to resend OTP
    };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-pink-100 to-yellow-100">
    <div className="w-full max-w-sm p-8 space-y-8 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col items-center">
        <Image src={otp_icon} width={200} height={30} alt="OTP Icon" className="" />
        <h2 className="mt-6 text-2xl font-bold">Verify with OTP</h2>
        <p className="mt-2 text-sm text-gray-600">Sent to 9222222222</p>
      </div>
      <div className="flex justify-center space-x-2">
        {otp.map((value, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength="1"
            value={value}
            onChange={(e) => handleChange(e, index)}
            className="w-12 h-12 text-center border border-gray-300 rounded-md"
          />
        ))}
      </div>
      <div className="flex  justify-center  mt-4 text-sm text-gray-600">
        Resend OTP in: <span className="ml-1 text-black">{resendTimer}</span>
      </div>
      {resendTimer === 0 && (
        <button onClick={handleResend} className="mt-2 ml-28 text-blue-500">
          Resend OTP
        </button>
      )}
      <div className="flex flex-col items-center justify-center mt-4 text-sm">
        <p href="#">
          Log in using <span className='text-red-500'><Link href="/login/usingpassword">Password</Link></span>
        </p>
        <p href="#" >
          Having trouble logging in?<span className="text-red-500">Get help</span>
        </p>
      </div>
    </div>
  </div>
  )
}
