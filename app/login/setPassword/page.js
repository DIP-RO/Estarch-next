'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

import passwordImage from '../../../public/images/banner2.jpeg';
import { useRouter } from 'next/navigation';

export default function SetPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const [user, setUser] = useState(null);
    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }, []); // Replace with the actual user ID obtained after OTP verification

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        
        try {
            const response = await axios.post(`${baseUrl}/api/auth/set-password`, {
                userId:user,
                password,
            });

            if (response.status === 200) {
                alert('Password set successfully');
                router.push('/user'); // Redirect to login page after successful password set
            }
        } catch (error) {
            console.error('Error setting password:', error);
            setError('Failed to set password. Please try again.');
        }
    };

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
                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border rounded px-4 py-2 w-full mb-4"
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
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
