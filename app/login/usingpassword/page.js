
'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import cupon from '../../../public/images/banner2.jpeg'
import Link from 'next/link';
export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [focused, setFocused] = useState(false);

    const handleChange = (e) => {
        const input = e.target.value.replace(/[^0-9]/g, ''); // Ensure only numbers
        setPhoneNumber(input);
    };

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        setFocused(false);
    };

    return (
        <div className=" flex items-center justify-center bg-gradient-to-r from-pink-100 to-yellow-100">
            <div className="bg-white shadow-md mt-10 mb-10 h-[580px] rounded-lg  max-w-md mx-auto">
                <Image
                    src={cupon}
                    alt="Discount"
                    height={20}
                    width={600}
                    className="mx-auto"
                />
                <div className="p-12">
                    <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
                    <div className={`relative border rounded mb-4 ${focused ? 'border-black' : ''}`}>
                        <span className={`absolute inset-y-0 left-0 flex items-center pl-3 pr-3 border-r ${focused ? 'border-black' : ''}`}>
                            +88
                        </span>
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="Enter your phone number"
                            className={`pl-16 py-2 w-full ${focused ? 'border-black' : ''}`}
                        />
                    </div>
                    <p className="text-sm text-center mb-4">
                        By continuing, I agree to the <span className="text-pink-500">Terms of Use</span> & <span className="text-pink-500">Privacy Policy</span>
                    </p>
                    <Link href="/login/otp">  <button className="btn btn-pink w-full p-3 text-white bg-red-500 font-bold">
                        CONTINUE
                    </button></Link>
                    <p className="text-center text-sm mt-4">
                        Have trouble logging in? <span className="text-pink-500">Get help</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
