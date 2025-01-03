import React from 'react';
import './AboutUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchway, faPalette, faGlobe } from '@fortawesome/free-solid-svg-icons';
import about1 from './Images/grandma.png'
import about2 from './Images/ourlagecynew.png';
import about3 from './Images/EmpoweringCommunitiesnew.png';
import about4 from './Images/EthicalLeadershipCommitmentnew .png';
import about5 from './Images/ImpactingSocietynew.png';
import about6 from './Images/visionimg.jpg';
import web from './Images/Purpose.png';
import last_img from './Images/websitebanner2.png'





// import './Timeline.css'; // Link your CSS file

const AboutUs = () => {
  return (
    <div className="about-us" style={{paddingTop:"60px"}}>


      <div className="ab_image-container">
        <img src={web} alt="Home" className="ab_responsive-image" />
        <div className="sec-1-banner-overlay">
          {/* <h1 className="sec-1-banner-heading">A Legacy of Vision, Wisdom, and Responsibility</h1> */}
          <h1 className="sec-1-banner-heading">Purpose</h1>

        </div>
      </div>

      {/* 
      <div className="sec-1-banner-section">
        <div className="sec-1-banner-overlay">
          <h1 className="sec-1-banner-heading">A Legacy of Vision, Wisdom, and Responsibility</h1>
        </div>
      </div> */}


      <section className="legacy-section">
        <div className="legacy-infographic">
          {/* Replace with your actual infographic timeline image */}
          <img src={about2} alt="Infographic Timeline" className="infographic-image" />
        </div>
        <div className="legacy-content">
          <h2 className="legacy-title">OUR LEGACY</h2>
          <p className="legacy-introduction">
            Our family’s legacy is woven through generations, where each story told carried wisdom that shaped the decisions of today.
          </p>
          <p className="legacy-introduction">
            The stories were more than just tales—they were lessons, guiding principles passed down from one generation to the next.
          </p>
          <p className="legacy-introduction">They inspire us to uphold the values of integrity, perseverance, and innovation, ensuring that our endeavors not only succeed.</p>
          <p className="legacy-introduction">
            These lessons are the foundation of everything we do at Sadashri Ventures.
          </p>
        </div>

      </section>

      {/* Wisdom Section */}
      <div className="sec-2-wisdom-section">
        <h2 className="sec-2-section-title">The Wisdom of Our Elders</h2>
        <h3 className="sec-2-section-subtitle">Guiding Principles for a Better Tomorrow</h3>
        <blockquote className="sec-2-wisdom-quote">
          "The future is shaped by the choices we make today."
        </blockquote>
      </div>
      <div className="content-wrapper">
        {/* Text Section */}
        <div className="text-section">
          <ul className="sec-2-wisdom-points">
            <li>
              For generations, our elders believed that society’s strength depended on the choices made in the present.</li>
            <li>
              They spoke of community, balance, and responsibility, understanding that these decisions would shape the future.
            </li>
            <li>
              This powerful belief has been the backbone of our family’s mission and remains at the core of Sadashri Ventures today.
            </li>
            <li>
              Our family has always prioritized community health, prosperity, and environmental stability in our decisions.
            </li>
            <li>
              These values guide us in shaping a better world for future generations.
            </li>

          </ul>
        </div>

        {/* Image Section */}
        <div className="image-section">
          <img src={about1} alt="Related to the content" />
        </div>
      </div>


      <section className="sec-3-generational-wisdom">
        <div className="sec-3-container">
          <h2 className="sec-3-section-title">How Generational Wisdom Shapes Our Present</h2>
          <p className="sec-3-section-description">
            Over time, the wisdom of our elders has grown into a clear, resolute voice. What began as stories around a fire has now evolved into a living, breathing mission. Each generation, while embracing modern innovation, honors the core principles passed down:
          </p>
          <div className="sec-3-principles-list">
            <div className="sec-3-principle">
              <span className="sec-3-icon">💎</span>
              <h3>Preserving Society’s Strength</h3>
            </div>
            <div className="sec-3-principle">
              <span className="sec-3-icon">✨</span>
              <h3>Building a Balanced Future</h3>
            </div>
            <div className="sec-3-principle">
              <span className="sec-3-icon">🌟</span>
              <h3>Uplifting Communities and Driving Innovation</h3>
            </div>
          </div>
          {/* <div className="sec-3-visual">
            <p>[Infographic: Evolution of Family Philosophy]</p>
          </div> */}
        </div>
      </section>


      <section className="sec-4-vision-section">
        <div className="sec-4-container">
          <h2 className="sec-4-vision-title">Our Vision: A Better Tomorrow, Today</h2>
          <p className="sec-4-vision-subtitle">More Than a Business—A Mission to Create Impact</p>
          <div className="sec-4-vision-content">
            <p>
              Our vision extends beyond profit. <strong className='strongtext'>Sadashri Ventures</strong> is founded on the belief that businesses
              should enhance society, not just take from it. We strive to create a balance between progress and
              preservation—ensuring that every venture we undertake contributes to the well-being of the communities we serve.
            </p>
            {/* <div className="sec-4-vision-visual">
              [Visual: Vision Statement Box with a background image of a thriving community, people collaborating, and innovations in progress.]
            </div> */}
          </div>

          <h3 className="sec-4-pillars-title">The Pillars of Our Vision</h3>
          {/* <div className="sec-4-pillars">
            <div className="sec-4-pillar">
              <h4>Empowering Communities</h4>
              <p>
                We believe in fostering growth that elevates the communities around us, creating value for both present and
                future generations.
              </p>
            </div>
            <div className="sec-4-pillar">
              <h4>A Commitment to Ethical Leadership</h4>
              <p>
                We lead with transparency, integrity, and a deep sense of responsibility for our people, the environment, and
                society at large.
              </p>
            </div>
            <div className="sec-4-pillar">
              <h4>Impacting Society</h4>
              <p>
                The future is shaped by how we invest in it today. Our focus is on fostering growth that uplifts entire
                communities.
              </p>
            </div>
          </div> */}

          <div className="sec-4-pillars">
            <div className="sec-4-pillar">
              <img src={about3} alt="Empowering Communities" className="pillar-image" />
              <h4>Empowering Communities</h4>
              <p>
                We believe in fostering growth that elevates the communities around us, creating value for both present and future generations.
              </p>
            </div>
            <div className="sec-4-pillar">
              <img src={about4} alt="Ethical Leadership" className="pillar-image" />
              <h4>Ethical Leadership Commitment


              </h4>
              <p>
                We lead with transparency, integrity, and a deep sense of responsibility for our people, the environment, and society at large.
              </p>
            </div>
            <div className="sec-4-pillar">
              <img src={about5} alt="Impacting Society" className="pillar-image" />
              <h4>Impacting Society</h4>
              <p>
                The future is shaped by how we invest in it today. Our focus is on fostering growth that uplifts entire communities.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* <div className="sec-5-cta-section">
      <img 
        src={{last_img}} 
        alt="Website Banner" />
      
      </div> */}





       {/* <section className="lus_banner-section">
      <img 
        src={require('./Images/lastbanabout.jpg')} 
        alt="Website Banner" 
        className="lus_banner-image" 
      />
    </section> */}




    </div>
  );
};

export default AboutUs;
