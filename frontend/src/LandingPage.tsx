import React from 'react';
import Login from './LandingPage/Login';
import SignUp from './LandingPage/Signup';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const LandingPage = () => {
  return (
    <Router>
      <div>
        <h1>Santa Santa</h1>
        <Login></Login>
      </div>

      <Routes>
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </Router>
  );
};

export default LandingPage;
