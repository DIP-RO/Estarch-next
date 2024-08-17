'use client'
import { useState } from "react";
import Image from "next/image";
import img from '../../public/images/c_boxer.jpeg';

const ProductCard = (product) => {
  const [selectedSize, setSelectedSize] = useState("");
  console.log(product.product);
  
  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row mt-10 mx-4  p-4 border rounded-lg bg-white">
      <div className="flex flex-col md:flex-row md:items-center w-full">
        <Image
          src={img} // replace with actual image path
          alt="10 inch Regular Fit Shorts"
          className="object-cover rounded-md"
          width={180}
          height={80}
        />
        <div className="ml-0 mt-4 md:mt-0 md:ml-4 flex-grow">
          <h3 className="text-gray-800 text-lg font-semibold">
            10 inch Regular Fit Shorts
          </h3>
          <p className="text-gray-800 text-lg font-semibold">
            199.00&nbsp;<span className="text-sm">AED</span>
          </p>
          <div className="mt-2 flex flex-col md:flex-row gap-4 items-center">
            <select
              className="border border-gray-300 rounded-md py-2 px-4 text-gray-700 w-full md:w-auto"
              value={selectedSize}
              onChange={handleSizeChange}
            >
              <option value="">Select Size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            {selectedSize && (
              <button className="w-full md:w-auto px-6 py-2 border border-gray-400 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out">
                ADD TO CART
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
