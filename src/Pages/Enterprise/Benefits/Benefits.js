import React from 'react';
import './Benefits.css';
import about3 from '../Images/product development.png';
import about4 from '../Images/strategic partnership.png';
import about5 from '../Images//brand investment.png';

function Benefits() {
  return (
    <div className="benefits-container">
      {/* Main Heading Section */}
      <div className="main-section">
        <h1>Building Meaningful Relationships with Society</h1>
        <h3>Our Commitment to Long-Term, Mutual Growth</h3>
        <p>
          We understand that a company is not just defined by its products or profits—it is defined by the relationships it builds. 
          At <strong>Sadashri Ventures</strong>, we believe in fostering deep, meaningful connections with all stakeholders: 
          our employees, customers, partners, and the communities we serve. We aim for mutual growth, where the success of our 
          ventures also means the success of the society that supports us.
        </p>
        <div className="visual-placeholder">
          <p>[Visual: Community Engagement Diagram showing the flow of benefits between the company and its stakeholders.]</p>
        </div>
      </div>

      {/* Foundation Section */}
      <div className="foundation-section">
        <h2>The Foundations of Our Relationships:</h2>
        <ul>
          <li><strong>Collaboration:</strong> Working hand-in-hand with our partners to achieve common goals.</li>
          <li><strong>Sustainability:</strong> Ensuring that every venture leaves a lasting positive impact on both society and the environment.</li>
        </ul>
      </div>

      {/* Portfolio Section */}
      <div className="portfolio-section">
        <h2>What We Do: A Diverse Portfolio of Ventures</h2>
        <div className="portfolio-cards">
          <div className="portfolio-card">
          <img src={about3} alt="Empowering Communities" className="pillar-image" />
            <h3>Product Development:</h3>
            <p>
              From Sadashri Jewels to Sadashri Jewelkart, we build brands that blend tradition with modernity, offering both 
              premium, handcrafted designs and tech-forward solutions.
            </p>
          </div>
          <div className="portfolio-card">
          <img src={about4} alt="Empowering Communities" className="pillar-image" />
            <h3>Strategic Partnerships:</h3>
            <p>
            We collaborate with like-minded organizations to foster innovation, support community development, and expand our positive social and environmental impact across diverse regions and industries.
            </p>
          </div>
          <div className="portfolio-card">
          <img src={about5} alt="Empowering Communities" className="pillar-image" />
            <h3>Brand Investments:</h3>
            <p>
            We invest in businesses that share our commitment to innovation, sustainability, and societal growth, empowering them to drive meaningful change and create value for communities and stakeholders.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="statistics-section">
        <h2>Trusted by Thousands of Buyers</h2>
        <div className="stats-cards">
          <div className="stats-card">
            <h4>98%</h4>
            <p>Customer Satisfaction</p>
          </div>
          <div className="stats-card">
            <h4>500+</h4>
            <p>Jewelry Styles Available</p>
          </div>
          <div className="stats-card">
            <h4>1K+</h4>
            <p>Gold-Saving Scheme Subscribers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
