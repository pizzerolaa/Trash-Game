import React, { useEffect, useState } from 'react';
import '../../styles/header.css';
import { Routes, Route, Link } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
import { AuthContext } from '../../context/AuthContext';
import axios  from 'axios';

const Header = () => {
  const [authState, setAuthState] = useState(false);
  
  useEffect(() => {
    axios.get('http://localhost:3001/auth/auth', {headers: {
      accessToken: localStorage.getItem("accessToken"),
    }}).then((response) => {
      if(response.data.error) {
        setAuthState(false)
      } else {
        setAuthState(true)
      }
    });
  }, []);

  return (
    <header className="header">
      <AuthContext.Provider value={{ authState, setAuthState }}>
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
        {!authState && (
            <>
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
            </>
          )}
        </div>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </AuthContext.Provider>
    </header>
  );
};

export default Header;