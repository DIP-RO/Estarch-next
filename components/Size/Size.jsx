"use client"

import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSlide } from "@/lib/slices/sliderSlice";
import { closeSize } from "@/lib/slices/sizeSlice";
function Size() {
    const isOpen = useSelector((state) => state.size.isOpen);
    const dispatch = useDispatch();
    return (
        <div>  <div className={`container mx-auto px-4 py-8 h-full  z-[1000] bg-white w-full lg:w-[30%] md:w-[30%] ${isOpen ? 'fixed right-0 top-0 ' : 'hidden'}`}>
            <h1 onClick={() => dispatch(closeSize())}  className="flex justify-end text-2xl cursor-pointer"><RxCross1 /> </h1>
            <h2 className="text-2xl font-bold text-center mb-4 mt-3">FIND YOUR FIT</h2>
            <h1 className=" font-semibold  mt-3">SIZE GUIDE</h1>
            <h1 className=" px-5 py-2 border border-black rounded-md w-fit mt-3">SIZE</h1>
            <table className="table-auto w-full border border-collapse mt-3">
                <thead>
                    <tr className="text-center border-b">

                        <th className="p-2">CUP</th>
                        <th className="p-2">30</th>
                        <th className="p-2">32</th>
                        <th className="p-2">34</th>
                        <th className="p-2">36</th>
                        <th className="p-2">38</th>
                        <th className="p-2">40</th>
                        <th className="p-2">42</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center border-b">
                        <td className="p-2">A</td>
                        <td className="p-2">30</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">M</td>
                        <td className="p-2">M</td>
                    </tr>
                    <tr className="text-center border-b">
                        <td className="p-2">B</td>
                        <td className="p-2">30</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">M</td>
                        <td className="p-2">M</td>
                    </tr>
                    <tr className="text-center border-b">
                        <td className="p-2">C</td>
                        <td className="p-2">30</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">M</td>
                        <td className="p-2">M</td>
                    </tr>
                    <tr className="text-center border-b">
                        <td className="p-2">D</td>
                        <td className="p-2">30</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">M</td>
                        <td className="p-2">M</td>
                    </tr>
                    <tr className="text-center border-b">
                        <td className="p-2">E</td>
                        <td className="p-2">30</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">M</td>
                        <td className="p-2">M</td>
                    </tr>
                    <tr className="text-center border-b">
                        <td className="p-2">F</td>
                        <td className="p-2">30</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">M</td>
                        <td className="p-2">M</td>
                    </tr>
                    <tr className="text-center border-b">
                        <td className="p-2">G</td>
                        <td className="p-2">30</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">XS</td>
                        <td className="p-2">M</td>
                        <td className="p-2">M</td>
                    </tr>

                </tbody>
            </table>
        </div></div>
    )
}

export default Size