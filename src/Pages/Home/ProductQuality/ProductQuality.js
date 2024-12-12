import React, { useEffect } from 'react';

import './ProductQuality.css'; // Import the CSS for styling

const ProductQuality = () => {


  return (
    <section className="product-quality-section">
      <div className="product-quality-container">
        <h1 className="product-quality-heading" >
          Our Vision for the Future
        </h1>
        <p className="product-quality-para" >
          At the heart of our mission is a commitment to creating meaningful impact. We aim to empower people through beautiful, sustainable products and forward-thinking business practices. Each of our ventures, from jewelry to investments, is designed to uplift communities, foster growth, and ensure a better tomorrow.
        </p>
        <div className="product-quality-content">
          {/* Left Card */}
          <div className="product-quality-card left" >
            <h2 className="product-quality-heading-card">
              Guided by Purpose, Driven by Passion
            </h2>
            <p className="product-quality-para">
              Discover how our ventures align with a future of innovation, sustainability, and empowerment.
            </p>
            <p className="Read-more">Read more...</p>
          </div>

          {/* Right Card */}
          <div className="product-quality-card right" >
            <h2 className="product-quality-heading-card">Our Brands:</h2>
            <p className="product-quality-para">
              From Sadashri Jewels' timeless beauty to Sadashri Jewelkart's convenience, our brands embody quality, innovation, and passion.
            </p>
            <p className="Read-more">Read more...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductQuality;
