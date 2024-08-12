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
        <h1 className='text-center mt-8 font-bold md:text-2xl text-xl'>OUR FEATURE PRODUCTS</h1>
        <div className='text-center mb-4'>
          <Link className='text-xl font-normal text-orange-500' href={''}>View All</Link>
        </div>
        <Slider {...settings}>
          {products.map(product => (
            <div key={product._id} className="card card-compact bg-base-100 w-96 shadow-md ">
                <figure className='relative'>
                  <Image className='rounded-t-lg' src={product.images[0]} width={500} height={0} alt={product.productName} />
                  <p className='absolute top-2 bg-error text-white left-2 px-2 rounded-md'>New</p>
                </figure>
                <div className="pt-1 px-6">
                  <h2 className="md:text-[18px] text-[16px] font-bold text-center">
                    {product.productName.length > 22
                      ? `${product.productName.slice(0, 22)}...`
                      : product.productName
                    }</h2>
                  <div className='text-center'>

                    <>
                      <p className={`bg-black text-white mt-2 w-[40%] mx-auto mb-2 ${product.regularPrice - product.salePrice > 0 ? 'visible' : 'invisible'}`}>
                        Save Tk. {product.regularPrice - product.salePrice}
                      </p>
                      {
                        product.regularPrice - product.salePrice > 0 && (
                          <p className='my-1 text-[20px] text-black text-center'>
                            <span className=''>TK.</span>{product.salePrice}
                            <span className='md:text-[17px] line-through text-red-500'> Tk.{product.regularPrice}</span>
                          </p>
                        )
                      }
                    </>

                    {product.regularPrice - product.salePrice <= 0 && (
                      <p className='my-1 text-[20px] text-black text-center'>
                        <span className=''>TK.</span>{product.salePrice}
                      </p>
                    )}
                  </div>
                </div>
             
              <div className='text-center'>
                <Link href={`/product/${product._id}`}>
                  <button className=" bg-black text-white w-full py-2">BUY NOW</button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
