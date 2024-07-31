'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOtp, decrementResendTimer, resetResendTimer } from '../../../lib/slices/otpSlice';
import otp_icon from "../../../public/images/4a9a21b2517b3e8dd9816f589e878a8b.jpg";
import Link from 'next/link';
import axios from 'axios';

export default function Otp() {
  const dispatch = useDispatch();
  const otp = useSelector((state) => state.otp.otp);
  const resendTimer = useSelector((state) => state.otp.resendTimer);
  const mobile = useSelector((state) => state.auth.mobile); // Adjust as needed for mobile number

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(decrementResendTimer());
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      dispatch(setOtp(newOtp));

      // Move to next input field if input is a number
      if (value && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleResend = async () => {
    dispatch(resetResendTimer());

    try {
      await axios.post('http://localhost:5000/api/auth/resend-otp', { mobile });
      alert('OTP resent successfully.');
    } catch (error) {
      console.error('Error resending OTP:', error);
      alert('Failed to resend OTP. Please try again.');
    }
  };

  const handleSubmit = async () => {
    try {
      const otpCode = otp.join('');
      await axios.post('http://localhost:5000/api/auth/verify', { mobile, otp: otpCode });
      // Navigate to set password page
      window.location.href = '/login/setPassword';
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-pink-100 to-yellow-100">
      <div className="w-full max-w-sm p-8 space-y-8 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col items-center">
          <Image src={otp_icon} width={200} height={30} alt="OTP Icon" />
          <h2 className="mt-6 text-2xl font-bold">Verify with OTP</h2>
          <p className="mt-2 text-sm text-gray-600">Sent to {mobile}</p>
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
        <button
          onClick={handleSubmit}
          className="w-full py-2 text-white bg-red-500 rounded-md font-bold mt-4"
        >
          Continue to Set Password
        </button>
        <div className="flex justify-center mt-4 text-sm text-gray-600">
          Resend OTP in: <span className="ml-1 text-black">{resendTimer}s</span>
        </div>
        {resendTimer === 0 && (
          <button onClick={handleResend} className="mt-2 text-blue-500">
            Resend OTP
          </button>
        )}
        <div className="flex flex-col items-center justify-center mt-4 text-sm">
          <p>
            Log in using <span className='text-red-500'><Link href="/login">Password</Link></span>
          </p>
          <p>
            Having trouble logging in? <span className="text-red-500">Get help</span>
          </p>
        </div>
      </div>
    </div>
  );
}
