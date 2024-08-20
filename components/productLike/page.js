'use client'
import { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { openCardSlide } from "@/lib/slices/cardSlideSlice";
import { addToCart } from "@/lib/slices/cartSlice";
const ProductCard = (product) => {
  const [selectedSize, setSelectedSize] = useState("");
  const dispatch = useDispatch();
  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  console.log("heeeeeee",product.product);
  const handleAddToCart = () => {
      dispatch(openCardSlide())
      const quantity = 1;
      dispatch(addToCart({
        id: product.product._id,
        product: {
          sku: product?.product.SKU,
          discount: product?.product.discount?.amount,
          title: product.product.productName,
          price: product.product?.salePrice,
          colors: [{ images: [{ url: product.product.images[0] }] }],
          stock: { quantity: 10 }, // Adjust based on actual product details
        },
        quantity,
        color: 'Blue', // Add actual color if available
        size: selectedSize,
      }));
  };
  return (
    <div className="flex flex-col md:flex-row mt-10 mx-4  p-4 border rounded-lg bg-white">
      <div className="flex flex-col md:flex-row md:items-center w-full">
        <img
          src={product.product.images[0]}
          alt="10 inch Regular Fit Shorts"
          className="object-cover w-28 rounded-md"
        />
        <div className="ml-0 mt-4 md:mt-0 md:ml-4 flex-grow">
          <h3 className="text-gray-800 text-lg font-semibold">
            {product.product.productName}
          </h3>
          {product.product?.regularPrice - product.product?.salePrice > 0 && (
            <p className='my-1 text-[20px] text-black '>
              <span className=''>TK.</span>{product.product?.salePrice}
              <span className='md:text-[17px] line-through text-red-500'> Tk.{product.product?.regularPrice}</span>
            </p>
          )}
          {product.product?.regularPrice - product.product?.salePrice <= 0 && (
            <p className='my-1 text-[20px] text-black '>
              <span className=''>TK.</span>{product.product?.salePrice}
            </p>
          )}
          <div className="mt-2 flex flex-col md:flex-row gap-4 items-center">
            <select
              className="border border-gray-300 rounded-md py-2 px-4 text-gray-700 w-full md:w-auto"
              value={selectedSize}
              onChange={handleSizeChange}
            >
              <option value="">Select Size</option>
              {product.product?.selectedSizes?.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            {selectedSize && (
              <button onClick={handleAddToCart} className="w-full md:w-auto px-6 py-2 border border-gray-400 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out">
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
