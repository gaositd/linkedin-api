import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { IndexPage } from './components/page';

import { LandingPage } from './components/page/landing/landingPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <LandingPage /> } />
      <Route exact path="/home" element={ <IndexPage /> } />
    </Routes>
  );
}

export default App;
