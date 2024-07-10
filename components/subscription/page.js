import React from 'react'

export default function Subscription() {
  return (
    <div className="bg-white shadow-md rounded-lg p-8 max-w-7xl  mx-auto my-10">
      <div className="flex flex-col md:flex-row justify-evenly  items-center">
        <div className="mb-4 mt-4 w-full mr-20">
          <h2 className="text-3xl font-bold">Join Our Newsletter To Get Offers</h2>
          <p className="text-gray-600">Subscribe to our newsletter and stay updated</p>
        </div>
        <div className="flex gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered h-14 w-80"
          />
          <button className="btn btn-neutral h-14 w-36 ml-2">Subscribe</button>
        </div>
      </div>
    </div>
  )
}
