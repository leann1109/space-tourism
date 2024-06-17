import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './pages';
import { Mars } from './pages/Destination/Mars';
import { Commander } from './pages/Crew/Commander';
import { Technology1 } from './pages/Technology/Technology1';
import './App.module.scss';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Mars />} />
          <Route path="/crew" element={<Commander />} />
          <Route path="/technology" element={<Technology1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
