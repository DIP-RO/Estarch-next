'use client'

import SellingCategory from "@/components/sellingCategory/SellingCategory";
import HeaderBanner from "../components/headerBanner/page";
import ServiceMoto from "../components/serviceMoto/page";
import Subscription from "../components/subscription/page";
import NewArrival from "@/components/newArrival/NewArrival";
import FeatureProduct from "@/components/FeatureProducts/FeatureProduct";
import { useDispatch } from "react-redux";
import { setInitialState } from "@/lib/slices/cartSlice";
import { useEffect } from "react";



export default function Home() {
  const dispatch = useDispatch();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            const totalQuantity = JSON.parse(localStorage.getItem('totalQuantity')) || 0;
            dispatch(setInitialState({ items: cartItems, totalQuantity }));
        }
    }, [dispatch]);
  return (
    <main className="overflow-x-hidden">
      <HeaderBanner />
      <ServiceMoto />
      <SellingCategory/>
      <NewArrival/>
      <FeatureProduct />
      <Subscription />    
    </main>
  );
}
