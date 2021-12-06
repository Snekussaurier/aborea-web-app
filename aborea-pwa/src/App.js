import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Navigation from "./components/Navigation"

import logo from './img/BardHalf.png';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>
            Firion
          </h1>
          <div className="App-container" style={{ background: "linear-gradient(239.75deg, #FF74F9 0%, #2E81FF 100%)" }}>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="App-container" style={{ width: "100%", background: "#16161e", height: "120px" }}>
          </div>
          <div className="App-container" style={{ width: "100%", background: "#16161e", height: "120px" }}>
          </div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React Now On Your Device!
          </a>
        </header>
        <Navigation />
        <Routes>
          <Route path="/" element={<div/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
