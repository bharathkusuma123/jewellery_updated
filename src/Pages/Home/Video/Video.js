import React from 'react';
import './Video.css';

const Video = () => {
  return (
    <div className="video-container">
      <div className="video-content">
        <h2>Explore Our Jewellery Collection</h2>
        <p>
          Discover the elegance and craftsmanship of our exquisite jewellery collection. From
          timeless classics to contemporary designs, our pieces are crafted with precision and
          passion to make every moment memorable. Perfect for weddings, celebrations, or everyday
          elegance.
        </p>
      </div>
      <div className="video-embed">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/yGMVKa8oryE" // Replace with actual YouTube video ID
          title="Jewellery Collection Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;

