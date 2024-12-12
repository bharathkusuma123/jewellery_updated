// ContactForm.js
import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaUserTie, FaQuestionCircle } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div>
      
      <div className="cont-section-container">
        <div className="cont-banner">
          <div className="cont-banner-text">
            Contact Us
          </div>
        </div>
      </div>
      <div className="contact-page-container">
      <h1>Contact Us</h1>


      {/* Investor Relations */}
      <div className="contact-card">
        <FaUserTie className="contact-icon" />
        <h3>Investor Relations</h3>
        <ul>
          <li>How investors can connect with us.</li>
          <li>Details on investment opportunities, reports, and press releases.</li>
        </ul>
      </div>

      {/* Career Opportunities */}
      <div className="contact-card">
        <FaMapMarkerAlt className="contact-icon" />
        <h3>Career Opportunities</h3>
        <ul>
          <li>Explore current job openings at Sadashri Ventures.</li>
          <li>Learn about our application process and company culture.</li>
          <li>Discover employee benefits and growth opportunities.</li>
        </ul>
      </div>

      {/* Media & Press Inquiries */}
      <div className="contact-card">
        <FaPhoneAlt className="contact-icon" />
        <h3>Media & Press Inquiries</h3>
        <p>
          Access press releases, media kits, or schedule interviews with our media relations team.
        </p>
      </div>

      {/* FAQ */}
      <div className="contact-card">
        <FaQuestionCircle className="contact-icon" />
        <h3>FAQ</h3>
        <p>
          Find answers to common questions from clients, investors, and job seekers in our FAQ section.
        </p>
      </div>
      
      {/* General Contact Information */}
      <div className="contact-card">
        <FaEnvelope className="contact-icon" />
        <h3>General Contact Information</h3>
        
        <p>
          Reach us via email, phone, or visit us at Sadashri Ventures' main office. 
          We’re here to assist you with inquiries.
        </p>
      </div>
    </div>
      <div className="contact-container">
        <div className="contact-form">
          <h2>Contact us</h2>
          <p>
            Our ravely-reviewed Customer Service team of non-commissioned diamond and jewelry experts is here for you 24/7.
          </p>
          <div className="contact-info">
            <p>
              <FontAwesomeIcon icon={faPhoneAlt} />
              <span>+919964644424</span>        </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>sadashrijewelkart.com</span>        </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Building No./Flat No.: NO 1323/1324, 16TH B CROSS HOUSING BOARD COLONY EWS 3RD PHASE, Yelahanka New Town, Bengaluru, Karnataka-560064</span>
            </p>
          </div>
              <div className="cont-social-container">
      <a href="https://www.instagram.com/sadashrijewelkart_official" className="cont-social-link" target="_blank" rel="noopener noreferrer">
        <img src={'https://cdn-icons-png.flaticon.com/512/5968/5968776.png'} alt="Instagram" />
        <span>sadashrijewelkart_official</span>
      </a>
      <a href="https://www.facebook.com/SadashriJewelkart" className="cont-social-link" target="_blank" rel="noopener noreferrer">
        <img src={'https://static.vecteezy.com/system/resources/previews/018/930/476/non_2x/facebook-logo-facebook-icon-transparent-free-png.png'} alt="Facebook" />
        <span>Sadāshrī Jewelkart</span>
      </a>
      <a href="https://www.youtube.com/SadashriJewelkart" className="cont-social-link" target="_blank" rel="noopener noreferrer">
        <img src={'https://static.vecteezy.com/system/resources/previews/011/998/173/non_2x/youtube-icon-free-vector.jpg'} alt="YouTube" />
        <span>Sadāshrī Jewelkart</span>
    </a>
    </div>  
        </div>
        <div className="form-wrapper">
          <form>
            <div className="input-group">
              <div className="input-field">
                <label>First Name</label>
                <input type="text" placeholder="First Name" />
              </div>
              <div className="input-field">
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="input-group">
              <div className="input-field">
                <label>Email</label>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <label>Phone Number</label>
                <input type="text" placeholder="Phone Number" />
              </div>
            </div>
            <div className="input-field">
              <label>What do you have in mind</label>
              <textarea placeholder="Please enter query..."></textarea>
            </div>
            <button className='submit-but' type="submit">Submit</button>
          </form>
        </div>
      </div>
      {/* Map Section */}
      <div className="map-section">
        <h2>Get In Touch With Us Here</h2>
        <iframe
          title="Google Map"
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.2562654502283!2d77.5751846758182!3d13.095915590789045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1b4de34c4df7%3A0x68511017b88d2b2d!2sNO%201323%2C%201324%2C%2016TH%20B%20Cross%2C%20Housing%20Board%20Colony%20EWS%203rd%20Phase%2C%20Yelahanka%20New%20Town%2C%20Bengaluru%2C%20Karnataka%20560064%2C%20India!5e0!3m2!1sen!2sus!4v1619603738454!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
