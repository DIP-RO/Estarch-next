'use client'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPassword } from '../../../lib/slices/userSlice';
import { useRouter } from 'next/router';
import Image from 'next/image';
import passwordImage from '../../../public/images/banner2.jpeg';

export default function SetPassword() {
   

    return (
        <div className="flex items-center justify-center bg-gradient-to-r from-pink-100 to-yellow-100">
            <div className="bg-white shadow-md mt-10 mb-10 h-[580px] rounded-lg max-w-md mx-auto">
                <Image
                    src={passwordImage}
                    alt="Set Password"
                    height={20}
                    width={600}
                    className="mx-auto"
                />
                <div className="p-12">
                    <h2 className="text-2xl font-bold text-center mb-4">Set Your Password</h2>
                    <form>
                        <input
                            type="password"
                        
                            placeholder="Enter Password"
                            className="border rounded px-4 py-2 w-full mb-4"
                        />
                        <input
                            type="password"
                          
                            placeholder="Confirm Password"
                            className="border rounded px-4 py-2 w-full mb-4"
                        />
                        <button
                            type="submit"
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
                        >
                            Set Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
