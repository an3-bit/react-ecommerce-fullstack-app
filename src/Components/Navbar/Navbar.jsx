import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for menu toggle

export const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>

      <div className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <li onClick={() => setMenu('shop')}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
          {menu === 'shop' ? <hr /> : null}
        </li>
        <li onClick={() => setMenu('mens')}>
          <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>
          {menu === 'mens' ? <hr /> : null}
        </li>
        <li onClick={() => setMenu('womens')}>
          <Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>
          {menu === 'womens' ? <hr /> : null}
        </li>
        <li onClick={() => setMenu('kids')}>
          <Link style={{ textDecoration: 'none' }} to='/Kids'>Kids</Link>
          {menu === 'kids' ? <hr /> : null}
        </li>
      </div>

      <div className="nav-login-cart">
        <Link to='/login'>
          <button type="button">Login</button>
        </Link>
        <Link to='/cart'>
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>

      <div className="menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;
