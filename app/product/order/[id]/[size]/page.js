'use client'
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import cod from '../../../../../public/images/cash-on-delivery-icon.png';
import baseUrl from '@/components/services/baseUrl';
import { useParams, useRouter } from 'next/navigation';
import { AuthContext } from '@/components/context/AuthProvider';
import Link from 'next/link';

export default function Checkout() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const { size } = useParams();
    const router = useRouter();

    const { authUser } = useContext(AuthContext);
    const userId = authUser ? authUser?._id : null;

    const [shippingCharge, setShippingCharge] = useState(null); // Initialize as null
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        area: '',
        orderNotes: '',
        paymentMethod: ''
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${baseUrl}/api/products/products/product/${id}`);
                const fetchedProduct = response.data;
                setProduct(fetchedProduct);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);

    const handleAreaChange = (e) => {
        const value = e.target.value;
        setFormData({ ...formData, area: value });

        if (value === "Inside Dhaka") {
            setShippingCharge(60);
        } else if (value === "Outside Dhaka") {
            setShippingCharge(130);
        } else {
            setShippingCharge(null); // Hide shipping charge if no area is selected
        }
    };

    const calculateTotal = () => {
        if (!product) return 0;
        const subtotal = product.salePrice;
        return subtotal + (shippingCharge || 0); // Add 0 if shippingCharge is null
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!product) return;

        const orderData = {
            serialId: 'E-commerce',
            name: formData.name,
            phone: formData.phone,
            deliveryCharge: shippingCharge,
            address: formData.address,
            area: formData.area,
            orderNotes: formData.orderNotes,
            cartItems: [{
                productId: product._id,
                title: product.productName,
                price: product.salePrice,
                quantity: 1, // Assume ordering 1 unit of the product
                size: size
            }],
            paymentMethod: formData.paymentMethod,
            totalAmount: calculateTotal() - shippingCharge,
            orderStatus: 'Pending',
            userId: userId,
            grandTotal: calculateTotal()
        };

        try {
            const response = await axios.post(`${baseUrl}/api/orders`, orderData);
            alert('Order placed successfully!');
            console.log(response.data);
            // Redirect to the invoice page (adjust according to your actual routing)
            // router.push(`/product/invoice/${response.data.order._id}`);
            window.location.href = `/product/invoice/${response.data.order._id}`
        } catch (error) {
            console.error('There was an error placing the order!', error);
        }
    };

    return (
        <div className="container mx-auto py-10 px-4">
            <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-4 border rounded-lg bg-white shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Checkout</h2>
                    <form className="flex flex-col md:flex-row" onSubmit={handleSubmit}>
                        <div className="md:w-1/2 md:pr-4">
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="name">Name:</label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                    </svg>
                                    <input  
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required className="grow" placeholder="Enter Your name" />
                                </label>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="phone">Phone:</label>
                                <input
                                    className="w-full p-2 border rounded"
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4 flex gap-2 ">
                                <label className="block text-sm font-bold " htmlFor="area">Area:</label>
                                <div className="flex gap-4">
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="area" value="Inside Dhaka" onChange={handleAreaChange} required />
                                        <span className="ml-2">Inside Dhaka</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="area" value="Outside Dhaka" onChange={handleAreaChange} required />
                                        <span className="ml-2">Outside Dhaka</span>
                                    </label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="address">Address:</label>
                                <input
                                    className="w-full p-2 border rounded"
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="order-notes">Order notes (optional):</label>
                                <textarea
                                    className="w-full p-2 border rounded"
                                    id="order-notes"
                                    name="orderNotes"
                                    value={formData.orderNotes}
                                    rows={1}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Payment Method:</label>
                                <div className="mb-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="paymentMethod" value="Cash on Delivery" onChange={handleChange} required />
                                        <div className='flex items-center gap-3 ml-2'>
                                            <span>Cash on delivery</span>
                                            <Image src={cod} alt='Cash on delivery' width={100} height={40} />
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="flex justify-center md:justify-start">
                                <button
                                    type="submit"
                                    className="bg-orange-400 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-200"
                                >
                                    Place Order
                                </button>
                            </div>
                        </div>

                        <div className="md:w-1/2 md:pl-4 mt-4 md:mt-0">
                            <h2 className="text-2xl font-bold mb-4 bg-gray-200 p-2 rounded">Your order</h2>
                            {product && (
                                <>
                                    <div className="mb-4">
                                        <div className="flex justify-between mb-2">
                                            <span>{product.productName} - 1 pcs</span>
                                            <span>৳ {product.salePrice}</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span className='text-red-700'>৳ {product.salePrice.toFixed(2)}</span>
                                    </div>
                                    {shippingCharge !== null && ( // Display only if shippingCharge is set
                                        <div className="flex justify-between">
                                            <span>Shipping Charge</span>
                                            <span>৳ {shippingCharge}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between font-bold text-xl">
                                        <span>Total</span>
                                        <span className='text-red-700'>৳ {calculateTotal().toFixed(2)}</span>
                                    </div>
                                </>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
