import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.css'; 
import JewelryImage from './Images/Test_img.jpg'; 
import profile1 from './Images/profile1.jpg'; 
import profile2 from './Images/profile2.jpeg'; 
import profile3 from './Images/profile3.jpeg'; 
import profile4 from './Images/profile4.jpeg'; 

const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="testimonials-section">
      <div className="testimonials-content">
        {/* Left section: Image */}
        <div className="testimonials-image">
          <img src={JewelryImage} alt="Jewelry showcase" />
        </div>

        {/* Right section: Testimonial Cards */}
        <div className="testimonials-text">
          <h2>Jewelry Customer Testimonials</h2>
          <p>
          Hear what our customers have to say about their experience with our exquisite jewelry collection:
          </p>
          
          {/* Testimonial Cards inside the Slider */}
          <div className="testimonial-slider">
            <Slider {...sliderSettings}>
              <div>
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <img src={profile1} alt="Emma Watson" className="testimonial-photo" />
                    <div>
                      <h3>Emma Watson</h3>
                      <span>New York</span>
                    </div>
                  </div>
                  <p>
                    "I purchased a custom ring, and it exceeded all my expectations. The craftsmanship and attention to detail are just amazing!"
                  </p>
                </div>
              </div>

              <div>
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <img src={profile2} alt="Sophia Turner" className="testimonial-photo" />
                    <div>
                      <h3>Sophia Turner</h3>
                      <span>London</span>
                    </div>
                  </div>
                  <p>
                    "The necklace I bought from here is stunning! It’s become my favorite piece to wear on any occasion. Highly recommend!"
                  </p>
                </div>
              </div>

              <div>
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <img src={profile3} alt="Liam Brown" className="testimonial-photo" />
                    <div>
                      <h3>Liam Brown</h3>
                      <span>Paris</span>
                    </div>
                  </div>
                  <p>
                    "Their jewelry is truly one-of-a-kind. I was able to find something that felt personal and unique. The staff was incredibly helpful too!"
                  </p>
                </div>
              </div>

              <div>
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <img src={profile4} alt="Olivia Smith" className="testimonial-photo" />
                    <div>
                      <h3>Olivia Smith</h3>
                      <span>Sydney</span>
                    </div>
                  </div>
                  <p>
                    "Amazing quality and beautiful designs! I’m absolutely thrilled with my purchase and can’t wait to buy more pieces in the future."
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
