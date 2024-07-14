import Image from 'next/image'
import React from 'react'
import cupon from '../../public/images/banner2.jpeg'
import Link from 'next/link'
export default function page() {
  return (
    <div className="flex flex-col items-center justify-center  py-2 bg-gradient-to-r from-pink-100 to-yellow-100">
      <div className="w-full max-w-sm p-8 space-y-8 bg-white mb-10 mt-10 h-[580px] shadow-lg rounded-lg">
              <div className="flex flex-col ">
              <Image
                    src={cupon}
                    alt="Discount"
                    height={20}
                    width={600}
                    className="mx-auto"
                />
        <h2 className="text-2xl font-bold text-center mt-4">Login or <span className='text-red-500'><Link href='/login/usingpassword'>Signup</Link></span></h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email or Mobile Number
              </label>
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-500"
                placeholder="Email or Mobile Number"
                defaultValue="2222222222"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-500"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-red-500 rounded-md hover:bg-pink-600 focus:outline-none focus:ring focus:ring-pink-500"
            >
              LOGIN
            </button>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <p >
              Forgot your password ?<span className="text-red-500"> Reset here</span> 
            </p>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
          <p>
          Having trouble logging in?<span className="text-red-500">Get help</span>
        </p>
          </div>
        </form>
      </div>
    </div>
  )
}