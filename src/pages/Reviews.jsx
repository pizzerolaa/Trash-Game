import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import "../styles/reviews.css"
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import userIcon from "../assets/user.svg"
import cross from "../assets/cross.svg"

function Reviews() {

  const [listOfPosts, setListOfPosts] = useState([]);
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data)
    });
  }, []);

  const deletePost = (id) => {
    axios.delete(`http://localhost:3001/posts/${id}`, {
      headers: { accessToken: localStorage.getItem("accessToken") }
    }).then(() => {
      window.location.reload();
    })
  };

  return (
    <div className="reviews">
      <div className="reviews-banner">
        <h1> - REVIEWS - </h1>
        <h2> Where the experts <strong>TELL</strong> their stories</h2>
      </div>
      <div className="review-body">
        {listOfPosts.map((value, key) => {
          return (
            <div className="review-card">
              <div className="review-head">
                <div className="review-user">
                  <img src={userIcon} alt="User Icon" />
                  <div className="review-user-info">
                    <h3>
                      {value.username}
                    </h3>
                    <p>{value.createdAt}</p>
                  </div>
                </div>
                <div className='review-delete'>
                  {authState.username === value.username && (
                    <img src={cross} alt="Delete Icon" onClick={() => deletePost(value.id)} />
                  )}
                </div>
              </div>
              <div className="review-card-content">
                <h3>{value.title}</h3>
                <p>{value.postText}</p>
                {/* <button className="reviewButton">Read Full Review</button> */}
              </div>
            </div>
          );
        })}
      </div>
      <div className="reviews-bottom">
        <Link to='/reviewsForm'>
          <button>Write your own review!</button>
        </Link>
      </div>
    </div>
  );
}

export default Reviews;