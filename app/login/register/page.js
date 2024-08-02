'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';// Updated import for router
import { register } from '../../../lib/slices/authSlice.js'; // Adjust import path
import axios from 'axios';

export default function Register() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValidNumber, setIsValidNumber] = useState(false);
    const dispatch = useDispatch();


    useEffect(() => {
        // Validate phone number: must be exactly 10 digits
        const phoneRegex = /^[0-9]{10}$/;
        setIsValidNumber(phoneRegex.test(phoneNumber));
    }, [phoneNumber]);

    // Handle form submission
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (isValidNumber) {
    //         // Prefix the phone number with +880 and dispatch
    //         dispatch(register(`+880${phoneNumber}`))
    //             .then(() => {
    //                 // Redirect to OTP page on successful registration
    //                 window.location.href = '/login/otp';
    //             });
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = 'testuser'; // Replace with your actual data
    
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({ username })
            });
    
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error: ${response.status} ${response.statusText} - ${errorText}`);
            }
    
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                const text = await response.text();
                throw new TypeError(`Expected JSON, got: ${text}`);
            }
    
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };
    const [user, setUser] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/myinfo', { withCredentials: true });
          setUser(response.data.user);
          console.log(user);
          
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
    

    return (
        <div className="flex items-center justify-center bg-gradient-to-r from-pink-100 to-yellow-100">
            <div className="bg-white shadow-md mt-10 mb-10 h-[580px] rounded-lg max-w-md mx-auto">
                <div className="p-12">
                    <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
                    <form >
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
                                maxLength="10" // Limit input to 10 digits
                            />
                        </div>
                        <button
                            type="submit"
                            className={`w-full p-3 text-white font-bold ${isValidNumber ? 'bg-red-500' : 'bg-gray-400 '}`}
                            // disabled={!isValidNumber} // Disable button if number is invalid
                        >
                            CONTINUE
                        </button>
                    </form>
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
