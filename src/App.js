import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Display from './components/Display';
import NextPage from './components/NextPage';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/nextpage" element={<NextPage />} />
      </Routes>
    </Router>
  );
}

export default App;
