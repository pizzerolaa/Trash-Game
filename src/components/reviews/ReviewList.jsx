import React from 'react'
import './ReviewList.css'
import userIcon from '../../assets/user.svg'
import fullStar from '../../assets/fullStar.svg'
import emptyStar from '../../assets/emptyStar.svg'

const ReviewList = () => {
  return (
    <div className="review-content">
      <div className="review-header">
        <h2>Latest Reviews</h2>
        <button>View All</button>
      </div>
      <div className="review-list">
        <div className="review-card">
          <div className="review-user">
            <img src={userIcon} alt="User Icon" />
            <div className="review-user-info">
              <h3>John Doe</h3>
              <p>Reviewed on 2023-06-07</p>
            </div>
          </div>
          <div className="review-card-content">
            <h3>Elder Ring</h3>
            <p>FromSoftware has done it again! This game is a masterpiece.</p>
            <div className="review-stars">
              <img src={fullStar} alt="" />
              <img src={fullStar} alt="" />
              <img src={fullStar} alt="" />
              <img src={fullStar} alt="" />
              <img src={emptyStar} alt="" />
              <p>4/5</p>
            </div>
            <button className="reviewButton">Read Full Review</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewList