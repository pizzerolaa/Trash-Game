import React, { useEffect, useState, useContext } from 'react';
import '../../styles/header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import Logo from '../../assets/logo.svg';

const Header = () => {
  const { authState, setAuthState } = useContext(AuthContext);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        try {
          const response = await axios.get('http://localhost:3001/auth/auth', {
            headers: {
              accessToken: token,
            }
          });
          if (response.data.error) {
            setAuthState({ username: "", id: 0, status: false });
          } else {
            setAuthState({
              username: response.data.username,
              id: response.data.id,
              status: true,
            });
          }
        } catch (error) {
          console.error("Authentication error:", error);
          setAuthState({ username: "", id: 0, status: false });
        }
      }
    };

    checkAuth();
  }, [setAuthState]);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, status: false });
  };

  return (
    <header className="header">
      <div className="header-first">
        <div className="logo">
          <Link to='/' style={{ textDecoration: 'none' }}>
            <img src={Logo} alt="" />
            TrashGame
          </Link>
        </div>
        <nav className="navigation">
          <ul>
            <Link to='/games'><li><a href="/">Games</a></li></Link>
            <Link to='/reviews'><li><a href="/">Reviews</a></li></Link>
            {/* <Link to='/'><li><a href="/">Forum</a></li></Link>
            <Link to='/'><li><a href="/">Wishlist</a></li></Link> */}
          </ul>
        </nav>
      </div>
      <div className="account">
        {!authState.status ? (
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
        ) : (
          <>
            <Link to='reviewsForm' style={{textDecoration:'none'}}>
              <span className='username-account'>Hello again... {authState.username}</span>
            </Link>
            <Link to='/'>
              <button className="account-button" onClick={logout}>
                Log Out
              </button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
