'use client'
import { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useSelector } from 'react-redux';
import bkcash from '../../../public/images/BKash-Logo.wine.png';
import cod from '../../../public/images/cash-on-delivery-icon.png';
import ssl from '../../../public/images/ssl.png';

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    altPhone: '',
    email: '',
    district: '',
    address: '',
    orderNotes: '',
    paymentMethod: ''
  });

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shippingCharge = 150; // Example value
    const vat = 300; // Example value
    return subtotal + shippingCharge + vat;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      name: formData.name,
      phone: formData.phone,
      altPhone: formData.altPhone,
      email: formData.email,
      district: formData.district,
      address: formData.address,
      orderNotes: formData.orderNotes,
      cartItems: cartItems.map(item => ({
        // productId: item.product.id, // Ensure productId is included
        title: item.product.title,
        quantity: item.quantity,
        price: item.product.price
      })),
      paymentMethod: formData.paymentMethod,
      totalAmount: calculateTotal(),
      orderStatus: 'Pending'
    };

    console.log('Form Data:', orderData); // Log form data to verify

    try {
      const response = await axios.post('http://localhost:5000/api/orders/orders', orderData);
      alert('Order placed successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('There was an error placing the order!', error);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row">
        {/* Shipping Address */}
        <div className="w-1/2 p-4 border rounded-lg bg-white shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Checkout</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input className="w-full p-2 border rounded" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="phone">Phone</label>
              <input className="w-full p-2 border rounded" type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="alt-phone">Alternative Phone Number</label>
              <input className="w-full p-2 border rounded" type="text" id="alt-phone" name="altPhone" value={formData.altPhone} onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">Email (optional)</label>
              <input className="w-full p-2 border rounded" type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="district">District</label>
              <select className="w-full p-2 border rounded" id="district" name="district" value={formData.district} onChange={handleChange} required>
                <option value="">Select District</option>
                <option value="Barisal">Barisal</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Khulna">Khulna</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Sylhet">Sylhet</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="address">Address</label>
              <input className="w-full p-2 border rounded" type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="order-notes">Order notes (optional)</label>
              <textarea className="w-full p-2 border rounded" id="order-notes" name="orderNotes" value={formData.orderNotes} onChange={handleChange}></textarea>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-bold mb-2">Payment Method</label>
              <div className="mb-2 mt-5">
                <label className="inline-flex items-center">
                  <input type="radio" name="paymentMethod" value="Cash on Delivery" onChange={handleChange} required />
                  <div className='flex items-center justify-center gap-3'>
                    <span className="ml-2">Cash on delivery</span>
                    <Image src={cod} alt='Cash on delivery' width={120} height={30} />
                  </div>
                </label>
              </div>
              <div className="mb-2 mt-5">
                <label className="inline-flex items-center">
                  <input type="radio" name="paymentMethod" value="Bkash" onChange={handleChange} required />
                  <div className='flex items-center justify-center gap-3'>
                    <span className="ml-2">Bkash Payment</span>
                    <Image src={bkcash} alt='Bkash' width={120} height={30} />
                  </div>
                </label>
              </div>
              <div className="mb-2">
                <label className="inline-flex items-center">
                  <input type="radio" name="paymentMethod" value="SSLCommerz" onChange={handleChange} required />
                  <div className='flex items-center justify-center gap-3'>
                    <span className="ml-2">SSLCommerz Payment</span>
                    <Image src={ssl} alt='SSLCommerz' width={120} height={30} />
                  </div>
                </label>
              </div>
              <div className="flex items-center justify-center mt-20 w-[700px] bg-black">
                <button
                  type="submit"
                  className=" text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Place Order
                </button>
              </div> 
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="w-1/2 p-4 border rounded-lg bg-white shadow-lg ml-4">
          <h2 className="text-2xl font-bold mb-4 bg-gray-200">Your order</h2>
          <div className="mb-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>{item.product.title} - {item.quantity} pcs</span>
                <span>৳ {item.product.price * item.quantity}</span>
              </div>
            ))}
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className='text-red-700'>৳ {calculateSubtotal().toFixed(2)}</span>
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
            <span className='text-red-700'>৳ {calculateTotal().toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
