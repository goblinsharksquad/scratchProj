import React from 'react';
import Login from './LandingPage/Login';
import SignUp from './LandingPage/Signup';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const LandingPage = () => {
  return (
    <Router>
      <div className='landingpage'>
        <h1>Santa Santa</h1>

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Signup' element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default LandingPage;
