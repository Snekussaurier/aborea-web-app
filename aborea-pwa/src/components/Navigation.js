import React from "react";
import { NavLink } from "react-router-dom";

import UilEstate from '@iconscout/react-unicons/icons/uil-estate';
import UilBackpack from '@iconscout/react-unicons/icons/uil-backpack';
import UilWindow from '@iconscout/react-unicons/icons/uil-window';
import UilAnalytics from '@iconscout/react-unicons/icons/uil-analytics';
import AboreaIcon from '../aborea-web-icon.png'

const Navigation = () => {
    return (
        <div className="App-navbar">
            <div className="App-navbar-header">
                <img src={AboreaIcon} className="App-navbar-icon" alt="Aborea PWA Logo"/>
                <h1>
                    Aborea PWA
                </h1>
            </div>
            <NavLink className="App-navbar-button" to="/">
                <UilEstate size="28" className="App-navbar-button-icon" />
                <p className="App-navbar-button-text">Home</p>
            </NavLink>
            <NavLink className="App-navbar-button" to="/backpack">
                <UilBackpack size="28" className="App-navbar-button-icon" />
                <p className="App-navbar-button-text">Backpack</p>
            </NavLink>
            <NavLink className="App-navbar-button" to="/level">
                <UilWindow size="28" className="App-navbar-button-icon" />
                <p className="App-navbar-button-text">Level</p>
            </NavLink>
            <NavLink className="App-navbar-button" to="/stats">
                <UilAnalytics size="28" className="App-navbar-button-icon" />
                <p className="App-navbar-button-text">Statistic</p>
            </NavLink>
        </div>
    );
}
export default Navigation;