"use client";
import Image from 'next/image'
import img from '../../public/images/banner1.jpeg'
import img1 from '../../public/images/c_t-shirt.jpeg'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'next/navigation';
export default function Man() {

    const [categories, setCategories] = useState([])
    const { category } = useParams();

    console.log(category);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/categories/categories/${category}`)
            .then(res => {
                setCategories(res.data)
                // console.log(res.data);
            })
    }, [])

    return (
        <div className="bg-white">
            <div className="relative flex justify-center items-center h-[500px] mt-5 bg-gray-100">
                <Image
                    src={img}
                    alt="Main image"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-80"
                />
                <div className="absolute text-center">
                    <h1 className="text-5xl font-bold text-gray-900">Your Main Text</h1>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 sm:grid-cols-1 justify-center items-center px-5 py-5 gap-5">
                {
                    categories.map(cat => <div key={cat._id} className="relative w-[470px] h-96">
                        <Link href={`/${category}/${cat._id}`}>
                            <Image
                                src={cat.image}
                                alt={cat.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
                                <h2 className="text-4xl font-bold">{cat.name}</h2>
                                <button className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded">
                                    Shop Now
                                </button>
                            </div>
                        </Link>

                    </div>)
                }

            </div>


        </div>

    )
}
