import React from 'react';
import '../../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        TrashGame
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="/">Games</a></li>
          <li><a href="/">Reviews</a></li>
          <li><a href="/">Forum</a></li>
          <li><a href="/">Wishlist</a></li>
        </ul>
      </nav>
      <div className="account">
        <button className="account-button">
          Log In
        </button>
        <button className="account-button">
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;