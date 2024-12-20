import React from 'react';

import './App.css';
import LandingPage from './LandingPage';


//defining App using typescript
//Returns the child component landing page, thus only rendering the LandingPage and its props.
const App: React.FC = () => {
  return (
    <div className='App'>

      <LandingPage></LandingPage>
    </div>
  );
};

export default App;
