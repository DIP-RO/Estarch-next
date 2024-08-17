'use client';  // Ensure it's a client component

import React, { useEffect, useState } from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import baseUrl from '../services/baseUrl';  // Adjust this path based on your project structure
import './styles.css';  // Ensure you have the correct styles for Swiper
import Link from 'next/link';
import { PropagateLoader } from 'react-spinners';

export default function HeaderBanner() {
  const [carousels, setCarousels] = useState([]);

  useEffect(() => {
    const fetchCarousels = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/carosul`);
        const data = await response.json();
        setCarousels(data);
      } catch (error) {
        console.error('Error fetching carousels:', error);
      }
    };

    fetchCarousels();
  }, []);  // Empty dependency array to fetch once on mount

  return (
    <div className="max-h-[600px] mt-4 lg:mt-8 md:mt-4">
      <div className="relative">
        <Swiper
          pagination={{
            clickable: true,
          }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {carousels.length > 0 ? (
            carousels.map((carousel, index) => (
              <SwiperSlide key={index} className="w-full">
                <Link href={carousel.link}>
                <Image
                  className="overflow-hidden md:max-h-[600px]"
                  src={`${baseUrl}/${carousel.images[0]}`}
                  alt={carousel.name}
                  width={1200}
                  height={600}
                  layout="responsive"
                  objectFit="cover"
                />
                </Link>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide className="w-full">
              <p className='flex justify-center'><PropagateLoader color="#060101" /></p>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
}
