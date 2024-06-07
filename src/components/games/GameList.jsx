import React from 'react'
import './GameList.css'
import gameImage2 from '../../assets/cyber2077.jpg'


const GameList = () => {
  return (
    <div className="game-content">
      <div className="game-header">
        <h2>Latest Games</h2>
        <button>View All</button>
      </div>
      <div className="game-list">
        <div className="game-card">
          <img src={gameImage2} alt="Game" />
          <div className="game-card-content">
            <h3>Cyberpunk 2077</h3>
            <p>Cyberpunk 2077 is an action role-playing game developed by CD Projekt. It is set in a dystopian Night City.</p>
            <div className="game-options">
              <button className="viewButton">View Details</button>
              <button className="wishlistButton">Add to Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameList