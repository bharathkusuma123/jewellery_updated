// import React from 'react';
// import { FaGem, FaStore, FaLaptop } from 'react-icons/fa';  // Importing icons from react-icons
// import './Brands.css';

// const BrandsPage = () => {
//   return (
//     <div className="br-brands-page">
//       <div className="br-container">
//         {/* <h2 className="br-page-title">Our Brands</h2> */}

//         {/* Sadashri Jewels Section */}
//         <section className="br-brand-section">
//           <h3 className="br-brand-title">Sadashri Jewels</h3>
//           <p className="br-brand-description">
//             Sadashri Jewels is an <strong className='strongoffline'>offline</strong> jewelry store known for its timeless designs and premium craftsmanship. We bring you an exclusive collection that blends tradition with elegance.
//           </p>
          
//           <div className="br-brand-details">
//             <div className="br-detail-box">
//               <FaGem className="br-detail-icon" />
//               <h4>Key Offerings</h4>
//               <ul>
//                 <li>Engagement Rings</li>
//                 <li>Necklaces</li>
//                 <li>Custom Pieces</li>
//                 <li>Special Collections</li>
//               </ul>
//             </div>
//           </div>
//         </section>

      
//       </div>
//     </div>
//   );
// };

// export default BrandsPage;





import React from "react";
import { FaGem, FaStore, FaLaptop } from 'react-icons/fa';  // Importing icons from react-icons

import "./Brands.css";
import engring from './Images/eng-ring.jpeg'
import Necklace from './Images/necklaceimg.webp'
import CustomPiece from './Images/custompiece.jpg'
import Specialcolimg from './Images/specialcollectionimg.jpg'




const ShopByCategory = () => {
  const categories = [
    { title: "Engagement Rings", image: engring, link: "#" },
    { title: "Necklaces", image: Necklace, link: "#" },
    { title: "Custom Pieces", image: CustomPiece, link: "#" },
    { title: "Special Collections", image: Specialcolimg, link: "#" },
    
  ];

  return (
    <div className="shop-by-category">
      <h2>Sadashri Jewels</h2>
      <p> Sadashri Jewels is an <strong className='strongoffline'>offline</strong> jewelry store known for its timeless designs and premium craftsmanship. We bring you an exclusive collection that blends tradition with elegance.</p>

      <FaGem className="br-detail-icon" />
      <h4>Key Offerings</h4>
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


      <div className="store-experience-container">
      <div className="br-detail-box">
        <FaStore className="br-detail-icon" />
        <h4>Store Experience</h4>
        <p>
          A luxurious ambiance with personalized service and exceptional customer care—an experience tailored just for you.
        </p>
      </div>
      <div className="br-detail-image">
        <img
          src="https://via.placeholder.com/400" // Replace with your image URL
          alt="Store Experience"
        />
      </div>
    </div>
    </div>
  );
};

export default ShopByCategory;
