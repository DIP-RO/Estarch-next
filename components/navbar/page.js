'use client';

import React, { useContext, useEffect, useState } from 'react';
import { BiMessageAltDots } from "react-icons/bi";
import { FaCaretDown, FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import logo from '../../public/images/LOGO 1.png';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdMenu } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { openSlide } from '@/lib/slices/sliderSlice';
import { openCardSlide } from '@/lib/slices/cardSlideSlice';
import { AuthContext } from '../context/AuthProvider';
import baseUrl from '../services/baseUrl';
import axios from 'axios';
import { CiSearch } from 'react-icons/ci';

export default function NavBar() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const { authUser } = useContext(AuthContext)
  const [types, setTypes] = useState([])

  useEffect(() => {
    axios.get(`${baseUrl}/api/types`)
      .then(res => {
        setTypes(res.data)
      })

  }, [])

  // console.log(categories);

  return (
    <div className="">
      <div className="md:px-10 lg:px-10 navbar bg-base-100 border-b sticky top-0 z-10">
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
        <div className="navbar-center ">
          <Link href="/"> <Image width={150} height={20} className="h-8" src={logo} alt="logo" /></Link>
        </div>
        {!authUser ? <div className="navbar-end">
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
          <div className='flex  gap-3 ml-10 lg:hidden md:hidden'>
            {/* <CiSearch className="text-[30px]" /> */}
            <CiSearch size={25} />
            <div className="relative " onClick={() => dispatch(openCardSlide())}>
              <HiOutlineShoppingBag className="relative text-2xl" />
              {totalQuantity > 0 && (
                <span className="bg-red-600 text-white rounded-full absolute -top-1 -right-1 w-4 h-4 text-xs flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </div>
            <div className="group relative  cursor-pointer bg-white hover:bg-white">
              <IoIosArrowDown size={25}/>
              <div className="absolute z-10 bg-white right-[-30px] lg:right-1 md:right-1  hidden w-52 rounded-md h-28 p-2 text-black group-hover:block">
                <ul className="bg-white w-44 lg:w-52 md:w-52 p-5">
                  <li className="text-base hover:bg-base-100"><Link href="/login">Login</Link></li>
                  <div className="divider h-1"></div>
                  <li className="text-base hover:bg-base-100"><Link href='/register'>Register</Link></li>
                  <div className="divider h-1"></div>
                  <li className="text-base hover:bg-base-100"><a>Order Tracking</a></li>
                </ul>
              </div>
            </div>
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
              {/* <CiSearch className="text-[30px]" /> */}
              <HiOutlineShoppingBag onClick={() => dispatch(openCardSlide())} className="text-[30px]" />
              <Link href={'/user'}>
                <CgProfile className="text-[30px]" />
              </Link>
            </div>
          </div>}
      </div>
      <div className=''>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 bg-base-100  px-10 mt-4">
          <div className="lg:flex md:flex w-fit items-center justify-center hidden">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow border-0" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd" />
              </svg>
            </label>
          </div>
          <div className="flex gap-4 justify-center  items-center">

            <Link href='/'><button >HOME</button></Link>
            {
              types.map(t =>
                <Link key={t._id} className='text uppercase' href={`/${t.name}`}>{t.name}</Link>
              )
            }
          </div>
          <div className='lg:flex md:flex justify-end items-center hidden'>
            <div className="relative w-[40px] cursor-pointer" onClick={() => dispatch(openCardSlide())}>
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
    </div>
  );
}
