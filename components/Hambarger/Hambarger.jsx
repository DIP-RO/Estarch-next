'use client';

import React, { useEffect, useState } from 'react';
import { IoIosArrowDown, IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';  // Import Link from next/link for routing
import cupon from '../../public/images/banner2.jpeg';
import { closeSlide } from '@/lib/slices/sliderSlice';

function Hambarger() {
    const [categories, setCategories] = useState({});
    const [activeCategory, setActiveCategory] = useState(null); // Track which main category is active
    const isOpen = useSelector((state) => state.slide.isOpen);
    const dispatch = useDispatch();

    useEffect(() => {
        // Fetch categories with subcategories from the API
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/categories/categories');
                const groupedCategories = response.data.reduce((acc, category) => {
                    const typeName = category.type.name;

                    if (!acc[typeName]) {
                        acc[typeName] = [];
                    }

                    acc[typeName].push(category);
                    return acc;
                }, {});
                
                setCategories(groupedCategories);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryToggle = (typeName) => {
        setActiveCategory(activeCategory === typeName ? null : typeName);
    };

    return (
        <div className={`lg:hidden md:hidden`}>
            <div className={`bg-base-100 fixed top-0 left-0 w-80 min-h-screen z-[10] transition-right duration-500 ${isOpen ? 'right-0' : 'right-[-350px] hidden'}`}>
                <p className="cursor-pointer relative left-[80%] top-3 text-2xl">
                    <IoMdClose onClick={() => dispatch(closeSlide())} />
                </p>
                <div className="my-6">
                    <hr />
                </div>

                <Image
                    src={cupon}
                    alt="Discount"
                    height={20}
                    width={600}
                    className="mx-auto"
                />

                <ul className="px-4 text-[#3d3d3d] space-y-4 text-[18px] mt-2">
                    {Object.keys(categories).map((typeName) => (
                        <React.Fragment key={typeName}>
                            {/* Main Category */}
                            <li
                                onClick={() => handleCategoryToggle(typeName)}
                                className="flex items-center justify-between uppercase font-semibold cursor-pointer"
                            >
                                {typeName}
                                <span><IoIosArrowDown /></span>
                            </li>

                            {/* Subcategories */}
                            <ul
                                className={`ml-3 space-y-5 text-[18px] transition-opacity ease-in-out duration-300 ${
                                    activeCategory === typeName ? 'grid' : 'hidden'
                                }`}
                            >
                                {categories[typeName].map((category) => (
                                    <li key={category._id}>
                                        <Link href={`/${typeName.toLowerCase()}/${category._id}`}>
                                            {category.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Hambarger;
