import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
import './fonts/fonts.css';
import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Games from './pages/Games';
import Reviews from './pages/Reviews';
import GameDetails from './pages/GameDetails';
import Profile from './pages/Profile';
import ReviewsForm from './pages/ReviewForm';
import { AuthContext } from './context/AuthContext';

function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });

  return (
      <BrowserRouter>
      <AuthContext.Provider value={{authState, setAuthState}}>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/games" element={<Games />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/games/:id" element={<GameDetails />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/reviewsForm" element={<ReviewsForm />} />
            </Routes>
          </main>
          <Footer />
        </div>
        </AuthContext.Provider>
      </BrowserRouter>
  );
}

export default App;