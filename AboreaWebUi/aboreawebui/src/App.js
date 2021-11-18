import React,{Component} from "react";
import './App.css';
import Home from './Home';
import Backpack from './Backpack';
import Level from './Level';
import Stats from './Development';
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
import UilEstate from '@iconscout/react-unicons/icons/uil-estate'
import UilBackpack from '@iconscout/react-unicons/icons/uil-backpack'
import UilWindow from '@iconscout/react-unicons/icons/uil-window'
import UilAnalytics from '@iconscout/react-unicons/icons/uil-analytics'

function App() {

    const incrementItem = (obj) => {
        obj.ammount++;
        console.log(obj.ammount);
    }

  return (
    <Router>
        <div className="App">
            <nav className="App-sidenav">
                <ul className="navbar-nav">
                    <li className="nav-item-">
                        <NavLink className="App-sidenav-btn fill App-sidenav-btn1" activeClassName="App-sidenav-btn1-active" to="/">
                            <UilEstate size="30" className="App-sidenav-btn-icon"/>
                            Dashboard
                        </NavLink>
                        <NavLink className="App-sidenav-btn fill App-sidenav-btn2" activeClassName="App-sidenav-btn2-active" to="/backpack">
                            <UilBackpack size="30" className="App-sidenav-btn-icon"/>
                            Backpack
                        </NavLink>
                        <NavLink className="App-sidenav-btn fill App-sidenav-btn3" activeClassName="App-sidenav-btn3-active" to="/level">
                            <UilWindow size="30" className="App-sidenav-btn-icon"/>
                            Level
                        </NavLink>
                        <NavLink className="App-sidenav-btn fill App-sidenav-btn4" activeClassName="App-sidenav-btn4-active" to="/stats">
                            <UilAnalytics size="30" className="App-sidenav-btn-icon"/>
                            Development
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="App-content">
                <Routes>
                    <Route path="/" element={ <Home/> }/>
                    <Route path="/backpack" element={ <Backpack onIncrement={incrementItem}/> }/>
                    <Route path="/level" element={ <Level/> }/>
                    <Route path="/stats" element={ <Stats/> }/>
                </Routes>
            </div>
        </div>
    </Router>
  );
}

export default App;
