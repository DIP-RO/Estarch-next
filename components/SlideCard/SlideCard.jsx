'use client'
import { IoMdClose } from "react-icons/io";
import { HiOutlineMinus } from "react-icons/hi";
import { BsPlusLg } from "react-icons/bs";
import { SlHandbag } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { closeCardSlide } from "@/lib/slices/cardSlideSlice";

import Image from "next/image";
import Link from "next/link";

const SlideCard = () => {
    const isOpen = useSelector((state) => state.cardSlide.isOpen);
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleSlideCard = () => {
        dispatch(closeCardSlide());
        document.body.style.overflow = isOpen ? "auto" : "hidden";
    };

    const handleDecrease = (index) => {
        dispatch(decreaseQuantity(index));
    };

    const handleIncrease = (index) => {
        dispatch(increaseQuantity(index));
    };

    const handleRemoveItem = (index) => {
        dispatch(removeItem(index));
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
    };

    return (
        <div className={`w-[80%] md:w-[30%] bg-base-100 shadow-2xl h-full z-[999] p-6 fixed top-0 ${isOpen ? "right-0 transition-all duration-500" : "hidden right-[-620px] transition-all duration-500"}`}>
            <p onClick={handleSlideCard} className="absolute right-5 text-2xl cursor-pointer">
                <IoMdClose />
            </p>
            {
                cartItems.length > 0 ? (
                    <div>
                        <h1 className="font-bold text-3xl mb-6">Shopping bag({cartItems.length})</h1>
                        <div className="h-[70%] overflow-y-auto">
                            {cartItems.map((item, index) => (
                                <div key={index} className="grid grid-cols-5 md:grid-cols-4 gap-6 relative py-5">
                                    <div>
                                        {item.product.colors[0].images[0].url && (
                                            <Image width={120} height={120} src={item.product.colors[0].images[0].url} alt={item.product.title} />
                                        )}
                                    </div>
                                    <div className="col-span-2">
                                        <h1 className="text-xl font-semibold">{item.product.title}</h1>
                                        {item.color && (
                                            <p>Colour: {item.color}</p>
                                        )}
                                        {item.size && (
                                            <p>Size (UK): {item.size}</p>
                                        )}
                                        <p>{item.product.stock.quantity} in stock</p>
                                        <div className="flex border w-20 my-5 py-2 px-2 rounded-md">
                                            <button className="flex-1" onClick={() => handleDecrease(index)}>
                                                <HiOutlineMinus />
                                            </button>
                                            <input
                                                type="text"
                                                value={item.quantity}
                                                className="text-center w-full"
                                                readOnly
                                            />
                                            <button className="flex-1" onClick={() => handleIncrease(index)}>
                                                <BsPlusLg />
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <h1>{item.product.price} AED</h1>
                                        <p className="cursor-pointer" onClick={() => handleRemoveItem(index)}>Remove</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="grid gap-4 ">
                            <div className="flex justify-between items-center">
                                <h1 className="font-bold text-xl">Subtotal:</h1>
                                <h1 className="font-bold text-xl">{calculateSubtotal()} AED</h1>
                            </div>
                            <p>
                                Tax included{" "}
                                <span className="text-[#5b9bbe]">
                                    <a href="">Shipping</a>
                                </span>{" "}
                                calculated at checkout.
                            </p>
                            <a href="payment/information">
                                <button className="btn bg-black text-white w-full hover:bg-black">CHECK OUT</button>
                            </a>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col justify-center items-center mt-32 space-y-3 text-xl font-semibold">
                        <SlHandbag className="text-3xl font-bold " />
                        <h1>YOUR BAG IS EMPTY</h1>
                       <Link href='/'> <button className="bg-slate-800 text-xs text-white p-3 rounded-md">START SHOPPING</button></Link>
                    </div>
                )
            }
        </div>
    );
};

export default SlideCard;
