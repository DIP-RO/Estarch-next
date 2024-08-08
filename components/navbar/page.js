'use client';

import React, { useContext, useState } from 'react';
import { BiMessageAltDots } from "react-icons/bi";
import { FaCaretDown, FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import img from '../../public/images/c_boxer.jpeg';
import logo from '../../public/images/LOGO 1.png';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdMenu } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { openSlide } from '@/lib/slices/sliderSlice';
import { openCardSlide } from '@/lib/slices/cardSlideSlice';
import { AuthContext } from '../context/AuthProvider';
export default function NavBar() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('');
  const {authUser} = useContext(AuthContext)

  const products = [
    { id: 1, title: "Premium Solid T Shirt for Men I MF-432", category: "men", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
    { id: 2, title: "Premium Solid T Shirt for Men I MF-432", category: "men", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
    { id: 3, title: "Premium Solid T Shirt for Men I MF-432", category: "women", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
    { id: 4, title: "Premium Solid T Shirt for Men I MF-432", category: "kids", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
    { id: 5, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
    { id: 6, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
    { id: 7, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
    { id: 8, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
    { id: 9, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
    { id: 10, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
    { id: 11, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
    { id: 12, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
    // Add more product objects as needed
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    router.push(`/${category}`); // Navigate to the respective category page
  };
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="">
      <div className="px-10 navbar bg-base-100 border-b">
        <div className="navbar-start">
          <div className='hidden lg:block md:block'>
            <div className='gap-4 flex'>
              <div className="flex items-center gap-1 justify-center">
                <BiMessageAltDots className="w-[16px]" />
                <p className="text-xs">Contact Us</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <p className="text-xs">Download app</p>
                <p className="w-[20px] h-[20px] border flex items-center justify-center"><FaGooglePlay className="w-[14px]" /></p>
                <p className="w-[20px] h-[20px] border flex items-center justify-center"><FaApple className="w-[14px]" /></p>
              </div>
            </div>
          </div>
          <div className='text-black text-[30px] lg:hidden md:hidden'>
            <IoMdMenu onClick={() => dispatch(openSlide())} />
          </div>
        </div>
        <div className="navbar-center sm:mr-9">
          <Link href="/"> <Image width={150} height={20} className="h-8" src={logo} alt="logo" /></Link>
        </div>
       { !authUser ? <div className="navbar-end">
          <div className='hidden lg:block md:block'>
            <div className="group relative cursor-pointer bg-white hover:bg-white">
              <a className="flex items-center gap-[2px] text-base font-semibold">
                <div className="flex items-center gap-1 justify-center">
                  <CgProfile className="w-[16px]" />
                  <p className="text-xs">Log In / Sign Up</p>
                </div>
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute z-10 bg-white right-1 hidden w-52 rounded-md h-28 p-2 text-black group-hover:block">
                <ul className="bg-white w-52 p-5">
                  <li className="text-base hover:bg-base-100"><Link href="/login">Login</Link></li>
                  <div className="divider h-1"></div>
                  <li className="text-base hover:bg-base-100"><Link href='/register'>Register</Link></li>
                  <div className="divider h-1"></div>
                  <li className="text-base hover:bg-base-100"><a>Order Tracking</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex gap-2 ml-10 lg:hidden md:hidden'>
            <CiSearch className="text-[30px]" />
            <HiOutlineShoppingBag className="text-[30px]" />
            <CgProfile className="text-[30px]" />
          </div>
        </div>
        :
        <div className="navbar-end">
          <div className='hidden lg:block md:block'>
            <div className="group relative cursor-pointer bg-white hover:bg-white">
              <a className="flex items-center gap-[2px] text-base font-semibold">
                <Link href={'/user'} className="flex items-center gap-1 justify-center">
                  <CgProfile className="w-[26px] text-xl" />
                  <p className="text">My Profile</p>
                </Link>
              </a>
              
            </div>
          </div>
          <div className='flex gap-2 ml-10 lg:hidden md:hidden'>
            <CiSearch className="text-[30px]" />
            <HiOutlineShoppingBag className="text-[30px]" />
            <CgProfile className="text-[30px]" />
          </div>
        </div> }
      </div>
      <div className='hidden lg:block md:block'>
        <div className="flex bg-base-100 justify-between px-10 mt-10">
          <div className="flex w-fit items-center justify-center">
            <CiSearch className="text-2xl" />
            <input type="text" className='w-full max-w-xs h-8' placeholder="search product" />
          </div>
          <div className="flex gap-4 justify-center items-center">

            <Link href='/'><button >HOME</button></Link>
            <Link href='/men'><button>MEN</button></Link>
            <Link href='/women'> <button >WOMEN</button></Link>
            <Link href='/kids'> <button >KIDS</button></Link>
            <Link href='/shoes'><button >SHOES</button></Link>
          </div>
          <div className="relative w-[40px]" onClick={() => dispatch(openCardSlide())}>
            <HiOutlineShoppingBag className="relative text-2xl" />
            {totalQuantity > 0 && (
                <span className="bg-red-600 text-white rounded-full absolute -top-1 -right-1 w-4 h-4 text-xs flex items-center justify-center">
                    {totalQuantity}
                </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
