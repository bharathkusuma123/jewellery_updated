import React from "react";
import "./About.css";


const About = () => {
  return (
    <div>
      <img className='img1' src="https://www.kalyanjewellers.net/images/banners/gold_banner.jpg" alt="Banner" />
      <section className="enterprise-section">
        <div className="enterprise-container">
          <div className="enterprise-header">
            <h1>Our Business, Our Responsibility</h1>
            <p>
              Sadashri Ventures Pvt. Ltd. is the corporate arm of the legacy built by our family. It is where the principles and values of our elders come to life through innovation, sustainable growth, and community-centered development. But at its core, Sadashri Ventures is more than just a business—it’s a commitment to societal betterment and long-term growth.
            </p>
          </div>

          <div className="enterprise-journey">
            <h2>Our Journey: From Family Philosophy to Business Practice</h2>
            <p>
              Born from the vision of our family, Sadashri Ventures was created to bridge the gap between our rich heritage and the modern world. While our roots remain firmly planted in the wisdom of our elders, we have consistently embraced forward-thinking strategies to drive growth and innovation. Today, Sadashri Ventures is at the forefront of several key industries, from sustainable product development to cutting-edge technology, all while maintaining a focus on societal benefit.
            </p>
          </div>

          <div className="enterprise-principles">
            <h3>Our Corporate Approach</h3>
            <ul>
              <li><strong>Sustainability:</strong> We are committed to minimizing our environmental footprint and creating businesses that endure for future generations.</li>
              <li><strong>Innovation with Integrity:</strong> We invest in ideas, technologies, and ventures that create long-term value—not just financial, but social and environmental.</li>
              <li><strong>Community Engagement:</strong> Every venture, from startups to established businesses, is driven by our desire to uplift communities and foster economic prosperity.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
