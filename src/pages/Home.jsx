import React from 'react'
import gameImage from '../assets/gta6.jpg'
import '../styles/home.css'

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-page-content">
        <div className="text-section">
          <h1>Discover the latest game reviews</h1>
          <p>Get expert opinions and insights on the hottest video games.</p>
          <div className="cta-buttons">
            <button className="explore-button">Explore Games</button>
            <button className="review-button">Write a Review</button>
          </div>
        </div>
        <div className="image-section">
          <img src={gameImage} alt="Video Games" />
        </div>
      </div>
    </div>
  )
}

export default Home