'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Autoplay } from 'swiper/modules';
import Image from 'next/image';

import './styles.css';
import axios from 'axios';
import Link from 'next/link';
import baseUrl from '../services/baseUrl';

const SellingCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`${baseUrl}/api/categories/categories`)
            .then(res => {
                setCategories(res.data);
            });
    }, []);
    return (
        <div className='mx-0 md:mx-12 lg:mx-20'>
            <h1 className='text-center mt-4 md:mt-8 lg:mt-8 font-bold md:text-2xl text-xl pb-5'>BROWSE OUR CATEGORY</h1>
            <Swiper
                slidesPerView={4}
                navigation={true}
                spaceBetween={30}
                freeMode={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[FreeMode, Navigation, Autoplay]}
                className="mySwiper"
            >
                {categories.map(cat => (
                    <SwiperSlide key={cat._id}>
                        <Link href={`${cat.type.name}/${cat._id}`}>
                            <div className='relative'>
                                <Image className='rounded-md' width={500} height={0} src={cat.image} alt="" />
                                <p className='cursor-pointer rounded-lg font-medium md:font-semibold text-xs md:text-sm py-1 bg-base-200 px-2 lg:px-8 absolute bottom-1 md:bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'>{cat.name}</p>
                                <div className="absolute top-0 bg-[#1111112f] z-10 w-full min-h-full">
                                    {/* This div is use for a overlay on background image */}
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SellingCategory;
