import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { LandingPage } from './components/page/landing/landingPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <LandingPage /> } />
    </Routes>
  );
}

export default App;
