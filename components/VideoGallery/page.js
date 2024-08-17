import React, { useState, useEffect } from 'react';
import baseUrl from '../services/baseUrl';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/video`);
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  // Function to extract video ID from YouTube URL
  const getYouTubeVideoId = (url) => {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  };

  return (
    <div className="flex flex-col items-center space-y-8 md:flex-row md:space-x-4 md:space-y-0 lg:mx-20 mt-10">
      {videos.length === 0 ? (
        <p>No videos available</p>
      ) : (
        videos.map((video) => {
          const videoId = getYouTubeVideoId(video.link);
          return (
            <div
              key={video._id}
              className={`flex flex-col w-full ${videos.length === 1 ? 'md:w-full' : 'md:w-1/2'} p-4`}
            >
              <h2 className="text-lg font-semibold mb-2 text-center md:text-left">{video.name}</h2>
              <div className="relative w-full pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${videoId}?si=rAZooVZ-01UyxkF2`}
                  title={video.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default VideoGallery;
