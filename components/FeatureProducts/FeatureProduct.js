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
import { useDispatch } from 'react-redux';
import ProductModal from '../ProductModal/page';
import { openProductModal } from '@/lib/slices/productModalSlice';
export default function FeatureProduct() {


  const dispatch = useDispatch();
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
        <h1 className='text-center mt-8 font-bold md:text-2xl lg:text-2xl text-lg'>OUR FEATURE PRODUCTS</h1>
        <div className='text-center mb-4'>
          <Link className='lg:text-xl font-normal text-orange-500' href={'/feature-products'}>View All</Link>
        </div>
        <Slider {...settings}>
          {products.map(product => (
            <div key={product._id} className="card card-compact bg-base-100 w-96 shadow-md rounded-none h-[350px] md:h-full relative ">
              <Link href={`/product/${product._id}`}>
                <figure className='relative'>
                  <Image src={product.images[0]} width={500} height={0} alt={product.productName} />
                </figure>
                <div className="pt-1 lg:px-6 px-2">
                  <h2 className="md:text-[18px] text-[14px] font-bold text-center">
                    {product.productName.length > 22
                      ? `${product.productName.slice(0, 22)}...`
                      : product.productName
                    }</h2>
                  <div className='text-center'>
                    <div className="absolute md:relative bottom-8 md:bottom-0 left-7 md:left-0">
                      <p className={`bg-[#000]  text-white text-sm md:text-[16px] mt-2 w-full md:w-[50%] mx-auto mb-2 ${product.regularPrice - product.salePrice > 0 ? 'visible' : 'invisible'}`}>
                        Save Tk. {product.regularPrice - product.salePrice}
                      </p>
                      {
                        product.regularPrice - product.salePrice > 0 && (
                          <p className='my-1 text-[16px] md:text-[20px] text-black text-center '>
                            <span>TK.</span>{product.salePrice}
                            <span className='md:text-[17px] text-sm line-through text-red-500'> Tk.{product.regularPrice}</span>
                          </p>
                        )
                      }
                    </div>

                    {product.regularPrice - product.salePrice <= 0 && (
                      <p className='my-1 text-[17px] md:text-[20px] text-black text-center absolute md:relative bottom-10 md:bottom-0 left-12 md:left-0'>
                        <span className=''>TK.</span>{product.salePrice}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
              <div className='text-center shadow-lg absolute w-full bottom-0 md:relative '>
                <button onClick={() => dispatch(openProductModal(product))} className=" bg-[#1E201E] text-white w-full md:py-2 py-1">BUY NOW</button>
              </div>
            </div>
          ))}
        </Slider>
        <ProductModal />
      </div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rancho&display=swap');

        .font-pop {
          font-family: "Poppins", sans-serif;
        }
      `}</style>
    </div>
  )
}
