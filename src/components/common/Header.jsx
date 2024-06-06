import React, { useState } from 'react';
import '../../styles/header.css';

const Header = () => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const toggleAccount = () => {
    setIsAccountOpen(!isAccountOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        TrashGame
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="/">Reviews</a></li>
          <li><a href="/">News</a></li>
          <li><a href="/">Guides</a></li>
        </ul>
      </nav>
      <div className="account">
        <button className="account-button" onClick={toggleAccount}>
          Account
        </button>
        {isAccountOpen && (
          <ul className="account-dropdown">
            <li><a href="/">Profile</a></li>
            <li><a href="/">Settings</a></li>
            <li><a href="/">Logout</a></li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;