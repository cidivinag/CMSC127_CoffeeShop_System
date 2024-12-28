import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Additional Routes */}
        <Route path="/menu" element={<h1>Menu Page</h1>} />
        <Route path="/blog" element={<h1>Blog Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/shop" element={<h1>Shop Page</h1>} />
        
        {/* Catch-All Error Route */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
