import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import gameImage from '../assets/gta6.jpg'
import '../styles/home.css'
import GameList from '../components/games/GameList'
import Wishlist from '../components/wishlist/WishlistList'
import ReviewList from '../components/reviews/ReviewList'
import ForumList from '../components/forum/ForumList'
import axios from 'axios';

const Home = () => {
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

  return (
    <div className="home-page">
      <div className="home-page-space-1">
        <div className="home-page-content">
          <div className="text-section">
            <h1>Discover the latest game reviews</h1>
            <p>Get expert opinions and insights on the hottest video games.</p>
            
            <div className="cta-buttons">
            <Link to='/games'>
                <button className="explore-button">Explore games</button>
            </Link>
            <Link to='/reviewsForm'>
              <button className="review-button">Write a Review</button>
            </Link>
            </div>
          </div>
          <div className="image-section">
            <img src={gameImage} alt="Video Games" />
          </div>
        </div>
      </div>
      <div className="home-page-space-2">
        {/* <GameList /> */}
        <ReviewList />
      </div>
      {/* <div className="home-page-space-1">
        <ReviewList />
      </div>
      <div className="home-page-space-2">
        <ForumList />
      </div>
      <div className="home-page-space-1">
        <Wishlist />
      </div> */}
    </div>
  )
}

export default Home