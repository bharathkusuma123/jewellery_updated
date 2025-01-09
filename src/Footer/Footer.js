import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import sdlogo from '../../src/Navbar/logo/parent_weblink_2-removebg-preview.png'
import footerlogo from '../Footer/Images/png-1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon


const Footer = () => {
  return (
    <footer className="footer-root">
      <div className="footer-container">
        <div className="footer-content">
          {/* <div className="mainfoogterdiv"> */}
          <div className="footer-logo">
            <img
              src={sdlogo}
              alt="Sadashri Logo"
            // width="180"
            // height="150"
            />
          </div>
          {/* <div className="social-container">
            <a href="https://www.instagram.com/sadashrijewelkart_official" className="social-link" target="_blank" rel="noopener noreferrer">
              <img src={'https://cdn-icons-png.flaticon.com/512/5968/5968776.png'} alt="Instagram" />
              <span>sadashrijewelkart_official</span>
            </a>
            <a href="https://www.facebook.com/SadashriJewelkart" className="social-link" target="_blank" rel="noopener noreferrer">
              <img src={'https://static.vecteezy.com/system/resources/previews/018/930/476/non_2x/facebook-logo-facebook-icon-transparent-free-png.png'} alt="Facebook" />
              <span>Sadāshrī Jewelkart</span>
            </a>
            <a href="https://www.youtube.com/SadashriJewelkart" className="social-link" target="_blank" rel="noopener noreferrer">
              <img src={'https://static.vecteezy.com/system/resources/previews/011/998/173/non_2x/youtube-icon-free-vector.jpg'} alt="YouTube" />
              <span>Sadāshrī Jewelkart</span>
            </a>
          </div> */}
          {/* </div> */}
          <div className='footermainsection'>
            <div className="footer-section">
              <p style={{ color: 'black', fontSize: '22px' }} className="footer-heading ">Quick Menu</p>
              <p>  <a href="/" className="footer-link">Home</a></p>
              <p><a href="/Enterprise" className="footer-link">Enterprise</a></p>
              <p><a href="/sadashri-jewels" className="footer-link">Sadashri Jewels-Our Store</a></p>
              <p><a href="/sadashri-jewelkart" className="footer-link">Sadashri Jewelkart-Online Platform</a></p>
              <p><a href="/AboutUs" className="footer-link">AboutUs</a></p>

              <p><a href="/contactUs" className="footer-link">Contact Us</a></p>
            </div>
            <div className="footer-section">
              <p style={{ color: 'black', fontSize: '22px' }} className="footer-heading foot-head">Contact Details</p>
              <p className="footer-info">Building No./Flat No.: NO 1323/1324</p>
              <p className="footer-info">Road/Street: 16th B Cross Housing Board </p>
              {/* <p className="footer-info">Phone No: 9964644424</p> */}
              <p className="footer-info">Locality: Yelahanka New Town</p>
              <p className="footer-info">City: Bengaluru</p>
              <p className="footer-info">State: Karnataka, PIN Code: 560064</p>
            </div>
          </div>
        </div>
        <hr className="footer-divider" />
        {/* <p className="footer-copyright">
          Copyright © 2024 SadāShri Ventures Private Limited. All rights reserved.
        </p> */}

        <section className="last-footer">
          <p className="last-footer-copyright">
            Copyright © 2024 SadāShri Ventures Private Limited. All rights reserved.
          </p>
          {/* <p className="last-footer-design">
          Designed by <a href="https://www.iiiqbets.com/" target="_blank" rel="noopener noreferrer"> <img 
        src={footerlogo} 
        alt="iiiQBets Logo" 
        className="footer1-logo" 
      /></a>.
          </p> */}
          {/* <p className="last-footer-design">
          Designed by <a href="https://www.iiiqbets.com/" target="_blank" rel="noopener noreferrer">iiiQBets</a>.
          </p> */}
          <div className="footer">
            <span className="float-left pr-2">
              © {new Date().getFullYear()} All rights reserved 
            </span>
            <span className="float-left p-3">
              {/* <i className="fas fa-heart" aria-hidden="true"></i>  */}
              <FontAwesomeIcon  style={{color:'red', paddingLeft:'5px', paddingRight:'5px'}} icon={faHeart} aria-hidden="true" />
              by {" "}
              <a href="https://iiiqbets.com" target="_blank" rel="noopener noreferrer">
                iiiQBets
              </a>
            </span>
          </div>
        </section>

      </div>
    </footer>
  );
};

export default Footer;

