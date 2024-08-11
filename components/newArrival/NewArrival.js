'use client'

import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import img from '../../public/images/product_img1.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../bestSell/BestSell-theme.css'
import Image from 'next/image';
import axios from 'axios';
import baseUrl from '../services/baseUrl';
import Link from 'next/link';
export default function NewArrival() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`${baseUrl}/api/products/new-arrival`)
      .then(res => {
        setProducts(res.data)
        console.log(res.data);
      })
  }, [])

  // const products = [
  //   { id: 1, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
  //   { id: 1, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
  //   { id: 1, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
  //   { id: 1, title: "Premium Solid T Shirt for Men I MF-432", price: "TK. 999", oldPrice: "Tk. 1499", image: img },
  //   // Add more product objects as needed
  // ];

  var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    navigator: false,
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
        <h1 className='text-center  mt-12 font-bold md:text-2xl text-xl'>NEW ARRIVAL PRODUCTS</h1>
        <div className='md:text-right text-center mb-4'>
          <Link className='text-xl font-normal text-orange-500' href={''}>View All</Link>
        </div>
        <Slider {...settings}>
          {products.map(product => (
            <div key={product._id} className="card card-compact bg-base-100 w-96 shadow-md rounded-none">
              <Link href={`/product/${product._id}`}>
                <figure className='relative'>
                  <Image src={product.images[0]} width={500} height={0} alt={product.productName} />
                  <p className='absolute top-2 bg-error text-white left-2 px-2 rounded-md'>New</p>
                </figure>
                <div className="card-body">
                  <h2 className="md:card-title">{product.productName}</h2>
                  <p className='md:text-[20px] text-gray-500'><span>TK.</span>{product.salePrice} <span className='md:text-[17px] line-through'>Tk.{product.regularPrice}</span></p>
                  <div className="card-actions justify-center">
                  </div>
                </div>
              </Link>
              <div className='text-center'>
                <button className="btn btn-sm mb-4 bg-black text-white">BUY NOW</button>
              </div>
            </div>
          ))}

        </Slider>
      </div>
    </div>
  )
}
