"use client";
import Image from 'next/image'
import menBanner from '../../public/images/banner1.jpeg'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'next/navigation';
import baseUrl from '@/components/services/baseUrl';
export default function Man() {

    const [categories, setCategories] = useState([])
    const { category } = useParams();


    useEffect(() => {
        axios.get(`${baseUrl}/api/categories/categories/${category}`)
            .then(res => {
                setCategories(res.data)
            })
    }, [category])
console.log(categories);

    return (
        <div className="bg-white ">
            <div className="relative flex justify-center items-center h-[150px] lg:h-[500px] md:h-[500px] mt-5 bg-gray-100">
                <div className="relative w-full h-[150px] lg:h-[500px] md:h-[500px]">
                    <Image
                        src={menBanner}
                        alt="Main image"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-80"
                    />
                </div>

                {console.log("main")}

                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
                    <div className="absolute text-center">
                        <h1 className="text-3xl lg:text-5xl md:text-5xl font-bold text-white uppercase ">{category}</h1>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3  grid-cols-2 justify-center items-center px-2 py-2 lg:py-5 lg:px-5  gap-5">
                {
                    categories.map(cat => <div key={cat._id} className="relative">
                        <Link href={`/${category}/${cat._id}`}>
                            <Image
                                width={500}
                                height={0}
                                src={cat.image}
                                alt={cat.name}
                                // layout="fill"
                                // objectFit="cover"
                                className="rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
                                <h2 className="bg-[#0000005e] lg:text-lg rounded-md  text-[8px] border-2 py-1 px-2">{cat.name}</h2>
                              
                            </div>

                        </Link>

                    </div>)
                }

            </div>


        </div>

    )
}
