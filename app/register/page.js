'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

export default function Register() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValidNumber, setIsValidNumber] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const dispatch = useDispatch();
    const router = useRouter();
 
    useEffect(() => {
        const phoneRegex = /^[0-9]{10}$/;
        setIsValidNumber(phoneRegex.test(phoneNumber));
    }, [phoneNumber]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', { mobile: `+880${phoneNumber}` });
            console.log(response.data.message);
            
            localStorage.setItem('user', JSON.stringify(response.data.userId));
            setSuccessMessage(response.data.message);
            setErrorMessage('');
            router.push('/login/otp');

        } catch (error) {
            console.log(error);
            setErrorMessage('Registration failed');
        }
    };

    return (
        <div className="flex items-center justify-center bg-gradient-to-r from-pink-100 to-yellow-100">
            <div className="bg-white shadow-md mt-10 mb-10 h-[580px] rounded-lg max-w-md mx-auto">
                <div className="p-12">
                    <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="relative border rounded mb-4">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pr-3 border-r border-black">
                                +880
                            </span>
                            <input
                                type="text"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                placeholder="Enter your 10-digit phone number"
                                className="pl-16 py-2 w-full border border-gray-300 rounded"
                                maxLength="10"
                            />
                        </div>
                        <button
                            type="submit"
                            className={`w-full p-3 text-white font-bold ${isValidNumber ? 'bg-red-500' : 'bg-gray-400'}`}
                            disabled={!isValidNumber}
                        >
                            CONTINUE
                        </button>
                    </form>
                    {successMessage && (
                        <p className="text-green-500 text-center mt-4">{successMessage}</p>
                    )}
                    {errorMessage && (
                        <p className="text-red-500 text-center mt-4">{errorMessage}</p>
                    )}
                    <p className="text-sm text-center mb-4">
                        By continuing, I agree to the <span className="text-pink-500">Terms of Use</span> & <span className="text-pink-500">Privacy Policy</span>
                    </p>
                    <p className="text-center text-sm mt-4">
                        Have trouble logging in? <span className="text-pink-500">Get help</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
