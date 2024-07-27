// pages/order-status.js
import React from 'react';
import Head from 'next/head';
import truck from '../../../../public/images/delivery-truck-box-Av8vKM7-600.jpg'
import Image from 'next/image';
export default function OrderStatus() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Order Status</title>
      </Head>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-center text-2xl font-bold mb-4">Your order is on its way</h1>
        <div className="flex justify-center mb-4">
          <Image src={truck} alt='' width={300} height={40}/> 
        </div>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <div className="flex justify-between mb-2">
            <div className="font-semibold">SUMMARY:</div>
            <div className="font-semibold">SHIPPING ADDRESS:</div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className='font-bold'>Order # <span className='font-normal'>MBJP-0000003</span></p>
              <p className='font-bold'>Order date:<span className='font-normal'> 22-05-2024</span></p>
              <p className='font-bold'>Order Total: <span className='font-normal'>tk. 960</span></p>
            </div>
            <div>
              <p>Fghh</p>
            </div>
          </div>
        </div>
        <div className=" rounded-lg mb-4">
          <div className='bg-gray-100 flex justify-end'><h2 className="font-semibold mb-2">ITEMS SHIPPED</h2></div>
          <div className="flex justify-end gap-3">
            <p className='font-bold '>Subtotal (1 items)</p>
            <p>tk. 850</p>
          </div>
          <div className="flex justify-end gap-3">
            <p className='font-bold'>Delivery charge</p>
            <p>tk. 110</p>
          </div>
          <div className="flex justify-end  gap-3">
            <p className='font-bold'>Order Total</p>
            <p>tk. 960</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <button className="bg-black text-white px-4 py-2 rounded-lg">📞 CALL US</button>
        </div>
      </div>
      {/* <div className="fixed bottom-0 w-full bg-white shadow-lg">
        <div className="flex justify-around py-2">
          <a href="#" className="flex flex-col items-center">
            <span>Message</span>
          </a>
          <a href="#" className="flex flex-col items-center">
            <span>Call</span>
          </a>
          <a href="#" className="flex flex-col items-center">
            <span>Home</span>
          </a>
          <a href="#" className="flex flex-col items-center">
            <span>Wishlists</span>
          </a>
          <a href="#" className="flex flex-col items-center">
            <span>Profile</span>
          </a>
        </div>
      </div> */}
    </div>
  );
}
