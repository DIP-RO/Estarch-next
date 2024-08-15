import React from "react";

const SizeChart = () => {
  return (
    <div className="max-w-xl mx-auto">
      <h2 className="font-medium text-xs mb-4">
        Size chart - In inches (Expected Deviation &lt; 3%)
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full font-light text-xs bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b border-gray-300 text-left">Size</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left">Chest (Round)</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left">Length</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left">Sleeve</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b border-gray-300">M</td>
              <td className="px-4 py-2 border-b border-gray-300">39</td>
              <td className="px-4 py-2 border-b border-gray-300">27.5</td>
              <td className="px-4 py-2 border-b border-gray-300">8.5</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-300">L</td>
              <td className="px-4 py-2 border-b border-gray-300">40.5</td>
              <td className="px-4 py-2 border-b border-gray-300">28</td>
              <td className="px-4 py-2 border-b border-gray-300">8.75</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-300">XL</td>
              <td className="px-4 py-2 border-b border-gray-300">43</td>
              <td className="px-4 py-2 border-b border-gray-300">29</td>
              <td className="px-4 py-2 border-b border-gray-300">9</td>
            </tr>
            <tr>
              <td className="px-4 py-2">2XL</td>
              <td className="px-4 py-2">45</td>
              <td className="px-4 py-2">30</td>
              <td className="px-4 py-2">9.25</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SizeChart;
