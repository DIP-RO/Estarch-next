"use client";
import Image from "next/image";
import { useState } from "react";
import img from "../../../public/images/product_img.jpeg";
import img1 from "../../../public/images/1716831105150-manfarebd-id-13.jpeg";
import RelatedProducts from "@/components/relatedproduct/page";
import { FaWhatsapp } from "react-icons/fa";
import { PiCoatHanger } from 'react-icons/pi';
import { useDispatch } from "react-redux";
import { openSize } from "@/lib/slices/sizeSlice";
export default function ProductDetails({ params }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(img);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleThumbnailClick = (imgSrc) => {
    setMainImage(imgSrc);
  };

  return (
    <div className="container bg-base-100 mx-auto p-4">
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row w-full md:w-2/3 border rounded-lg p-4">
          <div className="w-full md:w-1/2">
            <Image
              width={500}
              height={500}
              src={mainImage}
              alt="Big Star Jeans"
              className="object-cover"
            />
            <div className="flex mt-2 gap-2">
              <Image
                width={120}
                height={120}
                src={img1}
                alt="Big Star Jeans"
                className="object-cover cursor-pointer"
                onClick={() => handleThumbnailClick(img1)}
              />
              <Image
                width={120}
                height={120}
                src={img}
                alt="Big Star Jeans"
                className="object-cover cursor-pointer"
                onClick={() => handleThumbnailClick(img)}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-2xl font-bold mb-2">BIG STAR JEANS</h1>
            <p className="text-sm text-gray-600 mb-2">SKU: 00042</p>
            <div className="flex  gap-1 items-center">
              <p className="text-lg">Jeans Size </p>
              <div className='w-48 h-[40px]  rounded-md flex justify-between '>
                <p className="flex gap-2 items-center " onClick={() => dispatch(openSize())}>(<PiCoatHanger /> Size guide )</p>
              </div>
            </div>
            <div className="flex mb-4">
              <button className="border px-4 py-2 mr-2">30</button>
              <button className="border px-4 py-2 mr-2">32</button>
              <button className="border px-4 py-2 mr-2">34</button>
              <button className="border px-4 py-2">36</button>
            </div>
            <p className="text-red-600 text-xl mb-4">
              <span className="line-through text-gray-500 mr-2">৳ 1590</span>
              ৳ 1350
            </p>
            <p className="text-lg mb-2">Quantity:</p>
            <div className="flex items-center mb-6">
              <button
                className="border px-4 py-2"
                onClick={decrementQuantity}
              >
                -
              </button>
              <p className="mx-4">{quantity}</p>
              <button
                className="border px-4 py-2"
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
            <div className="flex items-center  justify-start ml-12">
              <button className="flex w-48  text-white px-4 py-2" style={{ backgroundColor: 'rgb(30, 170, 72)' }}>
                <span><FaWhatsapp size={25} /></span> Whatsapp Order
              </button>
            </div>
            <div className="grid grid-cols-3 mt-5 mb-4">
              <button className="bg-green-500 text-white px-4 py-2 mr-2">
                Add to cart
              </button>
              <button className="bg-black text-white px-4 py-2 mr-2">
                Order now
              </button>
            </div>
          </div>
        </div>
        <div className="border-t pt-4 bg-gray-200 rounded-lg">
          <div className="mx-8">
            <h2 className="text-lg font-bold mb-2">Delivery Charge</h2>
            <p className="text-sm mb-2">
              <span className="mr-2">🚚</span>Dhaka City: 60 TK (2-3 Days)
            </p>
            <p className="text-sm mb-2">
              <span className="mr-2">🚚</span>Outside Dhaka: 120 TK (3-5 Days)
            </p>
            <h2 className="text-lg font-bold mt-4 mb-2">Payment</h2>
            <p className="text-sm mb-2">
              <span className="mr-2">💳</span>Cash on Delivery: Available
            </p>
          </div>
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
}
