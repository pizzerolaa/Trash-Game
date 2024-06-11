import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import './ReviewList.css'
import userIcon from '../../assets/user.svg'
import { AuthContext } from '../../context/AuthContext';

const ReviewList = () => {

  const [listOfPosts, setListOfPosts] = useState([]);
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    axios.get("http://localhost:3001/posts/latest").then((response) => {
      setListOfPosts(response.data)
    });
  }, []);

  return (
    <div className="review-content">
      <div className="review-header">
        <h2>Latest Reviews</h2>
        <button>View All</button>
      </div>
      <div className="review-list">
          {listOfPosts.map((value, key) => {
          return (
            <div className="review-card">
            <div className="review-user">
              <img src={userIcon} alt="User Icon" />
              <div className="review-user-info">
                <h3>
                  {value.username}
                </h3>
                <p>{value.createdAt}</p>
              </div>
            </div>
            <div className="review-card-content">
              <h3>{value.title}</h3>
              <p>{value.postText}</p>
              <button className="reviewButton">Read Full Review</button>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  )
}

export default ReviewList