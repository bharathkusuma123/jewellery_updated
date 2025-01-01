import React from 'react'
import './Jewels.css'
import { FaGem, FaStore, FaLaptop } from 'react-icons/fa';  // Importing icons from react-icons
import engring from './Images/keyofferings1.png'
import Necklace from './Images/keyofferings2.png'
import CustomPiece from './Images/keyofferings3.png'
import Specialcolimg from './Images/keyofferings4.png'
import storeimg from "./Images/new-img02.jpg"
import achimg from "./Images/new-img01.jpg"
import custimg from "./Images/testimg007.jpg"
import home from './animations/Animation - 1735698265338.gif'





function Jewels() {


  const categories = [
    { title: "Engagement Rings", image: engring, link: "#" },
    { title: "Necklaces", image: Necklace, link: "#" },
    { title: "Custom Pieces", image: CustomPiece, link: "#" },
    { title: "Special Collections", image: Specialcolimg, link: "#" },

  ];
  return (
    <div style={{ paddingTop: "60px" }}>
    <div className="image-container">
    <img src={home} alt="Home" className="responsive-image" />
    <div className="sec-1-banner-overlay-jewels">
          {/* <h1 className="sec-1-banner-heading">A Legacy of Vision, Wisdom, and Responsibility</h1> */}
          <h1 className="sec-1-banner-heading">Sadashri Jewels-Our Store</h1>

        </div>
  </div>

    

      <div className='div-icon'>

        <FaGem className="br-detail-icon" />
        <h2>Key Offerings</h2>
      </div>

      <div className="category-list">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img
              src={category.image}
              alt={category.title}
              className="category-image"
            />
            <h3>{category.title}</h3>
            <a href={category.link}>Explore &#8250;</a>
          </div>
        ))}
      </div>

      <section className="storebro-experience-section">
        <div className="bro-detail-box">
          <FaStore className="bro-detail-icon" />
          <h4>Store Experience</h4>
          {/* <p>
            A luxurious ambiance with personalized service and exceptional customer care—an experience tailored just for you.
          </p> */}
          <p>Immerse yourself in a world of luxurious ambiance, where every detail is meticulously curated to create an environment of elegance and comfort. Experience the pinnacle of personalized service, where your unique preferences are anticipated and fulfilled with care.

          </p>
        </div>
        <div className="bro-detail-image">
          <img src={storeimg} alt="Store Experience" />
        </div>
      </section>

      <section className="storebro-experience-section">
      <div className="bro-detail-image">
          <img src={achimg} alt="Store Experience" />
        </div>
        <div className="bro-detail-box">
          <FaStore className="bro-detail-icon" />
          <h4>Achievements & Milestones</h4>
          {/* <p>Celebrating our anniversary with recognition for excellence and milestones in jewelry craftsmanship.</p> */}
<p>Join us in celebrating our anniversary—a remarkable journey marked by recognition for excellence and the achievement of significant milestones in the art of jewelry craftsmanship. From timeless designs to innovative creations, we honor the dedication, artistry, and passion that have defined our legacy.

</p>
        </div>
      
      </section>
      <section className="storebro-experience-section">
        <div className="bro-detail-box">
          <FaStore className="bro-detail-icon" />
          <h4>Customer Testimonials</h4>
          {/* <p>"Sadashri Jewels provided me with the perfect engagement ring! The service was incredible!" - Emily R.</p> */}
<p>
Sadashri Jewels made my engagement truly unforgettable by providing me with the most exquisite engagement ring! The craftsmanship and attention to detail were absolutely stunning, and the entire experience exceeded my expectations. The service was nothing short of incredible—every question I had was answered with care,
</p>
        </div>
        <div className="bro-detail-image">
          <img src={custimg} alt="Store Experience" />
        </div>
      </section>


    </div>
  )
}

export default Jewels
