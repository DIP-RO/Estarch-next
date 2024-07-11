'use client'

import React from 'react'
import Slider from "react-slick";
import img from '../../public/images/product_img.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../bestSell/BestSell-theme.css'
import Image from 'next/image';
export default function NewArrival() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
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
  return (
    <div>
      <div className="slider-container mx-0 lg:mx-20">
        <h1 className='text-center mt-12 font-bold md:text-2xl text-xl'>NEW ARRIVAL PRODUCTS</h1>
        <Slider {...settings}>
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <Image
                src={img}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="md:card-title">Premium Solid T Shirt for Men I MF-432</h2>
              <p className='md:text-[20px] text-gray-500'>TK. 999 <span className='md:text-[17px] line-through'>Tk. 1499</span></p>
              <div className="card-actions justify-center">
                <button className="btn btn-sm mt-4 px-12 shadow-md">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <Image
                src={img}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="md:card-title">Premium Solid T Shirt for Men I MF-432</h2>
              <p className='md:text-[20px] text-gray-500'>TK. 999 <span className='md:text-[17px] line-through'>Tk. 1499</span></p>
              <div className="card-actions justify-center">
                <button className="btn btn-sm mt-4 px-12 shadow-md">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <Image
                src={img}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="md:card-title">Premium Solid T Shirt for Men I MF-432</h2>
              <p className='md:text-[20px] text-gray-500'>TK. 999 <span className='md:text-[17px] line-through'>Tk. 1499</span></p>
              <div className="card-actions justify-center">
                <button className="btn btn-sm mt-4 px-12 shadow-md">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <Image
                src={img}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="md:card-title">Premium Solid T Shirt for Men I MF-432</h2>
              <p className='md:text-[20px] text-gray-500'>TK. 999 <span className='md:text-[17px] line-through'>Tk. 1499</span></p>
              <div className="card-actions justify-center">
                <button className="btn btn-sm mt-4 px-12 shadow-md">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <Image
                src={img}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="md:card-title">Premium Solid T Shirt for Men I MF-432</h2>
              <p className='md:text-[20px] text-gray-500'>TK. 999 <span className='md:text-[17px] line-through'>Tk. 1499</span></p>
              <div className="card-actions justify-center">
                <button className="btn btn-sm mt-4 px-12 shadow-md">Buy Now</button>
              </div>
            </div>
          </div>

        </Slider>
      </div>
    </div>
  )
}
