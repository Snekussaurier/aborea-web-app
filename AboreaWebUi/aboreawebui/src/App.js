import React,{Component} from "react";
import './App.css';
import {Home} from './Home';
import {Character} from './Character'
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="AppContainer">
        <h3 className="d-flex justify-content-center m-3">
            React JS Frontend
        </h3>
        <nav className="navbar navbar-expand-sm bg-dark navbar-light justify-content-center">
            <ul className="navbar-nav">
                <li className="nav-item- m-1">
                    <NavLink className="btn btn-dark btn-outline-primary" to="/home">
                        Home
                    </NavLink>
                    <NavLink className="btn btn-dark btn-outline-primary" to="/characters">
                        Characters
                    </NavLink>
                </li>
            </ul>
        </nav>

        <Routes>
            <Route path='/home' component={Home}/>
            <Route path='/characters' component={Character}/>
        </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
