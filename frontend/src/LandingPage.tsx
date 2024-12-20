import React from 'react';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GroupPage from './GroupPage';
import ProfilePage from './ProfilePage';
import Navbar from './Components/Navbar';

const LandingPage = () => {
  return (
    <Router>
      <div className='landingpage'>
        <Navbar></Navbar>
        <h2 className='Santa'>Santa Santa🎁</h2>

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Signup' element={<SignUp />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/grouppage' element={<GroupPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default LandingPage;
