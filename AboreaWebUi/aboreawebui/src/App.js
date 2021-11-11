import React,{Component} from "react";
import './App.css';
import {Home} from './Home';
import {Character} from './Character'
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom'
import UilEstate from '@iconscout/react-unicons/icons/uil-estate'
import UilBackpack from '@iconscout/react-unicons/icons/uil-backpack'
import UilWindow from '@iconscout/react-unicons/icons/uil-window'
import UilChart from '@iconscout/react-unicons/icons/uil-chart'
import image from './img/Bard.png';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <div className="parallelogram">
            <img src={image} className="Char-image"/>
        </div>
        <nav className="App-sidenav">
            <ul className="navbar-nav">
                <li className="nav-item-">
                    <NavLink className="App-sidenav-btn fill App-sidenav-btn1" to="/home">
                        <UilEstate size="30" className="App-sidenav-btn-icon"/>
                        Home
                    </NavLink>
                    <NavLink className="App-sidenav-btn fill App-sidenav-btn2" to="/characters">
                        <UilBackpack size="30" className="App-sidenav-btn-icon"/>
                        Backpack
                    </NavLink>
                    <NavLink className="App-sidenav-btn fill App-sidenav-btn3" to="/characters">
                        <UilWindow size="30" className="App-sidenav-btn-icon"/>
                        Level
                    </NavLink>
                    <NavLink className="App-sidenav-btn fill App-sidenav-btn4" to="/characters">
                        <UilChart size="30" className="App-sidenav-btn-icon"/>
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
