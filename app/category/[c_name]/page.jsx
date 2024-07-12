import React from 'react';
import img from '../../../public/images/product_img.jpeg'
import Link from 'next/link';
import Image from 'next/image';
import { CiFilter } from "react-icons/ci";

const page = () => {


    const products = [
        { id: 1, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
        { id: 1, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
        { id: 1, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
        { id: 1, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
        { id: 1, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
        { id: 1, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
        { id: 1, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
        { id: 1, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
        { id: 1, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
        { id: 1, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
        { id: 1, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
        { id: 1, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
        // Add more product objects as needed
    ];

    return (
        <div className='mx-4 lg:mx-12 mt-5'>
            {/* Upper part */}
            <div className='flex justify-between items-center mb-4'>
                <div className="breadcrumbs text-sm">
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Shop</a></li>
                    </ul>
                </div>

                <label className="form-control w-full max-w-[30%] md:max-w-[10%] flex">

                    <select className="select select-bordered select-sm">
                        <option disabled selected>Sort By</option>
                        <option>Star Wars</option>
                        <option>Harry Potter</option>
                        <option>Lord of the Rings</option>
                        <option>Planet of the Apes</option>
                        <option>Star Trek</option>
                    </select>
                </label>
            </div>
            {/* filter button */}
            <label htmlFor="my-drawer-2" className="btn btn-sm drawer-button lg:hidden mb-4">
                <span><p><CiFilter /></p></span> Filter
            </label>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-start justify-start">
                    {/* Products */}
                    <div className='col-span-10 gap-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
                        {products.map(product => (
                            <div key={product.id} className="card card-compact bg-base-100 shadow-xl h-[350px] lg:h-[500px] ">
                                <figure>
                                    <Image src={product.image} alt={product.title} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="text">{product.title}</h2>
                                    <p className='md:text-[16px] text-gray-500'>{product.price} <span className='md:text-[14px] line-through'>{product.oldPrice}</span></p>
                                    <div className="card-actions justify-center">
                                        <Link href={`/product/${product.id}`}>
                                            <button className="btn btn-sm mt-4 md:px-12 shadow-md">Buy Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="drawer-side h-full lg:h-screen">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu lg:bg-white bg-base-200 min-h-full text-base-content lg:h-full w-60 p-4 sticky">
                        {/* Filter */}
                        <div className='mr-8'>
                            <h1 className='text-xl'>FILTER BY</h1>
                            <hr className='border-2 border-orange-300 max-w-[45%]' />

                            {/* PRICE */}
                            <div>
                                <h1 className='mt-4 text-gray-400'>PRICE</h1>
                                <hr className='border-2' />
                                <hr className='border-2 border-orange-300 max-w-[25%] mt-[-3px]' />
                                <div className='mt-2'>
                                    <div className="form-control">
                                        <label className="label cursor-pointer flex justify-start gap-4">
                                            <input type="checkbox" className="checkbox checkbox-sm" />
                                            <span className="label-text">100 TO 300</span>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer flex justify-start gap-4">
                                            <input type="checkbox" className="checkbox checkbox-sm" />
                                            <span className="label-text">301 TO 500</span>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer flex justify-start gap-4">
                                            <input type="checkbox" className="checkbox checkbox-sm" />
                                            <span className="label-text">501 TO 1,000</span>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer flex justify-start gap-4">
                                            <input type="checkbox" className="checkbox checkbox-sm" />
                                            <span className="label-text">1,001 TO 2,500</span>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer flex justify-start gap-4">
                                            <input type="checkbox" className="checkbox checkbox-sm" />
                                            <span className="label-text">2,501 TO 5,000</span>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer flex justify-start gap-4">
                                            <input type="checkbox" className="checkbox checkbox-sm" />
                                            <span className="label-text">5,001 TO 10,000</span>
                                        </label>
                                    </div>
                                </div>
                            </div>


                            {/* SIZE */}
                            <div>
                                <h1 className='mt-4 text-gray-400'>SIZE</h1>
                                <hr className='border-2' />
                                <hr className='border-2 border-orange-300 max-w-[20%] mt-[-3px]' />
                                <div className='mt-2'>
                                    <div className="form-control">
                                        <label className="label cursor-pointer flex justify-start gap-4">
                                            <input type="checkbox" className="checkbox checkbox-sm" />
                                            <span className="label-text">M</span>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer flex justify-start gap-4">
                                            <input type="checkbox" className="checkbox checkbox-sm" />
                                            <span className="label-text">L</span>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer flex justify-start gap-4">
                                            <input type="checkbox" className="checkbox checkbox-sm" />
                                            <span className="label-text">XL</span>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer flex justify-start gap-4">
                                            <input type="checkbox" className="checkbox checkbox-sm" />
                                            <span className="label-text">XXL</span>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer flex justify-start gap-4">
                                            <input type="checkbox" className="checkbox checkbox-sm" />
                                            <span className="label-text">3XL</span>
                                        </label>
                                    </div>
                                </div>
                            </div>


                            {/* Category */}
                            <div>
                                <h1 className=' mt-4 text-gray-400'>Category</h1>
                                <hr className='border-2' />
                                <hr className='border-2 border-orange-300 max-w-[35%] mt-[-3px]' />
                                <div className='mt-2'>
                                    <div className="form-control">
                                        <label className="label cursor-pointer flex justify-start gap-4">
                                            <input type="checkbox" className="checkbox checkbox-sm" />
                                            <span className="label-text">Panjabi</span>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer flex justify-start gap-4">
                                            <input type="checkbox" className="checkbox checkbox-sm" />
                                            <span className="label-text">Pant</span>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer flex justify-start gap-4">
                                            <input type="checkbox" className="checkbox checkbox-sm" />
                                            <span className="label-text">Pajama</span>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer flex justify-start gap-4">
                                            <input type="checkbox" className="checkbox checkbox-sm" />
                                            <span className="label-text">Boxer</span>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer flex justify-start gap-4">
                                            <input type="checkbox" className="checkbox checkbox-sm" />
                                            <span className="label-text">Polo</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default page;