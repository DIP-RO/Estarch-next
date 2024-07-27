// pages/checkout.js
'use client'
import { images } from '@/next.config';
import Image from 'next/image';
import React, { useState } from 'react';
import bkcash from '../../../public/images/BKash-Logo.wine.png'
import cod from '../../../public/images/cash-on-delivery-icon.png'
import ssl from '../../../public/images/ssl.png'
import Link from 'next/link';
export default function Checkout() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row">
        {/* Shipping Address */}
        <div className="w-1/2 p-4 border rounded-lg bg-white shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Checkout</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input className="w-full p-2 border rounded" type="text" id="name" name="name" required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="phone">Phone</label>
              <input className="w-full p-2 border rounded" type="text" id="phone" name="phone" required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="alt-phone">Alternative Phone Number</label>
              <input className="w-full p-2 border rounded" type="text" id="alt-phone" name="alt-phone" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">Email (optional)</label>
              <input className="w-full p-2 border rounded" type="email" id="email" name="email" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="district">District</label>
              <select className="w-full p-2 border rounded" id="district" name="district" required>
                <option value="">Select District</option>
                {/* Add options here */}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="address">Address</label>
              <input className="w-full p-2 border rounded" type="text" id="address" name="address" required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="order-notes">Order notes (optional)</label>
              <textarea className="w-full p-2 border rounded" id="order-notes" name="order-notes"></textarea>
            </div>

            
          </form>
        </div>

        {/* Order Summary */}
        <div className="w-1/2 p-4 border rounded-lg bg-white shadow-lg ml-4">
          <h2 className="text-2xl font-bold mb-4 bg-gray-200">Your order</h2>
          <div className="mb-4">
            <div className="flex justify-between">
              <span>Brown Georgette Tunic with Shrug - Brown, XS</span>
              <span>৳ 3995.35</span>
            </div>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className='text-red-700'>৳ 3995</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Charge</span>
              <span>৳ 150</span>
            </div>
            <div className="flex justify-between">
              <span>VAT</span>
              <span>৳ 300</span>
            </div>
          </div>
          <div className="flex justify-between font-bold text-xl">
            <span>Total</span>
            <span className='text-red-700'>৳ 4445</span>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-bold mb-2">Payment Method</label>
            <div className="mb-2 mt-5">
              <label className="inline-flex items-center">
                <input type="radio" name="payment-method" value="cash-on-delivery" required />
              
                <div className='flex items-center justify-center gap-3'>
                <span className="ml-2">Cash on delivery</span>
                  <Image src={cod} alt='' width={120} height={30} />
                </div>
              </label>
            </div>
            <div className="mb-2 mt-5">
              <label className="inline-flex items-center">
                <input type="radio" name="payment-method" value="bkash" required />
                <div className='flex items-center justify-center gap-3'>
                  <span className="ml-2">Bkash Payment</span>
                  <Image src={bkcash} alt='' width={120} height={30} />
                </div>
              </label>
            </div>
            <div className="mb-2">
              <label className="inline-flex items-center">
                <input type="radio" name="payment-method" value="sslcommerz" required />
                <div className='flex items-center justify-center gap-3'>
                  <span className="ml-2">SSL Commerz</span>
                  <Image src={ssl} alt='' width={180} height={30} />
                </div>
                
              </label>
            </div>
            <div className="mb-4 mt-20">
              <label className="inline-flex items-center">
                <input type="checkbox" name="terms" required />
                <span className="ml-2">I have read and agree to the website terms and conditions</span>
              </label>
            </div>
           <Link href='/product/order/order-status'> <button  type="submit" className="w-full bg-black text-white px-4 py-2 rounded">
              Place order
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
