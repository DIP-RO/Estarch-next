import React, { useState } from 'react';

const DeliveryAndDescription = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
    
      <div className="flex border-b border-gray-200">
        <button
          className={`text-lg font-semibold px-4 py-2 focus:outline-none ${
            activeTab === 'description'
              ? 'text-black border-b-2 border-yellow-600'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('description')}
        >
          DESCRIPTION
        </button>
        <button
          className={`text-lg font-semibold  px-4 py-2 focus:outline-none ${
            activeTab === 'delivery'
              ? 'text-black border-b-2 border-yellow-600'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('delivery')}
        >
          Guide Line
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === 'description' && (
          <div>
            <h2 className="text-xl font-bold mb-2">About the Category</h2>
            
            <h3 className="text-xs mb-2">Product Specifications</h3>
            <ul className="list-disc text-xs pl-5 space-y-2">
              <li>Thickness 150-160 GSM: GSM is a measure that describes the weight of the tee. For lightweight and comfortable sports t-shirts, 150-160 GSM is always recommended.</li>
              <li>Export Quality China Mesh Fabrics: Mostly referred to as softer and safer for skin.</li>
              <li>Sharp and Long Lasting Sublimation Print: Sublimation print is a digital printing where we use the most expensive chemicals for better feelings to the skin. You won’t feel the print as it is part of the fabric.</li>
              <li>Breathable: This type of fabric allows moisture removal from the body and absorbs liquid.</li>
              <li>Oeko-Tex Certified: Ensures the legal conformity of the tested textile products.</li>
            </ul>
          </div>
        )}

        {activeTab === 'delivery' && (
          <div>
            <h2 className="text-xs font-bold mb-2">Guide</h2>
            <p className='text-xs'>
              Here you would provide details about the available delivery options for the product. This could include estimated delivery times, shipping methods, and any other relevant information.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeliveryAndDescription;
