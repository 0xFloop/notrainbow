import React from 'react';
import './App.css';
import Home from './components/pages/Home.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
