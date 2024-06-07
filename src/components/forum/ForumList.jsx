import React from 'react'
import './ForumList.css'
import userIcon from '../../assets/user.svg'
import comment from '../../assets/comment.svg'
import like from '../../assets/like.svg'

const ForumList = () => {
  return (
    <div className="forum-content">
      <div className="forum-header">
        <h2>Latest Reviews</h2>
        <button>View All</button>
      </div>
      <div className="forum-list">
        <div className="forum-card">
          <div className="forum-title">
            <h3>Best RPG of 2024 so far?</h3>
            <p>Discuss the top RPG releases this year</p>
          </div>
          <div className="forum-card-content">
            <div className="forum-user">
              <img src={userIcon} alt="User Icon" />
              <div className="forum-user-info">
                <h3>John Doe</h3>
                <p>Reviewed on 2023-06-07</p>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti architecto ut optio vero, nam libero assumenda vel aut fugit cum magnam, esse voluptatum in ea tempora doloremque! Vel, commodi eveniet.</p>
            <div className="forum-options">
              <button>
                <img src={comment} alt="" />
                <p>Reply</p>
              </button>
              <button>
                <img src={like} alt="" />
                <p>Like</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForumList