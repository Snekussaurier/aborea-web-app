import { useState } from "react"
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from "./Home";
import Backpack from './Backpack';
import AddEffect from "./components/AddEffect";
import './App.css';

function App() {
  const [showAddEffects, setShowAddEffects] = useState(false)
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

  //Add effect
  const addEffect = (effect) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newEffect = {id, ...effect}
    setEffects([...effects, newEffect])
  }

  // Delete effect
  const deleteEffect = (id) => {
    setEffects(effects.filter((effect) => effect.id !== id))
  }

  const [gears, setGears] = useState([
    {
      id: 1,
      effectName: "Bow",
      effectDescription: "DMG + 1"
    },
  ])

  // Delete gear
  const deleteGear = (id) => {
    setGears(gears.filter((gear) => gear.id !== id))
  }

  return (
    <Router>
      <div className="App">
        <div className='App-main'>
          <Routes>
            <Route path="/" element={<Home onAddEffects={() => setShowAddEffects(true)} effects={effects} gears={gears} onDeleteEffect={deleteEffect} onDeleteGear={deleteGear}/>} />
            <Route path="/backpack" element={<Backpack />} />
          </Routes>
        </div>
        <Navigation />
        {showAddEffects && <AddEffect onAdd={addEffect} onClose={() => setShowAddEffects(false)}/>}
      </div>
    </Router>
  );
}

export default App;
