import React, { useState } from 'react';
import './Navbar.css';
import mainlogo from './logo/sadashri parent logo123.jpg';
// import logonew from './logo/sadashri parent logo.svg'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [offlineDropdownOpen, setOfflineDropdownOpen] = useState(false);
  const [onlineDropdownOpen, setOnlineDropdownOpen] = useState(false);
  const [brandsDropdownOpen, setBrandsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleOfflineDropdown = () => {
    setOfflineDropdownOpen(!offlineDropdownOpen);
  };

  const toggleOnlineDropdown = () => {
    setOnlineDropdownOpen(!onlineDropdownOpen);
  };

  const toggleBrandsDropdown = () => {
    setBrandsDropdownOpen(!brandsDropdownOpen);
  };

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
        <a href="/">Home</a>
        <a href="/AboutUs">Purpose</a>

        {/* <div
          className="navbar-dropdown"
          onMouseEnter={toggleOfflineDropdown}
          onMouseLeave={toggleOfflineDropdown}
        >
          <span>Offline Store</span>
          {offlineDropdownOpen && (
            <div className="navbar-dropdown-content">
              <a href="/schemes">Schemes</a>
            </div>
          )}
        </div> */}

        {/* <div
          className="navbar-dropdown"
          onMouseEnter={toggleOnlineDropdown}
          onMouseLeave={toggleOnlineDropdown}
        >
          <span>Online Store</span>
          {onlineDropdownOpen && (
            <div className="navbar-dropdown-content">
              <a href="/seller">Seller</a>
              <a href="/user">User</a>
            </div>
          )}
        </div> */}

        <a href="/Enterprise">Enterprise</a>
        
        <div
          className="navbar-dropdown"
          onMouseEnter={toggleBrandsDropdown}
          onMouseLeave={toggleBrandsDropdown}
        >
          <span>Brands</span>
          {brandsDropdownOpen && (
            <div className="navbar-dropdown-content">
              <a href="/sadashri-jewels">Sadashri Jewels-Our Store</a>
              <a href="/sadashri-jewelkart">Sadashri Jewelkart-Online Platform</a>
            </div>
          )}
        </div>

        <a href="/contactUs">Contact Us</a>
      </nav>
    </header>
  );
}

export default Navbar;
