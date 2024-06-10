import React, { useEffect, useState } from 'react';
import axios from "axios";
import userIcon from "../assets/user.svg"
import "../styles/reviews.css"

function Reviews() {

  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data)
    });
  }, []);
  return (
    <div className="reviews"> 
      {listOfPosts.map((value, key) => {
        return (
          <div className="review-card">
          <div className="review-user">
            <img src={userIcon} alt="User Icon" />
            <div className="review-user-info">
              <h3>{value.username}</h3>
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
  );
}

export default Reviews;