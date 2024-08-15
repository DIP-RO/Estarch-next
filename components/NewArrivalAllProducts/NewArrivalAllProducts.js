"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiFilter } from "react-icons/ci";
import { useParams } from "next/navigation";
import baseUrl from "@/components/services/baseUrl";
import axios from "axios";
import { FaCircleArrowDown } from "react-icons/fa6";

const NewArrivalAllProducts = () => {
    const [selectedRanges, setSelectedRanges] = useState([]);
    const [products, setProducts] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [selectedSubcategories, setSelectedSubcategories] = useState([]);
    const [uniqueSizes, setUniqueSizes] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [sortBy, setSortBy] = useState('Sort by Latest');
    const [index, setIndex] = useState(20)

    const allRanges = [
        { min: 100, max: 300 },
        { min: 301, max: 500 },
        { min: 501, max: 1000 },
        { min: 1001, max: 2500 },
        { min: 2501, max: 5000 },
        { min: 5001, max: 10000 },
    ];

    // Fetch products from the backend
    useEffect(() => {
        const fetchProducts = async () => {
            let url = `${baseUrl}/api/products/new-all-products`;

            // Add ranges to the query string if there are selected ranges
            if (selectedRanges.length > 0) {
                const rangesQuery = JSON.stringify(selectedRanges);
                url += `?ranges=${encodeURIComponent(rangesQuery)}`;
            }

            // Add subcategories to the query string if there are selected subcategories
            if (selectedSubcategories.length > 0) {
                const subcategoriesQuery = JSON.stringify(selectedSubcategories);
                const delimiter = url.includes('?') ? '&' : '?';
                url += `${delimiter}subcategories=${encodeURIComponent(subcategoriesQuery)}`;
            }

            // Add sizes to the query string if there are selected sizes
            if (selectedSizes.length > 0) {
                const sizesQuery = JSON.stringify(selectedSizes);
                const delimiter = url.includes('?') ? '&' : '?';
                url += `${delimiter}sizes=${encodeURIComponent(sizesQuery)}`;
            }
            const delimiter = url.includes('?') ? '&' : '?';
            url += `${delimiter}sortBy=${encodeURIComponent(sortBy)}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setProducts(data);
                extractUniqueSizes(data); // Extract unique sizes from products
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        const fetchSubcategories = async () => {
            try {
                const response = await axios.get(`${baseUrl}/api/categories/subcategories`);
                setSubcategories(response.data);
            } catch (error) {
                console.error("Error fetching subcategories:", error);
            }
        };

        fetchSubcategories();
        fetchProducts();
    }, [selectedRanges, selectedSubcategories, selectedSizes, baseUrl, sortBy]);

    // Sort
    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const handleCheckboxChangeCat = (subcategory) => {
        setSelectedSubcategories((prevSubcategories) =>
            prevSubcategories.includes(subcategory)
                ? prevSubcategories.filter((c) => c !== subcategory) // Uncheck if already selected
                : [...prevSubcategories, subcategory] // Check if not selected
        );
    };


    // Handle checkbox changes for sizes
    const handleCheckboxChangeSize = (size) => {
        setSelectedSizes(prevSizes =>
            prevSizes.includes(size)
                ? prevSizes.filter(s => s !== size) // Uncheck if already selected
                : [...prevSizes, size] // Check if not selected
        );
    };

    // Handle checkbox changes for price ranges
    const handleCheckboxChange = (range) => {
        setSelectedRanges((prevSelected) => {
            const isSelected = prevSelected.some(
                (selectedRange) => selectedRange.min === range.min && selectedRange.max === range.max
            );

            if (isSelected) {
                return prevSelected.filter(
                    (selectedRange) => !(selectedRange.min === range.min && selectedRange.max === range.max)
                );
            } else {
                return [...prevSelected, range];
            }
        });
    };


    const extractUniqueSizes = (products) => {
        const sizes = new Set();
        products.forEach(product => {
            if (product.selectedSizes) {
                product.selectedSizes.forEach(size => sizes.add(size));
            }
        });
        setUniqueSizes(Array.from(sizes));
    };


    return (
        <div className="mx-4 lg:mx-12 mt-5 mb-8">
            {/* Upper part */}
            <div className="flex justify-between items-center mb-4">
                <div className="breadcrumbs text-sm">
                    <ul>
                        <li>
                            <Link className="uppercase" href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link href={`/new-arrival`} className="uppercase font-bold">New arrival</Link>
                        </li>
                    </ul>
                </div>
                <label className="form-control w-full max-w-[30%] md:max-w-[10%] flex">
                    <select className="select select-bordered select-sm" value={sortBy} onChange={handleSortChange}>
                        <option disabled>Sort By</option>
                        <option>Price High to Low</option>
                        <option>Price Low to High</option>
                        <option>Sort by Latest</option>
                    </select>
                </label>
            </div>
            {/* filter button */}
            <label
                htmlFor="my-drawer-2"
                className="btn btn-sm drawer-button lg:hidden mb-4"
            >
                <span>
                    <p>
                        <CiFilter />
                    </p>
                </span>{" "}
                Filter
            </label>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-start justify-start">
                    {/* Products */}
                    <div className="col-span-10 gap-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                        {products.slice(0, index).map((product) => (
                            <div
                                key={product._id}
                                className="card card-compact bg-base-200 shadow-lg rounded-none h-[350px] md:h-[500px] relative"
                            >
                                <figure>
                                    <Image src={product.images[0]} alt={product.productName} width={500}
                                        height={700} />
                                </figure>
                                <div className="pt-1 lg:px-6 px-2">
                                    <h2 className="md:text-[18px] text-[14px] font-bold text-center">
                                        {product.productName.length > 25
                                            ? `${product.productName.slice(0, 25)}...`
                                            : product.productName
                                        }</h2>
                                    <div className='text-center'>
                                        <div className="absolute bottom-10 md:bottom-10 left-6 md:left-16">
                                            <p className={`bg-black text-white text-sm md:text-[16px] mt-2 w-full mx-auto  px-2 ${product.regularPrice - product.salePrice > 0 ? 'visible' : 'invisible'}`}>
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
                                            <p className='my-1 text-[17px] md:text-[20px] text-black text-center absolute bottom-10 md:bottom-10 left-12 md:left-24'>
                                                <span className=''>TK.</span>{product.salePrice}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className='text-center shadow-lg absolute w-full bottom-0'>
                                    <Link href={`/product/${product._id}`}>
                                        <button className=" bg-black text-white w-full md:py-2 py-1">BUY NOW</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                        <div className="place-self-center md:col-span-4 col-span-2 ">
                            <button onClick={() => setIndex(index + 20)} className={`btn flex items-center gap-1 btn-sm btn-primary text-white ${products.length <= index ? "hidden" : 'grid'}`}>
                                SEE MORE
                            </button>
                        </div>
                    </div>
                </div>

                <div className="drawer-side h-full lg:h-screen z-20">
                    <label
                        htmlFor="my-drawer-2"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu lg:bg-white bg-base-200 min-h-full text-base-content lg:h-full w-60 p-4 sticky">
                        {/* Filter */}
                        <div className="mr-8">
                            <h1 className="text-xl">FILTER BY</h1>
                            <hr className="border-2 border-orange-300 max-w-[45%]" />

                            {/* PRICE */}
                            <div>
                                <h1 className='mt-4 text-gray-400'>PRICE</h1>
                                <hr className='border-2' />
                                <hr className='border-2 border-orange-300 max-w-[25%] mt-[-3px]' />
                                <div className='mt-2'>
                                    {allRanges.map((range, index) => (
                                        <div key={index} className="form-control">
                                            <label className="label cursor-pointer flex justify-start gap-4">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-sm"
                                                    checked={selectedRanges.some(
                                                        (selectedRange) => selectedRange.min === range.min && selectedRange.max === range.max
                                                    )}
                                                    onChange={() => handleCheckboxChange(range)}
                                                />
                                                <span className="label-text">
                                                    {range.min.toLocaleString()} TO {range.max.toLocaleString()}
                                                </span>
                                            </label>
                                        </div>
                                    ))}
                                </div>

                            </div>

                            {/* SIZE */}
                            <div>
                                <h1 className="mt-4 text-gray-400">Sizes</h1>
                                <hr className="border-2" />
                                <hr className="border-2 border-orange-300 max-w-[25%] mt-[-3px]" />
                                <div className='mt-2'>
                                    {uniqueSizes.map((size, index) => (
                                        <div key={index} className="form-control">
                                            <label className="label cursor-pointer flex justify-start gap-4">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-sm"
                                                    checked={selectedSizes.includes(size)}
                                                    onChange={() => handleCheckboxChangeSize(size)}
                                                />
                                                <span className="label-text">
                                                    {size}
                                                </span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Sub-Category */}
                            <div>
                                <h1 className="mt-4 text-gray-400">Sub-Category</h1>
                                <hr className="border-2" />
                                <hr className="border-2 border-orange-300 max-w-[60%] mt-[-3px]" />
                                <div className='mt-2'>
                                    {subcategories.map((subcategory, index) => (
                                        <div key={index} className="form-control">
                                            <label className="label cursor-pointer flex justify-start gap-4">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-sm"
                                                    checked={selectedSubcategories.includes(subcategory.name)}
                                                    onChange={() => handleCheckboxChangeCat(subcategory.name)}
                                                />
                                                <span className="label-text">
                                                    {subcategory.name}
                                                </span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NewArrivalAllProducts;
