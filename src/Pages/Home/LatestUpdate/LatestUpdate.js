import React, { useEffect } from "react";
import "./LatestUpdate.css";
import bgImage from "./Images/Latest News & Updates.jpg"; // Adjust the path as needed


const LatestUpdate = () => {


  return (
    <div
      className="LatestUpdate-card"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h2>Latest News & Updates</h2>
      
      <div className="LatestUpdate-points">
      <p >
        Stay up-to-date with our latest milestones, exciting partnerships, and
        new product launches. We’re always evolving, and there’s always
        something new to share.
      </p>
        <p>
          <strong>1. New Brand Launch:</strong> Sadashri Jewelkart has just launched
          its new online collection! Explore our{" "}
          <span className="Brand-aligment">exclusive designs today.</span>
        </p>
        <p>
          <strong>2. Sustainability Commitment:</strong> We’ve implemented
          cutting-edge sustainable practices across all of{" "}
          <span className="Brand-aligment">our brands. Learn how we’re reducing our environmental footprint.</span>
        </p>
      </div>
    </div>
  );
};

export default LatestUpdate;
