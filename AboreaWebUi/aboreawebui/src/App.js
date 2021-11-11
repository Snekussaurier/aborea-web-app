import React,{Component} from "react";
import './App.css';
import {Home} from './Home';
import {Character} from './Character'
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom'
import UilReact from '@iconscout/react-unicons/icons/uil-estate'

function App() {
  return (
    <BrowserRouter>
    <div className="App">

        <nav className="App-sidenav">
            <ul className="navbar-nav">
                <li className="nav-item-">
                    <NavLink className="App-sidenav-btn" to="/home">
                        Home
                    </NavLink>
                    <NavLink className="App-sidenav-btn" to="/characters">
                        Backpack
                    </NavLink>
                    <NavLink className="App-sidenav-btn" to="/characters">
                        Level
                    </NavLink>
                    <NavLink className="App-sidenav-btn" to="/characters">
                        Statistics
                    </NavLink>
                </li>
            </ul>
        </nav>

        <div>
            
        </div>

        <Routes>
            <Route path='/home' component={Home}/>
            <Route path='/characters' component={Character}/>
        </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
