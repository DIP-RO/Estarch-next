'use client';

import SellingCategory from "@/components/sellingCategory/SellingCategory";
import HeaderBanner from "../components/headerBanner/page";
import ServiceMoto from "../components/serviceMoto/page";
import Subscription from "../components/subscription/page";
import NewArrival from "@/components/newArrival/NewArrival";
import FeatureProduct from "@/components/FeatureProducts/FeatureProduct";
import VideoGallery from "@/components/VideoGallery/page";
import ProductShowcase from "@/components/ProductShowcase/page";
import { useDispatch } from "react-redux";
import { setInitialState } from "@/lib/slices/cartSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "@/components/services/baseUrl";

export default function Home() {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);
  const [toggles, setToggles] = useState({
    webFeature: false,
    webArrival: false,
    webSellingCategory: false,
    webVideo: false,
    webProductShowCase: false,
    webNewsLetter: false,
    webBestDeal: false,
    mobileFeature: false,
    mobileArrival: false,
    mobileSellingCategory: false,
    mobileVideo: false,
    mobileProductShowCase: false,
    mobileNewsLetter: false,
    mobileBestDeal: false,
  });

  // Fetch toggle states from the backend
  useEffect(() => {
    const fetchToggleStates = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/toggle/toggleStates`);
        if (response.data && typeof response.data === 'object') {
          setToggles({
            webFeature: response.data.webFeature,
            webArrival: response.data.webArrival,
            webSellingCategory: response.data.webSellingCategory,
            webVideo: response.data.webVideo,
            webProductShowCase: response.data.webProductShowCase,
            webNewsLetter: response.data.webNewsLetter,
            webBestDeal: response.data.webBestDeal,
            mobileFeature: response.data.mobileFeature,
            mobileArrival: response.data.mobileArrival,
            mobileSellingCategory: response.data.mobileSellingCategory,
            mobileVideo: response.data.mobileVideo,
            mobileProductShowCase: response.data.mobileProductShowCase,
            mobileNewsLetter: response.data.mobileNewsLetter,
            mobileBestDeal: response.data.mobileBestDeal,
          });
        } else {
          console.error('Unexpected response data structure:', response.data);
        }
      } catch (error) {
        console.error('Error fetching toggle states:', error);
      }
    };

    fetchToggleStates();
  }, []);

  // Detect if the user is on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Assuming mobile is <= 768px
    };

    // Set the initial state
    handleResize();

    // Add event listener for window resizing
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  //     const totalQuantity = JSON.parse(localStorage.getItem('totalQuantity')) || 0;
  //     dispatch(setInitialState({ items: cartItems, totalQuantity }));
  //   }
  // }, [dispatch]);

  return (
    <main className="overflow-x-hidden min-h-screen">
      <HeaderBanner />
      <div className="hidden md:grid">
        <ServiceMoto />
      </div>
      
      {/* Conditionally render based on device type and toggle states */}
      {!isMobile ? (
        <>
          {toggles.webSellingCategory && <SellingCategory />}    
          {toggles.webArrival && <NewArrival />}                 
          {toggles.webVideo && <VideoGallery />}                
          {toggles.webProductShowCase && <ProductShowcase />}    
          {toggles.webFeature && <FeatureProduct />}            
          {toggles.webNewsLetter && <Subscription />}  
        </>
      ) : (
        <>
          {toggles.mobileSellingCategory && <SellingCategory />}    
          {toggles.mobileArrival && <NewArrival />}                 
          {toggles.mobileVideo && <VideoGallery />}                
          {toggles.mobileProductShowCase && <ProductShowcase />}    
          {toggles.mobileFeature && <FeatureProduct />}            
          {toggles.mobileNewsLetter && <Subscription />}  
        </>
      )}
    </main>
  );
}
