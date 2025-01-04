import React from 'react';
import './Overview.css';
import { Link } from 'react-router-dom';
import img1 from '../Images/ethicnewimage.png'
import img2 from '../Images/Expert Craftsmanship.png'
import img3 from '../Images/Personalized Designsnew1.png'

function Overview() {
  return (
    <div>
      <div className="introduction-container">
        <div className="introduction-section intro_sec">
          {/* Left Section: Images and Experience */}
          <div className="introduction-left">
            <img src={img1} className="introduction-large-img" />
            <div className="introduction-small-images">
              <img src={img2} alt="physiotherapy Image 2" className="introduction-small-img" />
              <img src={img3} alt="physiotherapy Image 3" className="introduction-small-img" />
            </div>
          </div>

          {/* Right Section: Content */}
          <div className="introduction-content">
            {/* <h4>ABOUT US</h4> */}
            <h1>Running the Company with Ethics, Integrity, and Responsibility</h1>
            <p>
              At Sadashri Ventures, we are committed to running our business with the highest standards of ethics and integrity. Our relationship with society is built on trust, transparency, and accountability. We strive to create an environment where innovation thrives but always in a way that honors our roots and uplifts the greater good.
            </p>
            {/* <p>
              [Visual: Icon Box featuring icons like a handshake (ethics), a heart (integrity), and a globe (responsibility).]
            </p> */}
            <div className="introduction-features">
              <div className="introduction-feature-item">
                {/* <span role="img" aria-label="Checkmark">✅</span> */}
                <h3>Expert Craftsmanship</h3>
                <p>
                  With years of experience in jewelry making, our team is committed to delivering exquisite, high-quality pieces tailored to your desires.
                </p>
              </div>
              <div className="introduction-feature-item">
                {/* <span role="img" aria-label="Checkmark">✅</span> */}
                <h3>Personalized Designs</h3>
                <p>
                  Our approach centers around personalized design, ensuring that each captures your individuality becomes symbol of beauty.
                </p>
              </div>
            </div>
            {/* Update the button to be a Link */}
            <Link to="https://stage.sadashrijewelkart.com/signup" style={{ textDecoration: 'none' }} >
              <button className="introduction-about-btn">Register Here
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Overview;
