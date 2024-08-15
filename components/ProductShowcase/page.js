import Image from 'next/image';

const ProductShowcase = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:mx-24 gap-5 mt-10 mx-4">
      <div className="relative w-full">
        <Image width={300} height={300} src="https://fabrilife.com/image-gallery/638a77dc9c88d-square.jpg" alt="Printed Short Sleeve" className="w-full h-auto" />
        <div className="absolute inset-0 flex items-end mb-5  justify-center text-white text-sm font-semibold">
          <p className="font-semibold bg-black bg-opacity-50 px-4 py-2 rounded">Printed Short Sleeve</p>
        </div>
      </div>
      <div className="relative w-full">
        <Image width={300} height={300} src="https://fabrilife.com/image-gallery/638a77dc9c88d-square.jpg" alt="Designer Edition" className="w-full h-auto" />
        <div className="absolute inset-0 flex items-end mb-5  justify-center text-white text-sm font-semibold">
          <p className="font-semibold bg-black bg-opacity-50 px-4 py-2 rounded">Designer Edition</p>
        </div>
      </div>
      <div className="relative w-full">
        <Image width={300} height={300} src="https://fabrilife.com/image-gallery/638a77dc9c88d-square.jpg" alt="Short Sleeve Blanks" className="w-full h-auto" />
        <div className="absolute inset-0 flex items-end mb-5 justify-center text-white text-sm font-semibold">
          <p className="font-semibold bg-black bg-opacity-50 px-4 py-2 rounded">Short Sleeve Blanks</p>
        </div>
      </div>
    </div>
  );
}

export default ProductShowcase;
