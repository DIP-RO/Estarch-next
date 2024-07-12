'use client'

import React from 'react'
import Slider from "react-slick";
import img from '../../public/images/product_img1.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../bestSell/BestSell-theme.css'
import Image from 'next/image';
export default function NewArrival() {


  const products = [
    { id: 1, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
    { id: 1, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
    { id: 1, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
    { id: 1, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
    // Add more product objects as needed
  ];

  var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    navigator:false,
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
          slidesToShow: 2,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          className: "center",
          centerMode: true,
          centerPadding: "35px",

        }
      }
    ]
  };
  return (
    <div>
      <div className="slider-container mx-0 lg:mx-20">
        <h1 className='text-center mb-4  mt-12 font-bold md:text-2xl text-xl'>NEW ARRIVAL PRODUCTS</h1>
        <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} className="card card-compact bg-base-100 w-96 shadow-sm rounded-none">
            <figure>
              <Image src={product.image} alt={product.title} />
            </figure>
            <div className="card-body">
              <h2 className="md:card-title">{product.title}</h2>
              <p className='md:text-[20px] text-gray-500'>{product.price} <span className='md:text-[17px] line-through'>{product.oldPrice}</span></p>
              <div className="card-actions justify-center">
              </div>
            </div>
          </div>
        ))}

        </Slider>
      </div>
    </div>
  )
}
