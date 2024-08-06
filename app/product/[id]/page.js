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
import RelatedProducts from "@/components/relatedproduct/page";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState("32");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${baseUrl}/products/product/${id}`);
        setProduct(response.data);
        setMainImage(response.data.images[0]);
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
        title: product.title,
        price: product.price,
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
              alt={product.title}
              className="object-cover"
            />
            <div className="flex mt-2 gap-2">
              {product.images.map((img, index) => (
                <Image
                  key={index}
                  width={120}
                  height={120}
                  src={img}
                  alt={product.title}
                  className="object-cover cursor-pointer"
                  onClick={() => handleThumbnailClick(img)}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-sm text-gray-600 mb-2">SKU: {product.sku}</p>
            <div className="flex gap-1 items-center">
              <p className="text-lg">Jeans Size</p>
              <div className='w-48 h-[40px] rounded-md flex justify-between '>
                <p className="flex gap-2 items-center" onClick={() => dispatch(openSize())}>
                  (<PiCoatHanger /> Size guide )
                </p>
              </div>
            </div>
            <div className="flex mb-4">
              {product.sizes.map(size => (
                <button
                  key={size}
                  className={`border px-4 py-2 mr-2 ${selectedSize === size ? 'bg-gray-300' : ''}`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <p className="text-red-600 text-xl mb-4">
              <span className="line-through text-gray-500 mr-2">৳ {product.originalPrice}</span>
              ৳ {product.price}
            </p>
            <p className="text-lg mb-2">Quantity:</p>
            <div className="flex items-center mb-6">
              <button
                className="border px-4 py-2"
                onClick={decrementQuantity}
              >
                -
              </button>
              <p className="mx-4">{quantity}</p>
              <button
                className="border px-4 py-2"
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>

            <div className="flex mt-5 mb-4">
              <Link href=''>
                <button className="bg-green-500 text-white px-4 py-2 mr-2" onClick={handleAddToCart}>
                  Add to cart
                </button>
              </Link>
              <Link href='/product/order'>
                <button className="bg-black text-white px-4 py-2 mr-2">
                  Order now
                </button>
              </Link>
            </div>
            <div className="flex items-center justify-start ml-5">
              <button className="flex w-48 text-white px-4 py-2" style={{ backgroundColor: 'rgb(30, 170, 72)' }}>
                <span><FaWhatsapp size={25} /></span> Whatsapp Order
              </button>
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
      <RelatedProducts />
    </div>
  );
};

export default ProductDetails;
