'use client'
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/slices/cartSlice";
import { openSize } from "@/lib/slices/sizeSlice";
import { FaWhatsapp } from "react-icons/fa";
import { PiCoatHanger } from 'react-icons/pi';
import baseUrl from "@/components/services/baseUrl";

import { openCardSlide } from "@/lib/slices/cardSlideSlice";
import SizeChart from "@/components/sizes/page";
import ProductCard from "@/components/productLike/page";
import RelatedProductsSinglePage from "@/components/RelatedProducts/page";


const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/products/products/product/${id}`);
        console.log(response.data);

        setProduct(response.data);
        setMainImage(response.data.images[0]);
        if (response.data.selectedSizes.length > 0) {
          setSelectedSize(response.data.selectedSizes[0]);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product._id,
      product: {
        title: product.productName,
        price: product.salePrice,
        colors: [{ images: [{ url: mainImage }] }],
        stock: { quantity: 10 }, // Adjust based on actual product details
      },
      quantity,
      color: 'Blue', // Add actual color if available
      size: selectedSize,
    }));
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleThumbnailClick = (imgSrc) => {
    setMainImage(imgSrc);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="flex flex-col md:flex-row w-full md:w-2/3 border rounded-lg p-4">
          <div className="w-full md:w-1/2">
            <Image
              width={500}
              height={500}
              src={mainImage}
              alt={product.productName}
              className="object-cover"
            />
            <div className="flex mt-2 gap-2">
              {product.images && product.images.map((img, index) => (
                <Image
                  key={index}
                  width={120}
                  height={120}
                  src={img}
                  alt={product.productName}
                  className="object-cover cursor-pointer"
                  onClick={() => handleThumbnailClick(img)}
                />
              ))}
            </div>

          </div>
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-2xl font-bold">{product.productName}</h1>
            <p className="text-sm text-gray-600 ">SKU: {product.sku}</p>
            <p className="text-red-600 text-xl ">
              <span className="line-through text-gray-500 mr-2">৳ {product.regularPrice}</span>
              ৳ {product.salePrice}
            </p>
            <div className="flex gap-1 items-center">
              <p className="text-lg">Jeans Size</p>
              <div className='w-48 h-[40px] rounded-md flex justify-between '>
                <p className="flex gap-2 items-center" onClick={() => dispatch(openSize())}>
                  (<PiCoatHanger /> Size guide )
                </p>
              </div>
            </div>

            <div className="flex mb-4">
              {product.selectedSizes && product.selectedSizes.map(size => (
                <button
                  key={size}
                  className={`border px-4  mr-2 ${selectedSize === size ? 'bg-gray-300' : ''}`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="flex flex-row gap-2  items-center">
              <p className="text-lg mb-2">Quantity:</p>
              <div className="flex items-center ">
                <button
                  className="border px-4 py-1"
                  onClick={decrementQuantity}
                >
                  -
                </button>
                <p className="mx-4">{quantity}</p>
                <button
                  className="border px-4 py-1"
                  onClick={incrementQuantity}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 mt-5 mb-4">
  <div onClick={handleAddToCart} className="flex-1 sm:flex-initial">
    <button
      className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2"
      onClick={() => { dispatch(openCardSlide()) }}
    >
      Add to cart
    </button>
  </div>

  <Link href={`/product/order/${id}/${selectedSize}`} className="flex-1 sm:flex-initial">
    <button className="w-full sm:w-auto bg-black text-white px-4 py-2">
      Order now
    </button>
  </Link>

  <div className="flex-1 sm:flex-initial">
    <button
      className="w-full sm:w-auto flex justify-center items-center text-white px-4 py-2"
      style={{ backgroundColor: 'rgb(30, 170, 72)' }}
    >
      <span className="mr-2"><FaWhatsapp size={25} /></span> Whatsapp
    </button>
  </div>
</div>

            <div className="divider"></div>
            <p className="font-light text-xs">
              Fabrilife Men's Premium Quality t-shirt offers a much smoother, silky feel and more structured, mid-weight fit than regular t-shirts. The t-shirts are made with the finest quality Combed Compact Cotton, which features astonishing ~175 GSM on just 26's cotton, giving a smooth and compact construction.
              The compact finish guarantees that the t-shirt length and width will not change over wash or months of usage.
            </p>
            <div className="divider"></div>
            <div>
              <SizeChart />
            </div>
          </div>
        </div>
        <div className="border-t pt-4 bg-gray-200 rounded-lg mt-4 md:mt-0 md:ml-4">
          <div className="mx-8">
            <h2 className="text-lg font-bold mb-2">Delivery Charge</h2>
            <p className="text-sm mb-2">
              <span className="mr-2">🚚</span>Dhaka City: 60 TK (2-3 Days)
            </p>
            <p className="text-sm mb-2">
              <span className="mr-2">🚚</span>Outside Dhaka: 120 TK (3-5 Days)
            </p>
            <h2 className="text-lg font-bold mt-4 mb-2">Payment</h2>
            <p className="text-sm mb-2">
              <span className="mr-2">💳</span>Cash on Delivery: Available
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex  lg:items-center lg:justify-center  mt-10">
        <h1 className="text center">Frequently Bought Together</h1>
      </div>
      <div className="lg:mx-20">
      <ProductCard />
      </div>

      <RelatedProductsSinglePage />
    </div>
  );
};

export default ProductDetails;
