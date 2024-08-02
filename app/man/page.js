import Image from 'next/image'
import img from '../../public/images/banner1.jpeg'
import img1 from '../../public/images/c_t-shirt.jpeg'
import Link from 'next/link'
export default function Man() {
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

            <div className="grid grid-cols-3 justify-center items-center px-5 py-5 gap-5">
                <div className="relative w-[540px] h-96">
                    <Link href='/category/men'>
                    <Image
                        src={img1}
                        alt="SS 24"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                        />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
                        <h2 className="text-4xl font-bold">Polo</h2>
                        <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded">
                            Shop Now
                        </button>
                    </div>
                    </Link>
                    
                </div>
                <div className="relative w-[540px] h-96">
                    <Image
                        src={img1}
                        alt="SS 24"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
                        <h2 className="text-4xl font-bold">SS 24</h2>
                        <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded">
                            Panjabi
                        </button>
                    </div>
                </div>
                <div className="relative w-[540px] h-96">
                    <Image
                        src={img1}
                        alt="SS 24"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
                        <h2 className="text-4xl font-bold">SS 24</h2>
                        <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded">
                            Panjabi
                        </button>
                    </div>
                </div>
                <div className="relative w-[540px] h-96">
                    <Image
                        src={img1}
                        alt="SS 24"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
                        <h2 className="text-4xl font-bold">SS 24</h2>
                        <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded">
                            Panjabi
                        </button>
                    </div>
                </div>
                <div className="relative w-[540px] h-96">
                    <Image
                        src={img1}
                        alt="SS 24"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
                        <h2 className="text-4xl font-bold">SS 24</h2>
                        <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded">
                            Panjabi
                        </button>
                    </div>
                </div>
                <div className="relative w-[540px] h-96">
                    <Image
                        src={img1}
                        alt="SS 24"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
                        <h2 className="text-4xl font-bold">SS 24</h2>
                        <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded">
                            Panjabi
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative w-[1655px] h-80 mx-5">
                    <Image
                        src={img1}
                        alt="SS 24"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
                        <h2 className="text-4xl font-bold">SS 24</h2>
                        <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded">
                            Panjabi
                        </button>
                    </div>
            </div>
            <div className="grid grid-cols-3 justify-center items-center px-5 py-5 gap-5">
                <div className="relative w-[540px] h-96">
                    <Image
                        src={img1}
                        alt="SS 24"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
                        <h2 className="text-4xl font-bold">Polo</h2>
                        <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded">
                            Shop Now
                        </button>
                    </div>
                </div>
                <div className="relative w-[540px] h-96">
                    <Image
                        src={img1}
                        alt="SS 24"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
                        <h2 className="text-4xl font-bold">SS 24</h2>
                        <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded">
                            Panjabi
                        </button>
                    </div>
                </div>
                <div className="relative w-[540px] h-96">
                    <Image
                        src={img1}
                        alt="SS 24"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
                        <h2 className="text-4xl font-bold">SS 24</h2>
                        <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded">
                            Panjabi
                        </button>
                    </div>
                </div>
                <div className="relative w-[540px] h-96">
                    <Image
                        src={img1}
                        alt="SS 24"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
                        <h2 className="text-4xl font-bold">SS 24</h2>
                        <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded">
                            Panjabi
                        </button>
                    </div>
                </div>
                <div className="relative w-[540px] h-96">
                    <Image
                        src={img1}
                        alt="SS 24"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
                        <h2 className="text-4xl font-bold">SS 24</h2>
                        <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded">
                            Panjabi
                        </button>
                    </div>
                </div>
                <div className="relative w-[540px] h-96">
                    <Image
                        src={img1}
                        alt="SS 24"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
                        <h2 className="text-4xl font-bold">SS 24</h2>
                        <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded">
                            Panjabi
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}
