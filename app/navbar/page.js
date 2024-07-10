import React from 'react'
import { BiMessageAltDots } from "react-icons/bi";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
export default function NavBar() {
  return (
    <div className="">
      <div className=" px-10 navbar bg-base-100 border-b">
        <div className="navbar-start gap-4">
          <div className="flex items-center gap-1 justify-center">
            <BiMessageAltDots className="w-[16px]" />
            <p className="text-xs">Contact Us</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <p className="text-xs">Download app</p>
            <p className="w-[20px] h-[20px]  border flex items-center justify-center"><FaGooglePlay className="w-[14px]" /></p>
            <p className="w-[20px] h-[20px]  border flex items-center justify-center"><FaApple className="w-[14px]" /></p>

          </div>
        </div>
        <div className="navbar-center">
          <img className="h-8" src="https://estarch.com.bd/image/LOGO%201.png" alt="logo" />
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-1 justify-center">
            <CgProfile className="w-[16px]" />
            <p className="text-xs">Log In / Sign Up</p>
          </div>
          <div>
            <select className="select  text-xs">
              <option >BD</option>
              <option>Int.</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-10 mt-10">
        <div className="flex w-fit items-center justify-center">
          <CiSearch className="text-2xl"/>
          <input type="text" placeholder="search product" />
        </div>
        <div className="flex gap-4 justify-center items-center">
            <p> SUMMER</p>
            <p> WOMEN</p>
            <p> MEN</p>
            <p> TEEN</p>
            <p> KIDS</p>
            <p> NARGISUS</p>
            <p> HOME DECOR</p>
        </div>
        <div className="relative w-[60px]">
          <HiOutlineShoppingBag className="relative text-2xl" />
          <p className="bg-red-600 text-white  rounded-full absolute bottom-0 right-8 w-4 h-4 text-xs text-center">0</p>
        </div>

      </div>
    </div>
  )
}
