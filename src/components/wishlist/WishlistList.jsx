import React from 'react'
import './WishlistList.css'
import gameImage3 from '../../assets/Starfield.jpg'

const WishlistList = () => {
  return (
    <div className="wish-content">
      <div className="wish-header">
        <h2>Wishlist</h2>
        <button>View All</button>
      </div>
      <div className="wish-list">
        <div className="wish-card">
          <img src={gameImage3} alt="Game" />
          <div className="wish-card-content">
            <h3>Starfield</h3>
            <p>Starfield is an upcoming role-playing game developed by Bethesda Game Studios. It is set in space.</p>
            <div className="wish-options">
              <button className="viewButton">View Details</button>
              <button className="wishlistButton">Remove from Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WishlistList