// import React, { useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import './Navbar.css';
// import mainlogo from './logo/sadashri parent logo123.jpg';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [brandsDropdownOpen, setBrandsDropdownOpen] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   const toggleBrandsDropdown = () => {
//     setBrandsDropdownOpen(!brandsDropdownOpen);
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <header className="navbar-header">
//       <div className="navbar-logo">
//         <img className="navbar-logo-img" src={mainlogo} alt="Jewellery Logo" />
//       </div>

//       <div
//         className={`navbar-hamburger ${isOpen ? 'open' : ''}`}
//         onClick={toggleMenu}
//       >
//         <div className="navbar-bar"></div>
//         <div className="navbar-bar"></div>
//         <div className="navbar-bar"></div>
//       </div>

//       <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
//         <NavLink
//           to="/"
//           className={isActive('/') ? 'active' : ''}
//           onClick={closeMenu}

//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/AboutUs"
//           className={isActive('/AboutUs') ? 'active' : ''}
//           onClick={closeMenu}

//         >
//           Purpose
//         </NavLink>
//         <NavLink
//           to="/Enterprise"
//           className={isActive('/Enterprise') ? 'active' : ''}
//           onClick={closeMenu}

//         >
//           Enterprise
//         </NavLink>

//         {/* <div
//           className="navbar-dropdown"
//           onMouseEnter={toggleBrandsDropdown}
//           onMouseLeave={toggleBrandsDropdown}
//         >
//           <span className={isActive('/sadashri-jewels') || isActive('/sadashri-jewelkart') ? 'active' : ''}>
//             Brands
//           </span>
//           {brandsDropdownOpen && (
//             <div className="navbar-dropdown-content">
//               <NavLink
//                 to="/sadashri-jewels"
//                 className={isActive('/sadashri-jewels') ? 'active' : ''}
//               >
//                 Sadashri Jewels-Our Store
//               </NavLink>
//               <NavLink
//                 to="/sadashri-jewelkart"
//                 className={isActive('/sadashri-jewelkart') ? 'active' : ''}
//               >
//                 Sadashri Jewelkart-Online Platform
//               </NavLink>
//             </div>
//           )}
//         </div> */}
//         <div
//   className={`navbar-dropdown ${isActive('/sadashri-jewels') || isActive('/sadashri-jewelkart') ? 'active' : ''}`}
//   onMouseEnter={toggleBrandsDropdown}
//   onMouseLeave={toggleBrandsDropdown}
// >
//   <span>
//     Brands
//   </span>
//   {brandsDropdownOpen && (
//     <div className="navbar-dropdown-content">
//       <NavLink
//         to="/sadashri-jewels"
//         className={isActive('/sadashri-jewels') ? 'active' : ''}
//         onClick={closeMenu}

//       >
//         Sadashri Jewels-Our Store
//       </NavLink>
//       <NavLink
//         to="/sadashri-jewelkart"
//         className={isActive('/sadashri-jewelkart') ? 'active' : ''}
//         onClick={closeMenu}

//       >
//         Sadashri Jewelkart-Online Platform
//       </NavLink>
//     </div>
//   )}
// </div>


//         <NavLink
//           to="/contactUs"
//           className={isActive('/contactUs') ? 'active' : ''}
//           onClick={closeMenu}

//         >
//           Contact Us
//         </NavLink>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;






import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';
import mainlogo from './logo/parent_weblink_2-removebg-preview.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [brandsDropdownOpen, setBrandsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleBrandsDropdown = () => {
    setBrandsDropdownOpen(!brandsDropdownOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar-header">
      <div className="navbar-logo">
        <img className="navbar-logo-img" src={mainlogo} alt="Jewellery Logo" />
      </div>

      <div
        className={`navbar-hamburger ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className="navbar-bar"></div>
        <div className="navbar-bar"></div>
        <div className="navbar-bar"></div>
      </div>

      <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a
          href="/"
          className={isActive('/') ? 'active' : ''}
          onClick={closeMenu}
        >
          Home
        </a>
        <a
          href="/AboutUs"
          className={isActive('/AboutUs') ? 'active' : ''}
          onClick={closeMenu}
        >
          Purpose
        </a>
        <a
          href="/Enterprise"
          className={isActive('/Enterprise') ? 'active' : ''}
          onClick={closeMenu}
        >
          Enterprise
        </a>

        <div
          className={`navbar-dropdown ${isActive('/sadashri-jewels') || isActive('/sadashri-jewelkart') ? 'active' : ''}`}
          onMouseEnter={toggleBrandsDropdown}
          onMouseLeave={toggleBrandsDropdown}
        >
          <span>Brands</span>
          {brandsDropdownOpen && (
            <div className="navbar-dropdown-content">
              <a
                href="/sadashri-jewels"
                className={isActive('/sadashri-jewels') ? 'active' : ''}
                onClick={closeMenu}
              >
                Sadashri Jewels-Our Store
              </a>
              <a
                href="/sadashri-jewelkart"
                className={isActive('/sadashri-jewelkart') ? 'active' : ''}
                onClick={closeMenu}
              >
                Sadashri Jewelkart-Online Platform
              </a>
            </div>
          )}
        </div>

        <a
          href="/contactUs"
          className={isActive('/contactUs') ? 'active' : ''}
          onClick={closeMenu}
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
