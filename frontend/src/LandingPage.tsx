import React from 'react';
//Components are imported and used below
import Login from './Components/Login';
import SignUp from './Components/Signup';
import './App.css';
import GroupPage from './GroupPage';
import ProfilePage from './ProfilePage';
import Navbar from './Components/Navbar';
//Using react routers to link between the pages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Router encompasses the entire code in order to link the pages to each other
//helps to define the routes using the routes tag and the route tag

const LandingPage = () => {
  return (
    <Router>
      <div className='landingpage'>
        <Navbar />
        <h2 className='Santa'>Santa Santa🎁</h2>

        <Routes>
          {/* //Define the Route paths 
          //Login displayed first on page */}

          <Route path='/' element={<Login />} />
          <Route path='/Signup' element={<SignUp />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/grouppage' element={<GroupPage />} />
          {/* <Route path='/Dashboard' element={<dash />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default LandingPage;
