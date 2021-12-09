import { useState } from "react"
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from "./Home";
import Backpack from './Backpack';
import './App.css';

function App() {
  const [effects, setEffects] = useState([
    {
      id: 1,
      effectName: "Paralyze",
      effectDescription: "INI -1"
    },
    {
      id: 2,
      effectName: "Praising",
      effectDescription: "Wahrnehmung + 1"
    },
    {
      id: 3,
      effectName: "Broken Leg",
      effectDescription: "INI -1"
    },
  ])

  // Delete effect
  const deleteEffect = (id) => {
    setEffects(effects.filter((effect) => effect.id !== id))
  }

  return (
    <Router>
      <div className="App">
        <div className='App-main'>
          <Routes>
            <Route path="/" element={<Home effects={effects} onDelete={deleteEffect}/>} />
            <Route path="/backpack" element={<Backpack />}/>
          </Routes>
        </div>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
