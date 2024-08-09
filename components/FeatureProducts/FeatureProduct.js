'use client'

import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import img from '../../public/images/product_img.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import baseUrl from '../services/baseUrl';
export default function FeatureProduct() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get(`${baseUrl}/api/products/feature-products`)
      .then(res => {
        setProducts(res.data)
      })
  }, [])

  return (
    <div>
      <div className="slider-container mx-0 lg:mx-20">
        <h1 className='text-center mb-4 mt-8 font-bold md:text-2xl text-xl'>OUR FEATURE PRODUCTS</h1>
        <Slider {...settings}>
          {products.map(product => (
            <div key={product._id} className="card card-compact bg-base-100 w-96 shadow-xl">
              <figure>
                <Image src={product.images[0]} width={500} height={700} alt={product.productName} />
              </figure>
              <div className="card-body">
                <h2 className="md:card-title text-xs">
                  {product.productName.length > 22
                    ? `${product.productName.slice(0, 22)}...`
                    : product.productName
                  }</h2>
                  <p className='md:text-[20px] text-gray-500'>Tk.{product.regularPrice} <span className='md:text-[17px] line-through'>TK.{product.salePrice}</span></p>
                  <div className="card-actions justify-center ">
                    <Link href={`/product/${product._id}`}>
                      <button className="btn btn-sm mt-4 md:px-12 shadow-md">Buy Now</button>
                    </Link>
                  </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
