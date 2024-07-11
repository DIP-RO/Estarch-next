'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Autoplay } from 'swiper/modules';
import Image from 'next/image';

import './styles.css'
import shirt from '../../public/images/c_shirt.jpeg'
import t_shirt from '../../public/images/c_t-shirt.jpeg'
import panjabi from '../../public/images/c_panjabi.jpeg'
import pajama from '../../public/images/c_pajama.jpeg'
import polo from '../../public/images/c_polo.jpeg'
import boxer from '../../public/images/c_boxer.jpeg'

const SellingCategory = () => {

    return (
        <div className='mx-6 md:mx-12 lg:mx-20'>
            <h1 className='text-center mt-12 font-bold md:text-2xl text-xl pb-5'>BROWSE OUR CATEGORY</h1>
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
                <SwiperSlide>
                    <div className='relative'>
                        <Image className='rounded-md' width={500} src={shirt} alt="" />
                        <p className='cursor-pointer rounded-lg font-medium md:font-semibold text-xs md:text-sm py-1 bg-base-200 px-2 lg:px-8 absolute bottom-1 md:bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>SHIRT</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <Image className='rounded-md' width={500} src={t_shirt} alt="" />
                        <p className='cursor-pointer rounded-lg font-medium md:font-semibold text-xs md:text-sm py-1 bg-base-200 px-2 lg:px-8 absolute bottom-1 md:bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>T-SHIRT</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <Image className='rounded-md' width={500} src={panjabi} alt="" />
                        <p className='cursor-pointer rounded-lg font-medium md:font-semibold text-xs md:text-sm py-1 bg-base-200 px-2 lg:px-8 absolute bottom-1 md:bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>PANJABI</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <Image className='rounded-md' width={500} src={pajama} alt="" />
                        <p className='cursor-pointer rounded-lg font-medium md:font-semibold text-xs md:text-sm py-1 bg-base-200 px-2 lg:px-8 absolute bottom-1 md:bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>PAJAMA</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <Image className='rounded-md' width={500} src={polo} alt="" />
                        <p className='cursor-pointer rounded-lg font-medium md:font-semibold text-xs md:text-sm py-1 bg-base-200 px-2 lg:px-8 absolute bottom-1 md:bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>POLO</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <Image className='rounded-md' width={500} src={boxer} alt="" />
                        <p className='cursor-pointer rounded-lg font-medium md:font-semibold text-xs md:text-sm py-1 bg-base-200 px-2 lg:px-8 absolute bottom-1 md:bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>BOXER</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SellingCategory;