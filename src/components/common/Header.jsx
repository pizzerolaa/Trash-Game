import React from 'react';
import '../../styles/header.css';
import { Routes, Link, Route } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        TrashGame
      </div>
      <nav className="navigation">
        <ul>
          <Link to='/'><li><a href="/">Games</a></li></Link>
          <li><a href="/">Reviews</a></li>
          <li><a href="/">Forum</a></li>
          <li><a href="/">Wishlist</a></li>
        </ul>
      </nav>
      <div className="account">
        <Link to='/login'>
          <button className="account-button">
            Log In
          </button>
        </Link>
        <Link to='/register'>
          <button className="account-button">
            Register
          </button>
        </Link>
      </div>
      <Routes>
        <Route path='/login' exact component={Login}/>
        <Route path='/register' exact component={Register}/>
      </Routes>
    </header>
  );
};

export default Header;