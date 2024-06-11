import React, { useEffect, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, Navigate, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { AuthContext } from "../context/AuthContext";
import axios from 'axios'
import '../styles/reviewForm.css'
import userIcon from '../assets/user.svg'

function ReviewForm() {
    const initialValues = {
        title: "",
        postText: "",
    }
    const { authState, setAuthState } = useContext(AuthContext);
    const navigate = useNavigate();

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
        if (!authState.status){
            console.log(authState.status);
            navigate('/login');
            alert("Debes iniciar sesión para escribir una reseña")
        }
    
        checkAuth();
      }, [setAuthState]);
    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().required(),
    })

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/posts", data, {
            headers: {accessToken: localStorage.getItem('accessToken')}}
        ).then((response) => {
            navigate('/reviews');
          });
    }

    return (
        <div className="reviewForm">
          <div className="reviewForm-card">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
              <Form>
                <div className="reviewForm-content">
                  <h2>New Review</h2>
                  <div className="reviewForm-subtitle">
                    <h3>Writting as:</h3>
                  </div>
                  <div className="reviewForm-user">
                    <img src={userIcon} alt="" />
                    <label>{authState.username}</label>
                  </div>
                  <div className="reviewForm-field">
                    <div className="reviewForm-form">
                      <label>Title: </label>
                      <Field 
                        id="inputCreateReview" 
                        name="title" 
                        placeholder="Game title"/>
                    </div>
                    <ErrorMessage name="title" component="span" />
                  </div>
                  <div className="reviewForm-field-2">
                    {/* <div className="reviewForm-form"> */}
                      <label>Comment: </label>
                      <Field 
                        id="inputCreateReview" 
                        name="postText" 
                        placeholder="Add your review description here"/>
                    {/* </div> */}
                    <ErrorMessage name="postText" component="span" />
                  </div>
                  <button type="submit"> Create Post</button>
                </div>
                    
                    {/* <label>Title: </label>
                    <ErrorMessage name="title" component="span" />
                    <Field 
                        id="inputCreateReview" 
                        name="title" 
                        placeholder="Game title"/>
                    <label>Comment: </label>
                    <ErrorMessage name="postText" component="span" />
                    <Field 
                        id="inputCreateReview" 
                        name="postText" 
                        placeholder="Comment"/>
                    <Link to ='/reviews'>
                        <button type="submit"> Create Post</button>
                    </Link> */}
                    
              </Form>
            </Formik>
          </div>
        </div>
    )
}

export default ReviewForm;