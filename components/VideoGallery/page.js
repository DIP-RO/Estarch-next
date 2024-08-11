import React from 'react';

const VideoGallery = () => {
  return (
    <div className="flex flex-col items-center space-y-8 md:flex-row md:space-x-4 md:space-y-0 lg:mx-20 mt-10">
      {/* Video 1 */}
      <div className="flex flex-col w-full md:w-1/2 p-4">
        <h2 className="text-lg font-semibold mb-2 text-center md:text-left">EID COLLECTION 2024</h2>
        <div className="relative w-full pb-[56.25%] h-0">
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/Jm8__NOUieA?si=rAZooVZ-01UyxkF2" 
            title="EID Collection 2024"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
      
      {/* Video 2 */}
      <div className="flex flex-col w-full md:w-1/2 p-4">
        <h2 className="text-lg font-semibold mb-2 text-center md:text-left">PREMIUM SHIRT</h2>
        <div className="relative w-full pb-[56.25%] h-0">
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/Jm8__NOUieA?si=rAZooVZ-01UyxkF2" 
            title="Premium Shirt"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
