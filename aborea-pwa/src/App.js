import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Home from "./Home";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header name="Firion"/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Navigation/>
      </div>
    </Router>
  );
}

export default App;
