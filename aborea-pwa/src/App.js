import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from "./Home";
import Backpack from './Backpack';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='App-main'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/backpack" element={<Backpack />} />
          </Routes>
        </div>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
