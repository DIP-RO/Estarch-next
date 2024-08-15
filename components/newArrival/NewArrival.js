import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../bestSell/BestSell-theme.css';
import Image from 'next/image';
import axios from 'axios';
import baseUrl from '../services/baseUrl';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { openProductModal } from '@/lib/slices/productModalSlice';
import ProductModal from '../ProductModal/page';

export default function NewArrival() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`${baseUrl}/api/products/new-arrival`)
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.error('Error fetching new arrivals:', err);
      });
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2200,
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
          initialSlide: 2,
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
        <h1 className='text-center mt-12 font-bold md:text-2xl text-xl'>NEW ARRIVAL PRODUCTS</h1>
        <div className='text-center mb-4'>
          <Link className='text-xl font-normal text-orange-500' href={'/new-arrival'}>View All</Link>
        </div>
        <Slider {...settings}>
          {products.map(product => (
            <div key={product._id} className="card bg-base-100 w-96 shadow-md rounded-none">
              <Link href={`/product/${product._id}`}>
                <div>
                  <figure className='relative'>
                    <Image src={product.images[0]} width={500} height={0} alt={product.productName} />
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
                </div>
              </Link>
              <div className='text-center'>
                <button onClick={()=>dispatch(openProductModal(product))} className=" bg-black text-white w-full py-2">BUY NOW</button>
              </div>
            </div>

          ))}
        </Slider>
      </div>
      <ProductModal/>
    </div>
  );
}
