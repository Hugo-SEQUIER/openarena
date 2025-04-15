import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import ChallengesPage from './pages/ChallengesPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/challenges" element={<ChallengesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
