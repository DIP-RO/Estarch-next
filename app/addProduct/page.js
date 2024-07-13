
import Editor from '@/components/draftEditor/page'
import React from 'react'
export default function Add_Product() {


    return (
        <div className="p-6 bg-base-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
            <div className="bg-neutral-focus p-4 rounded-lg mx-72">
                <form className="space-y-4 border shadow-xl h-[500px]">
                    <h1 className='bg-sky-950 text-white font-semibold text-2xl py-5 '><span className='mx-5'>Product Information</span></h1>
                    <div className='flex justify-center items-center'>
                        <label className="w-80 text-sm font-medium text-gray-700" htmlFor="productName">Product Name<span className="text-red-500">*</span></label>
                        <input type="text" id="productName" className="input input-bordered w-[600px]" required />
                    </div>
                    <div className='flex justify-center items-center'>
                        <label className=" w-80 text-sm font-medium text-gray-700" htmlFor="category">Category</label>
                        <select id="category" className="select select-bordered w-[600px]">
                            <option>Select a category</option>
                            <option>Category 1</option>
                            <option>Category 2</option>
                            <option>Category 3</option>
                        </select>
                    </div>
                    <div className='flex justify-center items-center'>
                        <label className="w-80 text-sm font-medium text-gray-700" htmlFor="brand">Brand</label>
                        <select id="brand" className="select select-bordered w-[600px]">
                            <option>Select a brand</option>
                            <option>Brand 1</option>
                            <option>Brand 2</option>
                            <option>Brand 3</option>
                        </select>
                    </div>
                    <div className='flex justify-center items-center'>
                        <label className="w-80 text-sm font-medium text-gray-700" htmlFor="sticker">Sticker</label>
                        <select id="sticker" className="select select-bordered w-[600px]">
                            <option>Select a sticker</option>
                            <option>Sticker 1</option>
                            <option>Sticker 2</option>
                            <option>Sticker 3</option>
                        </select>
                    </div>
                    <div className='flex justify-center items-center'>
                        <label className="w-80 text-sm font-medium text-gray-700" htmlFor="unit">Unit</label>
                        <input type="text" id="unit" placeholder="Unit (kg, pc, etc)" className="input input-bordered w-[600px]" />
                    </div>
                    <div className='flex items-center justify-center '>
                        <label className="w-80 text-sm font-medium text-gray-700">Product Type</label>
                        <div className="flex space-x-4 w-[600px]">
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="productType" value="Stock" className="radio radio-primary" />
                                <span>Stock</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="productType" value="Pre-order" className="radio radio-primary" />
                                <span>Pre-order</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="productType" value="none" className="radio radio-primary" defaultChecked />
                                <span>None</span>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
            <div className="bg-neutral-focus p-4 rounded-lg mx-72">
                <form className="space-y-4 border shadow-xl h-[320px]">
                    <div className="flex justify-between items-center mb-4 bg-sky-950 text-white text-2xl py-5 px-4">
                        <h2 className="text-2xl font-semibold">Media</h2>
                    </div>
                    <div className="flex justify-center items-center">
                        <label className="w-80 text-sm font-medium text-gray-700" htmlFor="productImage">Product Image</label>
                        <div className="w-[600px]">
                            <label htmlFor="productImage" className="flex justify-center items-center border border-dashed border-gray-300 p-10 cursor-pointer">
                                <span className="text-gray-400">+</span>
                            </label>
                            <input type="file" id="productImage" className="hidden" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center ">
                        <label className="w-80 text-sm font-medium text-gray-700" htmlFor="videoUrl">Video URL</label>
                        <input type="text" id="videoUrl" className="input input-bordered w-[600px]" placeholder="Video URL" />
                    </div>
                </form>
            </div>
            <div className="bg-neutral-focus p-4 rounded-lg mx-72">
                <form className="space-y-4 border shadow-xl h-[350px]">
                    <div className="flex justify-between items-center mb-4 bg-sky-950 text-white text-2xl py-5 px-4">
                        <h2 className="text-2xl font-semibold">No Variants</h2>
                        <input type="checkbox" className="toggle toggle-primary" />
                    </div>
                    <div className="flex justify-center items-center">
                        <label className="w-80 text-sm font-medium text-gray-700" htmlFor="stockAlert">Stock Alert</label>
                        <input type="text" id="stockAlert" className="input input-bordered w-[600px]" placeholder="stock alert number" />
                    </div>
                    <div className="flex justify-center items-center">
                        <label className="w-80 text-sm font-medium text-gray-700" htmlFor="regularPrice">Regular Price<span className="text-red-500">*</span></label>
                        <input type="text" id="regularPrice" className="input input-bordered w-[600px]" placeholder="regular Price" required />
                    </div>
                    <div className="flex justify-center items-center">
                        <label className="w-80 text-sm font-medium text-gray-700" htmlFor="discountType">Discount</label>
                        <div className="flex space-x-4 w-[600px]">
                            <select id="discountType" className="select select-bordered w-full">
                                <option>Flat</option>
                                <option>Percentage</option>
                            </select>
                            <input type="text" id="discountAmount" className="input input-bordered w-full" placeholder="Discount Amount" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center ">
                        <label className="w-80 text-sm font-medium text-gray-700" htmlFor="salePrice">Sale Price<span className="text-red-500">*</span></label>
                        <input type="text" id="salePrice" className="input input-bordered w-[600px]" placeholder="Sale Price" required />
                    </div>
                </form>
            </div>

            <div className="bg-neutral-focus p-4 rounded-lg mx-72">
                <form className="space-y-4 border shadow-xl h-[320px]">
                    <div className="flex justify-between items-center mb-4 bg-sky-950 text-white text-2xl py-5 px-4">
                        <h2 className="text-2xl font-semibold">Chart</h2>
                    </div>
                    <div className="flex justify-center items-center">
                        <label className="w-80 text-sm font-medium text-gray-700" htmlFor="chartTitle">Chart Title</label>
                        <input type="text" id="chartTitle" className="input input-bordered w-[600px]" placeholder="Enter title" />
                    </div>
                    <hr />
                    <div className="flex px-5 space-x-4">
                        <button className="btn btn-error btn-sm">- row</button>
                        <button className="btn btn-success btn-sm">+ row</button>
                        <button className="btn btn-error btn-sm">- column</button>
                        <button className="btn btn-success btn-sm">+ column</button>
                    </div>
                    <p className="mx-5">1 rows, 1 columns</p>
                    <div className="mx-5">

                        <input type="text" id="rowTitle" className="input input-bordered w-[150px]" placeholder="Title" />
                    </div>
                </form>
            </div>


            <div className="bg-neutral-focus p-4 rounded-lg mx-72">
                <div className="border shadow-xl">
                    <div className="bg-sky-950 text-white text-2xl py-5 px-4">
                        <h2 className="text-2xl font-semibold">Description</h2>
                    </div>
                    <div>
                        <Editor />
                    </div>
                </div>
            </div>
            <div className="bg-neutral-focus p-4 rounded-lg mx-72">
                <div className="border shadow-xl">
                    <div className="bg-sky-950 text-white text-2xl py-5 px-4">
                        <h2 className="text-2xl font-semibold">Guide Line</h2>
                    </div>
                    <div>
                        <Editor />
                    </div>
                </div>
            </div>
            <div className="bg-neutral-focus p-4 rounded-lg mx-72">
                <div className="border shadow-xl">
                    <div className="bg-sky-950 text-white text-2xl py-5 px-4">
                        <h2 className="text-2xl font-semibold">Others</h2>
                    </div>
                    <div className="p-4 space-y-4">
                        <div className="flex items-center">
                            <input type="checkbox" className="toggle toggle-primary" />
                            <label className="ml-3 text-sm font-medium text-gray-700">Free Delivery (Disable)</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="toggle toggle-primary" />
                            <label className="ml-3 text-sm font-medium text-gray-700">Feature Product (Disable)</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="toggle toggle-primary" checked />
                            <label className="ml-3 text-sm font-medium text-gray-700">Product Status (Enable)</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="toggle toggle-primary" />
                            <label className="ml-3 text-sm font-medium text-gray-700">Pos Suggestion (Disable)</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
