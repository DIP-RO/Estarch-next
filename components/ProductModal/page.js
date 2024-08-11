import React, { useState } from 'react';
import img from '../../public/images/product_img1.jpeg';

const ProductModal = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      setQuantity(quantity + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="fixed bottom-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-[10000] w-full">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-lg font-semibold mb-4">Contrast Long Sleeve Zip Jacket</h2>
        <div className="flex justify-center mb-4">
          <img src={img} alt="Product" className="w-48 h-64 object-cover" />
        </div>
        <div className="mb-4">
          <h3 className="text-sm font-semibold mb-2">Size (UK)</h3>
          <div className="flex space-x-2">
            {sizes.map((size) => (
              <button
                key={size}
                className={`px-4 py-2 border rounded-lg ${selectedSize === size ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-sm font-semibold mb-2">Quantity</h3>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => handleQuantityChange('decrement')}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg"
            >
              -
            </button>
            <span>{quantity}</span>
            <button 
              onClick={() => handleQuantityChange('increment')}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg"
            >
              +
            </button>
          </div>
        </div>
        <button className="bg-gray-800 text-white w-full py-3 rounded-lg mt-4">
          Order
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
