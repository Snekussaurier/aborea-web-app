import { useState, useEffect } from "react"
import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from "./Home";
import Backpack from './Backpack';
import Level from "./Level";
import Statistic from "./Statistic";
import AddEffect from "./components/AddEffect";
import AddGear from "./components/AddGear";
import './App.css';

function App() {
  const id = 1;

  // CHARACTER
  const [character, setCharacter] = useState([])

  useEffect(() => {
    const getCharacter = async () => {
      const characterFromServer = await fetchCharacter(id)
      setCharacter(characterFromServer)
    }

    const getWallet = async () => {
      const walletFromServer = await fetchWallet(id)
      setWallet(walletFromServer)
    }

    getCharacter()
    getWallet()
  }, [])

  // Fetch Character
  const fetchCharacter = async () => {
    const res = await fetch(`http://192.168.178.34:5000/api/char/${id}`)
    const data = await res.json()
    const char = await data[0]

    return char
  }

  // Update Character
  const updateCharacter = async () => {
    await fetch(`http://192.168.178.34:5000/api/char/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(character)
    })
  }


  //WALLET
  const [wallet, setWallet] = useState([])

  useEffect(() => {
    const getWallet = async () => {
      const walletFromServer = await fetchWallet(id)
      setWallet(walletFromServer)
    }

    getWallet()
  }, [])

  // Fetch Wallet
  const fetchWallet= async () => {
    const res = await fetch(`http://192.168.178.34:5000/api/wallet/${id}`)
    const data = await res.json()
    const wallet = await data[0]

    return wallet
  }

  // Update Wallet
  const updateWallet = async () => {
    await fetch(`http://192.168.178.34:5000/api/wallet/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(wallet)
    })

  }

  
  // Fetch Stats

  const [backpack, setBackpack] = useState([
    {
      id: 1,
      itemName: "Bow",
      itemClass: "Weapon",
      ammount: 1
    },
    {
      id: 2,
      itemName: "Fackel",
      itemClass: "Item",
      ammount: 1
    },
    {
      id: 3,
      itemName: "Wein",
      itemClass: "Drink",
      ammount: 3
    },
    {
      id: 4,
      itemName: "Flöte",
      itemClass: "Item",
      ammount: 1
    },
    {
      id: 5,
      itemName: "Haltbare Nahrung",
      itemClass: "Food",
      ammount: 2
    },
    {
      id: 6,
      itemName: "Elefantenfigur",
      itemClass: "Item",
      ammount: 1
    },
    {
      id: 7,
      itemName: "Bow",
      itemClass: "Weapon",
      ammount: 1
    },
    {
      id: 8,
      itemName: "Fackel",
      itemClass: "Item",
      ammount: 1
    },
    {
      id: 9,
      itemName: "Wein",
      itemClass: "Drink",
      ammount: 3
    },
    {
      id: 10,
      itemName: "Flöte",
      itemClass: "Item",
      ammount: 1
    },
    {
      id: 11,
      itemName: "Haltbare Nahrung",
      itemClass: "Food",
      ammount: 2
    },
    {
      id: 12,
      itemName: "Elefantenfigur",
      itemClass: "Item",
      ammount: 1
    }
  ])


  const [showAddEffects, setShowAddEffects] = useState(false)
  const [effects, setEffects] = useState([
    {
      id: 1,
      effectName: "Paralyze",
      effectDescription: "",
      effectStat: "INI",
      effectValue: -2,
    },
    {
      id: 2,
      effectName: "Praising",
      effectDescription: "",
      effectStat: "ARM",
      effectValue: +1,
    },
  ])

  //Add effect
  const addEffect = (effect) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newEffect = { id, ...effect }
    setEffects([...effects, newEffect])
  }

  // Delete effect
  const deleteEffect = (id) => {
    setEffects(effects.filter((effect) => effect.id !== id))
  }

  const [showAddGear, setShowAddGear] = useState(false)
  const [gears, setGears] = useState([
    {
      id: 1,
      gearName: "Bow",
      gearDescription: "The shortbow is a flexible shaft of wood with the ends connected by strong cord.",
      value: -1,
    },
  ])

  //Add gear
  const addGear = (gear) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newGear = { id, ...gear }
    setGears([...effects, newGear])
  }

  // Delete gear
  const deleteGear = (id) => {
    setGears(gears.filter((gear) => gear.id !== id))
  }

  return (
    <Router>
      <div className="App">
        <div className='App-main'>
          <Routes>
            <Route path="/" element={<Home character={character} setCharacter={setCharacter} updateCharacter={updateCharacter} onAddEffects={() => setShowAddEffects(true)} onAddGear={() => setShowAddGear(true)} effects={effects} gears={gears} onDeleteEffect={deleteEffect} onDeleteGear={deleteGear} />} />
            <Route path="/backpack" element={<Backpack backpack={backpack}/>} />
            <Route path="/level" element={<Level />} />
            <Route path="/stats" element={<Statistic />} />
          </Routes>
        </div>
        <Navigation />
        {showAddEffects && <AddEffect onAdd={addEffect} onClose={() => setShowAddEffects(false)} />}
        {showAddGear && <AddGear onAdd={addGear} onClose={() => setShowAddGear(false)} />}
      </div>
    </Router>
  );
}

export default App;
