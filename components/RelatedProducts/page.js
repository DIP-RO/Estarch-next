'use client'

import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from 'axios';
import baseUrl from '../services/baseUrl';
import Link from 'next/link';
import Image from 'next/image';

export default function RelatedProductsSinglePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${baseUrl}/api/products/feature-products`)
      .then(res => {
        setProducts(res.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(() => {
        setLoading(false); // Set loading to false even if there is an error
      });
  }, []);

  return (
    <div>
      <div className="slider-container mx-0 lg:mx-20">
        <h1 className='text-center mb-4 mt-8 font-bold md:text-2xl text-xl uppercase'>You May Also Like</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {loading ? (
            // Render 4 skeletons (or more, depending on your design)
            Array.from({ length: 4 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          ) : (
            products.map(product => (
              <div key={product._id} className="card card-compact bg-base-100 w-full shadow-xl">
                <figure>
                  <Image src={product.images[0]} width={500} height={700} alt={product.productName} />
                </figure>
                <div className="card-body">
                  <h2 className="md:card-title text-xs">
                    {product.productName.length > 22
                      ? `${product.productName.slice(0, 22)}...`
                      : product.productName
                    }
                  </h2>
                  <p className='md:text-[20px] text-gray-500'>
                    Tk.{product.regularPrice} <span className='md:text-[17px] line-through'>TK.{product.salePrice}</span>
                  </p>
                  <div className="card-actions justify-center">
                    <Link href={`/product/${product._id}`}>
                      <button className="btn btn-sm mt-4 md:px-12 shadow-md">Buy Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function ProductSkeleton() {
  return (
    <div className="card card-compact bg-base-100 w-full shadow-xl animate-pulse">
      <figure className="bg-gray-300 h-60 w-full"></figure>
      <div className="card-body">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
        <div className="h-8 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );
}
